import * as cdk from 'aws-cdk-lib';
import { Bucket, BlockPublicAccess, BucketAccessControl, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import path from 'path';
import { Distribution, OriginAccessIdentity, SecurityPolicyProtocol } from 'aws-cdk-lib/aws-cloudfront';
import { S3StaticWebsiteOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { Duration } from 'aws-cdk-lib';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { zoneConfig } from '../config/zone-config';

export class CvInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    
    const { domainName, siteDomainName, hostedZoneId, certificateArn } = zoneConfig;

    const hostedZone = HostedZone.fromHostedZoneAttributes(this, 'myHostenZone', {
      hostedZoneId: hostedZoneId,
      zoneName: domainName,
    });

    // S3 Bucket for website hosting
    const websiteBucket = new Bucket(this, 'tamasbartos-cv-bucket', {
      bucketName: siteDomainName,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error/index.html',
      publicReadAccess: true, 
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS_ONLY,
      accessControl: BucketAccessControl.PRIVATE,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      cors: [
        {
          allowedMethods: [HttpMethods.GET, HttpMethods.PUT, HttpMethods.DELETE, HttpMethods.POST],
          allowedOrigins: ['https://tamasbartos.com'], 
          allowedHeaders: ['*'],
          exposedHeaders: ['*'],
          maxAge: 3600,
        },
      ],
    });

    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    websiteBucket.grantRead(originAccessIdentity);

    const distribution = new Distribution(this, 'tamasbartos-cv-distribution', {
      certificate: Certificate.fromCertificateArn(this, 'Certificate', certificateArn),
      defaultBehavior: {
        origin: new S3StaticWebsiteOrigin(websiteBucket, {
          originAccessControlId: originAccessIdentity.originAccessIdentityId,
        }),
      },
      defaultRootObject: 'index.html',
      domainNames: [domainName, siteDomainName],
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2018,
      errorResponses:[
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/error/index.html',
          ttl: Duration.minutes(30),
        }
      ],
    })

    new ARecord(this, 'WWWSiteAliasRecord', {
      zone: hostedZone,
      recordName: siteDomainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution))
    });

    new ARecord(this, 'SiteAliasRecord', {
      zone: hostedZone,
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution))
    });

    new BucketDeployment(this, 'tamasbartos-cv-deployment', {
      sources: [Source.asset(path.resolve(__dirname, '../../dist'))],
      destinationBucket: websiteBucket,
      prune: true,
    });
  }
}
