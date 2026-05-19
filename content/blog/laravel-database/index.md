---
title: Laravel database migration rollback
date: '2023-09-06T10:27:06.121Z'
---

```sh
php artisan migrate:rollback --path="database/migrations/2023_07_27_153712_add_category_id_to_products.php"

   INFO  Rolling back migrations.

  2023_07_31_125358_add_group_id_to_products ......... Migration not found
  2023_07_31_125155_create_product_group_images_table  Migration not found
  2023_07_31_124932_create_product_groups_table ...... Migration not found
  2023_07_27_153712_add_category_id_to_products ................ 39ms DONE
  2023_07_27_142554_create_categories_table .......... Migration not found
  2023_06_09_093443_add_coating_type_into_job_orders_table  Migration not found
  2023_06_09_092417_add_is_single_coating_into_products_table  Migration not found
  2023_05_25_173814_add_lot_no_column_into_materials_table  Migration not found
  2023_05_23_114244_add_column_lot_no_invoice_material_used_table  Migration not found
  2023_04_18_025526_create_user_logins_table ......... Migration not found
  2022_12_01_094249_add_column_shade_option_products_table  Migration not found
```
