<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
            $admin->assignRole('admin');
        }

        // Run seeders
        $this->call([
            // Core data
            CompanyInfoSeeder::class,
            
            // Blog related
            BlogCategorySeeder::class,
            BlogTagSeeder::class,
            
            // Project related
            ProjectCategorySeeder::class,
            
            // Services
            ServiceSeeder::class,
            
            // Projects (depends on ProjectCategory)
            ProjectSeeder::class,
            
            // Blog posts (depends on categories and tags)
            BlogPostSeeder::class,
        ]);
    }
}