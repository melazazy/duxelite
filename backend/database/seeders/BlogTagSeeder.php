<?php

namespace Database\Seeders;

use App\Models\BlogTag;
use Illuminate\Database\Seeder;

class BlogTagSeeder extends Seeder
{
    public function run(): void
    {
        $tags = [
            ['name' => 'Laravel', 'slug' => 'laravel'],
            ['name' => 'Vue.js', 'slug' => 'vuejs'],
            ['name' => 'React', 'slug' => 'react'],
            ['name' => 'Tailwind CSS', 'slug' => 'tailwind-css'],
            ['name' => 'JavaScript', 'slug' => 'javascript'],
            ['name' => 'PHP', 'slug' => 'php'],
            ['name' => 'Design', 'slug' => 'design'],
            ['name' => 'Development', 'slug' => 'development'],
            ['name' => 'CSS', 'slug' => 'css'],
            ['name' => 'UI/UX', 'slug' => 'uiux'],
            ['name' => 'Business', 'slug' => 'business'],
            ['name' => 'Startup', 'slug' => 'startup'],
        ];

        foreach ($tags as $tag) {
            BlogTag::updateOrCreate(
                ['slug' => $tag['slug']],
                $tag
            );
        }
    }
}
