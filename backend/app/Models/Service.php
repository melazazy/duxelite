<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $fillable = ['title', 'slug', 'description', 'features', 'icon', 'is_active'];
    protected $casts = [
        'features' => 'array',
        'is_active' => 'boolean'
    ];
    
    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Get optimized data for home page services section
     */
    public static function getHomePageData($limit = 6)
    {
        return self::where('is_active', true)
            ->select('id', 'title', 'slug', 'description', 'icon', 'is_active')
            ->limit($limit)
            ->get()
            ->map(function ($service) {
                return [
                    'id' => $service->id,
                    'title' => $service->title,
                    'slug' => $service->slug,
                    'description' => \Str::limit($service->description, 100),
                    'icon' => $service->icon,
                    'short_description' => \Str::limit($service->description, 60)
                ];
            });
    }

    /**
     * Get full service details for detail pages
     */
    public function getFullDetails()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'features' => $this->features,
            'icon' => $this->icon,
            'is_active' => $this->is_active
        ];
    }
}
