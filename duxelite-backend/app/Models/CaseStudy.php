<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'slug',
        'description',
        'content',
        'project_id',
        'client',
        'challenge',
        'solution',
        'results',
        'is_featured',
        'published_at',
    ];
    
    protected $casts = [
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
    ];
    
    /**
     * Get the project that owns the case study.
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
