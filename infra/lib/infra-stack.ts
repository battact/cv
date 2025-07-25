import * as cdk from "aws-cdk-lib";
import {
  Bucket,
  BlockPublicAccess,
  BucketAccessControl,
  HttpMethods,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import path from "path";
import {
  AccessLevel,
  Distribution,
  SecurityPolicyProtocol,
  HttpVersion,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { ARecord, HostedZone, RecordTarget } from "aws-cdk-lib/aws-route53";
import { Duration } from "aws-cdk-lib";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { zoneConfig } from "../config/zone-config";
import fs from "fs";

export class CvInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const { domainName, siteDomainName, hostedZoneId, certificateArn } =
      zoneConfig;

    const hostedZone = HostedZone.fromHostedZoneAttributes(
      this,
      "myHostenZone",
      {
        hostedZoneId,
        zoneName: domainName,
      }
    );

    // S3 Bucket for website hosting
    const websiteBucket = new Bucket(this, "tamasbartos-cv-bucket", {
      bucketName: domainName,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error/index.html",
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      accessControl: BucketAccessControl.PRIVATE,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      cors: [
        {
          allowedMethods: [
            HttpMethods.GET,
            HttpMethods.PUT,
            HttpMethods.DELETE,
            HttpMethods.POST,
          ],
          allowedOrigins: ["https://tamasbartos.com"],
          allowedHeaders: ["*"],
          maxAge: 3600,
        },
      ],
    });

    const s3Origin = S3BucketOrigin.withOriginAccessControl(websiteBucket, {
      originAccessLevels: [AccessLevel.LIST, AccessLevel.READ],
    });

    const distribution = new Distribution(this, "tamasbartos-cv-distribution", {
      certificate: Certificate.fromCertificateArn(
        this,
        "Certificate",
        certificateArn
      ),
      defaultBehavior: {
        origin: s3Origin,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
      domainNames: [domainName, siteDomainName],
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2018,
      httpVersion: HttpVersion.HTTP2,
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
          ttl: Duration.minutes(30),
        },
      ],
    });

    new ARecord(this, "WWWSiteAliasRecord", {
      zone: hostedZone,
      recordName: siteDomainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });

    new ARecord(this, "SiteAliasRecord", {
      zone: hostedZone,
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });

    // Only create bucket deployment if the UI dist folder exists (for actual deployments)
    const uiDistPath = path.resolve(__dirname, "../../ui/dist");

    if (fs.existsSync(uiDistPath)) {
      new BucketDeployment(this, "tamasbartos-cv-deployment", {
        sources: [Source.asset(uiDistPath)],
        destinationBucket: websiteBucket,
        prune: true,
        retainOnDelete: false,
      });
    }

    // Output the CloudFront distribution ID for invalidation
    new cdk.CfnOutput(this, "CloudFrontDistributionId", {
      value: distribution.distributionId,
      description: "CloudFront Distribution ID for cache invalidation",
      exportName: "CloudFrontDistributionId",
    });
  }
}
