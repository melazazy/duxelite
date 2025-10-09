<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = \App\Models\Service::where('is_active', true)->get();
        return response()->json([
            'success' => true,
            'data' => $services
        ]);
    }

    /**
     * Get optimized data for home page services section
     */
    public function homePageData()
    {
        $services = \App\Models\Service::getHomePageData(6);
        return response()->json([
            'success' => true,
            'data' => $services
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'required|string|max:50',
            'is_active' => 'sometimes|boolean',
        ]);

        // Generate slug from title if not provided
        $validated['slug'] = \Illuminate\Support\Str::slug($validated['title']);

        $service = \App\Models\Service::create($validated);

        return response()->json($service, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $service = \App\Models\Service::where('slug', $slug)->firstOrFail();
        return response()->json([
            'success' => true,
            'data' => $service->getFullDetails()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $service = \App\Models\Service::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'icon' => 'sometimes|string|max:50',
            'is_active' => 'sometimes|boolean',
        ]);

        // Regenerate slug if title is being updated
        if ($request->has('title')) {
            $validated['slug'] = \Illuminate\Support\Str::slug($validated['title']);
        }

        $service->update($validated);

        return response()->json($service);
    }

    /**
     * Remove the specified resource from storage (soft delete).
     */
    public function destroy(string $id)
    {
        $service = \App\Models\Service::findOrFail($id);
        $service->delete(); // This will soft delete due to SoftDeletes trait
        
        return response()->json([
            'success' => true,
            'message' => 'Service deleted successfully'
        ]);
    }
}
