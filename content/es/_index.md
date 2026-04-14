---
title: Inicio
date: 2025-03-22
type: landing

sections:

  - block: about.biography
    id: about
    content:
      title: Sobre mí
      username: admin

  - block: collection
    id: posts
    content:
      title: Últimos Artículos
      subtitle: Reflexiones sobre tecnología de baterías e ingeniería
      count: 3
      filters:
        folders:
          - es/post
      offset: 0
      order: desc
    design:
      view: compact
      columns: '3'

  - block: portfolio
    id: projects
    content:
      title: Proyectos Destacados
      filters:
        folders:
          - es/project
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
      title: Contáctame
      text: |-
          ¿Interesado en colaboración o tienes preguntas? No dudes en contactarme.
      address:
        city: París
        region: Isla de Francia
        country: Francia
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