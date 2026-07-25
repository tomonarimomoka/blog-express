---
name: commit
description: This skill should be used when the user asks to "コミットして", "commit", "commit this", "commit staged changes", or otherwise requests creating a git commit for the current changes.
---

ステージにある変更をコミットする。pushはしない。

手順:
1. `git status` と `git diff --staged` でステージの内容を確認する
2. ステージが空の場合は、その旨を伝えて終了する（`git add` はしない）
3. 変更内容を踏まえて、**日本語**で簡潔なコミットメッセージを考える（「なぜ」を意識する）
4. 以下の形式でコミットする（HEREDOCを使うこと）:

```
git commit -m "$(cat <<'EOF'
<日本語のコミットメッセージ>

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

5. `git status` でコミットが成功したことを確認する

注意:
- pushは絶対にしない
- コミットメッセージは日本語のみ
- ステージにあるものだけをコミットする（未ステージのファイルを勝手に `git add` しない）
- pre-commitフックが失敗した場合は原因を修正し、再度ステージしてから新しいコミットを作成する（`--no-verify` は使わない）
