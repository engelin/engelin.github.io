---
title: Flutter update to 3.7.0 (flutter_intl generate failure)
date: "2023-01-26T08:37:37.121Z"
---

# Flutter 3.7.0 Update

## Errors
Flutter doctor
```sh
/Users/xxx/fvm/default/bin/flutter doctor --verbose
[!] Flutter (Channel stable, 3.7.0, on macOS 13.1 22C65 darwin-arm64, locale en-GB)
    • Flutter version 3.7.0 on channel stable at /Users/arum/fvm/versions/stable
    ! Warning: `dart` on your path resolves to /opt/homebrew/Cellar/dart/2.18.1/libexec/bin/dart, which is not inside your current Flutter SDK checkout at /Users/arum/fvm/versions/stable. Consider adding /Users/arum/fvm/versions/stable/bin to the front of your path.
    • Upstream repository https://github.com/flutter/flutter.git
    • Framework revision b06b8b2710 (2 days ago), 2023-01-23 16:55:55 -0800
    • Engine revision b24591ed32
    • Dart version 2.19.0
    • DevTools version 2.20.1
    • If those were intentional, you can disregard the above warnings; however it is recommended to use "git" directly to perform update checks and upgrades.
...
```

Flutter intl error
```
...
Could not find a file named "pubspec.yaml" in "/Users/arum/.pub-cache/hosted/pub.dev/intl_utils-2.6.1".
...
Error: The method 'File.create' has fewer named arguments than those of overridden method 'File.create'.
...
```

### Workarounds
```sh
$ flutter pub cache repair 
Reinstalled 1227 packages.
Reactivating intl_utils 2.6.1...
Building package executables...
Built intl_utils:generate.
Built intl_utils:localizely_download.
Built intl_utils:localizely_upload_main.
Reactivating very_good_cli 0.9.0...
Building package executables...
Built very_good_cli:very_good.
Installed executable very_good.
Reactivating dcdg 4.0.1...
Building package executables...
Built dcdg:dcdg.
Installed executable dcdg.
Reactivating flutterfire_cli 0.2.4...
Building package executables...
Built flutterfire_cli:flutterfire.
Installed executable flutterfire.
Reactivating fvm 2.4.1...
Building package executables...
Built fvm:main.
Installed executable fvm.
Reactivated 5 packages.
```

```sh
$ flutter pub cache clean
This will remove everything inside /Users/arum/.pub-cache.
You will have to run `flutter pub get` again in each project.
Are you sure? (y/N)? y
Removing pub cache directory /Users/arum/.pub-cache.
```

```sh
$ flutter pub get
Resolving dependencies...
  build_runner 2.3.3 (2.4.0 available)
  intl 0.17.0 (0.18.0 available)
  js 0.6.5 (0.6.6 available)
  matcher 0.12.13 (0.12.14 available)
  path 1.8.2 (1.8.3 available)
  scrollable_positioned_list 0.2.3 (0.3.5 available)
  test_api 0.4.16 (0.4.18 available)
  win32 3.1.3 (4.1.0 available)
These packages are no longer being depended on:
- intl_utils 2.8.1
Changed 1 dependency!
```
