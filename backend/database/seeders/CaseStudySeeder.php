<?php

namespace Database\Seeders;

use App\Models\CaseStudy;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CaseStudySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Truncate the table to avoid duplicate entries
        \DB::table('case_studies')->truncate();
        
        $caseStudies = [
            [
                'title' => 'Enterprise Resource Planning System',
                'slug' => 'enterprise-resource-planning',
                'description' => 'A comprehensive ERP solution integrating all business processes including accounting, HR, inventory, and CRM.',
                'content' => '## Project Overview
A full-featured ERP system that transformed business operations by centralizing data, automating workflows, and providing actionable insights through comprehensive reporting and analytics dashboards.

## Key Features
- Accounting and financial management
- Human resources and payroll
- Inventory and supply chain
- Customer relationship management
- Business intelligence and reporting
- Role-based access control
- API integrations with third-party services

## Results
- 60% reduction in manual data entry
- 45% faster month-end close
- 80% improvement in data accuracy
- 70% faster decision making

## Technical Implementation
Built with Laravel and Vue.js, this ERP system leverages MySQL for data storage, Redis for caching, and Docker for containerization to ensure scalability and reliability.',
                'client' => 'Global Enterprises Inc.',
                'industry' => 'Enterprise Technology',
                'challenge' => 'The client faced challenges with disconnected business processes, data silos, and lack of real-time visibility across their accounting, HR, inventory, and customer relationship management systems.',
                'solution' => 'Developed a comprehensive ERP solution that seamlessly integrates all business processes into a unified platform, providing real-time data analytics, automated workflows, and role-based access control for different departments.',
                'results' => '{"key_achievements": ["60% reduction in manual data entry", "45% faster month-end close", "80% improvement in data accuracy", "70% faster decision making"], "testimonial": "The ERP system has revolutionized our business operations, providing real-time visibility and streamlining our processes across all departments."}',
                'technologies' => '["Laravel", "Vue.js", "MySQL", "Redis", "Docker"]',
                'timeline' => '8 months',
                'image' => 'http://localhost:8000/storage/optimized/erp-system/main.webp',
                'project_id' => 9,
                'is_featured' => true,
                'published_at' => now()
            ],
            [
                'title' => 'Online Learning Platform',
                'slug' => 'online-learning-platform',
                'description' => 'An interactive e-learning platform with course management and student progress tracking.',
                'content' => '## Project Overview
A modern learning management system that enables educational institutions to create, manage, and deliver engaging online courses with robust tracking and assessment capabilities.

## Key Features
- Course creation and management
- Student progress tracking
- Video streaming and content delivery
- Quizzes and assessments
- Discussion forums
- Instructor dashboards
- Certificate generation

## Results
- 55% increase in course completion rates
- 40% reduction in administrative workload
- 85% student satisfaction rate
- 60% faster course creation process

## Technical Implementation
Built with Laravel and React, this platform uses MySQL for data storage, Tailwind CSS for responsive design, and AWS S3 for scalable content delivery.',
                'client' => 'EduTech Solutions',
                'industry' => 'Education',
                'challenge' => 'Need for a scalable, interactive learning management system that could deliver diverse educational content and track student progress effectively.',
                'solution' => 'Built a robust e-learning platform featuring course management, video streaming, interactive assessments, discussion forums, and automated certificate generation, all wrapped in an intuitive user interface.',
                'results' => '{"key_achievements": ["55% increase in course completion rates", "40% reduction in administrative workload", "85% student satisfaction rate", "60% faster course creation process"], "testimonial": "The platform has transformed how we deliver education, making learning more engaging and accessible to students worldwide."}',
                'technologies' => '["Laravel", "React", "MySQL", "Tailwind CSS", "AWS S3"]',
                'timeline' => '6 months',
                'image' => 'http://localhost:8000/storage/optimized/learning-platform/main.webp',
                'project_id' => 4,
                'is_featured' => true,
                'published_at' => now()->subMonths(2)
            ],
            [
                'title' => 'Real Estate Portal',
                'slug' => 'real-estate-portal',
                'description' => 'A comprehensive real estate listing platform with advanced search and property management.',
                'content' => '## Project Overview
A full-featured real estate platform that connects buyers, sellers, and agents with powerful search tools, detailed property listings, and seamless communication channels.

## Key Features
- Advanced property search with filters
- Interactive map view with property markers
- Property comparison tool
- Saved searches and favorites
- Agent profiles and contact forms
- Mortgage calculator
- Virtual tours and 360° images

## Results
- 50% increase in lead generation
- 65% faster property search
- 45% more property inquiries
- 75% mobile user engagement

## Technical Implementation
Built with Node.js, Express, and MongoDB for the backend, React for the frontend, and integrated Mapbox for interactive maps and location services.',
                'client' => 'Prime Properties',
                'industry' => 'Real Estate',
                'challenge' => 'The client needed a modern, feature-rich platform to showcase properties with advanced search capabilities and interactive tools for potential buyers and renters.',
                'solution' => 'Developed a comprehensive real estate portal with an interactive map view, advanced property search filters, virtual tours, and a mortgage calculator to enhance user experience and engagement.',
                'results' => '{"key_achievements": ["50% increase in lead generation", "65% faster property search experience", "45% more property inquiries", "75% mobile user engagement"], "testimonial": "The new portal has transformed how we showcase properties and connect with potential buyers, significantly increasing our lead generation and sales."}',
                'technologies' => '["Node.js", "Express", "MongoDB", "React", "Mapbox"]',
                'timeline' => '5 months',
                'image' => 'http://localhost:8000/storage/optimized/real-estate/main.webp',
                'project_id' => 5,
                'is_featured' => false,
                'published_at' => now()->subMonths(4)
            ],
            [
                'title' => 'Food Delivery App',
                'slug' => 'food-delivery-app',
                'description' => 'A food delivery application connecting restaurants with customers.',
                'content' => '## Project Overview
A comprehensive food delivery solution that connects hungry customers with their favorite restaurants, featuring real-time order tracking, secure payments, and personalized recommendations.

## Key Features
- Restaurant and menu browsing
- Real-time order tracking
- Multiple payment options
- Delivery address management
- Order history and reordering
- Ratings and reviews
- Push notifications

## Results
- 60% faster order processing
- 45% increase in repeat orders
- 80% customer satisfaction rate
- 4.7/5 app store rating

## Technical Implementation
Built with Flutter for cross-platform mobile development, Node.js for the backend, MongoDB for data storage, and Firebase for real-time updates and notifications.',
                'client' => 'Foodie Express',
                'industry' => 'Food & Beverage',
                'challenge' => 'Creating a seamless food ordering experience with real-time order tracking and efficient delivery management for both customers and restaurant partners.',
                'solution' => 'Developed a cross-platform mobile application with real-time order tracking, multiple payment options, and a robust backend for restaurant management and delivery coordination.',
                'results' => '{"key_achievements": ["60% faster order processing", "45% increase in repeat orders", "80% customer satisfaction rate", "4.7/5 app store rating"], "testimonial": "The app has revolutionized our food delivery operations, providing a seamless experience for both customers and restaurant partners while significantly increasing our order volume."}',
                'technologies' => '["Flutter", "Node.js", "MongoDB", "Firebase"]',
                'timeline' => '4 months',
                'image' => 'http://localhost:8000/storage/optimized/food-delivery/main.webp',
                'project_id' => 6,
                'is_featured' => true,
                'published_at' => now()->subMonths(3)
            ],
            [
                'title' => 'E-commerce Platform',
                'slug' => 'ecommerce-platform',
                'description' => 'A full-featured e-commerce platform with inventory management and payment processing.',
                'content' => '## Project Overview
A robust e-commerce solution that handles everything from product management to order fulfillment, designed to scale with business growth and provide a seamless shopping experience across all devices.

## Key Features
- Product catalog with categories and filters
- Shopping cart and checkout process
- User authentication and profiles
- Order management system
- Payment processing with Stripe
- Inventory management
- Responsive design for all devices

## Results
- 40% increase in conversion rates
- 50% faster page load times
- 70% reduction in cart abandonment
- 85% mobile conversion rate

## Technical Implementation
Built with Laravel and Vue.js, this e-commerce platform uses MySQL for data storage, Tailwind CSS for responsive design, and integrates with Stripe for secure payment processing.',
                'client' => 'Fashion Retailer Inc.',
                'industry' => 'Retail & E-commerce',
                'challenge' => 'The client needed a high-performance e-commerce solution to manage a large product catalog, process secure payments, and provide an exceptional shopping experience across devices.',
                'solution' => 'Developed a full-featured e-commerce platform with a responsive design, secure checkout process, inventory management, and integration with payment gateways and shipping providers.',
                'results' => '{"key_achievements": ["40% increase in conversion rates", "50% faster page load times", "70% reduction in cart abandonment", "85% mobile conversion rate"], "testimonial": "The new e-commerce platform has transformed our online business, providing a seamless shopping experience that has significantly increased our sales and customer satisfaction."}',
                'technologies' => '["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "Stripe"]',
                'timeline' => '5 months',
                'image' => 'http://localhost:8000/storage/optimized/ecommerce/main.webp',
                'project_id' => 1,
                'is_featured' => true,
                'published_at' => now()->subMonths(6)
            ],
            [
                'title' => 'Corporate Website',
                'slug' => 'corporate-website',
                'description' => 'A modern, responsive corporate website with custom WordPress theme and blog functionality.',
                'content' => '## Project Overview
A professional business website built with WordPress, featuring a custom theme, blog functionality, and lead generation tools to support business growth and establish online presence.

## Key Features
- Custom WordPress theme development
- Responsive design for all devices
- Blog with categories and tags
- Contact forms and lead generation
- SEO optimization
- Performance optimization
- Content management system

## Results
- 65% increase in website traffic
- 40% more contact form submissions
- 90% mobile responsiveness score
- 3.2s average page load time

## Technical Implementation
Built with WordPress as the CMS, featuring a custom theme developed with PHP, JavaScript, and Sass for styling. The site includes custom post types, advanced custom fields, and is optimized for performance and search engines.',
                'client' => 'Tech Solutions Ltd.',
                'industry' => 'Technology',
                'challenge' => 'Creating a professional online presence that effectively communicates the company services, values, and expertise to potential clients and partners.',
                'solution' => 'Designed and developed a modern, responsive corporate website with a custom WordPress theme, blog functionality, and lead generation features to establish thought leadership and generate business inquiries.',
                'results' => '{"key_achievements": ["65% increase in website traffic", "40% more contact form submissions", "90% mobile responsiveness score", "3.2s average page load time"], "testimonial": "The new corporate website has significantly enhanced our online presence and helped us attract more qualified leads while effectively communicating our brand values and services."}',
                'technologies' => '["WordPress", "PHP", "JavaScript", "Sass"]',
                'timeline' => '3 months',
                'image' => 'http://localhost:8000/storage/optimized/corporate/main.webp',
                'project_id' => 2,
                'is_featured' => false,
                'published_at' => now()->subMonths(8)
            ],
            [
                'title' => 'Fitness Mobile App',
                'slug' => 'fitness-mobile-app',
                'description' => 'A feature-rich mobile application that serves as a personal fitness coach, providing customized workout plans, meal tracking, and progress monitoring to help users achieve their health and fitness goals.',
                'content' => '## Project Overview
A comprehensive fitness solution that combines workout planning, nutrition tracking, and progress monitoring in one intuitive mobile application designed to help users achieve their health and fitness goals.

## Key Features
- Personalized workout plans
- Nutrition and meal tracking
- Progress analytics and insights
- Social features and challenges
- Integration with wearables
- Video exercise library
- Progress photo journal

## Results
- 50% user retention rate
- 4.8/5 app store rating
- 65% of users achieved their fitness goals
- 40% increase in premium feature adoption

## Technical Implementation
Built with React Native for cross-platform compatibility, Node.js for the backend, MongoDB for data storage, and Firebase for real-time updates and authentication.',
                'client' => 'FitLife',
                'industry' => 'Health & Fitness',
                'challenge' => 'Creating an engaging fitness app that keeps users motivated and helps them achieve their health goals through personalized plans and community support.',
                'solution' => 'Developed a cross-platform mobile app with personalized workout plans, nutrition tracking, progress analytics, and social features to keep users engaged and motivated on their fitness journey.',
                'results' => '{"key_achievements": ["50% user retention rate", "4.8/5 app store rating", "65% of users achieved their fitness goals", "40% increase in premium feature adoption"], "testimonial": "The fitness app has become an essential part of our members\' wellness journey, with engagement metrics exceeding our expectations."}',
                'technologies' => '["React Native", "Node.js", "MongoDB", "Firebase"]',
                'timeline' => '6 months',
                'image' => 'http://localhost:8000/storage/optimized/fitness-app/main.webp',
                'project_id' => 3,
                'is_featured' => true,
            ],
            [
                'title' => 'E-commerce Dashboard',
                'slug' => 'ecommerce-dashboard',
                'description' => 'An intuitive and feature-rich admin dashboard that gives e-commerce businesses complete control over their online store, from product management to sales analytics and customer relationship management.',
                'content' => '## Project Overview
A comprehensive e-commerce dashboard designed to give store owners powerful tools to manage products, track sales, and analyze business performance through an intuitive admin interface.

## Key Features
- Real-time sales analytics
- Inventory management
- Order processing system
- Customer relationship management
- Marketing campaign tracking
- Sales reporting
- User role management

## Results
- 75% faster inventory management
- 60% reduction in order processing time
- 85% user satisfaction rate
- 50% more data-driven decisions

## Technical Implementation
Built with modern web technologies to provide a responsive and intuitive interface for e-commerce store management.',
                'client' => 'Retail Pro',
                'industry' => 'E-commerce',
                'challenge' => 'Providing store owners with powerful tools to manage products, track sales, and analyze business performance through an intuitive admin interface.',
                'solution' => 'Designed and developed a comprehensive e-commerce dashboard with real-time analytics, inventory management, order processing, and customer insights to help businesses make data-driven decisions.',
                'results' => '{"key_achievements": ["75% faster inventory management", "60% reduction in order processing time", "85% user satisfaction rate", "50% more data-driven decisions"], "testimonial": "The e-commerce dashboard has transformed how we manage our online store, giving us the insights we need to make better business decisions."}',
                'technologies' => '["React", "Node.js", "MongoDB", "Redux"]',
                'timeline' => '3 months',
                'image' => 'http://localhost:8000/storage/optimized/ecommerce-dashboard/main.webp',
                'project_id' => 7,
                'is_featured' => false,
            ]
        ];

        foreach ($caseStudies as $caseStudy) {
            CaseStudy::create($caseStudy);
        }
    }
}
