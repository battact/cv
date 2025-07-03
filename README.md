# Tamás Bartos CV Website

A modern, responsive CV website built with React, TypeScript, and Vite, deployed on AWS using CDK.

## Project Structure

```
/cv
├── /ui              # React application
│   ├── /src         # Source code
│   ├── /public      # Static assets
│   ├── package.json # UI dependencies
│   └── ...
├── /infra           # AWS CDK infrastructure
│   ├── /lib         # CDK constructs
│   ├── /config      # Configuration
│   ├── package.json # Infrastructure dependencies
│   └── ...
├── /scripts         # Build and deployment scripts
├── /github          # GitHub Actions workflows
└── package.json     # Root workspace configuration
```

## Quick Start

### Development
```bash
# Install all dependencies
npm run install:all

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### Deployment
```bash
# Deploy infrastructure (first time)
npm run deploy:infra

# Deploy website
npm run deploy:website

# Deploy everything
npm run deploy
```

## Technologies

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: CSS3 with modern animations
- **Infrastructure**: AWS CDK, S3, CloudFront, Route53
- **CI/CD**: GitHub Actions
- **PWA**: Service Worker, Web App Manifest

## Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ PWA capabilities
- ✅ Smooth animations
- ✅ Accessibility compliant
- ✅ Performance optimized
- ✅ AWS infrastructure as code

## Architecture

- **S3 Bucket**: Static website hosting
- **CloudFront**: CDN for global distribution
- **Route53**: DNS management
- **ACM**: SSL/TLS certificates
- **GitHub Actions**: Automated CI/CD

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).
