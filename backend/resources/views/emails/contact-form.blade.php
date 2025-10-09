<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
        .content { padding: 20px; border: 1px solid #e9ecef; border-top: none; }
        .footer { margin-top: 20px; padding: 10px; text-align: center; font-size: 12px; color: #6c757d; }
        .field { margin-bottom: 10px; }
        .field-label { font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <span class="field-label">Name:</span>
                <span>{{ $data['name'] }}</span>
            </div>
            <div class="field">
                <span class="field-label">Email:</span>
                <a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a>
            </div>
            <div class="field">
                <span class="field-label">Company:</span>
                <span>{{ $data['company'] }}</span>
            </div>
            <div class="field">
                <span class="field-label">Phone:</span>
                <span>{{ $data['phone'] }}</span>
            </div>
            <div class="field">
                <span class="field-label">Service Interested In:</span>
                <span>{{ $data['service'] }}</span>
            </div>
            <div class="field">
                <span class="field-label">Budget:</span>
                <span>{{ $data['budget'] }}</span>
            </div>
            <div class="field">
                <span class="field-label">Timeline:</span>
                <span>{{ $data['timeline'] }}</span>
            </div>
            <div class="field">
                <div class="field-label">Message:</div>
                <div style="white-space: pre-line;">{{ $data['message'] }}</div>
            </div>
        </div>
        <div class="footer">
            © {{ date('Y') }} {{ config('app.name', 'Your Application') }}. All rights reserved.
        </div>
    </div>
</body>
</html>
