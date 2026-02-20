#!/bin/bash

# Capital Upfitters - VPS Deployment Script
# Deploy to Hostinger KVM 2 VPS: 187.77.194.138

set -e

# Configuration
VPS_HOST="187.77.194.138"
VPS_USER="root"
APP_NAME="capital-upfitters"
DOMAIN="test.capitalupfitters.com"  # or use IP:3000
DOCKER_PORT="3000"

echo "🚀 Starting deployment to Hostinger VPS..."

# Build the application locally first
echo "📦 Building Next.js application..."
npm run build

# Create deployment package
echo "📁 Creating deployment package..."
tar -czf ${APP_NAME}.tar.gz \
  --exclude=node_modules \
  --exclude=.next/cache \
  --exclude=.git \
  .

# Upload to VPS
echo "📤 Uploading to VPS..."
scp ${APP_NAME}.tar.gz ${VPS_USER}@${VPS_HOST}:/tmp/

# Deploy on VPS
echo "🔧 Deploying on VPS..."
ssh ${VPS_USER}@${VPS_HOST} << EOF
  set -e
  
  # Create app directory
  mkdir -p /opt/${APP_NAME}
  cd /opt/${APP_NAME}
  
  # Extract application
  tar -xzf /tmp/${APP_NAME}.tar.gz
  
  # Stop existing container if running
  docker stop ${APP_NAME} 2>/dev/null || true
  docker rm ${APP_NAME} 2>/dev/null || true
  
  # Build new Docker image
  docker build -t ${APP_NAME}:latest .
  
  # Run container
  docker run -d \
    --name ${APP_NAME} \
    --restart unless-stopped \
    -p ${DOCKER_PORT}:3000 \
    ${APP_NAME}:latest
  
  # Cleanup
  rm /tmp/${APP_NAME}.tar.gz
  
  echo "✅ Deployment complete!"
  echo "🌐 Site available at: http://${VPS_HOST}:${DOCKER_PORT}"
  
  # Show container status
  docker ps | grep ${APP_NAME}
EOF

# Cleanup local files
rm ${APP_NAME}.tar.gz

echo "🎉 Deployment successful!"
echo "🔗 Test URL: http://${VPS_HOST}:${DOCKER_PORT}"
echo ""
echo "Next steps:"
echo "1. Test the staging site"
echo "2. Set up DNS for ${DOMAIN}"
echo "3. Configure SSL/HTTPS"
echo "4. Point main domain when ready"