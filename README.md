# アプリケーション名
Share_app

# アプリケーション概要
- 他のユーザーと予定の共有ができます。
- 他のユーザーの予定に対してコメントをすることができます。
- 自身の予定管理にも使えます。

# URL
未実装

# テスト用アカウント
未実装

# データベース設計


# テーブル設計

## users テーブル

| Column                  | Type   | Options                  |
| ----------------------- | ------ | ------------------------ |
| nickname                | string | null: false              |
| email                   | string | null: false, unique:true |
| encrypted_password      | string | null: false              |
| last_name               | string | null: false              |
| first_name              | string | null: false              |
| lname_kana              | string | null: false              |
| fname_kana              | string | null: false              |
| birthday                | date   | null: false              |

### Association

- has_one :share
- has_many :requests

## share テーブル

| Column             | Type       | Options                           |
| ------------------ | -----------| --------------------------------- |
| share_title        | string     | null: false, limit:20             |
| relationship       | integer    | null: false                       |
| detail             | text       | null: false,limit:500             |
| start_date         | datetime   | null: false                       |
| end_date           | datetime   | null: false                       |
| user               | references | null: false, foreign_key:true     |

<!-- imageはActiveStorageにて実装予定 -->

### Association

- belongs_to :user
- has_many :requests

## request テーブル

| Column           | Type         | Options                        |
| ---------------- | ------------ | ------------------------------ |
| request_title    | string       | null: false, limit:30          |
| content          | text         | null: false, limit:500         |
| user             | references   | null: false, foreign_key:true  |
| share            | references   | null: false, foreign_key:true  |

<!-- imageはActiveStorageにて実装予定 -->

### Association

- belongs_to :user
- belongs_to :share