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
        if (!Schema::hasTable('case_studies')) {
            Schema::create('case_studies', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->string('client');
                $table->string('industry');
                $table->text('challenge');
                $table->text('solution');
                $table->json('results');
                $table->json('technologies');
                $table->string('timeline');
                $table->string('image')->nullable();
                $table->timestamps();
            });
        }

        if (Schema::hasTable('testimonials') && !Schema::hasColumn('testimonials', 'is_approved')) {
            Schema::table('testimonials', function (Blueprint $table) {
                $table->boolean('is_approved')->default(true)->after('content');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('case_studies');
        if (Schema::hasColumn('testimonials', 'is_approved')) {
            Schema::table('testimonials', function (Blueprint $table) {
                $table->dropColumn('is_approved');
            });
        }
    }
};
