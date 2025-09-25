<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class CaseStudyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $caseStudies = CaseStudy::with('project')->latest()->get();
        return response()->json($caseStudies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:case_studies,slug',
            'description' => 'required|string',
            'content' => 'required|string',
            'project_id' => 'required|exists:projects,id',
            'client' => 'required|string|max:255',
            'challenge' => 'required|string',
            'solution' => 'required|string',
            'results' => 'required|string',
            'is_featured' => 'sometimes|boolean',
            'published_at' => 'nullable|date',
        ]);

        // Generate slug from title if not provided
        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $caseStudy = CaseStudy::create($validated);

        return response()->json($caseStudy, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $caseStudy = CaseStudy::with('project')->findOrFail($id);
        return response()->json($caseStudy);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $caseStudy = CaseStudy::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'slug' => ['sometimes', 'string', 'max:255', Rule::unique('case_studies', 'slug')->ignore($caseStudy->id)],
            'description' => 'sometimes|string',
            'content' => 'sometimes|string',
            'project_id' => 'sometimes|exists:projects,id',
            'client' => 'sometimes|string|max:255',
            'challenge' => 'sometimes|string',
            'solution' => 'sometimes|string',
            'results' => 'sometimes|string',
            'is_featured' => 'sometimes|boolean',
            'published_at' => 'nullable|date',
        ]);

        // Regenerate slug if title is being updated
        if ($request->has('title') && !$request->has('slug')) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $caseStudy->update($validated);

        return response()->json($caseStudy);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $caseStudy = CaseStudy::findOrFail($id);
        $caseStudy->delete();
        
        return response()->json(null, 204);
    }
}