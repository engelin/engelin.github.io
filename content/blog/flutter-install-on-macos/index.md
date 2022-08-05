---
title: Flutter Install on macOS (Apple silicon)
date: "2022-08-03T18:09:37.121Z"
---

# Flutter Install on macOS (Apple silicon)

## 🔎 Getting Started

### 1. Install flutter

```
:blue_circle: FVM and Sidekick are useful to manage Flutter versioning.
```
- [Sidekick Download](https://github.com/fluttertools/sidekick/releases)
- [FVM install](https://fvm.app/docs/getting_started/installation)

**1) Download [Flutter SDK](https://docs.flutter.dev/get-started/install/macos#get-sdk).**

**2) Add the flutter tool to your path.**

_From macOS catalina, macOS shell is changed from bash to zsh. So you can find this path environment in `~/.zprofile` or `~/.zshrc`._
```shell
export PATH="$PATH:`pwd`/flutter/bin"
```

#### iOS
**1) Setup Xcode.**

To build iOS using `xcode-cli`, firstly you should run the Xcode once to agree license, or just run the below command. 
```shell
sudo xcodebuild -runFirstLaunch
sudo xcodebuild -license
```

And if you've already got the latest one, you don't need to download again. But if you need to download, you should switch what you use. 
```shell
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

**2) Install CocoaPods again.**

Probably you will meet a problem, `CocoaPods not installed.` or
```
Error: To set up CocoaPods for ARM macOS, run:
  arch -x86_64 sudo gem install ffi

Error running pod install
Error launching application on iPhone 13 mini.
```
, when you try to use some packages on Android Studio. Or you can simply check running `flutter doctor --verbose`. 
Then, to fix this, reinstall CocoaPods using `homebrew`. 
```shell
gem uninstall cocoapods
brew install cocoapods
```

#### Android
**1) Setup Android tool chain.**


### 2. Setup IDE

#### JetBrain

- [Android Studio](https://developer.android.com/studio)
- [IntelliJ](https://www.jetbrains.com/idea/download/#section=mac)

You can simply install Flutter and Dart plugins and restart your IDE.

#### Visual Studio Code

- [Visual Studio Code](https://code.visualstudio.com/download)

You can simply install Flutter and Dart extensions. And add the configurations for flutter flavors in `.vscode/launch.json`.
```json
{
    "name": "xxx (dev)",
    "program": "lib/main_dev.dart",
    "request": "launch",
    "type": "dart"
},
{
    "name": "xxx (prod)",
    "program": "lib/main_prod.dart",
    "request": "launch",
    "type": "dart"
},
```

## Refs.

- [macOS install](https://docs.flutter.dev/get-started/install/macos)

### Useful flutter sites

- [Flutter packages](https://pub.dev/)
- [Flutter UI components](https://fluttergems.dev/)
