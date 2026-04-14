---
# Blog Post Archetype
# Use: hugo new --kind post content/en/post/my-new-post.md

title: "{{ .Name }}"
summary: ""
date: {{ .Date }}
draft: false
cms_exclude: false

# Post thumbnail
header:
  caption: ""
  image: ""

# Post description (SEO)
description: ""

# Post tags
tags:
  - 
categories:
  - 

# Author reference (must match folder name in content/authors/)
authors: []

# Enable social sharing
share: true

# Enable comments
commentable: false

# Allow editing
editable: false

# View options: 1 = List, 2 = Compact, 3 = Card
view: 2

# Table of contents
toc: true
---