<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            // Drop the old author column if it exists
            if (Schema::hasColumn('blog_posts', 'author')) {
                $table->dropColumn('author');
            }

            // Ensure author_id is properly set up
            if (!Schema::hasColumn('blog_posts', 'author_id')) {
                $table->unsignedBigInteger('author_id')->nullable()->after('category_id');
            }

            // Add foreign key constraint if it doesn't exist
            $foreignKeys = collect(DB::select("
                SELECT CONSTRAINT_NAME 
                FROM information_schema.KEY_COLUMN_USAGE 
                WHERE TABLE_SCHEMA = DATABASE() 
                AND TABLE_NAME = 'blog_posts' 
                AND COLUMN_NAME = 'author_id' 
                AND REFERENCED_TABLE_NAME IS NOT NULL
            "));

            if ($foreignKeys->isEmpty()) {
                $table->foreign('author_id')
                      ->references('id')
                      ->on('users')
                      ->onDelete('set null');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // This is a structural fix, so we don't need to roll it back
        // as it would potentially break the application
        // If you need to rollback, you should restore from a backup
    }
};
