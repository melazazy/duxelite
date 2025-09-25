<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\BlogCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = BlogPost::with(['category', 'author'])->latest()->get();
        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blog_posts,slug',
            'excerpt' => 'required|string|max:500',
            'content' => 'required|string',
            'featured_image' => 'nullable|string', // base64 encoded image
            'is_published' => 'sometimes|boolean',
            'published_at' => 'nullable|date',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'category_id' => 'required|exists:blog_categories,id',
            'author_id' => 'required|exists:users,id',
            'tags' => 'sometimes|array',
            'tags.*' => 'string|max:50',
        ]);

        // Generate slug from title if not provided
        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Handle featured image upload if provided
        if (isset($validated['featured_image']) && strpos($validated['featured_image'], 'data:image') === 0) {
            $imageData = $validated['featured_image'];
            $image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imageData));
            $filename = 'blog/' . uniqid() . '.png';
            Storage::disk('public')->put($filename, $image);
            $validated['featured_image'] = $filename;
        }

        // Convert tags array to JSON
        if (isset($validated['tags'])) {
            $validated['tags'] = json_encode($validated['tags']);
        }

        $post = BlogPost::create($validated);

        return response()->json($post, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = BlogPost::with(['category', 'author'])->findOrFail($id);
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = BlogPost::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'slug' => ['sometimes', 'string', 'max:255', Rule::unique('blog_posts', 'slug')->ignore($post->id)],
            'excerpt' => 'sometimes|string|max:500',
            'content' => 'sometimes|string',
            'featured_image' => 'nullable|string',
            'is_published' => 'sometimes|boolean',
            'published_at' => 'nullable|date',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'category_id' => 'sometimes|exists:blog_categories,id',
            'author_id' => 'sometimes|exists:users,id',
            'tags' => 'sometimes|array',
            'tags.*' => 'string|max:50',
        ]);

        // Regenerate slug if title is being updated
        if ($request->has('title') && !$request->has('slug')) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Handle featured image upload if provided
        if (isset($validated['featured_image']) && strpos($validated['featured_image'], 'data:image') === 0) {
            // Delete old image if exists
            if ($post->featured_image) {
                Storage::disk('public')->delete($post->featured_image);
            }
            
            $imageData = $validated['featured_image'];
            $image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imageData));
            $filename = 'blog/' . uniqid() . '.png';
            Storage::disk('public')->put($filename, $image);
            $validated['featured_image'] = $filename;
        }

        // Convert tags array to JSON if provided
        if (isset($validated['tags'])) {
            $validated['tags'] = json_encode($validated['tags']);
        }

        $post->update($validated);

        return response()->json($post);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = BlogPost::findOrFail($id);
        
        // Delete associated image if exists
        if ($post->featured_image) {
            Storage::disk('public')->delete($post->featured_image);
        }
        
        $post->delete();
        
        return response()->json(null, 204);
    }
}