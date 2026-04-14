# Nicolas MAGNE TANG — Portfolio

Personal portfolio showcasing my work as a Battery Storage Systems and Smart Grids Engineer.

## About

This portfolio presents my expertise in battery technology, energy management systems, and electronic systems design. It features my professional experience, publications, projects, and technical skills in the field of energy storage and electric vehicle systems.

### Current Role

System Engineer – Energy Storage Systems & Performance at **Segula Technologies (Ampere - Renault Group)**, specializing in:

- **Battery State Estimators**: Validation and optimization of SOH (State of Health) and SOCE (State of Charge Estimation) algorithms in BMS
- **GTR-EVE Compliance**: Ensuring battery durability meets Global Technical Regulations for Electric Vehicles
- **Test Analysis**: WLTP cycle testing and calibration of embedded algorithms

### Technical Expertise

- Battery Modeling & Simulation (ECM, Equivalent Circuit Models)
- BMS & EMS Development and Validation
- Li-ion Battery Testing (EIS, Cycling, dQ/dV)
- SOH Estimation Methods (Empirical, Algorithmic, Machine Learning)
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

## Quick Links

- [Live Portfolio](https://nicolas.magnetang.com/)
- [LinkedIn](https://www.linkedin.com/in/nicomagnet/)
- [GitHub](https://github.com/nicomagnet)
- [ORCID](https://orcid.org/0000-0001-9875-4035)

## Built With

- [Hugo](https://gohugo.io/) — Static site generator (v0.111.3)
- [Wowchemy](https://wowchemy.com/) — Hugo academic theme
- [Netlify](https://www.netlify.com/) — Hosting and deployment

## Local Development

```bash
# Serve locally
hugo server

# Build for production
hugo --gc --minify
```

See [docs/HUGO_USAGE.md](docs/HUGO_USAGE.md) for detailed instructions.

## License

This template is based on the [Wowchemy Hugo Academic Theme](https://github.com/wowchemy/starter-hugo-academic) and is customized for personal portfolio use. CC BY-NC-ND 4.0