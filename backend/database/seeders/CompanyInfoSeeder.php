<?php

namespace Database\Seeders;

use App\Models\CompanyInfo;
use Illuminate\Database\Seeder;

class CompanyInfoSeeder extends Seeder
{
    public function run(): void
    {
        $companyInfo = [
            [
                'key' => 'company_name',
                'value' => 'DuxOne',
            ],
            [
                'key' => 'company_email',
                'value' => 'info@duxone.com',
            ],
            [
                'key' => 'company_phone',
                'value' => '+1 (555) 123-4567',
            ],
            [
                'key' => 'company_address',
                'value' => '123 Business St, City, Country',
            ],
            [
                'key' => 'about_us',
                'value' => 'We are a team of passionate developers and designers creating amazing digital experiences.',
            ],
            [
                'key' => 'mission',
                'value' => 'To deliver high-quality software solutions that help businesses grow.',
            ],
        ];

        foreach ($companyInfo as $info) {
            CompanyInfo::updateOrCreate(
                ['key' => $info['key']],
                $info
            );
        }
    }
}
