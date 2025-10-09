<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\ProjectCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ProjectSeeder extends Seeder
{
    protected function getImageUrl($project, $type = 'main')
    {
        $basePath = 'http://localhost:8000/storage/optimized';
        $webpPath = "{$basePath}/{$project}/{$type}.webp";
        $jpgPath = "{$basePath}/{$project}/{$type}.jpg";
        
        // Check if WebP version exists, otherwise fall back to JPG
        return file_exists(public_path("storage/optimized/{$project}/{$type}.webp")) 
            ? $webpPath 
            : $jpgPath;
    }

    public function run(): void
    {
        $webDevCategory = ProjectCategory::where('slug', 'web-development')->first();
        $mobileDevCategory = ProjectCategory::where('slug', 'mobile-development')->first();
        $uiUxCategory = ProjectCategory::where('slug', 'uiux-design')->first();

        $projects = [
            // Web Development Projects
            [
                'category_id' => $webDevCategory->id,
                'title' => 'E-commerce Platform',
                'slug' => 'ecommerce-platform',
                'description' => 'A full-featured e-commerce platform with inventory management and payment processing.',
                'client' => 'Fashion Retailer Inc.',
                'status' => 'completed',
                'is_featured' => true,
                'technologies' => ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Stripe'],
                'features' => [
                    'Product catalog with categories and filters',
                    'Shopping cart and checkout process',
                    'User authentication and profiles',
                    'Order management system',
                    'Payment processing with Stripe',
                    'Inventory management',
                    'Responsive design for all devices'
                ],
                'image' => $this->getImageUrl('ecommerce'),
                'images' => [
                    $this->getImageUrl('ecommerce', 'screen1'),
                    $this->getImageUrl('ecommerce', 'screen2')
                ]
            ],
            [
                'category_id' => $webDevCategory->id,
                'title' => 'Corporate Website',
                'slug' => 'corporate-website',
                'description' => 'A modern corporate website with blog and contact management system.',
                'client' => 'Tech Solutions Ltd.',
                'status' => 'completed',
                'is_featured' => true,
                'technologies' => ['WordPress', 'PHP', 'JavaScript', 'Sass'],
                'features' => [
                    'Custom WordPress theme development',
                    'Responsive design for all devices',
                    'Blog with categories and tags',
                    'Contact form with spam protection',
                    'SEO optimized structure',
                    'Fast loading performance',
                    'Content management system'
                ],
                'image' => $this->getImageUrl('corporate'),
                'images' => [
                    $this->getImageUrl('corporate', 'screen1'),
                    $this->getImageUrl('corporate', 'screen2')
                ]
            ],
            [
                'category_id' => $webDevCategory->id,
                'title' => 'Online Learning Platform',
                'slug' => 'online-learning-platform',
                'description' => 'An interactive e-learning platform with course management and student progress tracking.',
                'client' => 'EduTech Solutions',
                'status' => 'completed',
                'is_featured' => true,
                'technologies' => ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'AWS S3'],
                'features' => [
                    'Course creation and management',
                    'Student progress tracking',
                    'Video streaming and content delivery',
                    'Quizzes and assessments',
                    'Discussion forums',
                    'Instructor dashboards',
                    'Certificate generation'
                ],
                'image' => $this->getImageUrl('learning-platform'),
                'images' => [
                    $this->getImageUrl('learning-platform', 'screen1'),
                    $this->getImageUrl('learning-platform', 'screen2')
                ]
            ],
            [
                'category_id' => $webDevCategory->id,
                'title' => 'Real Estate Portal',
                'slug' => 'real-estate-portal',
                'description' => 'A comprehensive real estate listing platform with advanced search and property management.',
                'client' => 'Prime Properties',
                'status' => 'completed',
                'is_featured' => false,
                'technologies' => ['Node.js', 'Express', 'MongoDB', 'React', 'Mapbox'],
                'features' => [
                    'Advanced property search with filters',
                    'Interactive map view with property markers',
                    'Property comparison tool',
                    'Saved searches and favorites',
                    'Agent profiles and contact forms',
                    'Mortgage calculator',
                    'Virtual tours and 360° images'
                ],
                'image' => $this->getImageUrl('real-estate'),
                'images' => [
                    $this->getImageUrl('real-estate', 'screen1'),
                    $this->getImageUrl('real-estate', 'screen2')
                ]
            ],
            
            // Mobile Development Projects
            [
                'category_id' => $mobileDevCategory->id,
                'title' => 'Fitness Mobile App',
                'slug' => 'fitness-mobile-app',
                'description' => 'A fitness tracking application with workout plans and progress tracking.',
                'client' => 'FitLife',
                'status' => 'completed',
                'is_featured' => true,
                'technologies' => ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
                'features' => [
                    'Workout plans and exercise library',
                    'Progress tracking and statistics',
                    'Nutrition and meal planning',
                    'Wearable device integration',
                    'Social features and challenges',
                    'Video demonstrations',
                    'Custom workout creation'
                ],
                'image' => $this->getImageUrl('fitness-app'),
                'images' => [
                    $this->getImageUrl('fitness-app', 'screen1'),
                    $this->getImageUrl('fitness-app', 'screen2')
                ]
            ],
            [
                'category_id' => $mobileDevCategory->id,
                'title' => 'Food Delivery App',
                'slug' => 'food-delivery-app',
                'description' => 'A food delivery application connecting restaurants with customers.',
                'client' => 'Foodie Express',
                'status' => 'completed',
                'is_featured' => true,
                'technologies' => ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
                'features' => [
                    'Restaurant and menu browsing',
                    'Real-time order tracking',
                    'Multiple payment options',
                    'Delivery address management',
                    'Order history and reordering',
                    'Ratings and reviews',
                    'Push notifications'
                ],
                'image' => $this->getImageUrl('food-delivery'),
                'images' => [
                    $this->getImageUrl('food-delivery', 'screen1'),
                    $this->getImageUrl('food-delivery', 'screen2')
                ]
            ],
            
            // UI/UX Design Projects
            [
                'category_id' => $uiUxCategory->id,
                'title' => 'Banking App Redesign',
                'slug' => 'banking-app-redesign',
                'description' => 'Complete UI/UX redesign of a mobile banking application for better user experience.',
                'client' => 'TrustBank',
                'status' => 'completed',
                'is_featured' => true,
                'technologies' => ['Figma', 'Adobe XD', 'Sketch', 'After Effects'],
                'features' => [
                    'User research and personas',
                    'Wireframing and prototyping',
                    'UI/UX design system',
                    'Interactive prototypes',
                    'User testing and feedback',
                    'Design handoff documentation',
                    'Motion design and micro-interactions'
                ],
                'image' => $this->getImageUrl('banking-app'),
                'images' => [
                    $this->getImageUrl('banking-app', 'screen1'),
                    $this->getImageUrl('banking-app', 'screen2')
                ]
            ],
            // ERP Systems Project
            [
                'category_id' => ProjectCategory::where('slug', 'erp-systems')->first()->id,
                'title' => 'Enterprise Resource Planning System',
                'slug' => 'enterprise-resource-planning',
                'description' => 'A comprehensive ERP solution integrating all business processes including accounting, HR, inventory, and CRM.',
                'client' => 'Global Enterprises Inc.',
                'status' => 'completed',
                'is_featured' => true,
                'technologies' => ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
                'features' => [
                    'Accounting and financial management',
                    'Human resources and payroll',
                    'Inventory and supply chain',
                    'Customer relationship management',
                    'Business intelligence and reporting',
                    'Role-based access control',
                    'API integrations with third-party services'
                ],
                'image' => $this->getImageUrl('erp-system'),
                'images' => [
                    $this->getImageUrl('erp-system', 'screen1'),
                    $this->getImageUrl('erp-system', 'screen2'),
                    $this->getImageUrl('erp-system', 'screen3')
                ]
            ],
            [
                'category_id' => $uiUxCategory->id,
                'title' => 'E-commerce Dashboard',
                'slug' => 'ecommerce-dashboard',
                'description' => 'Admin dashboard design for e-commerce store management.',
                'client' => 'ShopEase',
                'status' => 'completed',
                'is_featured' => false,
                'technologies' => ['Figma', 'Adobe XD', 'Sketch'],
                'features' => [
                    'Sales and revenue analytics',
                    'Product and inventory management',
                    'Order processing workflow',
                    'Customer data and insights',
                    'Marketing campaign management',
                    'Responsive dashboard design',
                    'Interactive data visualizations'
                ],
                'image' => $this->getImageUrl('ecommerce-dashboard'),
                'images' => [
                    $this->getImageUrl('ecommerce-dashboard', 'screen1'),
                    $this->getImageUrl('ecommerce-dashboard', 'screen2')
                ]
            ],
        ];

        foreach ($projects as $project) {
            $project['technologies'] = json_encode($project['technologies']);
            $project['features'] = json_encode($project['features'] ?? []);
            $project['images'] = json_encode($project['images']);
            Project::updateOrCreate(
                ['slug' => $project['slug']],
                $project
            );
        }
    }
}
