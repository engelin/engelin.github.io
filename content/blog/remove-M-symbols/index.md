---
title: Remove Control-M symbols from files on Mac
date: '2023-11-24T15:57:06.121Z'
---

## Before

```bash
$ vi -v file
This is a test^M
```

## Remove Control-M symbols from files on Mac

1. Using `sed` command

```bash
find . -type f -exec sed -i '' -e 's/\r//g' {} \;
```

2. Using `dos2unix` command

```bash
brew install dos2unix
find . -type f -print0 | xargs -0 dos2unix
```

## After

```bash
$ vi -v file
This is a test
```
