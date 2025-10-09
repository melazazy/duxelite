<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class NewsletterController extends Controller
{
    /**
     * Subscribe to newsletter
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function subscribe(Request $request)
    {
        $email = $request->input('email');
        
        // Basic validation
        if (empty($email)) {
            return response()->json([
                'success' => false,
                'message' => 'Email is required',
                'errors' => ['email' => ['The email field is required.']]
            ], 422);
        }

        // Email format validation
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email format',
                'errors' => ['email' => ['The email must be a valid email address.']]
            ], 422);
        }

        // Check for existing active subscription
        $existing = Subscriber::where('email', $email)
            ->where('is_active', true)
            ->first();

        if ($existing) {
            return response()->json([
                'success' => false,
                'message' => 'This email is already subscribed',
                'errors' => ['email' => ['This email is already subscribed.']]
            ], 422);
        }

        try {
            // Check if user was previously subscribed but unsubscribed
            $subscriber = Subscriber::withTrashed()
                ->where('email', $email)
                ->first();

            if ($subscriber) {
                // If previously unsubscribed, resubscribe them
                if ($subscriber->trashed() || !$subscriber->is_active) {
                    $subscriber->restore();
                    $subscriber->update([
                        'is_active' => true,
                        'subscribed_at' => now(),
                        'unsubscribed_at' => null,
                    ]);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'This email is already subscribed',
                        'errors' => ['email' => ['This email is already subscribed.']]
                    ], 422);
                }
            } else {
                // Create new subscriber
                $subscriber = Subscriber::create([
                    'email' => $email,
                    'is_active' => true,
                    'subscribed_at' => now()
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Thank you for subscribing to our newsletter!',
                'data' => [
                    'email' => $subscriber->email,
                    'is_active' => $subscriber->is_active,
                    'subscribed_at' => $subscriber->subscribed_at
                ]
            ], 200, [], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);

        } catch (\Exception $e) {
            \Log::error('Newsletter subscription error: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to process your subscription. Please try again later.'
            ], 500, [], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        }
    }

    /**
     * Unsubscribe from newsletter
     *
     * @param  string  $email
     * @return \Illuminate\Http\JsonResponse
     */
    public function unsubscribe($email)
    {
        $subscriber = Subscriber::where('email', $email)->first();

        if (!$subscriber) {
            return response()->json([
                'success' => false,
                'message' => 'Subscriber not found.'
            ], 404);
        }

        $subscriber->unsubscribe();

        return response()->json([
            'success' => true,
            'message' => 'You have been unsubscribed from our newsletter.'
        ]);
    }
}
