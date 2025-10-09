<?php

namespace Database\Factories;

use App\Models\CaseStudy;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CaseStudyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CaseStudy::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->sentence(3);
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraph(),
            'content' => $this->faker->paragraphs(5, true),
            'project_id' => Project::factory(),
            'client' => $this->faker->company,
            'challenge' => $this->faker->paragraphs(3, true),
            'solution' => $this->faker->paragraphs(3, true),
            'results' => $this->faker->paragraphs(3, true),
            'is_featured' => $this->faker->boolean(30), // 30% chance of being featured
            'published_at' => $this->faker->optional(0.8)->dateTimeThisYear(), // 80% chance of being published
        ];
    }

    /**
     * Indicate that the case study is featured.
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

    /**
     * Indicate that the case study is published.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function published()
    {
        return $this->state(function (array $attributes) {
            return [
                'published_at' => $this->faker->dateTimeThisYear(),
            ];
        });
    }

    /**
     * Indicate that the case study is not published.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unpublished()
    {
        return $this->state(function (array $attributes) {
            return [
                'published_at' => null,
            ];
        });
    }
}
