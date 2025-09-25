<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Blog system updates and fixes
     * This migration contains only modifications to the blog system
     * that should be applied after the main tables are created
     */
    public function up(): void
    {
        // Ensure the blog_posts table exists before making changes
        if (Schema::hasTable('blog_posts')) {
            // Add any missing columns with proper defaults
            Schema::table('blog_posts', function (Blueprint $table) {
                if (!Schema::hasColumn('blog_posts', 'excerpt')) {
                    $table->text('excerpt')->nullable()->after('content');
                }
                if (!Schema::hasColumn('blog_posts', 'read_time')) {
                    $table->string('read_time')->nullable()->after('published_at');
                }
                if (!Schema::hasColumn('blog_posts', 'views')) {
                    $table->integer('views')->default(0)->after('is_published');
                }
            });
        }

        // Ensure the blog_post_tag table has the correct structure
        if (Schema::hasTable('blog_post_tag') && 
            !Schema::hasColumn('blog_post_tag', 'id')) {
            
            // Create a temporary table to hold the data
            Schema::create('temp_blog_post_tag', function (Blueprint $table) {
                $table->id();
                $table->foreignId('post_id')
                      ->constrained('blog_posts')
                      ->cascadeOnDelete();
                $table->foreignId('tag_id')
                      ->constrained('blog_tags')
                      ->cascadeOnDelete();
                $table->timestamps();
                
                $table->unique(['post_id', 'tag_id']);
            });

            // Copy data from old table to new table
            DB::statement('INSERT INTO temp_blog_post_tag (post_id, tag_id, created_at, updated_at) ' .
                         'SELECT post_id, tag_id, NOW(), NOW() FROM blog_post_tag');

            // Drop the old table and rename the new one
            Schema::dropIfExists('blog_post_tag');
            Schema::rename('temp_blog_post_tag', 'blog_post_tag');
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Only reverse structural changes if needed
        if (Schema::hasTable('blog_post_tag') && 
            Schema::hasColumn('blog_post_tag', 'id')) {
            
            // Create a temporary table with the old structure
            Schema::create('temp_blog_post_tag', function (Blueprint $table) {
                $table->foreignId('post_id')
                      ->constrained('blog_posts')
                      ->cascadeOnDelete();
                $table->foreignId('tag_id')
                      ->constrained('blog_tags')
                      ->cascadeOnDelete();
                $table->primary(['post_id', 'tag_id']);
            });

            // Copy data back to old structure
            DB::statement('INSERT INTO temp_blog_post_tag (post_id, tag_id) ' .
                         'SELECT post_id, tag_id FROM blog_post_tag');

            // Drop the current table and rename the old one back
            Schema::dropIfExists('blog_post_tag');
            Schema::rename('temp_blog_post_tag', 'blog_post_tag');
        }
    }
};
