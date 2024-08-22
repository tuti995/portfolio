---
title: YouTube 埋め込み動画のレスポンシブ
date: "2021-07-17"
description: "develop memo"
category: 💻 DevMemo
---

埋め込み動画のレスポンシブ対応が必要になった際のメモ。

まず、iframe をブロック要素で囲む。

```
.iframe-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.iframe-wrap iframe {
  width: 100%;
  height: 100%;
}
```

上記で解決。
