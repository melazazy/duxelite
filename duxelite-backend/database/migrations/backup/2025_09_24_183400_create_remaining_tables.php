<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Services Table
        if (!Schema::hasTable('services')) {
            Schema::create('services', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->string('slug')->unique();
                $table->text('description');
                $table->json('features')->nullable();
                $table->string('icon')->nullable();
                $table->boolean('is_featured')->default(false);
                $table->integer('sort_order')->default(0);
                $table->timestamps();
            });
        }

        // Project Categories Table
        if (!Schema::hasTable('project_categories')) {
            Schema::create('project_categories', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('slug')->unique();
                $table->text('description')->nullable();
                $table->timestamps();
            });
        }

        // Projects Table
        if (!Schema::hasTable('projects')) {
            Schema::create('projects', function (Blueprint $table) {
                $table->id();
                $table->foreignId('category_id')->constrained('project_categories');
                $table->string('title');
                $table->string('slug')->unique();
                $table->text('description');
                $table->string('client')->nullable();
                $table->string('status')->default('published');
                $table->json('technologies')->nullable();
                $table->string('image')->nullable();
                $table->string('url')->nullable();
                $table->date('project_date')->nullable();
                $table->timestamps();
            });
        }

        // Blog Categories Table
        if (!Schema::hasTable('blog_categories')) {
            Schema::create('blog_categories', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('slug')->unique();
                $table->text('description')->nullable();
                $table->timestamps();
            });
        }

        // Blog Posts Table
        if (!Schema::hasTable('blog_posts')) {
            Schema::create('blog_posts', function (Blueprint $table) {
                $table->id();
                $table->foreignId('category_id')->constrained('blog_categories');
                $table->string('title');
                $table->string('slug')->unique();
                $table->text('excerpt')->nullable();
                $table->longText('content');
                $table->string('featured_image')->nullable();
                $table->string('author');
                $table->timestamp('published_at')->nullable();
                $table->string('read_time')->nullable();
                $table->boolean('is_published')->default(false);
                $table->integer('views')->default(0);
                $table->timestamps();
            });
        }

        // Blog Tags Table
        if (!Schema::hasTable('blog_tags')) {
            Schema::create('blog_tags', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('slug')->unique();
                $table->timestamps();
            });
        }

        // Blog Post Tag Pivot Table
        if (!Schema::hasTable('blog_post_tag')) {
            Schema::create('blog_post_tag', function (Blueprint $table) {
                $table->foreignId('post_id')->constrained('blog_posts')->onDelete('cascade');
                $table->foreignId('tag_id')->constrained('blog_tags')->onDelete('cascade');
                $table->primary(['post_id', 'tag_id']);
            });
        }

        // Blog Comments Table
        if (!Schema::hasTable('blog_comments')) {
            Schema::create('blog_comments', function (Blueprint $table) {
                $table->id();
                $table->foreignId('post_id')->constrained('blog_posts')->onDelete('cascade');
                $table->foreignId('parent_id')->nullable()->constrained('blog_comments')->onDelete('cascade');
                $table->string('author_name');
                $table->string('author_email');
                $table->text('content');
                $table->boolean('is_approved')->default(false);
                $table->timestamps();
            });
        }

        // Testimonials Table
        if (!Schema::hasTable('testimonials')) {
            Schema::create('testimonials', function (Blueprint $table) {
                $table->id();
                $table->string('client_name');
                $table->string('client_role')->nullable();
                $table->string('company')->nullable();
                $table->text('content');
                $table->string('image')->nullable();
                $table->integer('rating')->default(5);
                $table->boolean('is_featured')->default(false);
                $table->integer('sort_order')->default(0);
                $table->timestamps();
            });
        }

        // Contact Messages Table
        if (!Schema::hasTable('contact_messages')) {
            Schema::create('contact_messages', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('email');
                $table->string('phone')->nullable();
                $table->string('subject')->nullable();
                $table->text('message');
                $table->boolean('is_read')->default(false);
                $table->timestamps();
            });
        }

        // Subscribers Table
        if (!Schema::hasTable('subscribers')) {
            Schema::create('subscribers', function (Blueprint $table) {
                $table->id();
                $table->string('email')->unique();
                $table->string('name')->nullable();
                $table->boolean('is_active')->default(true);
                $table->timestamp('subscribed_at')->useCurrent();
                $table->timestamp('unsubscribed_at')->nullable();
                $table->timestamps();
            });
        }

        // Company Info Table
        if (!Schema::hasTable('company_infos')) {
            Schema::create('company_infos', function (Blueprint $table) {
                $table->id();
                $table->string('key')->unique();
                $table->text('value')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop tables in reverse order
        Schema::dropIfExists('company_infos');
        Schema::dropIfExists('subscribers');
        Schema::dropIfExists('contact_messages');
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('blog_comments');
        Schema::dropIfExists('blog_post_tag');
        Schema::dropIfExists('blog_tags');
        Schema::dropIfExists('blog_posts');
        Schema::dropIfExists('blog_categories');
        Schema::dropIfExists('projects');
        Schema::dropIfExists('project_categories');
        Schema::dropIfExists('services');
    }
};
