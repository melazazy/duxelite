<?php

namespace Tests\Feature;

use App\Models\Service;
use App\Models\Project;
use App\Models\ProjectCategory;
use App\Models\CaseStudy;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ApiEndpointsTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        
        // Skip if we don't have the required models or factories
        if (!class_exists(Service::class) || 
            !class_exists(Project::class) || 
            !class_exists(ProjectCategory::class)) {
            $this->markTestSkipped('Required models or factories are not available');
        }
        
        // Ensure we have the required factories
        if (!class_exists('Database\Factories\ServiceFactory') || 
            !class_exists('Database\Factories\ProjectFactory') ||
            !class_exists('Database\Factories\ProjectCategoryFactory')) {
            $this->markTestSkipped('Required factories are not available');
        }
    }
    
    /**
     * Test services endpoints
     */
    public function test_services_endpoints()
    {
        // Test GET /services
        $response = $this->getJson('/api/services');
        $response->assertStatus(200);

        // Test POST /services
        $data = [
            'title' => 'Test Service',
            'description' => 'Test Description',
            'icon' => 'test-icon',
            'is_active' => true
        ];
        $response = $this->postJson('/api/services', $data);
        $response->assertStatus(201);
        $serviceId = $response->json('id');

        // Test GET /services/{id}
        $response = $this->getJson("/api/services/{$serviceId}");
        $response->assertStatus(200);

        // Test PUT /services/{id}
        $updateData = ['title' => 'Updated Service'];
        $response = $this->putJson("/api/services/{$serviceId}", $updateData);
        $response->assertStatus(200);

        // Test DELETE /services/{id}
        $response = $this->deleteJson("/api/services/{$serviceId}");
        $response->assertStatus(204);
    }

    /**
     * Test projects endpoints
     */
    public function test_projects_endpoints()
    {
        // Test GET /projects
        $response = $this->getJson('/api/projects');
        $response->assertStatus(200);

        // Test POST /projects
        $data = [
            'title' => 'Test Project',
            'description' => 'Test Description',
            'client' => 'Test Client',
            'year' => 2023,
            'is_featured' => true
        ];
        $response = $this->postJson('/api/projects', $data);
        $response->assertStatus(201);
        $projectId = $response->json('id');

        // Test GET /projects/{id}
        $response = $this->getJson("/api/projects/{$projectId}");
        $response->assertStatus(200);
    }

    /**
     * Test case-studies endpoints
     */
    public function test_case_studies_endpoints()
    {
        // Test GET /case-studies
        $response = $this->getJson('/api/case-studies');
        $response->assertStatus(200);

        // Test POST /case-studies
        $data = [
            'title' => 'Test Case Study',
            'content' => 'Test Content',
            'client' => 'Test Client',
            'challenge' => 'Test Challenge',
            'solution' => 'Test Solution',
            'result' => 'Test Result',
            'is_published' => true
        ];
        $response = $this->postJson('/api/case-studies', $data);
        $response->assertStatus(201);
        $caseStudyId = $response->json('id');

        // Test GET /case-studies/{id}
        $response = $this->getJson("/api/case-studies/{$caseStudyId}");
        $response->assertStatus(200);
    }

    /**
     * Test blog endpoints
     */
    public function test_blog_endpoints()
    {
        // Test GET /blog/posts
        $response = $this->getJson('/api/blog/posts');
        $response->assertStatus(200);

        // Test POST /blog
        $data = [
            'title' => 'Test Blog Post',
            'content' => 'Test Content',
            'excerpt' => 'Test Excerpt',
            'is_published' => true,
            'author_id' => 1,
            'category_id' => 1
        ];
        $response = $this->postJson('/api/blog', $data);
        $response->assertStatus(201);
        $postId = $response->json('id');

        // Test GET /blog/{id}
        $response = $this->getJson("/api/blog/{$postId}");
        $response->assertStatus(200);
    }

    /**
     * Test testimonials endpoints
     */
    public function test_testimonials_endpoints()
    {
        // Test GET /testimonials
        $response = $this->getJson('/api/testimonials');
        $response->assertStatus(200);

        // Test POST /testimonials
        $data = [
            'name' => 'Test User',
            'position' => 'CEO',
            'company' => 'Test Company',
            'content' => 'Testimonial content',
            'rating' => 5,
            'is_approved' => true
        ];
        $response = $this->postJson('/api/testimonials', $data);
        $response->assertStatus(201);
        $testimonialId = $response->json('id');

        // Test GET /testimonials/{id}
        $response = $this->getJson("/api/testimonials/{$testimonialId}");
        $response->assertStatus(200);
    }

    /**
     * Test portfolio projects endpoint
     */
    public function test_portfolio_projects_endpoint()
    {
        $response = $this->getJson('/api/portfolio/projects');
        $response->assertStatus(200);
    }
}
