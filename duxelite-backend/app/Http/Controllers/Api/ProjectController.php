<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('category')->latest()->get();
        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'client' => 'required|string|max:255',
            'status' => ['required', 'string', Rule::in(['completed', 'in_progress', 'on_hold', 'cancelled'])],
            'technologies' => 'required|array',
            'project_date' => 'required|date',
            'is_featured' => 'sometimes|boolean',
            'image' => 'nullable|string', // Assuming base64 encoded image or URL
            'url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'category_id' => 'required|exists:project_categories,id',
        ]);

        // Generate slug from title
        $validated['slug'] = Str::slug($validated['title']);
        
        // Handle image upload if provided
        if ($request->has('image') && strpos($validated['image'], 'data:image') === 0) {
            $imageData = $validated['image'];
            $image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imageData));
            $filename = 'projects/' . uniqid() . '.png';
            Storage::disk('public')->put($filename, $image);
            $validated['image'] = $filename;
        }

        // Convert technologies array to JSON
        $validated['technologies'] = json_encode($validated['technologies']);

        $project = Project::create($validated);

        return response()->json($project, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::with('category')->findOrFail($id);
        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $project = Project::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'client' => 'sometimes|string|max:255',
            'status' => ['sometimes', 'string', Rule::in(['completed', 'in_progress', 'on_hold', 'cancelled'])],
            'technologies' => 'sometimes|array',
            'project_date' => 'sometimes|date',
            'is_featured' => 'sometimes|boolean',
            'image' => 'nullable|string',
            'url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'category_id' => 'sometimes|exists:project_categories,id',
        ]);

        // Regenerate slug if title is being updated
        if ($request->has('title')) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Handle image upload if provided
        if (isset($validated['image']) && strpos($validated['image'], 'data:image') === 0) {
            // Delete old image if exists
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }
            
            $imageData = $validated['image'];
            $image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imageData));
            $filename = 'projects/' . uniqid() . '.png';
            Storage::disk('public')->put($filename, $image);
            $validated['image'] = $filename;
        }

        // Convert technologies array to JSON if provided
        if (isset($validated['technologies'])) {
            $validated['technologies'] = json_encode($validated['technologies']);
        }

        $project->update($validated);

        return response()->json($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);
        
        // Delete associated image if exists
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }
        
        $project->delete();
        
        return response()->json(null, 204);
    }
}
