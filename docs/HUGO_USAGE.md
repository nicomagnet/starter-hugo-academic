# Hugo Academic — Guía de Uso

> Este documento explica cómo editar y mantener tu portfolio Hugo Academic. El deploy se gestiona automáticamente con Netlify (ver `DEPLOY.md`).

---

## 1. Estructura del Proyecto

```
├── config/_default/          # Configuración del sitio
│   ├── config.yaml           # Título, URL base, módulos Hugo
│   ├── params.yaml           # Tema, SEO, analytics, features
│   ├── menus.yaml            # Menú de navegación
│   └── languages.yaml        # Idiomas
│
├── content/                  # Todo el contenido (Markdown)
│   ├── _index.md             # Homepage: widgets (about, skills, experience, blog, publications, contact)
│   ├── authors/admin/_index.md  # Tu perfil: bio, educación, redes sociales
│   ├── post/                 # Artículos de blog
│   ├── publication/          # Publicaciones académicas
│   ├── project/              # Proyectos
│   ├── event/                # Charlas y conferencias
│   └── admin/index.md        # Netlify CMS
│
├── assets/media/             # Imágenes procesadas por Hugo
├── static/uploads/           # Archivos directos (CV en PDF)
└── netlify.toml              # Config de deploy
```

---

## 2. Editar tu Perfil

**Archivo:** `content/authors/admin/_index.md`

Este archivo controla toda tu información personal que se muestra en los widgets `about.biography` y `experience`.

### Campos principales

```yaml
---
title: Tu Nombre                    # Nombre que se muestra
first_name: Nombre                  # Para SEO
last_name: Apellido                 # Para SEO
role: Tu título profesional         # Ej: Battery Storage Systems Engineer
status: "Open to offers"            # Estado con emoji
icon: "☕️"

bio: Descripción corta (1-2 líneas) # Aparece en el perfil

# Educación
education:
  courses:
    - course: Nombre del título
      institution: Universidad
      year: 2024

# Redes sociales
social:
  - icon: envelope
    icon_pack: fas
    link: '/#contact'
  - icon: github
    icon_pack: fab
    link: https://github.com/tuusuario
  - icon: linkedin
    icon_pack: fab
    link: https://linkedin.com/in/tuusuario
  - icon: graduation-cap
    icon_pack: ai
    link: https://scholar.google.com/...
---
```

### Iconos disponibles

- **Font Awesome (fas/fab):** `github`, `linkedin`, `twitter`, `envelope`, `code`, `microchip`, `battery-full`, `chart-line`, `plug`, `flask`, `cloud`, `tasks`
- **Academic Icons (ai):** `google-scholar`, `orcid`, `cv`, `researchgate`, `osf`

Lista completa: https://wowchemy.com/docs/getting-started/page-builder/#icons

---

## 3. Editar la Homepage

**Archivo:** `content/_index.md`

La homepage usa `type: landing` con secciones widget. Cada widget es un bloque `block:` con su configuración.

### Estructura de una sección

```yaml
sections:
  - block: nombre_del_widget    # Tipo de widget
    id: identificador           # Para anclaje en el menú (#skills)
    content:
      title: Título visible
      # ... campos específicos del widget
    design:
      columns: '2'              # '1' o '2' columnas
```

### Widgets disponibles

| Widget | Uso |
|--------|-----|
| `about.biography` | Tu perfil (lee de `authors/admin/`) |
| `features` | Lista de skills con iconos |
| `experience` | Experiencia profesional cronológica |
| `accomplishments` | Certificaciones y logros |
| `collection` | Lista de contenido (posts, publications, events) |
| `portfolio` | Galería de proyectos |
| `contact` | Formulario + datos de contacto |
| `markdown` | Texto libre con shortcodes |
| `tag_cloud` | Nube de tags |

---

## 4. Añadir Skills (Widget: features)

En `content/_index.md`, dentro del bloque `block: features`:

