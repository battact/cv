#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CvInfrastructureStack } from '../lib/infra-stack';

const app = new cdk.App();

new CvInfrastructureStack(app, 'CvInfrastructureStack', {
  stackName: 'TamasBartosCvInfrastructureStack',
  env: {
    account: '930401638434',
    region: 'eu-central-1',
  },
  description: 'CV Website Infrastructure with S3, CloudFront, and Route53',
});