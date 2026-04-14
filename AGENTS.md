# AGENT GUIDELINES

This document outlines the conventions, commands, and style guidelines for agentic coding agents operating within this repository.

## 1. Build Commands

This is a Hugo Academic (Wowchemy) site with multilingual support.
This project is a Hugo Blox (formerly Wowchemy/Hugo Academic) site with multilingual support.

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
    hugo server -D --disableFastRender
    ```
    Starts local dev server with live reloading. Add `--disableFastRender` if needed.

    _Description: Starts a local development server with live reloading._

*   **Build Future-Dated Content:**
    ```bash
    hugo --buildFuture
    ```
    _Description: Includes content with future `date` front matter (used for deploy previews on Netlify)._

### Go Commands

The project uses Go modules for Hugo Blox theme integration (`go.mod`). Hugo version is managed via `netlify.toml`.

*   **Get Modules:**
    ```bash
    hugo mod get -u
    ```
    _Description: Update Hugo module dependencies._

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
├── assets/              # SCSS custom styles, media
│   └── scss/          # Custom CSS/SCSS
├── config/_default/     # Hugo configuration
│   ├── config.yaml    # Main config
│   ├── params.yaml   # Theme parameters
│   ├── languages.yaml # Multilingual config
│   └── menus.*.yaml  # Navigation menus
├── content/           # Site content (multilingual)
│   ├── en/          # English (default)
│   ├── fr/          # French
│   └── es/          # Spanish
│       ├── _index.md # Homepage sections
│       ├── authors/  # Author profiles
│       ├── project/  # Projects
│       ├── post/    # Blog posts
│       └── publication/ # Publications
├── data/              # Theme data
│   └── themes/      # Custom color themes
├── layouts/           # Custom layouts/overrides
│   └── partials/hooks/ # Head/body hooks
├── static/            # Static assets
│   └── uploads/     # PDFs, resume
└── public/           # Built site (gitignored)
```

## 3. Multilingual Setup

### Languages Configuration

The site supports 3 languages configured in `config/_default/languages.yaml`:
- **English** (`en`) - Default, served at `/` and `/en/`
- **French** (`fr`) - Served at `/fr/`
- **Spanish** (`es`) - Served at `/es/`

### Content Organization

Each language has its own directory under `content/`:
- `content/en/` - English content (default)
- `content/fr/` - French translations
- `content/es/` - Spanish translations

### Key Content Files

| File | Purpose |
|------|---------|
| `content/en/_index.md` | Homepage with sections config |
| `content/en/authors/admin/_index.md` | Author profile (bio, links) |

## 4. Adding/Editing Content

### Homepage Sections

Edit `content/en/_index.md` to modify sections. Available blocks:
- `about.biography` - Profile/biography
- `portfolio` - Projects showcase
- `experience` - Work experience timeline
- `collection` - Posts/publications
- `features` - Skills grid
- `contact` - Contact form

### Author Profile

Edit `content/en/authors/admin/_index.md`:
```yaml
---
title: Your Name
role: Your Title
bio: Short bio
interests:
  - Skill 1
  - Skill 2
education:
  courses:
    - course: Degree
      institution: School
      year: 2024
social:
  - icon: linkedin
    link: https://linkedin.com/...
---
Your extended bio here.
```

### Projects

Add markdown files to `content/en/project/` with front matter:
```yaml
---
title: Project Name
date: 2024-01-01
external_link: https://...
---
Project description...
```

## 5. Custom Styling

### Adding Custom CSS

1. **SCSS method** (recommended): Add to `assets/scss/custom.scss`
2. **Theme hook**: Add styles to `layouts/partials/hooks/head-end.html`
3. **Custom theme**: Create `data/themes/custom_theme.toml`

### Custom Theme Format

Create `data/themes/custom_name.toml`:
```toml
[color_menu]
primary = "#000000"
accent = "#4f46e5"
# ... colors

[font_menu]
heading = "Font Name"
body = "Font Name"
```

Then set `appearance.color_theme: custom_name` in `params.yaml`.

## 6. Deployment (Netlify)

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
## 7. Code Style Guidelines

### EditorConfig

*   **Character Set:** `utf-8`
*   **End of Line:** `lf`
*   **Indent Size:** `2` spaces
*   **Indent Style:** `space`

### YAML

*   Max line length: `100`
*   Use `_merge: deep` to inherit theme defaults

### Markdown

*   Use standard Markdown
*   Front matter with `---` delimiters

## 8. Known Issues

*   Hugo version mismatch may cause build errors locally - site builds correctly on Netlify with correct version.
*   Custom SCSS needs proper hooks to load - use `head-end.html` for guaranteed loading.
