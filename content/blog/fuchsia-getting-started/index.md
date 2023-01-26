---
title: A new OS, Fuchsia, getting started
date: "2022-08-19T10:30:37.121Z"
---

# Getting started Fuchsia

Fuchsia is a modern open source operating system that’s simple, secure, updatable, and performant. It provides core operating system functions like system resource management, a driver framework, and software abstractions. Fuchsia is a general purpose operating system designed to power a diverse ecosystem of hardware and software.

But currently(19th of Aug, 2022), it doesn't support Apple silicon officially.

## 1. Setup build environment
### Jiri
Jiri is a tool for multi-repo development. It supports:

- syncing multiple local GIT repos with upstream,
- capturing the current state of all local repos in a “snapshot”,
- restoring local project state from a snapshot, and
- facilitating sending change lists to Gerrit.

#### Install dependencies
```shell
brew install wget pkg-config glib autoconf automake libtool golang
```

#### Install Jiri
[Jiri: manage git repositories](https://fuchsia.googlesource.com/jiri)
```shell
git clone https://fuchsia.googlesource.com/jiri
cd jiri
go install ./cmd/jiri
```

#### [Bootstrapping](https://fuchsia.googlesource.com/jiri#bootstrapping)
```shell
export MY_ROOT="$JIRI_REPO"
curl -s https://fuchsia.googlesource.com/jiri/+/HEAD/scripts/bootstrap_jiri\?format\=TEXT | base64 --decode | bash -s "$MY_ROOT"
# cipd bootstrapped to path:"$JIRI_REPO/.jiri_root/bin/cipd"
# Please add $JIRI_REPO/.jiri_root/bin to your PATH
export PATH="$JIRI_REPO/.jiri_root/bin"
```

## 2. Download Fuchsia repository
### Login
```shell
$JIRI_REPO/.jiri_root/bin/cipd auto-login
# Getting a refresh token with following OAuth scopes:
#  * https://www.googleapis.com/auth/userinfo.email

# Visit the following URL to get the authorization code and copy-paste it below.
# ...
```

### Download
```shell
curl -s "https://fuchsia.googlesource.com/fuchsia/+/HEAD/scripts/bootstrap?format=TEXT" | base64 --decode | bash
```

If you want to get a specific [layer](https://fuchsia.googlesource.com/docs/+/ea2fce2874556205204d3ef70c60e25074dc7ffd/development/source_code/layers.md), you can run this command.

```shell
curl -s "https://fuchsia.googlesource.com/scripts/+/master/bootstrap?format=TEXT" | base64 --decode | bash -s <layer>
```

---

## Refs.
1) [Learn about Fuchsia](https://fuchsia.dev/fuchsia-src/get-started/sdk/learn/intro)
2) [Fuchsia Readme](https://fuchsia.googlesource.com/docs/+/ea2fce2874556205204d3ef70c60e25074dc7ffd/README.md)
