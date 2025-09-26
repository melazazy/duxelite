<?php

use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\CaseStudyController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\BlogCategoryController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ProjectCategoryController;
use Illuminate\Support\Facades\Route;

// Public routes
Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::get('/portfolio/featured', [PortfolioController::class, 'featured']);
Route::get('/portfolio/category/{categorySlug}', [PortfolioController::class, 'byCategory']);
Route::get('/portfolio/{slug}', [PortfolioController::class, 'show']);

// Add specific routes for frontend API calls
Route::get('/blog/posts', [BlogController::class, 'index']);

// API Resource Routes
Route::apiResource('services', ServiceController::class);
Route::apiResource('projects', ProjectController::class);
Route::apiResource('case-studies', CaseStudyController::class);
Route::apiResource('blog', BlogController::class);
Route::apiResource('blog-categories', BlogCategoryController::class);
Route::apiResource('project-categories', ProjectCategoryController::class);
Route::apiResource('testimonials', TestimonialController::class);

// Additional blog routes
Route::get('/blog/categories', [BlogCategoryController::class, 'index']);
Route::get('/blog/category/{slug}', [BlogController::class, 'byCategory']);
Route::get('/blog/author/{id}', [BlogController::class, 'byAuthor']);
Route::get('/blog/tag/{tag}', [BlogController::class, 'byTag']);