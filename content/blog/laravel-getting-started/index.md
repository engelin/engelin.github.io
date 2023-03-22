---
title: Laravel on macOS + Apple Silicon
date: "2023-03-16T13:48:48.111Z"
---

## Getting Started

1. Composer install
```sh
php composer.phar install
```

2. Laravel license
```sh
php artisan key:generate
```

3. Storage link
```sh
php artisan storage:link
```

4. Database migrate and seed
```sh
php artisan migrate --seed
```

5. Run serve
```sh
php artisan serve
```

## DB Docker 
1. Install MariaDB image via shell
```sh
docker pull mariadb
docker images
REPOSITORY                   TAG                                        IMAGE ID       CREATED         SIZE
mariadb                      latest                                     1ce04e4274d5   2 weeks ago     384MB
docker run IMAGEID
```

