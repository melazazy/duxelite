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
        Schema::table('case_studies', function (Blueprint $table) {
            // Add missing columns that our code expects
            if (!Schema::hasColumn('case_studies', 'slug')) {
                $table->string('slug')->unique()->after('title');
            }
            if (!Schema::hasColumn('case_studies', 'description')) {
                $table->text('description')->nullable()->after('slug');
            }
            if (!Schema::hasColumn('case_studies', 'content')) {
                $table->longText('content')->nullable()->after('description');
            }
            if (!Schema::hasColumn('case_studies', 'project_id')) {
                $table->foreignId('project_id')->nullable()->constrained('projects')->onDelete('set null')->after('content');
            }
            if (!Schema::hasColumn('case_studies', 'is_featured')) {
                $table->boolean('is_featured')->default(false)->after('project_id');
            }
            if (!Schema::hasColumn('case_studies', 'published_at')) {
                $table->timestamp('published_at')->nullable()->after('is_featured');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('case_studies', function (Blueprint $table) {
            $table->dropForeign(['project_id']);
            $table->dropColumn([
                'slug',
                'description', 
                'content',
                'project_id',
                'is_featured',
                'published_at'
            ]);
        });
    }
};
