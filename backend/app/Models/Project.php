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
        'features',
        'year',
        'is_featured',
        'image',
        'images',
        'url',
        'github_url'
    ];
    
    protected $casts = [
        'technologies' => 'array',
        'features' => 'array',
        'images' => 'array',
        'is_featured' => 'boolean',
        'year' => 'integer'
    ];

    protected $attributes = [
        'images' => '[]',
        'features' => '[]'
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
        $this->load('category');
        
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'client' => $this->client,
            'status' => $this->status,
            'is_featured' => $this->is_featured,
            'technologies' => $this->technologies,
            'features' => $this->features ?? [],
            'image' => $this->image,
            'images' => $this->images,
            'url' => $this->url,
            'github_url' => $this->github_url,
            'project_date' => $this->project_date,
            'category' => $this->category ? [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug
            ] : null
        ];
    }
}
