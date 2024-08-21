---
title: リモートブランチにはないローカルブランチを削除したい
date: "2022-06-24"
description: "develop memo"
category: 💻 DevMemo
---

ローカルブランチが溜まってしまったため削除したときのメモ。

「リモートブランチに存在しない」かつ「マージ済み」のブランチをすべて削除する

```
git fetch -p && git branch --merged | grep -v '*' | xargs git branch -d
```

「リモートブランチに存在しない」ブランチをすべて削除する

```
git fetch -p && git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```
