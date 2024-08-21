---
title: npmで install と ci における挙動の違い
date: "2024-06-15"
description: "develop memo"
category: 💻 DevMemo
---

install と ci の違い

```
npm install
```

- package.json をもとにインストールする
- package-lock.json が更新される

```
npm ci
```

- package-lock.json をもとにインストールする
- node_modules ディレクトリが存在していれば自動的に削除され、完全に新しい環境でインストールが行われる
- package-lock.json は更新されない
