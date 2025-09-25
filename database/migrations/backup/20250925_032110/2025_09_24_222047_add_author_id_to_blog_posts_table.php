<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // First, add the column as nullable
        Schema::table('blog_posts', function (Blueprint $table) {
            $table->unsignedBigInteger('author_id')
                  ->after('category_id')
                  ->nullable()
                  ->constrained('users')
                  ->onDelete('set null');
        });

        // Set a default author (admin user with ID 1)
        DB::table('blog_posts')->update(['author_id' => 1]);

        // If you want to make it required after setting the default value
        // Note: This is optional and might not be needed
        // Schema::table('blog_posts', function (Blueprint $table) {
        //     $table->unsignedBigInteger('author_id')->nullable(false)->change();
        // });
    }

    public function down(): void
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            $table->dropForeign(['author_id']);
            $table->dropColumn('author_id');
        });
    }
};