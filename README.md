# Nicolas MAGNE TANG — Portfolio

Personal portfolio showcasing my work as a Battery Systems Engineer specializing in BMS/EMS development and battery state estimation.

## 🚀 Live Site

- **English:** https://nicolas.magnetang.com/en
- **French:** https://nicolas.magnetang.com/fr
- **Spanish:** https://nicolas.magnetang.com/es

## About

Battery Systems Engineer with expertise in BMS/EMS development and battery state estimation (SoC, SoH). Currently working on durability analysis for GTR-EVE regulation at Ampere - Renault Group.

### Technical Expertise

- Battery Modeling & Simulation (ECM)
- BMS & EMS Development
- Li-ion Battery Testing (EIS, Cycling)
- SOH/SOCE Estimation
- Programming: MATLAB/Simulink, Python, Power BI

## Repository Structure

```
starter-hugo-academic/
├── config/_default/    # Hugo config (YAML)
│   ├── config.yaml    # Main config
│   ├── params.yaml    # Theme params
│   ├── languages.yaml # Multilingual config
│   └── menus.*.yaml   # Navigation menus
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

## Multilingual Support

The site supports 3 languages:
- **English** (`en`) - Default, at `/` and `/en/`
- **French** (`fr`) - At `/fr/`
- **Spanish** (`es`) - At `/es/`
├── assets/scss/              # Custom SCSS styles
├── config/_default/          # Hugo configuration
│   ├── config.yaml        # Main config
│   ├── params.yaml      # Theme parameters
│   └── languages.yaml   # Multilingual setup
├── content/               # Multilingual content
│   ├── en/             # English (default)
│   ├── fr/             # French
│   └── es/             # Spanish
│       ├── _index.md    # Homepage
│       ├── authors/    # Author profiles
│       ├── project/    # Projects
│       └── post/      # Blog posts
├── data/themes/           # Custom color themes
├── layouts/              # Custom layouts
│   └── partials/hooks/ # Style hooks
└── static/uploads/       # PDFs, resume
```

## Multilingual Setup

The site supports 3 languages:
- **English** (`en`) - Default: `/` and `/en/`
- **French** (`fr`) - `/fr/`
- **Spanish** (`es`) - `/es/`

Language is detected automatically. Each language has its own content directory under `content/{lang}/`.

## Custom Design

The site uses a custom **Spotlight-inspired** design:

- **Colors:** Slate/Zinc palette with Indigo accent (#4f46e5)
- **Typography:** System fonts (San Francisco, Segoe UI, Roboto)
- **Components:** Rounded cards, pill buttons, subtle shadows
- **Dark Mode:** Supported via toggle

### Custom Files

- `assets/scss/custom.scss` - Custom SCSS styles
- `data/themes/custom_theme.toml` - Custom color theme
- `layouts/partials/hooks/head-end.html` - Injected styles

## Quick Links

- [LinkedIn](https://www.linkedin.com/in/nicomagnet/)
- [GitHub](https://github.com/nicomagnet)
- [ORCID](https://orcid.org/0000-0001-9875-4035)

## Built With

- [Hugo](https://gohugo.io/) — Static site generator (v0.111.3)
- [Wowchemy](https://wowchemy.com/) — Hugo academic theme
- [Netlify](https://www.netlify.com/) — Hosting and deployment
- [Hugo Blox](https://hugoblox.com/) — Website builder
- [Netlify](https://www.netlify.com/) — Hosting & deployment

## Local Development

```bash
# Install dependencies
brew install hugo go

# Serve locally
hugo server -D --disableFastRender

# Build for production
hugo --gc --minify
```

## Deployment

Automatically deployed to Netlify on push to `main`.

- **Build Command:** `hugo --gc --minify -b $URL`
- **Publish Directory:** `public`
- **Hugo Version:** 0.111.3

## License

This template is based on the [Wowchemy Hugo Academic Theme](https://github.com/wowchemy/starter-hugo-academic) and is customized for personal portfolio use. CC BY-NC-ND 4.0
CC BY-NC-ND 4.0 — Personal portfolio based on Hugo Blox theme.
