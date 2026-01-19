# プロジェクト名
learning-task-manager

## 概要
React.jsを使用した、シンプルなタスク管理ツールです。

## 作成背景・目的
ReactおよびGitHubの練習用として作成いたしました。
特に、状態管理とLocalStorageを用いた、データ保存の理解を目的としております。

## 機能一覧（LocalStorage版）
- タスクを追加
- タスクを一覧表示
- タスクを完了/未完了に切り替え

## 使用技術

- React
- LocalStorage

## データ構造
タスクは以下のようなオブジェクトとして管理しています。
```js
{
  id: number,
  title: string,
  completed: boolean
}
