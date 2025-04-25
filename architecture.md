# 利用技術

- typescript@5
- react@19
- react-router@7
- jotai@2
- vite@5
- vitest@latest
- @biomejs/biome@latest
- @vanilla-extract/css@latest

## 方針

- スタイリングは@vanilla-extract/cssを使うこと
- Lint/FormatterはBiomeを使うこと
- テストはVitestで実装すること

## 初期実装

- 下記の2ページを持つアプリケーション
  - Top画面
  - About画面
- @vanilla-extract/cssを使って簡単にスタイルをあてている
- Top画面は「ようこそ」というメッセージと、About画面へのリンクを表示する
- About画面はこのアプリの説明をしてください
- ヘッダーに各画面のリンクを表示する
