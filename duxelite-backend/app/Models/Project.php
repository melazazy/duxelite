<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;
    
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
}
