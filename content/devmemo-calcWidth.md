---
title: calcを使ったwidthの指定方法
date: "2021-08-02"
description: "develop memo"
category: 💻 DevMemo
---

alc を使った width の指定方法が便利とのことだったので調べた際のメモ。

```
width : calc((100%/12)*X)
```

上記の「X」部分に指定したい幅（X/12）を入れると、画面サイズが変わっても比率が保たれる。  
デザインカンプが 12 分割して作られている際は使っていきたい。
