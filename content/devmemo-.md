---
title: コンソールエラーについて調べてみた
date: "2024-08-02"
description: "develop memo"
category: 💻 DevMemo
---

コンソールに下記のようなエラーが出た際に調べた時のメモ。

```
Unchecked runtime.lastError: The message port closed before a response was received.
```

chrome extension が原因のようだった。

該当する拡張機能をオフにすることでエラーは解消できた。
