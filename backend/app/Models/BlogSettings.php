<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class BlogSettings extends Model
{
    protected $table = 'blog_settings';
    
    protected $fillable = [
        'key',
        'value',
        'type',
        'group',
        'is_public',
        'options'
    ];

    protected $casts = [
        'is_public' => 'boolean',
        'options' => 'array',
    ];

    /**
     * Get a setting value by key.
     *
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    public static function getValue($key, $default = null)
    {
        return Cache::rememberForever("blog_setting_{$key}", function () use ($key, $default) {
            $setting = static::where('key', $key)->first();
            return $setting ? $setting->value : $default;
        });
    }

    /**
     * Set a setting value by key.
     *
     * @param string $key
     * @param mixed $value
     * @param string $type
     * @param string $group
     * @param bool $isPublic
     * @param array $options
     * @return void
     */
    public static function setValue($key, $value, $type = 'string', $group = 'general', $isPublic = true, $options = [])
    {
        $setting = static::updateOrCreate(
            ['key' => $key],
            [
                'value' => $value,
                'type' => $type,
                'group' => $group,
                'is_public' => $isPublic,
                'options' => $options
            ]
        );

        Cache::forget("blog_setting_{$key}");
        Cache::forever("blog_setting_{$key}", $value);
    }

    /**
     * Get all settings as an associative array.
     *
     * @param string|null $group
     * @return \Illuminate\Support\Collection
     */
    public static function getAll($group = null)
    {
        $query = static::query();
        
        if ($group) {
            $query->where('group', $group);
        }
        
        return $query->pluck('value', 'key');
    }

    /**
     * Get settings by group.
     *
     * @param string $group
     * @return \Illuminate\Support\Collection
     */
    public static function getByGroup($group)
    {
        return static::where('group', $group)
            ->pluck('value', 'key');
    }

    /**
     * Get public settings.
     *
     * @return \Illuminate\Support\Collection
     */
    public static function getPublicSettings()
    {
        return static::where('is_public', true)
            ->pluck('value', 'key');
    }

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::saved(function ($model) {
            Cache::forget("blog_setting_{$model->key}");
            Cache::forever("blog_setting_{$model->key}", $model->value);
        });

        static::deleted(function ($model) {
            Cache::forget("blog_setting_{$model->key}");
        });
    }
}
