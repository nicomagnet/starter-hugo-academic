# AGENT GUIDELINES

This document outlines the conventions, commands, and style guidelines for agentic coding agents operating within this repository.

## 1. Build Commands

This is a Hugo Academic (Wowchemy) site with multilingual support.

### Hugo Commands

*   **Build Site:**
    ```bash
    hugo
    ```
    Compiles the Hugo site for development.

*   **Build Production:**
    ```bash
    hugo --gc --minify
    ```
    Compiles, garbage collects, and minifies for production (Netlify command).

*   **Serve Locally:**
    ```bash
    hugo server
    ```
    Starts local dev server with live reloading. Add `--disableFastRender` if needed.

## 2. Project Structure

```
starter-hugo-academic/
├── config/_default/    # Hugo config (YAML)
│   ├── config.yaml
│   ├── params.yaml
│   ├── languages.yaml
│   └── menus.*.yaml
├── content/           # Site content (multilingual)
│   ├── en/           # English (default)
│   ├── fr/           # French
│   └── es/           # Spanish
│       ├── _index.md  # Homepage
│       ├── authors/   # Author profiles
│       ├── project/   # Projects
│       ├── post/     # Blog posts
│       └── publication/ # Publications
├── data/             # Theme data
├── layouts/          # Custom layouts
├── static/           # Static assets
│   └── uploads/     # PDFs, resume
└── public/          # Built site (gitignored)
```

## 3. Multilingual Setup

### Languages
- **English** (`en`) - Default, at `/` and `/en/`
- **French** (`fr`) - At `/fr/`
- **Spanish** (`es`) - At `/es/`

Configured in `config/_default/languages.yaml`.

### Content Organization
Each language has its own directory under `content/`.

## 4. Content Editing

### Homepage
Edit `content/en/_index.md` to modify sections.

### Author Profile
Edit `content/en/authors/admin/_index.md`:
- `title`: Display name
- `role`: Job title
- `bio`: Short bio
- `interests`: List of interests
- `education`: Education history
- `social`: Social links (LinkedIn, GitHub, etc.)

### Projects
Add files to `content/en/project/` with YAML front matter.

## 5. Deployment (Netlify)

*   **Build:** `hugo --gc --minify -b $URL`
*   **Publish:** `public`
*   **Hugo Version:** `0.111.3` (in `netlify.toml`)

## 6. Code Style

*   **Indent:** 2 spaces
*   **YAML:** Use `_merge: deep` for theme inheritance
*   **Markdown:** Standard with `---` front matter delimiters