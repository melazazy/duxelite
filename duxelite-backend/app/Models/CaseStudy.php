<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CaseStudy extends Model
{
    use HasFactory, SoftDeletes;
    
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

    /**
     * Get optimized data for home page case studies section
     */
    public static function getHomePageData($limit = 3)
    {
        return self::where('is_featured', true)
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->with('project')
            ->select('id', 'title', 'slug', 'description', 'client', 'is_featured', 'published_at', 'project_id')
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get()
            ->map(function ($caseStudy) {
                return [
                    'id' => $caseStudy->id,
                    'title' => $caseStudy->title,
                    'slug' => $caseStudy->slug,
                    'description' => \Str::limit($caseStudy->description, 120),
                    'client' => $caseStudy->client,
                    'published_at' => $caseStudy->published_at,
                    'project' => $caseStudy->project ? [
                        'title' => $caseStudy->project->title,
                        'slug' => $caseStudy->project->slug
                    ] : null
                ];
            });
    }

    /**
     * Get full case study details for detail pages
     */
    public function getFullDetails()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'content' => $this->content,
            'client' => $this->client,
            'challenge' => $this->challenge,
            'solution' => $this->solution,
            'results' => $this->results,
            'is_featured' => $this->is_featured,
            'published_at' => $this->published_at,
            'project' => $this->project ? [
                'id' => $this->project->id,
                'title' => $this->project->title,
                'slug' => $this->project->slug,
                'description' => $this->project->description,
                'technologies' => $this->project->technologies
            ] : null
        ];
    }
}
