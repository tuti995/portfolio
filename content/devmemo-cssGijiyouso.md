---
title: CSSの擬似要素の「:」について
date: "2022-01-15"
description: "develop memo"
category: 💻 DevMemo
---

CSS の擬似要素は単一コロン「 : 」でも使用できるが、正しくは二重コロン「 :: 」。  
コロンの違いで擬似クラスと擬似要素を区別する方が望ましい。

```
h2:before {}
h2::before {}
```
