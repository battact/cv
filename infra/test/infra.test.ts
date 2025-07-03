import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { CvInfrastructureStack } from "../lib/infra-stack";

describe("CvInfrastructureStack", () => {
  let app: cdk.App;
  let stack: CvInfrastructureStack;
  let template: Template;

  beforeEach(() => {
    app = new cdk.App();
    stack = new CvInfrastructureStack(app, "MyTestStack");
    template = Template.fromStack(stack);
  });

  test("S3 Bucket Created", () => {
    template.hasResourceProperties("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
      AccessControl: "Private",
    });
  });

  test("CloudFront Distribution Created", () => {
    template.hasResourceProperties("AWS::CloudFront::Distribution", {
      DistributionConfig: {
        DefaultRootObject: "index.html",
        Enabled: true,
        HttpVersion: "http2",
        IPV6Enabled: true,
      },
    });
  });

  test("Route53 A Records Created", () => {
    template.resourceCountIs("AWS::Route53::RecordSet", 2);
  });

  test("S3 Bucket Deployment Created", () => {
    template.hasResourceProperties("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test("CloudFront Distribution ID Output Created", () => {
    template.hasOutput("CloudFrontDistributionId", {
      Description: "CloudFront Distribution ID for cache invalidation",
    });
  });
});
