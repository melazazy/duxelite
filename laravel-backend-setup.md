# Laravel Backend Setup Guide

## 1. Create Laravel Project

```bash
composer create-project laravel/laravel techflow-backend
cd techflow-backend
```

## 2. Configure CORS

Install Laravel Sanctum for API authentication:
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Update `config/cors.php`:
```php
<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173', 'http://localhost:3000'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

## 3. Database Migrations

Create migrations for the main entities:

```bash
php artisan make:migration create_contacts_table
php artisan make:migration create_newsletter_subscriptions_table
php artisan make:migration create_blog_posts_table
php artisan make:migration create_portfolio_projects_table
php artisan make:migration create_services_table
php artisan make:migration create_case_studies_table
```

### Contact Migration (`database/migrations/create_contacts_table.php`):
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('company')->nullable();
            $table->string('phone')->nullable();
            $table->string('service');
            $table->string('budget')->nullable();
            $table->string('timeline')->nullable();
            $table->text('message');
            $table->enum('status', ['new', 'contacted', 'closed'])->default('new');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('contacts');
    }
};
```

### Blog Posts Migration:
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt');
            $table->longText('content');
            $table->string('featured_image');
            $table->string('author');
            $table->string('category');
            $table->json('tags');
            $table->string('read_time');
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('blog_posts');
    }
};
```

## 4. Models

### Contact Model (`app/Models/Contact.php`):
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'company',
        'phone',
        'service',
        'budget',
        'timeline',
        'message',
        'status'
    ];
}
```

### BlogPost Model (`app/Models/BlogPost.php`):
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'author',
        'category',
        'tags',
        'read_time',
        'status',
        'published_at'
    ];

    protected $casts = [
        'tags' => 'array',
        'published_at' => 'datetime'
    ];

    public function scopePublished($query)
    {
        return $query->where('status', 'published')
                    ->where('published_at', '<=', now());
    }
}
```

## 5. Controllers

### ContactController (`app/Http/Controllers/Api/ContactController.php`):
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmitted;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'service' => 'required|string|max:255',
            'budget' => 'nullable|string|max:255',
            'timeline' => 'nullable|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        $contact = Contact::create($validated);

        // Send email notification
        Mail::to('admin@techflow.com')->send(new ContactFormSubmitted($contact));

        return response()->json([
            'success' => true,
            'message' => 'Thank you for your message. We will get back to you soon!'
        ]);
    }
}
```

### BlogController (`app/Http/Controllers/Api/BlogController.php`):
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = BlogPost::published();

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        if ($request->has('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('excerpt', 'like', '%' . $request->search . '%');
            });
        }

        $posts = $query->orderBy('published_at', 'desc')
                      ->paginate($request->get('per_page', 10));

        return response()->json($posts);
    }

    public function show($slug)
    {
        $post = BlogPost::published()->where('slug', $slug)->firstOrFail();
        return response()->json($post);
    }
}
```

## 6. API Routes (`routes/api.php`):
```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\CaseStudyController;

Route::middleware('api')->group(function () {
    // Contact routes
    Route::post('/contact', [ContactController::class, 'store']);
    Route::post('/newsletter', [ContactController::class, 'newsletter']);

    // Blog routes
    Route::get('/blog/posts', [BlogController::class, 'index']);
    Route::get('/blog/posts/{slug}', [BlogController::class, 'show']);
    Route::get('/blog/categories', [BlogController::class, 'categories']);

    // Portfolio routes
    Route::get('/portfolio/projects', [PortfolioController::class, 'index']);
    Route::get('/portfolio/projects/{id}', [PortfolioController::class, 'show']);
    Route::get('/portfolio/categories', [PortfolioController::class, 'categories']);

    // Services routes
    Route::get('/services', [ServiceController::class, 'index']);

    // Case studies routes
    Route::get('/case-studies', [CaseStudyController::class, 'index']);
});
```

## 7. Mail Configuration

Create mail class for contact form:
```bash
php artisan make:mail ContactFormSubmitted
```

Update `app/Mail/ContactFormSubmitted.php`:
```php
<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('New Contact Form Submission')
                    ->view('emails.contact-form');
    }
}
```

## 8. Environment Configuration

Update `.env`:
```env
APP_NAME=TechFlow
APP_ENV=local
APP_KEY=base64:your-app-key
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=techflow
DB_USERNAME=root
DB_PASSWORD=

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=noreply@techflow.com
MAIL_FROM_NAME="${APP_NAME}"
```

## 9. Run Migrations and Seed Data

```bash
php artisan migrate
php artisan db:seed
```

## 10. Start Laravel Server

```bash
php artisan serve
```

Your Laravel backend will be available at `http://localhost:8000`

## 11. Multi-language Support

Install Laravel Localization:
```bash
composer require mcamara/laravel-localization
```

Configure language middleware and routes for Arabic/English support.

This setup provides a complete Laravel backend that integrates seamlessly with your React frontend!