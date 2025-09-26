<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Service;
use App\Models\Project;
use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Models\BlogTag;
use App\Models\Testimonial;
use App\Models\CompanyInfo;
use App\Models\ProjectCategory;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user if not exists
        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // Assign admin role if Spatie Permission is installed
        if (method_exists($admin, 'assignRole')) {
            // If using Spatie Permission
            $admin->assignRole('admin');
        }
        // Otherwise, we'll just use the first user (ID 1) as admin

        // Check if the database has already been seeded
        if (Service::count() > 0) {
            return;
        }

        // Create sample services
        $services = [
            [
                'title' => 'Web Development',
                'slug' => 'web-development',
                'description' => 'Custom web applications built with modern technologies to meet your business needs.',
                'features' => [
                    'Responsive Design',
                    'Custom CMS Integration',
                    'E-commerce Solutions',
                    'API Development',
                    'Performance Optimization'
                ]
            ],
            [
                'title' => 'Mobile App Development',
                'slug' => 'mobile-app-development',
                'description' => 'Native and cross-platform mobile applications for iOS and Android.',
                'features' => [
                    'iOS & Android Development',
                    'React Native Cross-platform',
                    'UI/UX Design',
                    'App Store Deployment',
                    'Push Notifications'
                ]
            ],
            [
                'title' => 'UI/UX Design',
                'slug' => 'ui-ux-design',
                'description' => 'Beautiful and intuitive user interfaces that enhance user experience.',
                'features' => [
                    'User Research',
                    'Wireframing & Prototyping',
                    'Interactive Design',
                    'Usability Testing',
                    'Design Systems'
                ]
            ]
        ];

        foreach ($services as $service) {
            Service::firstOrCreate(
                ['slug' => $service['slug']],
                $service
            );
        }

        // Create blog categories
        $blogCategories = [
            ['name' => 'Technology', 'slug' => 'technology'],
            ['name' => 'Web Development', 'slug' => 'web-development'],
            ['name' => 'Mobile Development', 'slug' => 'mobile-development'],
            ['name' => 'UI/UX Design', 'slug' => 'ui-ux-design']
        ];

        foreach ($blogCategories as $category) {
            BlogCategory::firstOrCreate(
                ['slug' => $category['slug']],
                [
                    'name' => $category['name'],
                    'description' => 'Articles about ' . $category['name']
                ]
            );
        }

        // Create blog tags
        $tags = ['Laravel', 'Vue.js', 'React', 'Tailwind CSS', 'JavaScript', 'PHP', 'Design', 'Development'];
        foreach ($tags as $tag) {
            BlogTag::firstOrCreate([
                'name' => $tag,
                'slug' => Str::slug($tag)
            ]);
        }

        // Create sample blog posts
        $categoryIds = BlogCategory::pluck('id');
        $tagIds = BlogTag::pluck('id');

        for ($i = 1; $i <= 10; $i++) {
            $post = BlogPost::create([
                'category_id' => $categoryIds->random(),
                'title' => "Sample Blog Post $i",
                'slug' => "sample-blog-post-$i",
                'excerpt' => "This is a sample excerpt for blog post $i. " . Str::random(100),
                'content' => "<p>This is the full content of blog post $i. " . Str::random(500) . "</p>",
                'featured_image' => null,
                'author_id' => $admin->id,
                'published_at' => now(),
                'read_time' => rand(3, 10) . ' min read',
                'is_published' => true,
                'views' => rand(0, 1000)
            ]);

            // Attach random tags
            $post->tags()->attach($tagIds->random(rand(2, 4)));
        }

        // Create project categories
        $projectCategories = [
            ['name' => 'Web Development', 'slug' => 'web-development'],
            ['name' => 'Mobile Development', 'slug' => 'mobile-development'],
            ['name' => 'UI/UX Design', 'slug' => 'ui-ux-design']
        ];

        foreach ($projectCategories as $category) {
            ProjectCategory::firstOrCreate(
                ['slug' => $category['slug']],
                [
                    'name' => $category['name'],
                    'description' => 'Projects related to ' . $category['name']
                ]
            );
        }

        // Create sample projects
        $projects = [
            [
                'category_id' => 1,
                'title' => 'E-commerce Platform',
                'slug' => 'ecommerce-platform',
                'description' => 'A full-featured e-commerce platform with inventory management and payment processing.',
                'client' => 'Fashion Retailer Inc.',
                'status' => 'completed',
                'technologies' => ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Stripe'],
                'image' => url('storage/projects/ecommerce.jpg')
            ],
            [
                'category_id' => 1,
                'title' => 'Corporate Website',
                'slug' => 'corporate-website',
                'description' => 'A modern corporate website with blog and contact management system.',
                'client' => 'Tech Solutions Ltd.',
                'status' => 'completed',
                'technologies' => ['WordPress', 'PHP', 'JavaScript', 'Sass'],
                'image' => url('storage/projects/corporate.jpg')
            ],
            [
                'category_id' => 2,
                'title' => 'Fitness Mobile App',
                'slug' => 'fitness-mobile-app',
                'description' => 'A fitness tracking application with workout plans and progress tracking.',
                'client' => 'FitLife',
                'status' => 'in-progress',
                'technologies' => ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
                'image' => url('storage/projects/fitness-app.jpg')
            ]
        ];

        foreach ($projects as $project) {
            Project::firstOrCreate(
                ['slug' => $project['slug']],
                $project
            );
        }

        // Create blog categories
        $categories = ['Technology', 'Business', 'Design', 'Development', 'Marketing'];
        foreach ($categories as $category) {
            $slug = Str::slug($category);
            BlogCategory::firstOrCreate(
                ['slug' => $slug],
                [
                    'name' => $category,
                    'description' => 'Articles about ' . $category
                ]
            );
        }

        // Create blog tags
        $tags = ['Laravel', 'Vue.js', 'React', 'JavaScript', 'PHP', 'CSS', 'UI/UX', 'Business', 'Startup'];
        foreach ($tags as $tag) {
            $slug = Str::slug($tag);
            BlogTag::firstOrCreate(
                ['slug' => $slug],
                ['name' => $tag]
            );
        }

        // Create sample blog posts
        $posts = [
            [
                'category_id' => 1,
                'author_id' => 1, // Using the admin user as the author
                'title' => 'Getting Started with Laravel 10',
                'slug' => 'getting-started-with-laravel-10',
                'content' => '<p>Laravel 10 introduces several new features and improvements. In this article, we\'ll explore how to get started with the latest version of Laravel.</p>',
                'featured_image' => url('storage/posts/laravel-10.jpg'),
                'published_at' => now()->subDays(5),
                'read_time' => '5 min read',
                'is_published' => true,
                'tags' => ['Laravel', 'PHP', 'Backend']
            ],
            [
                'category_id' => 2,
                'author_id' => 1, // Using the admin user as the author
                'title' => 'The Future of Web Development',
                'slug' => 'future-of-web-development',
                'content' => '<p>Web development is constantly evolving. Let\'s take a look at the latest trends and technologies shaping the future of the web.</p>',
                'featured_image' => url('storage/posts/web-dev-future.jpg'),
                'published_at' => now()->subDays(3),
                'read_time' => '7 min read',
                'is_published' => true,
                'tags' => ['Web Development', 'JavaScript', 'Trends']
            ]
        ];

        foreach ($posts as $postData) {
            // Get the post data without the tags
            $postAttributes = [
                'category_id' => $postData['category_id'],
                'author_id' => $postData['author_id'],
                'title' => $postData['title'],
                'slug' => $postData['slug'],
                'content' => $postData['content'],
                'excerpt' => $postData['excerpt'] ?? substr(strip_tags($postData['content']), 0, 200),
                'featured_image' => $postData['featured_image'],
                'published_at' => $postData['published_at'],
                'read_time' => $postData['read_time'],
                'is_published' => $postData['is_published'] ?? true,
                'views' => $postData['views'] ?? 0
            ];

            // Create or update the post
            $post = BlogPost::updateOrCreate(
                ['slug' => $postData['slug']],
                $postAttributes
            );

            // Attach tags if they exist
            if (isset($postData['tags']) && is_array($postData['tags'])) {
                $tagIds = [];
                foreach ($postData['tags'] as $tagName) {
                    $tag = BlogTag::where('name', $tagName)->first();
                    if ($tag) {
                        $tagIds[] = $tag->id;
                    }
                }
                
                // Sync tags (detach all and attach the current ones)
                $post->tags()->sync($tagIds);
            }
        }

        // Create sample testimonials
        $testimonials = [
            [
                'client_name' => 'Sarah Johnson',
                'client_role' => 'CEO',
                'company' => 'TechCorp',
                'content' => 'The team delivered exceptional results on our e-commerce platform. Highly recommended!',
                'rating' => 5
            ],
            [
                'client_name' => 'Michael Chen',
                'client_role' => 'Marketing Director',
                'company' => 'Global Solutions',
                'content' => 'Professional service and excellent communication throughout the project.',
                'rating' => 5
            ]
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::firstOrCreate(
                ['client_name' => $testimonial['client_name'], 'company' => $testimonial['company']],
                $testimonial
            );
        }

        // Add company information
        $companyInfo = [
            ['key' => 'company_name', 'value' => 'DuxOne'],
            ['key' => 'company_email', 'value' => 'info@duxone.com'],
            ['key' => 'company_phone', 'value' => '+1 (555) 123-4567'],
            ['key' => 'company_address', 'value' => '123 Business St, City, Country'],
            ['key' => 'about_us', 'value' => 'We are a team of passionate developers and designers creating amazing digital experiences.'],
            ['key' => 'mission', 'value' => 'To deliver high-quality software solutions that help businesses grow.'],
        ];

        foreach ($companyInfo as $info) {
            CompanyInfo::firstOrCreate(
                ['key' => $info['key']],
                $info
            );
        }
    }
}
