<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class BlogView extends Model
{
    protected $table = 'blog_views';
    
    protected $fillable = [
        'post_id',
        'ip_address',
        'user_agent',
        'referer',
        'session_id',
        'user_id',
    ];

    protected $casts = [
        'viewed_at' => 'datetime',
    ];

    /**
     * The "booting" method of the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($view) {
            $view->viewed_at = now();
        });
    }

    /**
     * Get the post that was viewed.
     */
    public function post()
    {
        return $this->belongsTo(BlogPost::class, 'post_id');
    }

    /**
     * Get the user who viewed the post (if authenticated).
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Record a view for a blog post.
     *
     * @param BlogPost $post
     * @param string|null $ipAddress
     * @param string|null $userAgent
     * @param string|null $referer
     * @param string|null $sessionId
     * @param int|null $userId
     * @return BlogView
     */
    public static function recordView(
        BlogPost $post,
        ?string $ipAddress = null,
        ?string $userAgent = null,
        ?string $referer = null,
        ?string $sessionId = null,
        ?int $userId = null
    ): BlogView {
        // Check if this is a unique view (based on IP, session, and post)
        $existingView = static::query()
            ->where('post_id', $post->id)
            ->when($ipAddress, function ($query) use ($ipAddress) {
                return $query->where('ip_address', $ipAddress);
            })
            ->when($sessionId, function ($query) use ($sessionId) {
                return $query->where('session_id', $sessionId);
            })
            ->where('viewed_at', '>=', now()->subHours(24))
            ->exists();

        if ($existingView) {
            return null;
        }

        // Create a new view record
        $view = new static([
            'post_id' => $post->id,
            'ip_address' => $ipAddress,
            'user_agent' => $userAgent,
            'referer' => $referer,
            'session_id' => $sessionId,
            'user_id' => $userId,
        ]);

        $view->save();

        // Update the post's view count
        $post->increment('views');

        return $view;
    }

    /**
     * Get popular posts based on views.
     *
     * @param int $limit
     * @param string $period days|weeks|months|years
     * @param int $value
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function getPopularPosts($limit = 5, $period = 'months', $value = 1)
    {
        return BlogPost::select('blog_posts.*', DB::raw('COUNT(blog_views.id) as view_count'))
            ->join('blog_views', 'blog_views.post_id', '=', 'blog_posts.id')
            ->where('blog_views.viewed_at', '>=', now()->sub($period, $value))
            ->groupBy('blog_posts.id')
            ->orderBy('view_count', 'desc')
            ->limit($limit)
            ->get();
    }

    /**
     * Get view statistics for a post.
     *
     * @param int $postId
     * @param string $period days|weeks|months|years
     * @param int $value
     * @return array
     */
    public static function getPostViewStats($postId, $period = 'months', $value = 1)
    {
        $views = static::select(
                DB::raw('DATE(viewed_at) as date'),
                DB::raw('COUNT(*) as count')
            )
            ->where('post_id', $postId)
            ->where('viewed_at', '>=', now()->sub($period, $value))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        return [
            'total' => $views->sum('count'),
            'daily_avg' => $views->avg('count'),
            'trend' => $views->pluck('count', 'date')->toArray(),
        ];
    }
}
