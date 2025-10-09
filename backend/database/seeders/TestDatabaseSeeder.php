<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\Project;
use App\Models\ProjectCategory;
use App\Models\CaseStudy;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TestDatabaseSeeder extends Seeder
{
    /**
     * Seed the application's test database.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // Create test project categories
        $projectCategories = [];
        if (class_exists(ProjectCategory::class)) {
            $projectCategories = ProjectCategory::factory(3)->create();
        }

        // Create test projects
        if (class_exists(Project::class)) {
            Project::factory(10)->create([
                'category_id' => fn() => $projectCategories->random()->id,
            ]);
        }

        // Create test services
        if (class_exists(Service::class)) {
            Service::factory(6)->create();
        }

        // Create test case studies
        if (class_exists(CaseStudy::class)) {
            CaseStudy::factory(4)->create([
                'project_id' => fn() => Project::inRandomOrder()->first()->id,
            ]);
        }

        // Note: Blog and testimonial seeding has been temporarily removed
        // to focus on fixing the core API endpoints test
    }
}
