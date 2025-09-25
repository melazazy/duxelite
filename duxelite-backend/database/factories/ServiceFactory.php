<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ServiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Service::class;

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
            'description' => $this->faker->paragraph(3),
            'icon' => $this->faker->randomElement(['bi-laptop', 'bi-phone', 'bi-tablet', 'bi-server', 'bi-hdd']),
            'features' => json_encode([
                $this->faker->sentence(3),
                $this->faker->sentence(3),
                $this->faker->sentence(3)
            ]),
            'is_active' => $this->faker->boolean(90) // 90% chance of being active
        ];
    }
}
