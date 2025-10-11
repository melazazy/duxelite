<?php

namespace Database\Seeders;

use App\Models\CaseStudy;
use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AdditionalCaseStudiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Find or create projects
        $bankingProject = Project::firstOrCreate(
            ['slug' => 'banking-app-redesign'],
            [
                'title' => 'Banking App Redesign',
                'description' => 'A modern and secure mobile banking application with advanced features for personal finance management.',
                'client' => 'National Trust Bank',
                'status' => 'completed',
                'technologies' => json_encode(['React Native', 'Node.js', 'MongoDB', 'AWS', 'Firebase']),
                'features' => json_encode(['Mobile Banking', 'Bill Payments', 'Budgeting Tools', 'Biometric Auth']),
                'year' => 2024,
                'is_featured' => true,
                'image' => 'http://localhost:8000/storage/optimized/banking-app/main.webp',
                'images' => json_encode(['http://localhost:8000/storage/optimized/banking-app/screen1.webp', 'http://localhost:8000/storage/optimized/banking-app/screen2.webp']),
                'url' => 'https://banking.duxelite.net',
                'github_url' => null
            ]
        );

        $fitnessProject = Project::firstOrCreate(
            ['slug' => 'fitness-mobile-app'],
            [
                'title' => 'Fitness Mobile App',
                'description' => 'A comprehensive fitness tracking and workout planning application with AI-powered recommendations.',
                'client' => 'FitLife Inc.',
                'status' => 'completed',
                'technologies' => json_encode(['Flutter', 'Node.js', 'PostgreSQL', 'Firebase', 'TensorFlow']),
                'features' => json_encode(['Workout Plans', 'Nutrition Tracking', 'Progress Analytics', 'AI Coach']),
                'year' => 2024,
                'is_featured' => true,
                'image' => 'http://localhost:8000/storage/optimized/fitness-app/main.webp',
                'images' => json_encode(['http://localhost:8000/storage/optimized/fitness-app/screen1.webp', 'http://localhost:8000/storage/optimized/fitness-app/screen2.webp']),
                'url' => 'https://fitness.duxelite.net',
                'github_url' => null
            ]
        );

        $ecommerceProject = Project::firstOrCreate(
            ['slug' => 'ecommerce-dashboard'],
            [
                'title' => 'E-commerce Analytics Dashboard',
                'description' => 'A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization and insights.',
                'client' => 'ShopMasters Inc.',
                'status' => 'completed',
                'technologies' => json_encode(['React', 'Node.js', 'MongoDB', 'D3.js', 'AWS']),
                'features' => json_encode(['Sales Analytics', 'Customer Insights', 'Inventory Management', 'Real-time Reporting']),
                'year' => 2024,
                'is_featured' => true,
                'image' => 'http://localhost:8000/storage/optimized/ecommerce/main.webp',
                'images' => json_encode(['http://localhost:8000/storage/optimized/ecommerce/screen1.webp', 'http://localhost:8000/storage/optimized/ecommerce/screen2.webp']),
                'url' => 'https://dashboard.duxelite.net',
                'github_url' => 'https://github.com/yourusername/ecommerce-dashboard'
            ]
        );

        // Banking App Case Study
        CaseStudy::firstOrCreate(
            ['slug' => 'banking-app-redesign'],
            [
                'title' => 'Banking App Redesign',
                'slug' => 'banking-app-redesign',
                'description' => 'A complete redesign of a mobile banking application to enhance user experience and security.',
                'content' => '## Project Overview
A comprehensive redesign of National Trust Bank\'s mobile banking application, focusing on improving user experience, security, and adding innovative financial management features.

## Key Features
- Complete UI/UX redesign with a modern, intuitive interface
- Enhanced security with biometric authentication and real-time fraud detection
- Personal finance management tools and spending insights
- Seamless bill payments and money transfers
- 24/7 customer support with AI chatbot

## Results
- 45% increase in daily active users
- 60% reduction in support tickets
- 4.8/5 app store rating (from 3.9)
- 90% of users completed onboarding in under 2 minutes

## Technical Implementation
Built with React Native for cross-platform compatibility, Node.js for the backend, and MongoDB for flexible data storage. Integrated with AWS for scalable infrastructure and Firebase for real-time updates and notifications.',
                'project_id' => $bankingProject->id,
                'client' => 'National Trust Bank',
                'industry' => 'Banking & Finance',
                'challenge' => 'The existing banking app had outdated UI/UX, performance issues, and lacked modern security features, leading to low user engagement and high support costs. The app was struggling with slow load times, security vulnerabilities, and a high abandonment rate during the onboarding process.',
                'solution' => 'Redesigned the entire application with a focus on user experience, performance, and security. Implemented modern design principles, biometric authentication, and real-time fraud detection. The new architecture improved app performance by 70% and enhanced security with end-to-end encryption.',
                'results' => '{"key_achievements": ["45% increase in daily active users", "60% reduction in support tickets", "4.8/5 app store rating (from 3.2)", "90% onboarding completion rate (from 45%)", "70% improvement in app performance"], "testimonial": "The redesigned app has transformed our digital banking experience. Our customers love the new interface, and we\'ve seen a significant reduction in support costs. The security enhancements have also given our customers greater peace of mind."}',
                'technologies' => '["React Native", "Node.js", "MongoDB", "AWS", "Firebase"]',
                'timeline' => '5 months',
                'image' => 'http://localhost:8000/storage/optimized/banking-app/main.webp',
                'is_featured' => true,
                'published_at' => now()
            ]
        );
        // Fitness App Case Study
        CaseStudy::firstOrCreate(
            ['slug' => 'fitness-mobile-app'],
            [
                'title' => 'Fitness Mobile App Development',
                'slug' => 'fitness-mobile-app',
                'description' => 'A feature-rich fitness application with personalized workout plans and nutrition tracking.',
                'content' => '## Project Overview
Development of a comprehensive fitness application that provides personalized workout plans, nutrition tracking, and progress analytics powered by AI.

## Key Features
- AI-powered personalized workout recommendations
- Nutrition tracking with barcode scanner
- Progress tracking with photo and measurement logging
- Integration with wearables and health apps
- Community challenges and social sharing
- Video exercise library with proper form guidance
- Meal planning and recipe suggestions

## Results
- 500,000+ downloads in first 3 months
- 4.9/5 average rating across app stores
- Users reported average of 30% better fitness results
- 85% user retention after 3 months

## Technical Implementation
Built with Flutter for cross-platform compatibility, Node.js for the backend, and PostgreSQL for data storage. Utilizes TensorFlow for AI-powered recommendations and Firebase for real-time updates and notifications.',
                'project_id' => $fitnessProject->id,
                'client' => 'FitLife Inc.',
                'industry' => 'Health & Fitness',
                'challenge' => 'Users were struggling to stay motivated and track their fitness progress effectively. Existing apps lacked personalization and failed to provide actionable insights. The client needed a solution that could adapt to individual fitness levels and goals while keeping users engaged long-term.',
                'solution' => 'Developed an AI-powered fitness app that provides personalized workout and nutrition plans based on user goals, fitness level, and preferences. Implemented computer vision for exercise form analysis and integrated with popular wearables. The app uses machine learning to adapt recommendations based on user progress and feedback.',
                'results' => json_encode([
                    'key_achievements' => [
                        '500,000+ downloads in first 3 months',
                        '4.9/5 average rating across app stores',
                        '30% better fitness results reported by users',
                        '85% user retention after 3 months',
                        '1.2M+ workouts completed in the first 6 months'
                    ],
                    'testimonial' => 'The app has exceeded our expectations. Users are achieving better results and staying engaged much longer than with other fitness apps. The AI-powered recommendations have been particularly effective in keeping users motivated.'
                ]),
                'technologies' => json_encode(['Flutter', 'Node.js', 'PostgreSQL', 'TensorFlow', 'Firebase']),
                'timeline' => '6 months',
                'image' => 'http://localhost:8000/storage/optimized/fitness-app/main.webp',
                'is_featured' => true,
                'published_at' => now()
            ]
        );

        // E-commerce Dashboard Case Study
        CaseStudy::firstOrCreate(
            ['slug' => 'ecommerce-dashboard'],
            [
                'title' => 'E-commerce Analytics Dashboard',
                'slug' => 'ecommerce-dashboard',
                'description' => 'A powerful analytics platform providing e-commerce businesses with real-time insights and data-driven decision making tools.',
                'content' => '## Project Overview
Development of a comprehensive e-commerce analytics dashboard that provides real-time insights into sales performance, customer behavior, and inventory management for online retailers.

## Key Features
- Real-time sales analytics and revenue tracking
- Customer segmentation and behavior analysis
- Inventory management and stock level monitoring
- Marketing campaign performance tracking
- Custom report generation and scheduling
- Multi-store and multi-channel integration
- Mobile-responsive dashboard for on-the-go access

## Results
- 35% increase in average order value for clients
- 50% reduction in time spent on manual reporting
- 25% improvement in inventory turnover
- 4.7/5 user satisfaction rating

## Technical Implementation
Built with React for the frontend with D3.js for data visualization, Node.js for the backend, and MongoDB for flexible data storage. Utilizes WebSockets for real-time updates and integrates with multiple e-commerce platforms through their respective APIs.',
                'project_id' => $ecommerceProject->id,
                'client' => 'ShopMasters Inc.',
                'industry' => 'E-commerce & Retail',
                'challenge' => 'E-commerce businesses were struggling with data silos across multiple platforms (Shopify, WooCommerce, Amazon, etc.), making it difficult to get a unified view of their business. Manual reporting was time-consuming, and decisions were often based on outdated information. The lack of real-time insights led to stockouts, overstocking, and missed sales opportunities.',
                'solution' => 'Developed a centralized analytics dashboard that aggregates data from multiple e-commerce platforms, payment gateways, and marketing channels. Implemented real-time data processing and interactive visualizations to provide actionable insights. The solution includes automated reporting, inventory forecasting, and AI-powered recommendations for pricing and promotions.',
                'results' => json_encode([
                    'key_achievements' => [
                        '35% increase in average order value',
                        '50% reduction in time spent on reporting',
                        '25% improvement in inventory turnover',
                        '4.7/5 user satisfaction rating',
                        '30% increase in marketing ROI'
                    ],
                    'testimonial' => 'The e-commerce dashboard has been a game-changer for our business. We now have real-time visibility into all aspects of our operations and can make data-driven decisions that directly impact our bottom line. The inventory forecasting alone has saved us thousands in carrying costs.'
                ]),
                'technologies' => json_encode(['React', 'Node.js', 'MongoDB', 'D3.js', 'AWS']),
                'timeline' => '4 months',
                'image' => 'http://localhost:8000/storage/optimized/ecommerce/main.webp',
                'is_featured' => true,
                'published_at' => now()
            ]
        );
    }
}
