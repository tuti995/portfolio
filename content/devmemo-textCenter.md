---
title: テキストの中央寄せを考える
date: "2021-05-11"
description: "develop memo"
category: 💻 DevMemo
---

テキストの中央寄せをしたいときの考え方について。

```
text-align: center;
```

上記だと改行が起こった時に最終行が中央寄せになり見栄えが悪い場合がある。

```
display: flex;
justify-content: center;
```

上記を基本とし、ケースバイケースで対応していきたい。
