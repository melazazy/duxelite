<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Combined migration for projects and services updates
     * Consolidates:
     * - 2025_09_24_213132_add_is_active_to_project_categories_table.php
     * - 2025_09_24_213337_add_is_featured_to_projects_table.php
     * - 2025_09_24_213416_add_github_url_to_projects_table.php
     * - 2025_09_24_213452_add_is_active_to_services_table.php
     */
    public function up(): void
    {
        // Add is_active to project_categories table
        if (Schema::hasTable('project_categories') && !Schema::hasColumn('project_categories', 'is_active')) {
            Schema::table('project_categories', function (Blueprint $table) {
                $table->boolean('is_active')->default(true)->after('description');
            });
        }

        // Add is_featured to projects table
        if (Schema::hasTable('projects') && !Schema::hasColumn('projects', 'is_featured')) {
            Schema::table('projects', function (Blueprint $table) {
                $table->boolean('is_featured')->default(false)->after('status');
            });
        }

        // Add github_url to projects table
        if (Schema::hasTable('projects') && !Schema::hasColumn('projects', 'github_url')) {
            Schema::table('projects', function (Blueprint $table) {
                $table->string('github_url')->nullable()->after('url');
            });
        }

        // Add is_active to services table
        if (Schema::hasTable('services') && !Schema::hasColumn('services', 'is_active')) {
            Schema::table('services', function (Blueprint $table) {
                $table->boolean('is_active')->default(true)->after('icon');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Reverse is_active from services
        if (Schema::hasTable('services') && Schema::hasColumn('services', 'is_active')) {
            Schema::table('services', function (Blueprint $table) {
                $table->dropColumn('is_active');
            });
        }

        // Reverse github_url from projects
        if (Schema::hasTable('projects') && Schema::hasColumn('projects', 'github_url')) {
            Schema::table('projects', function (Blueprint $table) {
                $table->dropColumn('github_url');
            });
        }

        // Reverse is_featured from projects
        if (Schema::hasTable('projects') && Schema::hasColumn('projects', 'is_featured')) {
            Schema::table('projects', function (Blueprint $table) {
                $table->dropColumn('is_featured');
            });
        }

        // Reverse is_active from project_categories
        if (Schema::hasTable('project_categories') && Schema::hasColumn('project_categories', 'is_active')) {
            Schema::table('project_categories', function (Blueprint $table) {
                $table->dropColumn('is_active');
            });
        }
    }
};
