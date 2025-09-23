# Managing Projects

The homepage now lists project pages from `content/projects/` instead of `data/projects.yaml`.

## Add a New Project

1. Create a new bundle:
   ```bash
   hugo new projects/my-new-project/index.md
   ```
2. Edit the generated front matter fields:
   - `title`
   - `description` (or rely on the summary before the `<!--more-->` marker)
   - `tags` / `categories`
   - `weight` (lower = earlier)
   - `draft = false` when ready to publish
3. (Optional) Add an image file into the same folder and reference it via `image = 'screenshot.png'`.

## Ordering

Projects are sorted by `weight` ascending. Use gaps (e.g. 10, 20, 30) so you can insert later items.

## Content vs Summary

If `description` is empty the template will fall back to the page summary (text before `<!--more-->`).

## Repository Icon

If you set `repo = 'https://github.com/you/project'` in the front matter, a GitHub icon button appears in the project card header linking to the repository (opens in a new tab). Leave it blank to hide the icon.

## Empty State

If no non-draft projects exist, a friendly message is shown on the homepage.

## Migration from Data File

If you previously had `data/projects.yaml`, it's no longer used. You can remove it (or leave it unused). Convert entries by making one project page per item.

## Detail Pages

Each project lives in a page bundle folder: `content/projects/<slug>/index.md`. Clicking a homepage or /projects card navigates to `/projects/<slug>/` which uses `projects/single.html`.

Front matter fields on single pages:

- `title` – Page heading
- `date` – Shown if present
- `tags` – Inline badges
- `link` – Renders a “Live” button
- `repo` – Renders a “Code” button
- `image` – If present and found as a resource, processed (`Fit 1200x800`) and displayed above content

## Images

Put the referenced file (e.g. `screenshot.png`) alongside `index.md`. Set `image = 'screenshot.png'`. High‑resolution sources are fine; Hugo will resize.

## List Page

The `/projects/` route uses `projects/list.html` to show all non-draft projects sorted by `weight`.
