<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
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
                ],
                'is_active' => true,
                'is_featured' => true,
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
                ],
                'is_active' => true,
                'is_featured' => true,
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
                ],
                'is_active' => true,
                'is_featured' => true,
            ],
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
                ],
                'is_active' => true,
                'is_featured' => true,
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
                ],
                'is_active' => true,
                'is_featured' => true,
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
                ],
                'is_active' => true,
                'is_featured' => true,
            ],
            // New ERP Services
            [
                'title' => 'ERP System Implementation',
                'slug' => 'erp-system-implementation',
                'description' => 'End-to-end ERP system implementation to streamline your business processes.',
                'features' => [
                    'Business Process Analysis',
                    'System Customization',
                    'Data Migration',
                    'User Training',
                    'Ongoing Support'
                ],
                'is_active' => true,
                'is_featured' => true,
            ],
            [
                'title' => 'Inventory Management',
                'slug' => 'inventory-management',
                'description' => 'Comprehensive inventory tracking and management solutions.',
                'features' => [
                    'Real-time Stock Tracking',
                    'Automated Reordering',
                    'Barcode Scanning',
                    'Multi-location Support',
                    'Reporting & Analytics'
                ],
                'is_active' => true,
                'is_featured' => true,
            ],
            // New CRM Services
            [
                'title' => 'CRM Solution',
                'slug' => 'crm-solution',
                'description' => 'Customer relationship management to grow your business relationships.',
                'features' => [
                    'Contact Management',
                    'Sales Pipeline Tracking',
                    'Customer Support',
                    'Marketing Automation',
                    'Analytics Dashboard'
                ],
                'is_active' => true,
                'is_featured' => true,
            ],
            // New HRM Services
            [
                'title' => 'HR Management System',
                'slug' => 'hr-management-system',
                'description' => 'Complete HR solutions for managing your workforce efficiently.',
                'features' => [
                    'Employee Database',
                    'Leave Management',
                    'Performance Tracking',
                    'Payroll Integration',
                    'Recruitment Tools'
                ],
                'is_active' => true,
                'is_featured' => true,
            ],
            // Additional Services
            [
                'title' => 'Business Intelligence',
                'slug' => 'business-intelligence',
                'description' => 'Data-driven insights to make informed business decisions.',
                'features' => [
                    'Custom Dashboards',
                    'KPI Tracking',
                    'Data Visualization',
                    'Predictive Analytics',
                    'Report Generation'
                ],
                'is_active' => true,
                'is_featured' => false,
            ],
            [
                'title' => 'Cloud Migration',
                'slug' => 'cloud-migration',
                'description' => 'Seamless migration of your business applications to the cloud.',
                'features' => [
                    'Cloud Strategy',
                    'Data Migration',
                    'Application Modernization',
                    'Security & Compliance',
                    'Cost Optimization'
                ],
                'is_active' => true,
                'is_featured' => false,
            ],
            [
                'title' => 'IT Consulting',
                'slug' => 'it-consulting',
                'description' => 'Expert technology consulting to align IT with your business goals.',
                'features' => [
                    'IT Strategy',
                    'Technology Assessment',
                    'Digital Transformation',
                    'Vendor Selection',
                    'Project Management'
                ],
                'is_active' => true,
                'is_featured' => false,
            ]

        ];

        foreach ($services as $service) {
            Service::updateOrCreate(
                ['slug' => $service['slug']],
                [
                    'title' => $service['title'],
                    'description' => $service['description'],
                    'features' => $service['features'],
                    'is_active' => $service['is_active'],
                    'is_featured' => $service['is_featured'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}
