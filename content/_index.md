---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  # - block: hero
  #   content:
  #     title: Hugo Academic Theme
  #     image:
  #       filename: hero-academic.png
  #     cta:
  #       label: '**Get Started**'
  #       url: https://wowchemy.com/templates/
  #     cta_alt:
  #       label: Ask a question
  #       url: https://discord.gg/z8wNYzb
  #     cta_note:
  #       label: >-
  #         <div style="text-shadow: none;"><a class="github-button" href="https://github.com/wowchemy/wowchemy-hugo-themes" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Wowchemy Website Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/wowchemy/starter-hugo-academic" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div>
  #     text: |-
  #       **Generated by Wowchemy - the FREE, Hugo-based open source website builder trusted by 500,000+ sites.**

  #       **Easily build anything with blocks - no-code required!**

  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.

  #       <!--Custom spacing-->
  #       <div class="mb-3"></div>
  #       <!--GitHub Button JS-->
  #       <script async defer src="https://buttons.github.io/buttons.js"></script>
  #   design:
  #     background:
  #       gradient_end: '#1976d2'
  #       gradient_start: '#004ba0'
  #       text_color_light: true
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: features
    content:
      title: Skills
      items:
        - name: Battery Modeling & Simulation
          description: Expertise in energy storage modeling, equivalent circuit models, and lifetime estimation.
          icon: battery-full
          icon_pack: fas
        - name: BMS & EMS
          description: Development and validation of Battery Management Systems (BMS) and Energy Management Systems (EMS).
          icon: microchip
          icon_pack: fas
        - name: System Validation & Data Analysis
          description: Performance testing, SOH estimation, PVAL analysis, and data-driven optimization.
          icon: chart-line
          icon_pack: fas
        - name: Programming & Simulation Tools
          description: MATLAB, Python, Simulink, Converto AVL, Power BI, Excel, GitHub.
          icon: code
          icon_pack: fas
        - name: Electrical & Electronics Engineering
          description: Circuit design, sensor integration, CAN analysis, electronic prototyping.
          icon: plug
          icon_pack: fas
        - name: Electrochemistry & Battery Testing
          description: Experience with Biologic/Arbin battery testing, impedance spectroscopy, and diagnostic techniques.
          icon: flask
          icon_pack: fas
        - name: Cloud & IoT Technologies
          description: Familiarity with HTTP, MQTT, TCP/IP, and remote monitoring for connected battery systems.
          icon: cloud
          icon_pack: fas
        - name: Project Management & Technical Leadership
          description: Cross-functional collaboration, supplier coordination, and regulatory compliance (GTR-EVE).
          icon: tasks
          icon_pack: fas
  - block: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: System Engineer – Energy Storage Systems & Performance
          company: Segula Technologies (Ampere - Renault Group)
          company_url: ''
          # company_logo: org-segula
          location: Paris, France
          date_start: '2024-01-01'
          date_end: ''
          description: |2-
              - **Current mission:** Pilot Function System – GTR-EVE, Ampere (Renault Group)
              - As part of the **GTR-EVE (Global Technical Regulations - Electric Vehicle Durability)** requirements, my role at **Ampere - Renault Group** involves the **validation and optimization of battery state estimators (SOH, SOCE)** through **advanced test analysis and calibration of embedded algorithms in the BMS (Battery Management System).**
              - **Electric vehicle performance** is significantly affected by battery evolution over its lifecycle. My work focuses on **evaluating, calibrating, and validating estimation models**, considering regulatory constraints and the specific architectures of different batteries and vehicles.
              
              **Assigned Tasks:**
              - **Analysis and validation of BMS estimators:** Studying and comparing the **performance of SOH and SOCE estimators** integrated into the **BMS**, identifying discrepancies between theoretical models and experimental results to **improve estimation accuracy**.
              - **Evaluation and calibration through experimental testing:** Analyzing **battery and vehicle tests** to assess **real-world energy storage system behavior**. Utilizing **WLTP cycle tests at 23°C and -7°C** to measure system performance under varying climatic and operational conditions.
              - **Development of an advanced SOH estimation methodology:** Implementing multiple SOH estimation methods, including **empirical, algorithmic, and machine-learning-based approaches**, comparing their performances, and selecting the most **reliable and vehicle-adapted method**.
              - **Optimization and performance reporting:** Using **MATLAB, Python** for model analysis and algorithm development, **Converto AVL** for test data visualization, and **Power BI & Excel** for performance tracking.
              
              **Technical Environment:**
              - MATLAB, Python, Converto AVL, Power BI, Excel.

        - title: Battery Algorithm Development Engineer   
          company: Freelancer - Swiss Company
          company_url: ''
          # company_logo: org-freelance
          location: Geneva, Switzerland
          date_start: '2023-08-01'
          date_end: '2023-10-01'
          description: |2-
              - Developed battery state estimation algorithms (SoC, SoH, SoS) for advanced BMS.
              - Designed and integrated scalable software architecture for stationary energy storage systems.
              - Delivered technical reports on BMS implementation and performance optimization.

        - title: R&D Engineer – Li-ion Battery Performance Optimization
          company: Electrochemistry Laboratory (LEPMI - Grenoble INP)
          company_url: ''
          # company_logo: org-lepmi
          location: Grenoble, France
          date_start: '2019-08-01'
          date_end: '2023-04-01'
          description: |2-
              - Conducted advanced testing on NMC and LFP battery performance and durability.
              - Developed an equivalent circuit model (ECM) for battery diagnostics and integration into BMS.
              - Published two scientific papers and contributed to an industrial patent on rapid battery diagnostics.

        - title: Development Engineer – Second-Life Battery Analysis
          company: Electrochemistry Laboratory (LEPMI - Grenoble INP)
          company_url: ''
          # company_logo: org-lepmi
          location: Grenoble, France
          date_start: '2019-02-01'
          date_end: '2019-07-01'
          description: |2-
              - Characterized degradation mechanisms in second-life Li-ion batteries.
              - Developed models for equivalent circuit performance and state-of-health prediction.
              - Conducted over 500 experiments to refine diagnostic protocols.

        - title: R&D Engineer – Energy Management Optimization
          company: Laboratory of Fluid Mechanics and UAV, Barcelona, Spain
          company_url: ''
          # company_logo: org-uav
          location: Barcelona, Spain
          date_start: '2018-07-01'
          date_end: '2018-09-01'
          description: |2-
              - Analyzed energy consumption in hybrid and standalone fixed-wing drones.
              - Developed battery selection strategies for aviation applications.
              - Implemented optimization models for battery endurance in UAVs.

        - title: Engineer – Electrical Analysis for Industrial Projects
          company: Centrales Villageoises (Collective PV Production), Vercors, France
          company_url: ''
          # company_logo: org-pv
          location: Vercors, France
          date_start: '2018-02-01'
          date_end: '2018-06-01'
          description: |2-
              - Conducted technical and economic analysis for photovoltaic energy projects.
              - Evaluated energy storage integration and system cost-benefit.
              - Provided feasibility assessments for rural electrification.

        - title: Instrumentation & Automation Engineer
          company: Mi Bus UIO (Startup)
          company_url: ''
          # company_logo: org-mibus
          location: Quito, Ecuador
          date_start: '2015-06-01'
          date_end: '2018-02-01'
          description: |2-
              - Developed passenger counting and automated monitoring systems.
              - Designed and implemented sensor-based data collection.
              - Reduced annual operational costs by $50,000 through optimization strategies.

    design:
      columns: '2'
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Accomplish&shy;ments'
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url: https://www.coursera.org
          date_end: ''
          date_start: '2021-01-25'
          description: ''
          organization: Coursera
          organization_url: https://www.coursera.org
          title: Neural Networks and Deep Learning
          url: ''
        - certificate_url: https://www.edx.org
          date_end: ''
          date_start: '2021-01-01'
          description: Formulated informed blockchain models, hypotheses, and use cases.
          organization: edX
          organization_url: https://www.edx.org
          title: Blockchain Fundamentals
          url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
        - certificate_url: https://www.datacamp.com
          date_end: '2020-12-21'
          date_start: '2020-07-01'
          description: ''
          organization: DataCamp
          organization_url: https://www.datacamp.com
          title: 'Object-Oriented Programming in R'
          url: ''
    design:
      columns: '2'
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: markdown
    content:
      title: Gallery
      subtitle: ''
      text: |-
        {{< gallery album="demo" >}}
    design:
      columns: '1'
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # Contact (add or remove contact options as necessary)
      email: test@example.org
      phone: 888 888 88 88
      appointment_url: 'https://calendly.com'
      address:
        street: 450 Serra Mall
        city: Stanford
        region: CA
        postcode: '94305'
        country: United States
        country_code: US
      directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      office_hours:
        - 'Monday 10:00 to 13:00'
        - 'Wednesday 09:00 to 10:00'
      contact_links:
        - icon: twitter
          icon_pack: fab
          name: DM Me
          link: 'https://twitter.com/Twitter'
        - icon: skype
          icon_pack: fab
          name: Skype Me
          link: 'skype:echo123?call'
        - icon: video
          icon_pack: fas
          name: Zoom Me
          link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---
