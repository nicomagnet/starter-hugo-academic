---
title: Accueil
date: 2025-03-22
type: landing

sections:

  - block: about.biography
    id: about
    content:
      title: À propos de moi
      username: admin

  - block: collection
    id: posts
    content:
      title: Derniers Articles
      subtitle: Réflexions sur la technologie des batteries et l'ingénierie
      count: 3
      filters:
        folders:
          - fr/post
      offset: 0
      order: desc
    design:
      view: compact
      columns: '3'

  - block: portfolio
    id: projects
    content:
      title: Projets Sélectionnés
      filters:
        folders:
          - fr/project
      default_button_index: 0
      buttons:
        - name: All
          tag: '*'
    design:
      columns: '2'
      view: showcase
      flip_alt_rows: false

  - block: contact
    id: contact
    content:
      title: Me Contacter
      text: |-
          Intéressé par une collaboration ou avez-vous des questions ? N'hésitez pas à me contacter.
      address:
        city: Paris
        region: Ile de France
        country: France
        country_code: FR
      contact_links:
        - icon: twitter
          icon_pack: fab
          name: Twitter
          link: 'https://twitter.com/nicomagnet'
        - icon: linkedin
          icon_pack: fab
          name: LinkedIn
          link: 'https://www.linkedin.com/in/nicomagnet/'
        - icon: github
          icon_pack: fab
          name: GitHub
          link: 'https://github.com/nicomagnet'
        - icon: envelope
          icon_pack: fas
          name: Email
          link: 'mailto:nicomagnet@gmail.com'
      autolink: false
      form:
        provider: netlify
        netlify:
          captcha: false
    design:
      columns: '2'
---