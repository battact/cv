# Tamás Bartos CV Website

A modern, responsive CV website built with React, TypeScript, and Vite, deployed on AWS using CDK. This project uses pnpm workspaces for efficient dependency management.

## Project Structure

```
/cv
├── /ui                    # React application
│   ├── /src              # Source code
│   ├── /public           # Static assets
│   ├── package.json      # UI dependencies
│   ├── vite.config.ts    # Vite configuration (TypeScript)
│   ├── tsconfig.json     # TypeScript configuration
│   └── eslint.config.ts  # ESLint configuration
├── /infra                # AWS CDK infrastructure
│   ├── /lib              # CDK constructs
│   ├── /config           # Configuration
│   ├── /test             # Infrastructure tests
│   ├── package.json      # Infrastructure dependencies
│   └── jest.config.js    # Jest configuration
├── /scripts              # Build and deployment scripts
├── /github               # GitHub Actions workflows
├── package.json          # Root workspace configuration
├── pnpm-workspace.yaml   # pnpm workspace definition
└── eslint.config.ts      # Root ESLint configuration
```

## Quick Start

### Prerequisites

- **Node.js 22+** and **pnpm 8+** installed
- **AWS CLI** configured (for deployment)

### Development

```bash
# Install all dependencies across workspaces
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint

# Run tests
pnpm test
```

### Deployment

```bash
# Deploy infrastructure (first time)
pnpm deploy:infra

# Deploy website
pnpm deploy:website

# Deploy everything
pnpm deploy
```

## Technologies

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Modern styling with animations

### Infrastructure

- **AWS CDK** - Infrastructure as Code
- **S3** - Static website hosting
- **CloudFront** - CDN for global distribution
- **Route53** - DNS management
- **ACM** - SSL/TLS certificates

### Development Tools

- **pnpm** - Fast, efficient package manager with workspaces
- **ESLint** - Code linting with TypeScript and React rules
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **GitHub Actions** - CI/CD pipeline

## Features

- ✅ **Responsive design** - Works on all devices
- ✅ **SEO optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **PWA capabilities** - Service Worker, Web App Manifest
- ✅ **Smooth animations** - Intersection Observer-based scroll animations
- ✅ **Accessibility compliant** - ARIA labels, semantic HTML
- ✅ **Performance optimized** - Code splitting, lazy loading
- ✅ **Type-safe** - Full TypeScript coverage
- ✅ **Modern tooling** - pnpm workspaces, ESLint, Prettier
- ✅ **AWS infrastructure** - Scalable, secure deployment

## Architecture

### Frontend Architecture

- **Component-based** - Modular React components
- **Type-safe** - Full TypeScript coverage
- **Performance-focused** - Code splitting, lazy loading
- **PWA-ready** - Offline support, installable

### Infrastructure Architecture

- **S3 Bucket** - Private bucket for static assets
- **CloudFront** - Global CDN with HTTPS
- **Route53** - DNS management and routing
- **ACM** - SSL/TLS certificate management
- **Origin Access Identity** - Secure S3 access

### Development Workflow

- **pnpm workspaces** - Efficient dependency management
- **Shared tooling** - ESLint, TypeScript, Jest in root
- **Consistent formatting** - Prettier configuration
- **Automated CI/CD** - GitHub Actions pipeline

## Development Commands

### Root Level (Workspace)

```bash
pnpm dev          # Start UI development server
pnpm build        # Build UI for production
pnpm lint         # Lint all code
pnpm test         # Run infrastructure tests
pnpm deploy       # Deploy everything
pnpm clean        # Clean all build artifacts
```

### UI Package

```bash
cd ui
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm lint         # Lint UI code
pnpm preview      # Preview production build
```

### Infrastructure Package

```bash
cd infra
pnpm build        # Build CDK constructs
pnpm test         # Run infrastructure tests
pnpm cdk deploy   # Deploy infrastructure
```

## Deployment

The project uses a multi-stage deployment process:

1. **Infrastructure** - Deploy AWS resources (S3, CloudFront, Route53)
2. **Website** - Build and deploy React app to S3
3. **Cache Invalidation** - Update CloudFront cache

### Manual Deployment

```bash
# Deploy infrastructure first
pnpm deploy:infra

# Then deploy website
pnpm deploy:website
```

### Automated Deployment

GitHub Actions automatically deploys on push to main branch.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).
