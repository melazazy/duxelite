-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 01, 2025 at 10:54 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `duxelite`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `name`, `slug`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Technology', 'technology', 'Articles about Technology', '2025-09-25 20:16:52', '2025-09-25 20:16:52'),
(2, 'Web Development', 'web-development', 'Articles about Web Development', '2025-09-25 20:16:52', '2025-09-25 20:16:52'),
(3, 'Mobile Development', 'mobile-development', 'Articles about Mobile Development', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(4, 'UI/UX Design', 'ui-ux-design', 'Articles about UI/UX Design', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(5, 'Business', 'business', 'Articles about Business', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(6, 'Design', 'design', 'Articles about Design', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(7, 'Development', 'development', 'Articles about Development', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(8, 'Marketing', 'marketing', 'Articles about Marketing', '2025-09-25 20:16:53', '2025-09-25 20:16:53');

-- --------------------------------------------------------

--
-- Table structure for table `blog_comments`
--

CREATE TABLE `blog_comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `author_name` varchar(255) NOT NULL,
  `author_email` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `is_approved` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `author_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `excerpt` text DEFAULT NULL,
  `content` longtext NOT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `read_time` varchar(255) DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT 0,
  `views` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `category_id`, `author_id`, `title`, `slug`, `excerpt`, `content`, `featured_image`, `published_at`, `read_time`, `is_published`, `views`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 2, 1, 'Sample Blog Post 1', 'sample-blog-post-1', 'This is a sample excerpt for blog post 1. 57ZQd7ja2zSUixAHLjaJiUccii1VLhs4WDCq7fpeXVBjFXfwx9XilhHd4tGOYMyTPBFNyfpLEXxxpJgaAkur6BKsygh68q1md3tl', '<p>This is the full content of blog post 1. A4o119KtEBX1gPVoE8PiGKZk4jZVLNFAx9ye3MnLiSJ7BoRUBIa3qPfrtL8WfcbA7HceTUPzyIcpg9X95TDnZ6LZ4bzJLwaIBNsKyYmtmCVtKVm0Vlwk7doxi2mnfSkHs1Lk088V5OdKLxPwkQmIfmkFsqjm9UTm6n3Z3lhVLH4cnsnkIiiLu65Y4GazvHdMo0bOFc0Y1OjvAREs1VbiLDFr2bu1PqthMpl2Jf4tdurJCZhYp7aXkEiLPhMgykrAXvzlREzEeJpTUbwgfkTBXc9LPNuj2bxaCsB5dBbEFacE5ZAPSazKpGCpTM5T6QN2wNvbJqLWoanXElTeV27NKL1A6OyVs1M8JyNy71oOYhvWLj0hnOxbaXd4xADdVaKOChL0Mr286laT8JQOxyqqBsDHeNe5svPtdwuvHvbR3YE6Ajd0V8c1lMOBZ6SYt6dZy2KkOYQ6AtG8vmtOuBw4tnWGk0fZ52wi0T5YSqdtMPGmo62PSmK2</p>', NULL, '2025-09-25 20:16:53', '7 min read', 1, 230, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(2, 2, 1, 'Sample Blog Post 2', 'sample-blog-post-2', 'This is a sample excerpt for blog post 2. 1ElhhnJVcyecHfLv2sqjI1C87JEBtozatboQtfptqHfy6nvXDeY78Qq96Rpx7ZkVU6eVVU2RXraZEabhGxaphUhPGOdbAXL1f6eK', '<p>This is the full content of blog post 2. dOA1cbVE8SZrYMUtav0fN1HnMDQIx9W4FUQ2zU5tMbvM3NnRzaaqH5q0drrDmL53WnXcgoiJcoGi9xVauoSUh80VH32XaRiIMBV6gmRqZ1p6ZmfaMyH2dxCumj33RhNu7ytTZY5imsrikxiH9ZImPBkWIQMAdnwn1nK1J6cZQ1LUhwANjqCY1AitZhD5hQpRhTUCmkg3adbmXibfxPxbHPdWn9LHHYm2x0qdzpqcBQmy1IlIm1MNKgOK8zruucdVbjhYu8nKfYcNwU9VxhGbRjow0XXFThZAdRjhY62p9Zr8KtnIPqQpIPolRM7yNQAmB82VueVMeCR35cr3yDurpYQTaamwtZl5fzpPxjoe1PFa8nxjvmPXIhtdjdGqN8hPws6KNtzKFOQiMyhu9bGOlmINfgJueVLHbbfjOWN8FqphIWcB3BKrN6sTNp9aAfDc0r9GeCY18BXWKloiZZudwQujzAIVgEfJq8NeXsoaLp1U9TdWUUJ2</p>', NULL, '2025-09-25 20:16:53', '4 min read', 1, 817, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(3, 1, 1, 'Sample Blog Post 3', 'sample-blog-post-3', 'This is a sample excerpt for blog post 3. VV22QdwzIhKWSxctlqgpGPai8ysqgSxNUmETr82Bb5J0htaIFFPrXZfGjnMGCDLrzPiDa0NWoQelNQwygZ4JqifuYDpdp5wbWCOs', '<p>This is the full content of blog post 3. eaE7j5MjEt2Zrc9W0w4eGWXVMTCZpQrO9xYl2Ate0c9I2YJzsAYtYWxiOMMQiBF6qiQoBTYveCHW69lWFhlItIgDZiMDMzLQNuosJKrDLEggQuDoBAYa9vtGqitFH6fSvVWjxMhcBIdJV7NTm7XcmGIfnRzVqX3CzwT4biHE8Lo5iF04DYtZVy4ckgbxwWn8JgeTL9c83pmKwU3GpYQZp3PdGBxapbluNYHBqUVtKdbLOzLOv3mU5KzsKMsIu1VItY2n9SB5I2Tu6Mbl6cd1Zie2Nu5vw7kJ0Z2FqPabCNBuTN6xb3ACHcFguxTcuAVPNnb5M4OMBiL3os1KiXHYf7jLYpUZRi61QAFXQDeFZU0ilT0FA6HCzFthV8InY8FtXXIEQMgdybdPVm8CS1o0Fe8zCU4K76xjPE8jnTnjGzmuJnjhuY3CF0nDPcfFCyi6QXgeStlyVochg4MyQI0hQo9eEFqjpXcUcRpOk5V51GWdQEFOKZne</p>', NULL, '2025-09-25 20:16:53', '3 min read', 1, 337, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(4, 3, 1, 'Sample Blog Post 4', 'sample-blog-post-4', 'This is a sample excerpt for blog post 4. DS8dvfG62NpfkyCiksGMx6NmfHcImC9agI6bXQIJTErHdPakzzQKcviOiO0Kdgc86RnjUGqDRifYCZ1UuCIIiC8qKA2GBUS69jnZ', '<p>This is the full content of blog post 4. NRnOaMdLN6pftseBJnpUC7gDJ4yYGnlERoN4zWBiGyNW7vu870y9RyUECrTQi7Hl3yhfF1ALxYoTvY7kwxVZGp2sPqPHyyLWKGDFPrKA33yWRviuKkZk1Jv5IedRQT7emPpHmrMso9hWQSkgqxSSs4v9B5KsXPZz6i2oJ8N0TedMnyh2PkCu4K8e4V8C6Y2cfyZXopfLsp1qQxILaFoIyWRkuhjIqXLCjdMmiDjTdyt2pjjY50F9nyrJvw6niHnbPXobIo4I3yKrPBRllYiViVirrZxVmNF3oVUjMlr4oupx5y3y6wjYWJLFjT8Xb5keNk1rB4YBGdhHFzO14BaXdGFHhsQbjXaRKk3GFHMnLsKdryT3wuMJOFZlcpIDGLcrAOrvzkrrWcztElpNwdDAJSPNneBMlyXpejmPbkXojvlO5lkB4AzM0qm8BcbyX9c4gjFMaXHSsLFfO2RtG1dIyEP63HZ3imoq9PY3LG2j2S90cmJMYawz</p>', NULL, '2025-09-25 20:16:53', '10 min read', 1, 849, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(5, 3, 1, 'Sample Blog Post 5', 'sample-blog-post-5', 'This is a sample excerpt for blog post 5. 1aYwFGqpmMPcovh49tnZWTBi0PVSckeCY6q58f1QlluiY7qHw8ssTBWQF8Hr9K8fbVHOjcXX2N7ZjwOhKOGOHn2nTzA6KRMAiQ8Q', '<p>This is the full content of blog post 5. hR3HX2wxRnBW24xWXW3X7sgwhEnUagJGc6I4NF0bUo2EVpATd4MyhO0bd5g5P13pYkA2iReYMmp5e3SlzgCeYcCdHUKK6ac0GtxOH99bI6ysOGG29CPAFdp0y48ncdUAKIzvFQcBsanWgqi2mEHAUjsB739k36pR5ynnclYdLIwmh5tc4TjiihuDE2s4Gh4CpMHtF2InTBQH77v3T5f3U6UuKtpuGwkCGH25gfsxz4xyxf4eWxkO4C5ULF6qi4Iae7ULNyQ8pxi1el5qm8heaGn5lhTSbjK1ZPKkTtSO6mRKgNnorOf5oU04jMe2dPqBtXYrirMphEzSb4fuoNPEMzJ5fYRrUgw41iLnOF6hcWgXTKhi6wi48403NUseTBJk7DKobF4SOi6H8SB7WrsQOshJbtse9cBnhW9m9sn48SuO8GYZ60urz12rLAOuttRcuZQGeFKEJCphijTjJygpWN1BdFauvX12fchfFPbSn9HL59CD0hL0</p>', NULL, '2025-09-25 20:16:53', '5 min read', 1, 991, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(6, 4, 1, 'Sample Blog Post 6', 'sample-blog-post-6', 'This is a sample excerpt for blog post 6. Refw7gpxbe2KcNf59HvwRRqus19wXDf4WrhhEHphW90MlUCbq5ve1vCOqBZ3jVmQQFPmDsYE9yBKtaoJOlXnQosa8cPgleq03O1C', '<p>This is the full content of blog post 6. LMUjL0iYxo2U9OHAA4OJzqLJ6WfQjjdLeQb01VGwbx8lJPe96bJialjZACYO62978vD2OFYEZfXVKaU11Z7JDcJtEqNgLZDB5gkpLxBnF6qGR1fQNjbFgqxdgwxd4UaoLB7dZoVsB198np4D06FPhvAEkfLk6ixkem8CU6ZYELIpQyPETMfGaOc7BTBzB3vB86zQA72GhBZq5i49MAd8agp8a4BvHqqeDKn2JWWCBqQ0Y8vJsTO8t67Er7QaAz5WRkot4oZjOxgcxotjzCC9A6E3FZaPEugUnhz7UdvJvLUxF5a7qOOgDn5H7vwhe8ENRetgqln8kKoiVEBMsifhjxZnXT12MvPhDAiS6XXWBqJ50e1D9CCZaq8RnTUmDhAH7S7CYmoszIixauqfFvxhAPRgfaaMSId11dmn8MKBumm3uOQTtHf0Ap1jsdA8Ls3paJewOOnNUL6s3Y96kpW8YWWjjVQd3j1gZFM4PFAK1f2n2kNSlSry</p>', NULL, '2025-09-25 20:16:53', '7 min read', 1, 205, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(7, 2, 1, 'Sample Blog Post 7', 'sample-blog-post-7', 'This is a sample excerpt for blog post 7. 7fPMMGCi66cavpoXBuyDBq3jduME8StyciEefICO8mTrY23oMYfq3Y1wKHU78nUivFtVEwr1OZ5vFTBKIJWG59tVc3P8iaKo6fBr', '<p>This is the full content of blog post 7. weMODiwsfaqyDmpT6jqKaBSWFjCdSKIrRJVEmkbgHWCfhsdHMOOt2lmeOydIUD98tZZ0pp0wBkkAxmBWiU2GkC7r9gqKfBA8AhsmOdOPh0zBiXdCEnfL8VjgB4QQZAl9FUrQgSFzACF5TE10mHvnCCchwp6JQNkpL7GHVA30d27d12f9Ct4iIbytYKLVSLmYR6U0O4knNQlK1vH88vRu5hM2xvUAU9X1cXVvGhaX9VaVTOQqyqfspuMagXn1ggC39LPYNoHqjT4rXSzPbbOcwJx3eSnobZY1YIoUYEwsz4uGHYIeeQmAoETFSULOr2cPsuag2AtsOgq5e79LTDLFqfK9vNMmW0ptkie1Nr2pFa53BYd3URwG15byzfUZLdTxp1rR0cDXzIqs4bZ6kNUV4CN2ujdieAiXTNSeLfQW2CAf1wyVWugNuj957Z3b0ciOoqPD3nlCScdzxMByvgIwwpw40owwVdOJkhvpYLBAthyMh0YMM5Qj</p>', NULL, '2025-09-25 20:16:53', '4 min read', 1, 898, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(8, 3, 1, 'Sample Blog Post 8', 'sample-blog-post-8', 'This is a sample excerpt for blog post 8. TWo2jQNp0zDCMsn4RKe4UKPXfbDJkd52BMWopLZcUFUpzcp7TACq33FLXTxTRqX1BjzA64ZqbovR442VxaPwQZ7peogpfyRD6crl', '<p>This is the full content of blog post 8. m4exy7kor9SzXLYY2AjFu26pWbFC0fjl2DVY46m8r9z2Mvy7AlaLm8yCkBOyMYkqs6lkCSFTYe1NoFpo1HuEQei6BaKrpj0ghg9fbfhaJlGrYfwX9OKpJY8SqLCpgVDhkmon21tbX70Wco1ZCK1H0aMlQWHwsg1z785E1znktFYOCk0j4niR6QIGOCAvtjJDSIKVLdS9EGf0RQhu4PH0Mh3SJ3h7RmxZ27E7InPa3mpza3EFRtxxIIHzmCKf2DjakYcBQ9JjqQxrebdwST8HFG5qAg7G1eT8PsAF4tndkvJj7rz3i6DWwa4ANKPgexXoRT0cC6mLoJxtHq0mnvHCOrHdnF5QgMc2NxMahIuGWelBfa67mKXF5TcXCBOQ2hQKIjoQDf0Mp04l9hWk0NtJKo2fjisBSetnAjlV6B3ZcDTfviSsG9WESd85Bh4Gg1xBTI6zTfljt9wGXhEYj7aK26fuBgOuTRLdak8QYGhdB78dW7Dr0VXY</p>', NULL, '2025-09-25 20:16:53', '10 min read', 1, 581, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(9, 4, 1, 'Sample Blog Post 9', 'sample-blog-post-9', 'This is a sample excerpt for blog post 9. XjWdVJ1lRh19PljBbw8N1q4xlm5r19zhlqskxEbCTT5Rr3ovNJVeLxJbBjLnv5pxjAHsEoJGmXwVJbe51UGr297RYH2SxLy9r8lG', '<p>This is the full content of blog post 9. bRZu1SW5UDJ2gd8WVAULjn1kbviIw6Oo4iwJE2HAMVSXMkUjlDmPTftaRZ2PTl93cFtLyZfTKDPVJ8i63IpxSdB9MUgySeTM6kLLM1QtIDVu3mwrO9YhgXK2yxNdsKFQ0StPYFhNKwV7vREzVq7Vf9aAReJsbct4fvQ1PIt5rhoDGdsiR6xymZ8tKO5sUWkJc6OXiIc0zBfI00aXaiTnZcjSalBQbvw0oCrzKnS89qWQA3oQs3PbaoIuHZLMUAFaqAcQoHm5kQLsIQgVrAEP6eSaxwp6PNXy9EbQJ8jGtje2DXl7RIhsmvcj1zjdFwDxYmpIRMAmHWcximobFqPS5nrdTGqSyRyZ0HYx8AE6VbcqxO8pBDIVOaH8Bz6oXG2VRKGwO69kC7lpdDalU6Sgq5mXI74EGfCyVqh55siguvUabzioN0wE6TI7LoAddqBEgV6X9KacgJEVaavwjaZ59t8a5tpVvNsBlzsgmx1JlcWNhIBY42Pi</p>', NULL, '2025-09-25 20:16:53', '9 min read', 1, 463, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(10, 1, 1, 'Sample Blog Post 10', 'sample-blog-post-10', 'This is a sample excerpt for blog post 10. uSepz4N8irKejxfLIbVRde2OP2EcgB4QQvQGayEp1SQ4nUCoPAWV3hAAZTl20Lbbl41HQoblw1sbrcD5O1pJfCbnUHFGqzfvJV8m', '<p>This is the full content of blog post 10. OGM67KRb35gpXDsuqL81VKFm3hHo0YlBDEkx6FHqKVImmloIS1qxc8XQdyCJh2fSFSaIiikcFcRCRD6DpyNvoYp6gJWk8aYl2DexdelzOrR0R2n8ET42arODyNEkRx8cDYrjEufyK5eDynlIIMNOTwA7Mb4COWnSXdoWCrMQs5zq52FIZZxOBgo01kD3ofwdhjxMj4y7TI4U8EAdQV0rqlZvrIu96O20c0w7HlRsMsbIbg0QoxK8BbVBTz8QfMzGxMnmPUdJWkbdGbpb29WkQtNwOzFujfzTenGEi4On1YZugHN4TSCzVSPyeWcTzTwRgqwgIyJoLTuSjdRq0bqwlLDw1XYyqwWDlzhlX6y3BsdxMMwfAiIxniSvogCmkSwnN2kPZRuzK8GpGp8Cs5Ry53jhdFdlhq6Wmma9HprDxo6rwoD8uNQZxDub5DyKtBmPyAaIoGiKWrAb2TcMckSHQvOK5QS44NrUpVmiVvicCn1BAoOu8i2F</p>', NULL, '2025-09-25 20:16:53', '9 min read', 1, 834, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(11, 1, 1, 'Getting Started with Laravel 10', 'getting-started-with-laravel-10', 'Laravel 10 introduces several new features and improvements. In this article, we\'ll explore how to get started with the latest version of Laravel.', '<p>Laravel 10 introduces several new features and improvements. In this article, we\'ll explore how to get started with the latest version of Laravel.</p>', 'http://localhost:8000/storage/posts/laravel-10.jpg', '2025-09-20 20:16:53', '5 min read', 1, 0, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(12, 2, 1, 'The Future of Web Development', 'future-of-web-development', 'Web development is constantly evolving. Let\'s take a look at the latest trends and technologies shaping the future of the web.', '<p>Web development is constantly evolving. Let\'s take a look at the latest trends and technologies shaping the future of the web.</p>', 'http://localhost:8000/storage/posts/web-dev-future.jpg', '2025-09-22 20:16:53', '7 min read', 1, 0, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blog_post_tag`
--

CREATE TABLE `blog_post_tag` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_post_tag`
--

INSERT INTO `blog_post_tag` (`id`, `post_id`, `tag_id`, `created_at`, `updated_at`) VALUES
(1, 1, 6, NULL, NULL),
(2, 1, 2, NULL, NULL),
(3, 2, 6, NULL, NULL),
(4, 2, 3, NULL, NULL),
(5, 3, 1, NULL, NULL),
(6, 3, 6, NULL, NULL),
(7, 3, 3, NULL, NULL),
(8, 3, 4, NULL, NULL),
(9, 4, 7, NULL, NULL),
(10, 4, 6, NULL, NULL),
(11, 4, 4, NULL, NULL),
(12, 5, 8, NULL, NULL),
(13, 5, 5, NULL, NULL),
(14, 5, 4, NULL, NULL),
(15, 6, 7, NULL, NULL),
(16, 6, 8, NULL, NULL),
(17, 6, 4, NULL, NULL),
(18, 6, 2, NULL, NULL),
(19, 7, 7, NULL, NULL),
(20, 7, 5, NULL, NULL),
(21, 7, 4, NULL, NULL),
(22, 8, 8, NULL, NULL),
(23, 8, 5, NULL, NULL),
(24, 8, 2, NULL, NULL),
(25, 9, 1, NULL, NULL),
(26, 9, 6, NULL, NULL),
(27, 10, 7, NULL, NULL),
(28, 10, 5, NULL, NULL),
(29, 10, 3, NULL, NULL),
(30, 10, 2, NULL, NULL),
(31, 11, 1, NULL, NULL),
(32, 11, 6, NULL, NULL),
(33, 12, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blog_tags`
--

CREATE TABLE `blog_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_tags`
--

INSERT INTO `blog_tags` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Laravel', 'laravel', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(2, 'Vue.js', 'vuejs', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(3, 'React', 'react', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(4, 'Tailwind CSS', 'tailwind-css', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(5, 'JavaScript', 'javascript', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(6, 'PHP', 'php', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(7, 'Design', 'design', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(8, 'Development', 'development', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(9, 'CSS', 'css', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(10, 'UI/UX', 'uiux', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(11, 'Business', 'business', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(12, 'Startup', 'startup', '2025-09-25 20:16:53', '2025-09-25 20:16:53');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `case_studies`
--

CREATE TABLE `case_studies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `client` varchar(255) NOT NULL,
  `industry` varchar(255) NOT NULL,
  `challenge` text NOT NULL,
  `solution` text NOT NULL,
  `results` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`results`)),
  `technologies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`technologies`)),
  `timeline` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `project_id` bigint(20) UNSIGNED DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `published_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `company_infos`
--

CREATE TABLE `company_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `company_infos`
--

INSERT INTO `company_infos` (`id`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'company_name', 'DuxOne', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(2, 'company_email', 'info@duxone.com', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(3, 'company_phone', '+1 (555) 123-4567', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(4, 'company_address', '123 Business St, City, Country', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(5, 'about_us', 'We are a team of passionate developers and designers creating amazing digital experiences.', '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(6, 'mission', 'To deliver high-quality software solutions that help businesses grow.', '2025-09-25 20:16:53', '2025-09-25 20:16:53');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2025_09_25_000000_create_core_tables', 1),
(2, '2025_09_25_000050_create_main_tables', 1),
(3, '2025_09_25_000100_update_blog_system', 1),
(4, '2025_09_25_000200_update_projects_services', 1),
(5, '2025_09_26_000300_fix_missing_tables_and_columns', 1),
(6, '2025_09_26_043903_add_soft_deletes_to_projects_table', 2),
(7, '2025_09_26_043912_add_soft_deletes_to_services_table', 2),
(8, '2025_09_26_043916_add_soft_deletes_to_blog_posts_table', 2),
(9, '2025_09_26_043921_add_soft_deletes_to_case_studies_table', 2),
(10, '2025_09_26_050221_add_missing_columns_to_case_studies_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `client` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'published',
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `technologies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`technologies`)),
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `github_url` varchar(255) DEFAULT NULL,
  `project_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `category_id`, `title`, `slug`, `description`, `client`, `status`, `is_featured`, `technologies`, `image`, `url`, `github_url`, `project_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'E-commerce Platform', 'ecommerce-platform', 'A full-featured e-commerce platform with inventory management and payment processing.', 'Fashion Retailer Inc.', 'completed', 0, '[\"Laravel\",\"Vue.js\",\"MySQL\",\"Tailwind CSS\",\"Stripe\"]', 'http://localhost:8000/storage/projects/ecommerce.png', NULL, NULL, NULL, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(2, 1, 'Corporate Website', 'corporate-website', 'A modern corporate website with blog and contact management system.', 'Tech Solutions Ltd.', 'completed', 0, '[\"WordPress\",\"PHP\",\"JavaScript\",\"Sass\"]', 'http://localhost:8000/storage/projects/corporate.jpg', NULL, NULL, NULL, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL),
(3, 2, 'Fitness Mobile App', 'fitness-mobile-app', 'A fitness tracking application with workout plans and progress tracking.', 'FitLife', 'in-progress', 0, '[\"React Native\",\"Node.js\",\"MongoDB\",\"Firebase\"]', 'http://localhost:8000/storage/projects/fitness-app.jpg', NULL, NULL, NULL, '2025-09-25 20:16:53', '2025-09-25 20:16:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `project_categories`
--

CREATE TABLE `project_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `project_categories`
--

INSERT INTO `project_categories` (`id`, `name`, `slug`, `description`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Web Development', 'web-development', 'Projects related to Web Development', 1, '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(2, 'Mobile Development', 'mobile-development', 'Projects related to Mobile Development', 1, '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(3, 'UI/UX Design', 'uiux-design', 'Projects related to UI/UX Design', 1, '2025-09-25 20:16:53', '2025-09-25 20:16:53');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `icon` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `slug`, `description`, `features`, `icon`, `is_active`, `is_featured`, `sort_order`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Web Development', 'web-development', 'Custom web applications built with modern technologies to meet your business needs.', '[\"Responsive Design\",\"Custom CMS Integration\",\"E-commerce Solutions\",\"API Development\",\"Performance Optimization\"]', NULL, 1, 0, 0, '2025-09-25 20:16:52', '2025-09-25 20:16:52', NULL),
(2, 'Mobile App Development', 'mobile-app-development', 'Native and cross-platform mobile applications for iOS and Android.', '[\"iOS & Android Development\",\"React Native Cross-platform\",\"UI\\/UX Design\",\"App Store Deployment\",\"Push Notifications\"]', NULL, 1, 0, 0, '2025-09-25 20:16:52', '2025-09-25 20:16:52', NULL),
(3, 'UI/UX Design', 'ui-ux-design', 'Beautiful and intuitive user interfaces that enhance user experience.', '[\"User Research\",\"Wireframing & Prototyping\",\"Interactive Design\",\"Usability Testing\",\"Design Systems\"]', NULL, 1, 0, 0, '2025-09-25 20:16:52', '2025-09-25 20:16:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('cF5zf9HddAzMTHXJsnBmoCVQ45DyKqinhty8ZsFu', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOHJOTGtGeTkyM1VSOVNidUJxZ1pEQ3RXTkpUMDRPRFRXNzV0R3JuNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1758999990);

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `subscribed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `unsubscribed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_name` varchar(255) NOT NULL,
  `client_role` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `content` text NOT NULL,
  `is_approved` tinyint(1) NOT NULL DEFAULT 1,
  `image` varchar(255) DEFAULT NULL,
  `rating` int(11) NOT NULL DEFAULT 5,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `client_name`, `client_role`, `company`, `content`, `is_approved`, `image`, `rating`, `is_featured`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Sarah Johnson', 'CEO', 'TechCorp', 'The team delivered exceptional results on our e-commerce platform. Highly recommended!', 1, 'https://randomuser.me/api/portraits/women/2.jpg', 5, 0, 0, '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(2, 'Michael Chen', 'Marketing Director', 'Global Solutions', 'Professional service and excellent communication throughout the project.', 1, 'https://randomuser.me/api/portraits/men/1.jpg', 5, 0, 0, '2025-09-25 20:16:53', '2025-09-25 20:16:53'),
(3, 'Mahmoud A', 'CEO', 'NanoTech', 'فريق رائع ، صبور ، قادر على تحليل المتطلبات واخراجها بكل دقة', 1, 'https://randomuser.me/api/portraits/men/1.jpg', 5, 0, 0, '2025-10-01 05:41:48', '2025-10-01 05:42:02');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin User', 'admin@example.com', '2025-09-25 20:16:52', '$2y$12$nD7620/Wp5fKM0EyXh8N2.6bG0HIynUAKe0K0o5VWQVFR0r9gANfK', NULL, '2025-09-25 20:16:52', '2025-09-25 20:16:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_categories_slug_unique` (`slug`);

--
-- Indexes for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_comments_post_id_foreign` (`post_id`),
  ADD KEY `blog_comments_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_posts_slug_unique` (`slug`),
  ADD KEY `blog_posts_category_id_foreign` (`category_id`),
  ADD KEY `blog_posts_author_id_foreign` (`author_id`);

--
-- Indexes for table `blog_post_tag`
--
ALTER TABLE `blog_post_tag`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_post_tag_post_id_tag_id_unique` (`post_id`,`tag_id`),
  ADD KEY `blog_post_tag_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `blog_tags`
--
ALTER TABLE `blog_tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blog_tags_slug_unique` (`slug`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `case_studies_slug_unique` (`slug`),
  ADD KEY `case_studies_project_id_foreign` (`project_id`);

--
-- Indexes for table `company_infos`
--
ALTER TABLE `company_infos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `company_infos_key_unique` (`key`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `projects_slug_unique` (`slug`),
  ADD KEY `projects_category_id_foreign` (`category_id`);

--
-- Indexes for table `project_categories`
--
ALTER TABLE `project_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `project_categories_slug_unique` (`slug`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `services_slug_unique` (`slug`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subscribers_email_unique` (`email`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `blog_comments`
--
ALTER TABLE `blog_comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `blog_post_tag`
--
ALTER TABLE `blog_post_tag`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `blog_tags`
--
ALTER TABLE `blog_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `case_studies`
--
ALTER TABLE `case_studies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company_infos`
--
ALTER TABLE `company_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project_categories`
--
ALTER TABLE `project_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD CONSTRAINT `blog_comments_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `blog_comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD CONSTRAINT `blog_posts_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `blog_posts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `blog_categories` (`id`);

--
-- Constraints for table `blog_post_tag`
--
ALTER TABLE `blog_post_tag`
  ADD CONSTRAINT `blog_post_tag_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_post_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `blog_tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD CONSTRAINT `case_studies_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `project_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
