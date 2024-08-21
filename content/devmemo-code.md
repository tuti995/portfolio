---
title: コマンドからVS Codeが起動できなかった
date: "2023-06-24"
description: "develop memo"
category: 💻 DevMemo
---

よくチュートリアルなどである、「code . で VS Code を開きます」が自分の環境でできなかった際のメモ。

解決方法

1. VS Code を起動
2. コマンドパレットで>shell と入力し、「シェルコマンド: PAHT 内に VS Code をインストールします (Shell Command: Install code command in PATH)」を選択
3. インストール後に再度コマンドから code . を試す
4. できた！
