<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class BlogPost extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'category_id',
        'author_id',
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'published_at',
        'read_time',
        'meta_title',
        'meta_description',
        'is_featured',
        'status',
        'is_published',
        'views'
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_published' => 'boolean'
    ];

    /**
     * Get the category that owns the blog post.
     */
    /**
     * Get the category that owns the blog post.
     */
    public function category()
    {
        return $this->belongsTo(BlogCategory::class);
    }

    /**
     * Get the author of the blog post.
     */
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * The tags that belong to the blog post.
     */
    public function tags()
    {
        return $this->belongsToMany(BlogTag::class, 'blog_post_tag', 'post_id', 'tag_id')
            ->withPivot([]);
    }

    /**
     * Get the comments for the blog post.
     */
    public function comments()
    {
        return $this->hasMany(BlogComment::class, 'post_id');
    }

    /**
     * Get optimized data for home page blog section
     */
    public static function getHomePageData($limit = 3)
    {
        return self::where('is_published', true)
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->with(['category', 'author'])
            ->select('id', 'title', 'slug', 'excerpt', 'featured_image', 'published_at', 'read_time', 'category_id', 'author_id')
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get()
            ->map(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'slug' => $post->slug,
                    'excerpt' => \Str::limit($post->excerpt, 120),
                    'featured_image' => $post->featured_image,
                    'published_at' => $post->published_at,
                    'read_time' => $post->read_time,
                    'category' => $post->category ? [
                        'name' => $post->category->name,
                        'slug' => $post->category->slug
                    ] : null,
                    'author' => $post->author ? [
                        'name' => $post->author->name
                    ] : null
                ];
            });
    }

    /**
     * Get full blog post details for detail pages
     */
    public function getFullDetails()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'content' => $this->content,
            'featured_image' => $this->featured_image,
            'published_at' => $this->published_at,
            'read_time' => $this->read_time,
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'is_featured' => $this->is_featured,
            'status' => $this->status,
            'views' => $this->views,
            'category' => $this->category ? [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug
            ] : null,
            'author' => $this->author ? [
                'id' => $this->author->id,
                'name' => $this->author->name,
                'email' => $this->author->email
            ] : null,
            'tags' => $this->tags->map(function ($tag) {
                return [
                    'id' => $tag->id,
                    'name' => $tag->name,
                    'slug' => $tag->slug
                ];
            })
        ];
    }
}
