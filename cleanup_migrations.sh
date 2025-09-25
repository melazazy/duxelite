#!/bin/bash

# Move to the project directory
cd "$(dirname "$0")"

# Backup directory for old migrations
BACKUP_DIR="./database/migrations/backup/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "Backing up old migrations to $BACKUP_DIR..."

# Move all old migrations to backup directory
mv duxelite-backend/database/migrations/2025_09_24_*.php "$BACKUP_DIR/" 2>/dev/null

# Keep only the new consolidated migrations
echo "Keeping only the new consolidated migration files..."

# Make the cleanup script executable
chmod +x "$0"

echo "Cleanup complete! Old migrations have been backed up to $BACKUP_DIR"
echo "To apply the consolidated migrations, run: php artisan migrate:fresh"
