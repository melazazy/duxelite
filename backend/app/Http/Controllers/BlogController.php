<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        return response()->json([
            [
                'id' => 1, 
                'title' => 'Why ERP Systems Matter in Modern Business', 
                'slug' => 'why-erp-systems-matter',
                'excerpt' => 'Discover how ERP systems are transforming business operations and driving efficiency across industries.',
                'content' => '<p>Enterprise Resource Planning (ERP) systems have become the backbone of modern business operations...</p>',
                'featured_image' => '/images/blog/erp-systems.jpg',
                'author' => 'John Doe',
                'published_at' => '2025-09-15',
                'read_time' => '5 min read',
                'category' => 'ERP',
                'tags' => ['ERP', 'Business', 'Technology']
            ],
            [
                'id' => 2, 
                'title' => 'The Future of SaaS in 2025', 
                'slug' => 'saas-in-2025',
                'excerpt' => 'Exploring the latest trends and predictions for the SaaS industry in the coming year.',
                'content' => '<p>As we approach 2025, the SaaS industry continues to evolve at a rapid pace...</p>',
                'featured_image' => '/images/blog/saas-2025.jpg',
                'author' => 'Jane Smith',
                'published_at' => '2025-09-10',
                'read_time' => '4 min read',
                'category' => 'SaaS',
                'tags' => ['SaaS', 'Cloud', 'Technology']
            ],
            [
                'id' => 3, 
                'title' => 'Digital Transformation Strategies', 
                'slug' => 'digital-transformation-strategies',
                'excerpt' => 'Key strategies for successful digital transformation in enterprise environments.',
                'content' => '<p>Digital transformation is no longer optional for businesses looking to stay competitive...</p>',
                'featured_image' => '/images/blog/digital-transformation.jpg',
                'author' => 'Alex Johnson',
                'published_at' => '2025-09-05',
                'read_time' => '6 min read',
                'category' => 'Digital Transformation',
                'tags' => ['Digital', 'Strategy', 'Innovation']
            ]
        ]);
    }
}
