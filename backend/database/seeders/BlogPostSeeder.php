<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\BlogTag;
use App\Models\BlogCategory;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BlogPostSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('email', 'admin@example.com')->first();
        if (!$admin) {
            $admin = User::factory()->create([
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => bcrypt('password'),
            ]);
        }

        // Get or create categories
        $erpCategory = BlogCategory::firstOrCreate(
            ['slug' => 'erp-solutions'],
            ['name' => 'ERP Solutions']
        );

        $healthcareCategory = BlogCategory::firstOrCreate(
            ['slug' => 'healthcare-it'],
            ['name' => 'Healthcare IT']
        );

        $retailCategory = BlogCategory::firstOrCreate(
            ['slug' => 'retail-technology'],
            ['name' => 'Retail Technology']
        );

        $manufacturingCategory = BlogCategory::firstOrCreate(
            ['slug' => 'manufacturing'],
            ['name' => 'Manufacturing']
        );

        $fintechCategory = BlogCategory::firstOrCreate(
            ['slug' => 'fintech'],
            ['name' => 'FinTech']
        );

        $posts = [
            [
                'category_id' => $erpCategory->id,
                'title' => 'Transforming E-commerce with Modern ERP Solutions',
                'slug' => 'transforming-ecommerce-with-modern-erp',
                'excerpt' => 'How our custom ERP solution revolutionized inventory management and order processing for retail businesses.',
                'content' => '<h2>The E-commerce Challenge</h2>
<p>In today\'s fast-paced digital marketplace, e-commerce businesses face numerous challenges in managing their operations efficiently. From inventory management to order processing and customer relationship management, the complexity can be overwhelming.</p>

<h2>Our Solution</h2>
<p>We developed a custom ERP solution that integrates all aspects of e-commerce operations into a single, unified platform. Our solution includes:</p>
<ul>
    <li>Real-time inventory tracking across multiple sales channels</li>
    <li>Automated order processing and fulfillment</li>
    <li>Customer relationship management (CRM) integration</li>
    <li>Advanced analytics and reporting</li>
</ul>

<h2>Results</h2>
<p>Our clients have experienced significant improvements in operational efficiency, with some reporting:</p>
<ul>
    <li>40% reduction in order processing time</li>
    <li>30% decrease in inventory holding costs</li>
    <li>25% improvement in order accuracy</li>
    <li>50% faster customer response times</li>
</ul>',
                'featured_image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                'is_published' => true,
                'published_at' => now()->subDays(10),
                'read_time' => '5 min',
                'tags' => ['ERP', 'E-commerce', 'Digital Transformation'],
                'author_name' => 'Sarah Johnson',
                'author_avatar' => 'https://randomuser.me/api/portraits/women/44.jpg'
            ],
            [
                'category_id' => $healthcareCategory->id,
                'title' => 'Building Scalable Healthcare Applications: A Case Study',
                'slug' => 'scalable-healthcare-applications',
                'excerpt' => 'How we developed a secure and scalable mobile healthcare platform for patient management and telemedicine.',
                'content' => '<h2>The Healthcare Technology Gap</h2>
<p>Healthcare providers today need secure, reliable, and scalable technology solutions to deliver quality patient care. Our client, a leading healthcare provider, faced challenges with their existing patient management system.</p>

<h2>Our Approach</h2>
<p>We developed a comprehensive healthcare platform with the following features:</p>
<ul>
    <li>Secure patient data management with HIPAA compliance</li>
    <li>Telemedicine capabilities for remote consultations</li>
    <li>Integration with medical devices and wearables</li>
    <li>Automated appointment scheduling and reminders</li>
</ul>

<h2>Key Technologies</h2>
<p>The solution was built using:</p>
<ul>
    <li>React Native for cross-platform mobile development</li>
    <li>Node.js with Express for the backend API</li>
    <li>MongoDB for flexible data storage</li>
    <li>AWS for secure and scalable cloud infrastructure</li>
</ul>',
                'featured_image' => 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                'is_published' => true,
                'published_at' => now()->subDays(8),
                'read_time' => '7 min',
                'tags' => ['Healthcare', 'Mobile App', 'Security', 'Telemedicine'],
                'author_name' => 'Dr. Michael Chen',
                'author_avatar' => 'https://randomuser.me/api/portraits/men/32.jpg'
            ],
            [
                'category_id' => $retailCategory->id,
                'title' => 'The Future of Retail: AI-Powered Personalization',
                'slug' => 'ai-powered-retail-personalization',
                'excerpt' => 'How artificial intelligence is transforming the retail industry through personalized shopping experiences.',
                'content' => '<h2>The Rise of AI in Retail</h2>
<p>Artificial Intelligence is revolutionizing the retail industry by enabling highly personalized shopping experiences. Our latest project demonstrates how AI can drive customer engagement and increase sales.</p>

<h2>Key Features</h2>
<ul>
    <li>Personalized product recommendations based on browsing history</li>
    <li>Dynamic pricing optimization</li>
    <li>Visual search capabilities</li>
    <li>Chatbots for 24/7 customer support</li>
</ul>

<h2>Implementation Results</h2>
<p>Retailers using our AI solution have reported:</p>
<ul>
    <li>35% increase in average order value</li>
    <li>20% improvement in customer retention</li>
    <li>40% reduction in customer service response time</li>
</ul>',
                'featured_image' => 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                'is_published' => true,
                'published_at' => now()->subDays(5),
                'read_time' => '6 min',
                'tags' => ['AI', 'Retail', 'Personalization', 'Machine Learning'],
                'author_name' => 'Alex Thompson',
                'author_avatar' => 'https://randomuser.me/api/portraits/men/22.jpg'
            ],
            [
                'category_id' => $manufacturingCategory->id,
                'title' => 'Digital Transformation in Manufacturing: A Success Story',
                'slug' => 'digital-transformation-manufacturing',
                'excerpt' => 'How we helped a manufacturing company streamline operations and improve efficiency through digital transformation.',
                'content' => '<h2>The Manufacturing Challenge</h2>
<p>Manufacturers today face increasing pressure to improve efficiency, reduce costs, and adapt to changing market demands. Our client, a mid-sized manufacturer, was struggling with outdated systems and manual processes.</p>

<h2>Our Solution</h2>
<p>We implemented a comprehensive digital transformation strategy that included:</p>
<ul>
    <li>IIoT (Industrial Internet of Things) for real-time equipment monitoring</li>
    <li>Predictive maintenance to reduce downtime</li>
    <li>Supply chain optimization with AI-driven forecasting</li>
    <li>Digital twin technology for process simulation</li>
</ul>

<h2>Business Impact</h2>
<p>The results were transformative:</p>
<ul>
    <li>30% increase in overall equipment effectiveness (OEE)</li>
    <li>25% reduction in maintenance costs</li>
    <li>40% improvement in on-time delivery</li>
    <li>50% faster time-to-market for new products</li>
</ul>',
                'featured_image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                'is_published' => true,
                'published_at' => now()->subDays(3),
                'read_time' => '8 min',
                'tags' => ['Digital Transformation', 'IIoT', 'Industry 4.0', 'Manufacturing'],
                'author_name' => 'Emily Rodriguez',
                'author_avatar' => 'https://randomuser.me/api/portraits/women/63.jpg'
            ],
            [
                'category_id' => $fintechCategory->id,
                'title' => 'Building Secure FinTech Applications: Best Practices',
                'slug' => 'fintech-security-best-practices',
                'excerpt' => 'Essential security measures for developing robust and compliant financial technology applications.',
                'content' => '<h2>The Importance of Security in FinTech</h2>
<p>In the rapidly evolving world of financial technology, security is not just a feature—it\'s a fundamental requirement. This post outlines the key security considerations for FinTech applications.</p>

<h2>Security Best Practices</h2>
<h3>1. Data Encryption</h3>
<p>Implement end-to-end encryption for all sensitive data, both in transit and at rest. Use industry-standard protocols like TLS 1.3 for secure communication.</p>

<h3>2. Multi-Factor Authentication (MFA)</h3>
<p>Require multiple forms of verification to ensure only authorized users can access sensitive financial data.</p>

<h3>3. Regular Security Audits</h3>
<p>Conduct frequent security assessments and penetration testing to identify and address vulnerabilities.</p>

<h3>4. Compliance Standards</h3>
<p>Ensure compliance with relevant regulations such as PCI-DSS, GDPR, and PSD2, depending on your target markets.</p>',
                'featured_image' => 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
                'is_published' => true,
                'published_at' => now(),
                'read_time' => '9 min',
                'tags' => ['Security', 'FinTech', 'Compliance', 'Encryption'],
                'author_name' => 'David Kim',
                'author_avatar' => 'https://randomuser.me/api/portraits/men/45.jpg'
            ]
        ];

        foreach ($posts as $postData) {
            $tags = $postData['tags'];
            $authorName = $postData['author_name'];
            $authorAvatar = $postData['author_avatar'];
            
            unset($postData['tags'], $postData['author_name'], $postData['author_avatar']);

            $post = BlogPost::updateOrCreate(
                ['slug' => $postData['slug']],
                array_merge($postData, [
                    'author_id' => $admin->id,
                    'author_name' => $authorName,
                    'author_avatar' => $authorAvatar,
                    'views' => rand(100, 1000),
                    'meta_title' => $postData['title'],
                    'meta_description' => $postData['excerpt'],
                    'meta_keywords' => implode(', ', $tags),
                ])
            );

            // Attach tags
            $tagIds = [];
            foreach ($tags as $tagName) {
                $tag = BlogTag::firstOrCreate(
                    ['slug' => Str::slug($tagName)],
                    ['name' => $tagName]
                );
                $tagIds[] = $tag->id;
            }
            $post->tags()->sync($tagIds);
        }
    }
}
