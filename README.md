# プロジェクト名
Learning Task Manager

## 概要
React を使用した、シンプルなタスク管理アプリです。
タスク追加・完了管理・削除が可能で、データは LocalStorage に保存されます。

## 作成背景・目的
React および GitHub の練習用として作成いたしました。
特に、状態管理やコンポーネント分割、LocalStorage を用いたデータ永続化といった React の基本設計と、TypeScript への移行による型安全な実装の理解を目的としております。

## 機能一覧
- タスクの追加
- タスクの一覧表示
- タスクの完了 / 未完了の切り替え
- タスクの削除
- LocalStorage によるデータ永続化

## 使用技術

- React
- TypeScript
- Vite
- LocalStorage

## データ構造
タスクは以下のようなオブジェクトとして管理しております。
```ts
{
  id: number,
  title: string,
  completed: boolean
}
```

## 開発状況
- [x] Vite + React プロジェクトの初期化
- [x] タスクの追加・表示・削除機能の実装
- [x] LocalStorage によるデータ永続化
- [x] TypeScriptへの移行