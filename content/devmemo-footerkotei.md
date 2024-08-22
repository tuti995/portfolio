---
title: フッターをページ下部に固定配置したい
date: "2024-01-14"
description: "develop memo"
category: 💻 DevMemo
---

ポートフォリオ作成時に改めて実装方法について調べてみた。  
色々なやり方でできるが、下記が一番しっくりきたので本サイトに採用。

```
body {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
```
