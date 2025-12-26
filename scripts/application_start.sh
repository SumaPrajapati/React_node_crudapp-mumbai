#!/bin/bash
set -e

APP_DIR="/var/www/React-Crud_nodewithSql_app-mumbai"

cd "$APP_DIR/server"

# Start/restart node app
pm2 delete react-node-app || true
pm2 start index.js --name react-node-app
pm2 save

echo "application_start.sh completed successfully."
