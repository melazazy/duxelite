<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'description',
        'client',
        'status',
        'technologies',
        'year',
        'is_featured',
        'image',
        'url',
        'github_url'
    ];
    
    protected $casts = [
        'technologies' => 'array',
        'is_featured' => 'boolean',
        'year' => 'integer'
    ];
    
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['category_slug'];
    
    /**
     * Get the category's slug.
     *
     * @return string|null
     */
    public function getCategorySlugAttribute()
    {
        return $this->category ? $this->category->slug : null;
    }

    /**
     * Get the category that owns the project.
     */
    public function category()
    {
        return $this->belongsTo(ProjectCategory::class);
    }
    
    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Get optimized data for home page portfolio section
     */
    public static function getHomePageData($limit = 6)
    {
        return self::where('is_featured', true)
            ->with('category')
            ->select('id', 'title', 'slug', 'description', 'image', 'technologies', 'is_featured', 'category_id')
            ->limit($limit)
            ->get()
            ->map(function ($project) {
                return [
                    'id' => $project->id,
                    'title' => $project->title,
                    'slug' => $project->slug,
                    'description' => \Str::limit($project->description, 120),
                    'image' => $project->image,
                    'technologies' => array_slice($project->technologies ?? [], 0, 3),
                    'category' => $project->category ? [
                        'name' => $project->category->name,
                        'slug' => $project->category->slug
                    ] : null
                ];
            });
    }

    /**
     * Get full project details for detail pages
     */
    public function getFullDetails()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'client' => $this->client,
            'status' => $this->status,
            'technologies' => $this->technologies,
            'year' => $this->year,
            'image' => $this->image,
            'url' => $this->url,
            'github_url' => $this->github_url,
            'category' => $this->category ? [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug
            ] : null
        ];
    }
}
