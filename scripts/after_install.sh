#!/bin/bash
set -e

APP_DIR="/var/www/React-Crud_nodewithSql_app-mumbai"

echo "=== AfterInstall: installing system dependencies (node22, pm2, nginx) ==="
apt-get update -y
apt-get install -y curl git

# Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs

echo "Node version:"
node -v
echo "NPM version:"
npm -v

# PM2 (process manager)
npm install -g pm2
pm2 -v

# Nginx (serve React + reverse proxy)
apt-get install -y nginx
systemctl enable nginx
systemctl start nginx
nginx -t

echo "=== Installing server dependencies ==="
cd "$APP_DIR/server"
npm ci || npm install

echo "=== Installing + building React client ==="
cd "$APP_DIR/client"
npm ci || npm install
npm run build

echo "after_install.sh completed successfully."

