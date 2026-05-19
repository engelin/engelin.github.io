---
title: Upgrade Laravel from version 7 to 10
date: '2023-05-26T13:57:37.121Z'
---

## Upgrade Laravel from version 7 to 10

### PHP version

Upgrade your PHP version from 7.3 to 8.1 since Laravel 10 uses 8.1 or higher according to the official document.

### Dependencies version

Upgrade your dependencies version to the latest version. You can use the following command to upgrade your dependencies version.

```bash
composer update -vvv
```

### Update laravel packages

```diff
diff --git a/composer.json b/composer.json
index a952ffdf..4a1ef24a 100644
--- a/composer.json
+++ b/composer.json
@@ -5,35 +5,33 @@
     "license": "MIT",
     "type": "project",
     "require": {
-        "php": "^7.3",
-        "fideloper/proxy": "^4.0",
-        "guzzlehttp/guzzle": "~6.0",
-        "laravel/framework": "^7.0",
-        "laravel/tinker": "^2.0",
-        "laravel/ui": "^2.0",
+        "php": "^8.1",
+        "guzzlehttp/guzzle": "^7.7",
+        "laravel/framework": "^10.10",
+        "laravel/sanctum": "^3.2",
+        "laravel/tinker": "^2.8",
+        "laravel/ui": "^4.2"
     },
     "require-dev": {
-        "facade/ignition": "^2.4",
-        "fzaninotto/faker": "~1.4",
-        "mockery/mockery": "^1.0",
-        "nunomaduro/collision": "^4.1",
-        "phpunit/phpunit": "^8.5"
+        "fakerphp/faker": "^1.9.1",
+        "laravel/breeze": "^1.21",
+        "laravel/pint": "^1.0",
+        "laravel/sail": "^1.18",
+        "mockery/mockery": "^1.4.4",
+        "nunomaduro/collision": "^7.0",
+        "phpunit/phpunit": "^10.1",
+        "spatie/laravel-ignition": "^2.0"
     },
     "autoload": {
         "classmap": [
```

1. Removed since has been included into laravel by default

- fideloper/proxy
  - https://packagist.org/packages/fideloper/proxy
  - https://github.com/fideloper/TrustedProxy/issues/152

2. Removed since haven't been used or no longer supported.

- anhskohbo/no-captcha
- superbalist/laravel-google-cloud-storage
- nao-pon/elfinder-flysystem-driver-ext
- nao-pon/flysystem-google-drive

### Result composer.json

```diff
diff --git a/composer.json b/composer.json
index a952ffdf..4a1ef24a 100644
--- a/composer.json
+++ b/composer.json
@@ -5,35 +5,33 @@
     "license": "MIT",
     "type": "project",
     "require": {
-        "php": "^7.3",
-        "anhskohbo/no-captcha": "^3.3.0",
-        "barryvdh/laravel-dompdf": "^0.9.0",
-        "doctrine/dbal": "^2.9",
-        "fideloper/proxy": "^4.0",
-        "google/apiclient": "^2.9",
-        "guzzlehttp/guzzle": "~6.0",
-        "intervention/image": "^2.4",
-        "ixudra/curl": "^6.21",
-        "laravel/framework": "^7.0",
-        "laravel/tinker": "^2.0",
-        "laravel/ui": "^2.0",
-        "laravelcollective/html": "^6.0",
+        "php": "^8.1",
+        "barryvdh/laravel-dompdf": "^2.0",
+        "doctrine/dbal": "^3.6",
+        "google/apiclient": "^2.15",
+        "guzzlehttp/guzzle": "^7.7",
+        "intervention/image": "^2.7",
+        "ixudra/curl": "^6.22",
+        "laravel/framework": "^10.10",
+        "laravel/sanctum": "^3.2",
+        "laravel/tinker": "^2.8",
+        "laravel/ui": "^4.2",
+        "laravelcollective/html": "^6.4",
         "maatwebsite/excel": "^3.1",
-        "nao-pon/elfinder-flysystem-driver-ext": "^1.0",
-        "nao-pon/flysystem-google-drive": "~1.1",
-        "orangehill/iseed": "^2.6",
-        "pusher/pusher-php-server": "4.1",
-        "spatie/laravel-permission": "^3.0",
-        "superbalist/laravel-google-cloud-storage": "^2.2",
-        "yajra/laravel-datatables-oracle": "~9.0"
+        "orangehill/iseed": "^3.0",
+        "pusher/pusher-php-server": "7.2",
+        "spatie/laravel-permission": "^5.10",
+        "yajra/laravel-datatables-oracle": "10.4"
     },
     "require-dev": {
-        "facade/ignition": "^2.4",
-        "fzaninotto/faker": "~1.4",
-        "mockery/mockery": "^1.0",
-        "nunomaduro/collision": "^4.1",
-        "phpunit/phpunit": "^8.5"
+        "fakerphp/faker": "^1.9.1",
+        "laravel/breeze": "^1.21",
+        "laravel/pint": "^1.0",
+        "laravel/sail": "^1.18",
+        "mockery/mockery": "^1.4.4",
+        "nunomaduro/collision": "^7.0",
+        "phpunit/phpunit": "^10.1",
+        "spatie/laravel-ignition": "^2.0"
     },
     "autoload": {
         "classmap": [
```

## Clean up

```bash
composer clear
composer install
```
