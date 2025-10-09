<?php

namespace Database\Seeders;

use App\Models\ProjectCategory;
use Illuminate\Database\Seeder;

class ProjectCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Web Development',
                'slug' => 'web-development',
                'description' => 'Projects related to Web Development',
                'is_active' => true,
            ],
            [
                'name' => 'Mobile Development',
                'slug' => 'mobile-development',
                'description' => 'Projects related to Mobile Development',
                'is_active' => true,
            ],
            [
                'name' => 'UI/UX Design',
                'slug' => 'uiux-design',
                'description' => 'Projects related to UI/UX Design',
                'is_active' => true,
            ],
            [
                'name' => 'ERP Systems',
                'slug' => 'erp-systems',
                'description' => 'Enterprise Resource Planning solutions and systems',
                'is_active' => true,
            ],
        ];

        foreach ($categories as $category) {
            ProjectCategory::updateOrCreate(
                ['slug' => $category['slug']],
                $category
            );
        }
    }
}
