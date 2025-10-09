<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Sanctum\Sanctum;

abstract class TestCase extends BaseTestCase
{
    use DatabaseMigrations;
    
    protected $connectionsToTransact = []; // Disable transactions for SQLite
    
    protected $user;
    protected $baseUrl = 'http://localhost';

    protected function setUp(): void
    {
        parent::setUp();
        
        // Set the database configuration for in-memory SQLite
        config([
            'database.default' => 'sqlite',
            'database.connections.sqlite.database' => ':memory:',
        ]);
        
        // Run migrations
        $this->artisan('migrate');
        
        // Only run seeder if it exists
        if (class_exists('Database\Seeders\TestDatabaseSeeder')) {
            $this->artisan('db:seed', ['--class' => 'TestDatabaseSeeder']);
        }
        
        // Create a test user if User model exists
        if (class_exists('App\Models\User')) {
            $this->user = User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ]);
        }
    }

    /**
     * Authenticate as a test user
     */
    protected function actingAsUser($user = null)
    {
        $user = $user ?: $this->user;
        
        Sanctum::actingAs($user, ['*']);
        
        return $this;
    }
    
    /**
     * Get the base API URL
     */
    protected function apiUrl($path = '')
    {
        return '/api' . ($path ? '/' . ltrim($path, '/') : '');
    }
    
}
