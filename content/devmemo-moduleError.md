---
title: 「モジュール 'module name' またはそれに対応する型宣言が見つかりません。」という警告が出た時の対処法
date: "2024-08-01"
description: "develop memo"
category: 💻 DevMemo
---

tsconfig.json の baseUrl を有効化する

```
"baseUrl": "./",
```

上記で解決。
