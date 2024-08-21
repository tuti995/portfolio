---
title: target=”_blank”の脆弱性を考え対策する
date: "2024-03-27"
description: "develop memo"
category: 💻 DevMemo
---

target=”\_blank”の脆弱性を考え、rel 属性を追加して元ウインドウを参照させないようにする。

```
<a href="URL" target="_blank" rel="noopener noreferrer">リンク先</a>
```

上記の対策で解決。
