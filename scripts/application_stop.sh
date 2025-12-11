#!/bin/bash
# Stop the Node.js server using pm2 (or forever, etc.)
pm2 stop all || true
pm2 delete all || true