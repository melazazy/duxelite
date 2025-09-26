<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the portfolio projects.
     */
    public function index()
    {
        $categories = ProjectCategory::with(['projects' => function($query) {
            $query->where('is_featured', true)
                  ->orderBy('created_at', 'desc');
        }])->where('is_active', true)
          ->orderBy('order')
          ->get();

        return response()->json($categories);
    }

    /**
     * Get optimized data for home page portfolio section
     */
    public function homePageData()
    {
        $projects = Project::getHomePageData(6);
        return response()->json([
            'success' => true,
            'data' => $projects
        ]);
    }

    /**
     * Display the specified project.
     */
    public function show(string $slug)
    {
        $project = Project::where('slug', $slug)
            ->with('category')
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $project->getFullDetails()
        ]);
    }

    /**
     * Get featured projects.
     */
    public function featured()
    {
        $projects = Project::where('is_featured', true)
            ->with('category')
            ->orderBy('created_at', 'desc')
            ->limit(6)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $projects
        ]);
    }

    /**
     * Get projects by category.
     */
    public function byCategory(string $categorySlug)
    {
        $category = ProjectCategory::where('slug', $categorySlug)
            ->where('is_active', true)
            ->firstOrFail();

        $projects = Project::where('category_id', $category->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => [
                'category' => $category,
                'projects' => $projects
            ]
        ]);
    }
}