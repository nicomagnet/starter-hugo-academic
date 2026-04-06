# Session Reference — Portfolio Project

> Created: April 2026 | Last Updated: April 2026
> This document serves as a reference for future development sessions.

---

## Current Project State

### Repository
- **Name:** `starter-hugo-academic` (needs rename)
- **URL:** https://github.com/nicomagnet/starter-hugo-academic
- **Live Site:** https://nicolas.magnetang.com/
- **Hosting:** Netlify (automatic deploy on push to `main`)

### What Was Done in Previous Sessions

#### Documentation Created
- `docs/HUGO_USAGE.md` — Complete guide for using the Hugo Academic template
- `docs/DEPLOY.md` — Netlify deployment guide
- `AGENTS.md` — Guidelines for agentic coding agents

#### Content Cleanup
- Removed demo content: `event/example`, `post/`, `project/`, `slides/`, demo publications
- Cleaned demo publications (`conference-paper`, `journal-article`, `preprint`)
- Removed template preview image (`preview.png`)

#### Sections Activated
- `accomplishments` (Certifications)
- `collection` (Blog - posts)
- `portfolio` (Projects)
- `collection` (Publications)

#### Navigation Updated (`config/_default/menus.yaml`)
```
Home → Skills → Experience → Certifications → Blog → Projects → Publications → Contact → CV
```

#### Text Corrections
- Fixed grammar in `content/authors/admin/_index.md`
- Removed trailing whitespace from content files
- Updated education entries to proper format

#### README Updated
- Custom README created for Nicolas MAGNE TANG portfolio
- References original Wowchemy template

---

## User Preferences

| Setting | Value |
|---------|-------|
| Default Language | English |
| UI Direction | To be defined later |
| AI Writing | Yes — workflow to be set up |
| Medium/LinkedIn | Research first |

---

## Next Steps — By Priority

### 🔴 HIGH PRIORITY

#### Phase 1: Project Rename & Repository Config
**Estimated time:** 30 minutes

| Task | Action Required | Done |
|------|-----------------|------|
| 1.1 Rename GitHub repo | Do externally in GitHub Settings | ❌ |
| 1.2 Update `baseURL` in `config.yaml` | If domain changes | ❌ |
| 1.3 Update GitHub remote URL | `git remote set-url origin <new-url>` | ❌ |
| 1.4 Update Netlify deploy settings | If repo name changes | ❌ |
| 1.5 Update references to `starter-hugo-academic` | Search and replace in code | ❌ |

#### Phase 2A: Blog System Verification
**Estimated time:** 15 minutes

| Task | Action | Done |
|------|--------|------|
| 2A.1 Verify blog section renders | Run `hugo server` and check | ❌ |
| 2A.2 Configure blog archetypes | Create `archetypes/default.md` | ❌ |
| 2A.3 Set up categories & tags | Define in content organization | ❌ |

---

### 🟡 MEDIUM PRIORITY

#### Phase 2C: Content Roadmap

##### Ready to Write (Completed Projects)
| # | Topic | Source Material | Status |
|---|-------|-----------------|--------|
| 1 | LFP/NMC Battery Optimization | Thesis/papers | TODO |
| 2 | Ohmic Drop Compensation Method | Research notes | TODO |
| 3 | Second-Life Battery Analysis | LEPMI project | TODO |
| 4 | SOH/SOC Estimators Validation | Current work | TODO |
| 5 | WLTP Test Analysis | Current work | TODO |

##### Draft Topics (Future)
| # | Topic | Status |
|---|-------|--------|
| D1 | GTR-EVE Regulation Deep Dive | TODO |
| D2 | ML for SOH Estimation | TODO |
| D3 | Battery Digital Twin Concepts | TODO |
| D4 | EMS Optimization for EVs | TODO |

##### AI Writing Workflow
- **Input:** Notes, project docs, MATLAB/Simulink outputs
- **Process:** AI drafts → User reviews → Refine
- **Format:** Markdown for Hugo
- **Style:** Technical + accessible, 800-1500 words
- **Structure:** Intro → Problem → Method → Results → Conclusion

---

### 🟢 LOW PRIORITY (Research First)

#### Phase 5: LinkedIn Integration
| Option | Recommendation |
|--------|-----------------|
| LinkedIn Featured section | **Do now** — 2x more profile views |
| Manual sharing | Simple, full control |
| Auto-post via GitHub Action | Evaluate later |
| Blog → LinkedIn newsletter | Research needed |

**Action:** Add portfolio link to LinkedIn "Featured" section

#### Phase 6: Medium Integration
| Approach | Recommendation |
|----------|-----------------|
| POSSE Method | Publish on site, syndicate everywhere |
| GitHub Action (`markdown-or-hugo-to-medium`) | Low effort |
| Manual cross-post + canonical links | **Start here** |
| Medium Partner Program | Research eligibility |

**Note:** Start with manual cross-post. Add canonical URLs to avoid SEO issues.

---

### ⏸️ DEFERRED (Define Later)

#### Phase 3: UI/UX
| Task | Status |
|------|--------|
| Custom hero/avatar | TODO (later) |
| Color scheme | TODO (later) |
| Font selection | TODO (later) |
| Animations | TODO (later) |

#### Phase 4: Analytics
| Task | Status |
|------|--------|
| Google Analytics | TODO |
| Search Console | TODO |
| Plausible/Umami | OPTIONAL |

#### Phase 7: Multi-Language
| Task | Status |
|------|--------|
| Configure French (`fr`) | TODO |
| Configure Spanish (`es`) | TODO |
| Create content subdirectories | TODO |
| Translate content | TODO (ongoing) |

---

## File Structure

```
starter-hugo-academic/
├── config/_default/
│   ├── config.yaml           # Site config (title, baseURL, modules)
│   ├── params.yaml           # Theme, SEO, features
│   ├── menus.yaml            # Navigation (updated)
│   └── languages.yaml        # EN default, prepared for FR/ES
├── content/
│   ├── _index.md             # Homepage with widgets
│   ├── authors/admin/         # Profile data
│   │   ├── _index.md         # Bio, education, social links
│   │   └── avatar.jpg
│   ├── post/                  # Blog posts (empty, ready)
│   ├── publication/           # Publications (empty, ready)
│   ├── project/               # Projects (empty, ready)
│   └── event/                 # Events (empty, ready)
├── docs/
│   ├── HUGO_USAGE.md          # Template guide
│   └── DEPLOY.md              # Deployment guide
├── static/uploads/
│   └── resume.pdf
├── netlify.toml               # Deploy config
├── go.mod                     # Hugo modules
└── README.md                  # Updated
```

---

## Commands Reference

```bash
# Local development
hugo server                    # Start dev server with live reload
hugo --gc --minify             # Production build

# Git
git status                     # Check changes
git add . && git commit -m "message"
git push origin main           # Triggers Netlify deploy

# Search for old repo name
grep -r "starter-hugo-academic" .
```

---

## Questions to Resolve in Next Session

1. **Phase 1:** Does domain stay `nicolas.magnetang.com` after repo rename?
2. **Phase 2C:** Do you have existing notes/docs for the blog topics, or need a template?
3. **Phase 5:** Want me to implement LinkedIn Featured section update, or do you prefer manual?

---

## Links & Resources

- **Live Site:** https://nicolas.magnetang.com/
- **GitHub:** https://github.com/nicomagnet/starter-hugo-academic
- **Wowchemy Docs:** https://wowchemy.com/docs/
- **Hugo Docs:** https://gohugo.io/documentation/

---

*End of Session Reference*
