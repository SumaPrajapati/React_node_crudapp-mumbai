#!/bin/bash
set -e

pm2 delete react-node-app || true
echo "application_stop.sh completed successfully."
