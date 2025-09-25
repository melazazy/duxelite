<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('blog_post_tag')) {
            Schema::create('blog_post_tag', function (Blueprint $table) {
                $table->id();
                $table->foreignId('blog_post_id')->constrained()->onDelete('cascade');
                $table->foreignId('blog_tag_id')->constrained()->onDelete('cascade');
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_post_tag');
    }
};