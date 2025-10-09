<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use Illuminate\Database\Seeder;

class BlogCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Technology',
                'slug' => 'technology',
                'description' => 'Articles about Technology',
            ],
            [
                'name' => 'Web Development',
                'slug' => 'web-development',
                'description' => 'Articles about Web Development',
            ],
            [
                'name' => 'Mobile Development',
                'slug' => 'mobile-development',
                'description' => 'Articles about Mobile Development',
            ],
            [
                'name' => 'UI/UX Design',
                'slug' => 'ui-ux-design',
                'description' => 'Articles about UI/UX Design',
            ],
            [
                'name' => 'Business',
                'slug' => 'business',
                'description' => 'Articles about Business',
            ],
            [
                'name' => 'Design',
                'slug' => 'design',
                'description' => 'Articles about Design',
            ],
            [
                'name' => 'Development',
                'slug' => 'development',
                'description' => 'Articles about Development',
            ],
            [
                'name' => 'Marketing',
                'slug' => 'marketing',
                'description' => 'Articles about Marketing',
            ],
        ];

        foreach ($categories as $category) {
            BlogCategory::updateOrCreate(
                ['slug' => $category['slug']],
                $category
            );
        }
    }
}
