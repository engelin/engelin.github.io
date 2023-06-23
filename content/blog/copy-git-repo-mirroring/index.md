---
title: Copy your Git Repository with commit log (git mirroring)
date: "2023-05-26T13:26:37.121Z"
---

## Copy your Git Repository to another (git mirroring)

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

#### c.f. git merge with commit log

```bash
git merge --no-ff <branch>
```
[Git - git-merge Documentation](https://www.atlassian.com/git/tutorials/using-branches/git-merge#:~:text=In%20the%20event%20that%20you,the%20%2D%2Dno%2Dff%20option.&text=This%20command%20merges%20the%20specified,a%20fast%2Dforward%20merge).)
