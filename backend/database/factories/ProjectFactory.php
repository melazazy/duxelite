<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\ProjectCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->sentence(3);
        $projectDate = $this->faker->dateTimeBetween('-2 years', '+1 year');
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraph(5),
            'client' => $this->faker->company,
            'status' => $this->faker->randomElement(['completed', 'in_progress', 'on_hold', 'cancelled']),
            'technologies' => json_encode(
                $this->faker->randomElements(
                    ['Laravel', 'Vue.js', 'React', 'Angular', 'Tailwind CSS', 'Bootstrap', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker'],
                    $this->faker->numberBetween(2, 5)
                )
            ),
            'project_date' => $projectDate,
            'is_featured' => $this->faker->boolean(30), // 30% chance of being featured
            'image' => 'https://via.placeholder.com/1200x800?text=Project+Image', // Use placeholder image for testing
            'url' => $this->faker->url,
            'github_url' => $this->faker->url,
            'category_id' => ProjectCategory::factory()
        ];
    }

    /**
     * Indicate that the project is featured.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function featured()
    {
        return $this->state(function (array $attributes) {
            return [
                'is_featured' => true,
            ];
        });
    }
}
