---
# Project Archetype
# Use: hugo new --kind project content/en/project/my-new-project.md

title: "{{ .Name }}"
summary: ""
date: {{ .Date }}
draft: false
cms_exclude: false

# Project thumbnail/cover image
# Place in `static/media/` folder
header:
  caption: ""
  image: ""

# Project description (SEO)
description: ""

# Project tags
tags:
  - 
categories:
  - 

# External project links (optional)
links:
  - icon: github
    icon_pack: fab
    name: Source Code
    url: ""
  - icon: demo
    icon_pack: ai
    name: Demo
    url: ""
  - icon: paperclip
    icon_pack: fa
    name: PDF
    url: ""

# View options: 1 = List, 2 = Compact, 3 = Card, 4 = Showcase
view: 1

# Featured on homepage
featured: false

# Show filters/tags for portfolio
filters:
  folders:
    - project
  tag: "*"
---