```yaml
- block: features
  id: skills
  content:
    title: Skills
    items:
      - name: Nombre del skill
        description: Descripción breve
        icon: nombre-icono
        icon_pack: fas       # fas, fab, ai
      - name: Otro skill
        description: Otra descripción
        icon: otro-icono
        icon_pack: fas
```

---

## 5. Añadir Experiencia (Widget: experience)

En `content/_index.md`, dentro del bloque `block: experience`:

```yaml
- block: experience
  id: experience
  content:
    title: Experience
    date_format: Jan 2006
    items:
      - title: Cargo / Puesto
        company: Empresa
        company_url: 'https://empresa.com'
        company_logo: nombre_icono   # opcional, en assets/media/icons/brands/
        location: Ciudad, País
        date_start: '2024-01-01'
        date_end: ''                 # vacío = actual
        description: |2-
            **Contexto:** Descripción del proyecto.

            **Tareas:**
            - Tarea 1
            - Tarea 2

            **Entorno técnico:**
            - Herramienta 1, Herramienta 2
```

> **Nota:** `|2-` es un bloque multilinea YAML. Mantén la indentación de 4 espacios después.

---

## 6. Añadir un Artículo de Blog

### Crear la carpeta

```bash
mkdir -p content/post/nombre-del-articulo
```

### Crear el archivo `index.md`

```markdown
---
title: Título del artículo
summary: Resumen corto que aparece en la lista
date: 2025-04-06
authors:
  - admin
tags:
  - Battery
  - BMS
categories:
  - Engineering
---

Aquí va el contenido del artículo en Markdown.

## Sección

Texto con **negrita**, *cursiva*, y [enlaces](https://ejemplo.com).

### Código

```python
import numpy as np
print("Hello")
```

### Fórmulas LaTeX

La capacidad de la batería se modela como:

$$C = \int_{0}^{T} I(t) \, dt$$
```

### Con imagen destacada

Coloca una imagen llamada `featured.jpg` o `featured.png` en la misma carpeta:

```
content/post/nombre-del-articulo/
├── index.md
└── featured.jpg
```

### Con Jupyter Notebook

Puedes usar `.ipynb` directamente:

```
content/post/nombre-del-articulo/
├── index.ipynb
└── index.md          # Solo front matter, el contenido viene del notebook
```

---

## 7. Añadir una Publicación Académica

### Crear la carpeta

```bash
mkdir -p content/publication/nombre-publicacion
```

### Crear el archivo `index.md`

```markdown
---
title: Título completo del paper
authors:
  - Nicolas MAGNE TANG
  - Coautor Uno
  - Coautor Dos
date: '2023-04-01'
doi: '10.1234/ejemplo'
publishDate: '2023-04-01'
publication_types:
  - article-journal   # Ver tipos abajo
publication: '*Nombre de la Revista*, Vol. 1, No. 1'
abstract: 'Resumen del artículo...'
featured: true        # true = aparece en "Featured Publications"
tags:
  - Battery
  - LFP
url_pdf: 'https://ejemplo.com/paper.pdf'
url_code: 'https://github.com/tuusuario/repo'
url_dataset: ''
links:
  - name: PDF
    url: https://ejemplo.com/paper.pdf
---
```

### Tipos de publicación (`publication_types`)

| Tipo | Valor | Uso |
|------|-------|-----|
| Preprint | `preprint` | Artículo no publicado aún |
| Conference | `paper-conference` | Paper de conferencia |
| Journal | `article-journal` | Artículo de revista |
| Book | `book` | Libro |
| Thesis | `thesis` | Tesis |

### Con BibTeX

Crea un archivo `cite.bib` en la misma carpeta para importación automática.

### Con PDF adjunto

Coloca el PDF en la misma carpeta: `conference-paper.pdf`

---

## 8. Añadir un Proyecto

### Crear la carpeta

```bash
mkdir -p content/project/nombre-proyecto
```

### Crear el archivo `index.md`

