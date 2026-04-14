---
title: Home
date: 2025-03-22
type: landing

sections:

  - block: about.biography
    id: about
    content:
      title: About Me
      username: admin

  - block: collection
    id: posts
    content:
      title: Latest Articles
      subtitle: Thoughts on battery technology and engineering
      count: 3
      filters:
        folders:
          - en/post
      offset: 0
      order: desc
    design:
      view: compact
      columns: '3'

  - block: portfolio
    id: projects
    content:
      title: Selected Projects
      filters:
        folders:
          - en/project
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
      title: Get in Touch
      text: |-
          Interested in collaboration or have questions? Feel free to reach out.
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