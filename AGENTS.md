# AGENT GUIDELINES

This document outlines the conventions, commands, and style guidelines for agentic coding agents operating within this repository. Adhering to these guidelines ensures consistency, maintainability, and efficient collaboration.

## 1. Build, Lint, and Test Commands

This project is a Hugo Academic site utilizing Wowchemy themes, with underlying Go modules.

### Hugo Commands

*   **Build Site (Development):**
    ```bash
    hugo
    ```
    _Description: Compiles the Hugo site for development._

*   **Build Site (Production, Minified):**
    ```bash
    hugo --gc --minify
    ```
    _Description: Compiles, garbage collects unused resources, and minifies for production. This matches the Netlify build command._

*   **Serve Site (Local Development Server):**
    ```bash
    hugo server
    ```
    _Description: Starts a local development server with live reloading. Add `--disableFastRender` if you encounter rendering issues._

*   **Build Future-Dated Content:**
    ```bash
    hugo --buildFuture
    ```
    _Description: Includes content with future `date` front matter (used for deploy previews on Netlify)._

### Go Commands

The project uses Go modules for Wowchemy theme integration (`go.mod`). If custom Go code is added:

*   **Run All Go Tests:**
    ```bash
    go test ./...
    ```

*   **Run a Single Go Test:**
    ```bash
    go test -run TestName ./path/to/package
    ```
    _Replace `TestName` with the exact test function name and `./path/to/package` with the target package._

*   **Format Go Code:**
    ```bash
    go fmt ./...
    ```

*   **Vet Go Code:**
    ```bash
    go vet ./...
    ```

## 2. Code Style Guidelines

### General EditorConfig Settings

The `.editorconfig` file enforces:

*   **Character Set:** `utf-8`
*   **End of Line:** `lf`
*   **Indent Size:** `2` spaces
*   **Indent Style:** `space`
*   **Insert Final Newline:** `true`
*   **Trim Trailing Whitespace:** `true`

### File-Specific Rules

| File Type | Rule |
|-----------|------|
| `*.toml` | Max line length: `100` |
| `*.md` | Do NOT trim trailing whitespace |
| `layouts/shortcodes/*.html` | Do NOT insert final newline |

### YAML Front Matter (`config/_default/*.yaml`, content `index.md`)

*   Use YAML for Hugo configuration (`config/_default/config.yaml`, `params.yaml`, `menus.yaml`, `languages.yaml`).
*   Use `_merge: deep` to inherit Wowchemy module defaults.
*   Front matter in content files uses YAML format with `---` delimiters.
*   Standard front matter fields: `title`, `summary`, `date`, `publishDate`, `authors`, `tags`, `categories`.

### Markdown Content (`content/**/*.md`)

*   Use plain text Markdown with support for LaTeX math, diagrams, and code blocks.
*   RMarkdown (`.Rmd`) and Jupyter (`.ipynb`) files are ignored per `ignoreFiles` config.
*   Trailing whitespace is preserved (per EditorConfig).

### Go-Specific Style

*   **Formatting:** Always run `go fmt` on Go source files.
*   **Naming:** `CamelCase` for exported, `camelCase` for unexported. Clear, concise names.
*   **Imports:** Group standard library separately from third-party. Use `goimports`.
*   **Types:** Use structs for complex data, interfaces for behavior.
*   **Error Handling:** Check errors explicitly, propagate with context, return as last value.

## 3. Project Structure

```
config/_default/    # Hugo configuration (YAML)
content/            # Site content (Markdown, organized by section)
data/               # Data files (e.g., page_sharer.toml)
layouts/            # Custom Hugo layouts and shortcodes
static/             # Static assets (images, CSS, JS)
assets/             # Processed assets (SCSS, JS pipelines)
```

## 4. Deployment (Netlify)

*   **Build Command:** `hugo --gc --minify -b $URL`
*   **Publish Directory:** `public`
*   **Hugo Version:** `0.111.3` (set in `netlify.toml`)
*   Deploy previews build future-dated content automatically.

## 5. Cursor/Copilot Rules

No specific Cursor (`.cursor/rules/`, `.cursorrules`) or Copilot (`.github/copilot-instructions.md`) rules exist. Default to these guidelines and general best practices.