```markdown
---
title: Nombre del Proyecto
summary: Descripción corta
tags:
  - Battery
  - Simulation
date: 2025-04-06
external_link: 'https://github.com/tuusuario/proyecto'  # Link externo opcional
---

Descripción detallada del proyecto en Markdown.

## Objetivos

- Objetivo 1
- Objetivo 2

## Tecnologías

Python, MATLAB, Simulink
```

### Con imagen destacada

```
content/project/nombre-proyecto/
├── index.md
└── featured.jpg
```

---

## 9. Añadir una Charla / Evento

### Crear la carpeta

```bash
mkdir -p content/event/nombre-charla
```

### Crear el archivo `index.md`

```markdown
---
title: Título de la Charla
event: Nombre del Evento
event_url: https://evento.com
location: Ciudad, País
summary: Resumen
abstract: 'Resumen completo...'
date: '2025-06-15T09:00:00Z'
date_end: '2025-06-15T10:00:00Z'
all_day: false
publishDate: '2025-04-06'
authors:
  - admin
tags:
  - Battery
featured: true
---

Descripción de la charla.
```

---

## 10. Añadir Certificaciones (Widget: accomplishments)

En `content/_index.md`, descomentar y editar el bloque:

```yaml
- block: accomplishments
  content:
    title: 'Certificaciones'
    date_format: Jan 2006
    items:
      - certificate_url: https://www.coursera.org/cert/xxx
        date_start: '2024-01-01'
        date_end: ''
        organization: Coursera
        organization_url: https://www.coursera.org
        title: Machine Learning Specialization
        url: ''
```

---

## 11. Menú de Navegación

**Archivo:** `config/_default/menus.yaml`

```yaml
main:
  - name: Home
    url: '#about'
    weight: 10
  - name: Skills
    url: '#skills'
    weight: 15
  - name: Experience
    url: '#experience'
    weight: 25
  - name: Blog
    url: '#posts'
    weight: 30
  - name: Publications
    url: '#publications'
    weight: 40
  - name: Projects
    url: '#projects'
    weight: 50
  - name: Contact
    url: '#contact'
    weight: 60
  - name: CV
    url: uploads/resume.pdf
    weight: 70
```

> **`weight`** controla el orden (menor = primero).
> **`url: '#id'`** apunta al `id:` de un widget en `_index.md`.

---

## 12. Comandos Hugo

```bash
# Servidor local con live reload
hugo server

# Build de producción (minificado)
hugo --gc --minify

# Build incluyendo contenido futuro
hugo --buildFuture
```

---

## 13. Configuración del Sitio

### Apariencia (`config/_default/params.yaml`)

```yaml
appearance:
  theme_day: minimal      # Tema claro
  theme_night: minimal    # Tema oscuro
  font: minimal           # Fuente
  font_size: L            # S, M, L, XL
```

### SEO y Analytics

```yaml
marketing:
  seo:
    twitter: 'tuusuario'
    description: 'Tu descripción'
  analytics:
    google_analytics: 'G-XXXXXXX'
```

---

## 14. Shortcodes Útiles

Dentro del contenido Markdown puedes usar:

```markdown
{{< callout note >}}
Texto destacado tipo nota.
{{< /callout >}}

{{< gallery album="demo" >}}       # Galería de imágenes (en assets/media/albums/)

{{< figure src="imagen.jpg" caption="Descripción" >}}

{{< toc >}}                        # Tabla de contenidos
```

---

## 15. Checklist Rápido

| Tarea | Archivo |
|-------|---------|
| Cambiar nombre/bio | `content/authors/admin/_index.md` |
| Editar homepage | `content/_index.md` |
| Añadir skill | `_index.md` → bloque `features` |
| Añadir experiencia | `_index.md` → bloque `experience` |
| Añadir blog post | `content/post/nuevo/index.md` |
| Añadir publicación | `content/publication/nuevo/index.md` |
| Añadir proyecto | `content/project/nuevo/index.md` |
| Cambiar menú | `config/_default/menus.yaml` |
| Cambiar tema/colores | `config/_default/params.yaml` |
| Subir CV | `static/uploads/resume.pdf` |
