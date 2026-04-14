---
title: Home
date: 2025-03-22
type: landing

sections:

  - block: about.biography
    id: about
    content:
      title: 
      username: admin

  - block: portfolio
    id: projects
    content:
      title: Selected Projects
      subtitle: Featured work in battery systems and energy management
      filters:
        folders:
          - en/project
      default_button_index: 0
      buttons:
        - name: All Projects
          tag: '*'
    design:
      columns: '2'
      view: showcase

  - block: experience
    id: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: System Engineer – Energy Storage Systems & Performance
          company: Segula Technologies (Ampere - Renault Group)
          company_url: 'https://www.linkedin.com/company/15633/'
          location: Paris, France
          date_start: '2024-01-01'
          date_end: ''
          description: Pilot Function System – GTR-EVE. Validation and optimization of battery state estimators (SOH, SOCE) through advanced test analysis and BMS calibration.
        - title: Battery Algorithm Development Engineer
          company: Freelancer - Swiss Company
          location: Geneva, Switzerland
          date_start: '2023-08-01'
          date_end: '2023-10-01'
          description: Software architecture design for BMS and integration of advanced battery state estimation algorithms (SoC, SoH, SoS).
        - title: R&D Engineer – Li-ion Battery Performance Optimization
          company: Electrochemistry Laboratory (LEPMI - Grenoble INP)
          company_url: 'https://www.linkedin.com/company/100130918/'
          location: Grenoble, France
          date_start: '2019-08-01'
          date_end: '2023-04-01'
          description: Optimization of LFP and NMC battery performance under high-current discharge using ohmic drop compensation methods.

  - block: contact
    id: contact
    content:
      title: Get in Touch
      text: |-
          Interested in collaboration or have questions about battery systems? Let's connect.
      address:
        city: Paris
        region: Ile de France
        country: France
        country_code: FR
      contact_links:
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