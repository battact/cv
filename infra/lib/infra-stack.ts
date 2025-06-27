import * as cdk from 'aws-cdk-lib';
import { Bucket, BlockPublicAccess, BucketAccessControl, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import path from 'path';
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin, S3StaticWebsiteOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

export class CvInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    
    const domainName = `tamas-bartos.com`;
    // const hostedZoneId = `Z05555555555555555555`;
    const certificateArn = `arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012`;
    const bucketName = `tamas-bartos-cv`;

    // S3 Bucket for website hosting
    const websiteBucket = new Bucket(this, bucketName, {
      bucketName: bucketName,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      publicReadAccess: false, 
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      accessControl: BucketAccessControl.PRIVATE,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      cors: [
        {
          allowedMethods: [HttpMethods.GET, HttpMethods.PUT, HttpMethods.DELETE, HttpMethods.POST],
          allowedOrigins: ['https://tamas-bartos.com'], 
          allowedHeaders: ['*'],
          exposedHeaders: ['*'],
          maxAge: 3600,
        },
      ],
    });

    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    websiteBucket.grantRead(originAccessIdentity);

    new Distribution(this, 'tamas-bartos-cv-distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3StaticWebsiteOrigin(websiteBucket, {
          originAccessControlId: originAccessIdentity.originAccessIdentityId,
        }),
      },
      domainNames: [domainName],
      certificate: Certificate.fromCertificateArn(this, 'Certificate', certificateArn),
    })


    new BucketDeployment(this, 'tamas-bartos-cv-deployment', {
      sources: [Source.asset(path.resolve(__dirname, '../../dist'))],
      destinationBucket: websiteBucket,
      prune: true,
    });
  }
}
