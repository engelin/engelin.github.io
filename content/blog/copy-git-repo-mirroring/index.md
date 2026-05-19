---
title: (Updated) Git cheatsheet (Mirroring, Merge, Rebase, Patch)
date: '2023-11-02T13:26:37.121Z'
---

## 1. Copy your Git Repository to another (git mirroring)

### Clone your repository

```bash
git clone --mirror https://github.com/exampleuser/repository-to-mirror.git
```

### Set the push location to your mirror

```bash
cd repository-to-mirror.git
git remote set-url origin https://github.com/exampleuser/mirrored.git
```

### Push to your mirror

```bash
git push --mirror
```

## 2. git merge with commit log

```bash
git merge --no-ff <branch>
```

[Git - git-merge Documentation](https://www.atlassian.com/git/tutorials/using-branches/git-merge#:~:text=In%20the%20event%20that%20you,the%20%2D%2Dno%2Dff%20option.&text=This%20command%20merges%20the%20specified,a%20fast%2Dforward%20merge).)

## 3. Update feature branch with develop branch

```bash
git:(develop) ✗ git checkout feature-branch
git:(feature-branch) ✗ git rebase develop
```

## 4. Create a patch file from a commit

```bash
git format-patch -1 <commit>
```

### Applying the patch

```bash
git apply --stat file.patch  # show status of the patch
git apply --check file.patch # check for error before applying
git am < file.patch          # apply the patch finally
```

- Ref: https://stackoverflow.com/questions/6658313/generate-a-git-patch-for-a-specific-commit
