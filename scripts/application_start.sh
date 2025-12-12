#!/bin/bash
set -xe

APP_DIR="/var/www/React_node_crudapp-mumbai"
NODE_BIN="/home/ubuntu/.nvm/versions/node/v22.13.1/bin/node"

# Load NVM for root
export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 22

cd "$APP_DIR/server"

# index.js listens on port 8080
nohup "$NODE_BIN" index.js > /var/log/your-node-app.log 2>&1 &
