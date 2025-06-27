# CV Website Deployment Guide

This guide explains how to deploy your CV website to AWS using CDK and GitHub Actions.

## Architecture

- **S3 Bucket**: Static website hosting
- **CloudFront**: CDN for global distribution and HTTPS
- **Route53**: DNS management
- **ACM**: SSL/TLS certificates
- **GitHub Actions**: CI/CD pipeline

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **Domain name** registered in Route53 (or elsewhere)
3. **GitHub repository** for your CV website
4. **Node.js 18+** and **npm** installed locally

## Setup Instructions

### 1. Domain and Route53 Setup

If you don't have a domain in Route53:

1. Register a domain in Route53 or transfer an existing domain
2. Note your **Hosted Zone ID** (you'll need this later)

If you have a domain elsewhere:

1. Create a hosted zone in Route53 for your domain
2. Update your domain's nameservers to point to Route53
3. Note your **Hosted Zone ID**

### 2. Local Development Setup

```bash
# Install dependencies
npm install

# Install CDK globally (if not already installed)
npm install -g aws-cdk

# Configure AWS CLI
aws configure
```

### 3. Update Configuration

Update the following files with your domain:

#### `infra/bin/infra.ts`
```typescript
const config = {
  domainName: 'your-actual-domain.com', // Replace this
  hostedZoneId: process.env.HOSTED_ZONE_ID,
  certificateArn: process.env.CERTIFICATE_ARN,
  // ...
};
```

#### `.github/workflows/ci-cd.yml`
```yaml
env:
  DOMAIN_NAME: your-actual-domain.com  # Replace this
  AWS_REGION: us-east-1
```

### 4. AWS Credentials Setup

#### Option A: IAM User (Recommended for GitHub Actions)

1. **Create IAM User**:
   ```bash
   # Deploy the infrastructure first to create the deployment user
   cd infra
   cdk deploy
   ```

2. **Create Access Keys**:
   - Go to AWS Console → IAM → Users
   - Find the user named `{your-domain}-deployment-user`
   - Create access keys for this user

3. **Add GitHub Secrets**:
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `AWS_ACCESS_KEY_ID`: Your access key ID
     - `AWS_SECRET_ACCESS_KEY`: Your secret access key
     - `HOSTED_ZONE_ID`: Your Route53 hosted zone ID (optional)
     - `CERTIFICATE_ARN`: Existing certificate ARN (optional)

#### Option B: OIDC (More Secure)

For better security, you can use OIDC instead of access keys:

1. **Create OIDC Provider**:
   ```bash
   # Create OIDC provider for GitHub
   aws iam create-open-id-connect-provider \
     --url https://token.actions.githubusercontent.com \
     --client-id-list sts.amazonaws.com \
     --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
   ```

2. **Create IAM Role**:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": {
           "Federated": "arn:aws:iam::YOUR_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
         },
         "Action": "sts:AssumeRoleWithWebIdentity",
         "Condition": {
           "StringEquals": {
             "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
           },
           "StringLike": {
             "token.actions.githubusercontent.com:sub": "repo:YOUR_USERNAME/YOUR_REPO:*"
           }
         }
       }
     ]
   }
   ```

3. **Update GitHub Actions**:
   Replace the AWS credentials step with:
   ```yaml
   - name: Configure AWS credentials
     uses: aws-actions/configure-aws-credentials@v4
     with:
       role-to-assume: arn:aws:iam::YOUR_ACCOUNT_ID:role/YOUR_ROLE_NAME
       aws-region: ${{ env.AWS_REGION }}
   ```

### 5. Initial Deployment

#### Deploy Infrastructure
```bash
# Bootstrap CDK (first time only)
cd infra
cdk bootstrap

# Deploy infrastructure
cdk deploy
```

#### Deploy Website
```bash
# Build and deploy website
npm run build
npm run deploy
```

### 6. GitHub Actions Setup

The CI/CD pipeline will automatically:

1. **For all branches**: Run linting and build
2. **For main branch**: Deploy infrastructure and website

## Security Best Practices

### 1. AWS Credentials
- ✅ Use IAM users with minimal required permissions
- ✅ Use OIDC instead of access keys when possible
- ✅ Rotate access keys regularly
- ❌ Never commit AWS credentials to the repository

### 2. Infrastructure Security
- ✅ S3 bucket is private (only accessible via CloudFront)
- ✅ CloudFront uses HTTPS only
- ✅ Origin Access Identity for S3 access
- ✅ Geo-restrictions applied (configurable)

### 3. Repository Security
- ✅ Use GitHub Secrets for sensitive data
- ✅ Enable branch protection rules
- ✅ Require pull request reviews

## Troubleshooting

### Common Issues

1. **CDK Bootstrap Error**:
   ```bash
   cdk bootstrap aws://ACCOUNT-NUMBER/REGION
   ```

2. **Certificate Validation Failed**:
   - Ensure your domain points to Route53 nameservers
   - Wait for DNS propagation (can take up to 48 hours)

3. **S3 Upload Permission Denied**:
   - Check that the deployment user has correct permissions
   - Verify the bucket name matches your domain

4. **CloudFront Invalidation Failed**:
   - Check that the distribution ID is correct
   - Ensure the deployment user has CloudFront permissions

### Useful Commands

```bash
# Check CDK diff
cd infra && cdk diff

# Destroy infrastructure (be careful!)
cd infra && cdk destroy

# View CloudFormation stack
aws cloudformation describe-stacks --stack-name CvInfrastructureStack

# Check S3 bucket contents
aws s3 ls s3://your-domain-website

# List CloudFront distributions
aws cloudfront list-distributions
```

## Cost Optimization

- **CloudFront**: Price Class 100 (North America and Europe only)
- **S3**: Standard storage, lifecycle policies for old versions
- **Route53**: Hosted zone costs (~$0.50/month)
- **ACM**: Free for public certificates

## Monitoring

- **CloudWatch**: Monitor CloudFront metrics
- **S3 Access Logs**: Enable for debugging
- **CloudFront Logs**: Enable for detailed analytics

## Support

For issues with:
- **CDK**: Check [CDK documentation](https://docs.aws.amazon.com/cdk/)
- **GitHub Actions**: Check [GitHub Actions documentation](https://docs.github.com/en/actions)
- **AWS Services**: Check respective AWS service documentation 