# Gua 日本語ガイド

[`link1345/gua`](https://github.com/link1345/gua) の Godot導入、テスト、Inspector、MCP操作を英語と日本語で解説する公式リファレンスサイトです。

英語版を正式な参照として扱います。翻訳内容に差異がある場合は英語版が優先されます。日本語版は既存パス、英語版は `/en/` 配下にあります。

## 開発

このリポジトリでは Bun を使用します。npm は不要です。

```powershell
bun install
bun run dev
```

## 検証・ビルド

```powershell
bun run check
bun run build
```

静的ファイルは `dist/` に生成されます。

## 公開

`main`へのpushで、GitHub Actionsが`https://gua.orizika.com/`へ自動デプロイします。初回のGitHub Pages設定とDNS設定は[DEPLOYMENT.md](DEPLOYMENT.md)を参照してください。

## ページ構成

- Godot編
  - UI実装の仕方
  - テストの仕方
- インスペクタ編
- MCPサーバー操作編
- Docs / Reference
  - Godotサンプル `main.gd`
  - .NETパッケージ

内容は Gua の `main` ブランチにある実装・サンプル・README をもとにしています。
