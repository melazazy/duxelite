<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactFormSubmitted;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'service' => 'required|string|max:255',
            'budget' => 'required|string|max:100',
            'message' => 'required|string',
            'timeline' => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = $request->only([
                'name', 'email', 'company', 'phone',
                'service', 'budget', 'message', 'timeline'
            ]);

            // Get admin email from config
            $adminEmail = config('mail.admin_email', config('mail.from.address'));
            
            if (!filter_var($adminEmail, FILTER_VALIDATE_EMAIL)) {
                throw new \Exception('Invalid admin email address configured');
            }

            // Verify email template exists
            $viewPath = 'emails.contact-form';
            if (!view()->exists($viewPath)) {
                throw new \Exception("Email template not found at: resources/views/emails/contact-form.blade.php");
            }

            // Send email notification
            Mail::to($adminEmail)->send(new ContactFormSubmitted($data));

            // Log successful submission
            \Log::info('Contact form submitted successfully', [
                'email' => $data['email'],
                'name' => $data['name']
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message! We will get back to you soon.'
            ]);

        } catch (\Exception $e) {
            $errorMessage = 'Failed to send your message. Please try again later.';
            $logMessage = sprintf(
                'Contact form submission error: %s. Data: %s',
                $e->getMessage(),
                json_encode($request->except(['_token', 'password']))
            );
            
            \Log::error($logMessage);
            
            return response()->json([
                'success' => false,
                'message' => $errorMessage,
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }
}
