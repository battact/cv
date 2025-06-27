#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CvInfrastructureStack } from '../lib/infra-stack';
import { config } from '../config';

const app = new cdk.App();

new CvInfrastructureStack(app, 'CvInfrastructureStack', {
  domainName: config.domainName,
  hostedZoneId: config.hostedZoneId,
  certificateArn: config.certificateArn,
  env: config.env,
  description: 'CV Website Infrastructure with S3, CloudFront, and Route53',
});