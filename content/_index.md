---
# Leave the homepage title empty to use the site title
title:
date: 2025-03-22
type: landing

sections:

  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: features
    id: skills
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
    id: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: System Engineer – Energy Storage Systems & Performance
          company: Segula Technologies (Ampere - Renault Group)
          company_url: 'https://www.linkedin.com/company/15633/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BzMmPikLTRHiiS%2FrwKgJYBg%3D%3D'
          # company_logo: icon_Segula
          location: Paris, France
          date_start: '2024-01-01'
          date_end: ''
          description: |2-
              **Current mission:** Pilot Function System – GTR-EVE, Ampere (Renault Group)
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
              **Project Context:** The company, specializing in **stationary energy storage**, required expertise in advanced battery management system (BMS) technology. This role involved designing and implementing a robust software architecture, including integrating **advanced battery state estimation algorithms (SoC, SoH, SoS, etc.)**. The focus was on optimizing the BMS to enhance battery performance, safety, and system efficiency.

              **Assigned Tasks:**
              - **Software architecture design for BMS**: Defining system structure and organization with scalability, modularity, and hardware integration in mind.
              - **Integration of battery state estimators**: Implementing sensor data algorithms to estimate State of Charge (SoC), State of Health (SoH), and State of Safety (SoS).
              - **Technical reports**: Producing two detailed reports documenting BMS software architecture design, algorithm selection, and integration strategies.

              **Technical Environment:**
              - Battery databases, Python programming, GitHub, Teams.

        - title: R&D Engineer – Li-ion Battery Performance Optimization
          company: Electrochemistry Laboratory (LEPMI - Grenoble INP)
          company_url: 'https://www.linkedin.com/company/100130918/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BzMmPikLTRHiiS%2FrwKgJYBg%3D%3D'
          # company_logo: icon_LEPMI
          location: Grenoble, France
          date_start: '2019-08-01'
          date_end: '2023-04-01'
          description: |2-
              **Project Context:** This research project focused on optimizing lithium-iron-phosphate (LFP) and nickel-manganese-cobalt (NMC) battery performance, especially under high-current discharge scenarios, using ohmic drop compensation methods. The research involved collaboration with industrial partners (e-bike and drone manufacturers) and resulted in scientific publications and an industrial patent.

              **Assigned Tasks:**
              - **Testing protocols and campaigns:** Defined and executed cycling, impedance spectroscopy (EIS), and differential capacity analysis (dq/dv) tests on NMC and LFP batteries, integrating the ohmic drop compensation (ODC) method.
              - **Aging analysis and performance improvement**: Evaluated battery aging under high-discharge conditions, implementing a fast-protocol ODC method that improved capacity by 20%.
              - **Development of parametric models**: Designed and implemented an equivalent circuit model (ECM) incorporating ODC effects for BMS integration in small-scale applications (drones, e-bikes).
              
              **Technical Environment:**
              - Oscilloscope, Potentiostat (battery tests) Biologic/Arbin, Soldering Station, MATLAB, Simulink, EC-Lab, GitHub, MS Office, Programming (C, Python)

        - title: Development Engineer – Second-Life Battery Analysis
          company: Electrochemistry Laboratory (LEPMI - Grenoble INP)
          company_url: 'https://www.linkedin.com/company/100130918/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BzMmPikLTRHiiS%2FrwKgJYBg%3D%3D'
          # company_logo: icon_LEPMI
          location: Grenoble, France
          date_start: '2019-02-01'
          date_end: '2019-07-01'
          description: |2-
              **Project Context**: This project focused on battery degradation analysis. My responsibilities included developing rigorous protocols for Li-ion battery characterization, exploring degradation models based on Equivalent Circuit Models (ECM) and State of Health (SOH) parameters, and conducting rigorous laboratory aging tests suitable for electric vehicles (EVs). This collaborative effort, part of a larger initiative led by a student working on his thesis, fostered an interdisciplinary approach.

              **Assigned Tasks:**
              - **Characterization Protocols**: Development of operational protocols to characterize Li-ion batteries for a second life, including methods for measuring electrical parameters. (OCV, CC-CV, EIS, dv/ dq )
              - **Performance Degradation Model**: Development and use of a simple equivalent circuit-based model to characterize the performance degradation of second-life batteries with phyton and Matlab.
              - **Laboratory Aging Tests**: Conducting extensive laboratory tests to evaluate and characterize the aging of Li-ion batteries under conditions similar to a second life.
              - **Operational Conditions Impact Analysis**: In-depth assessment of the effects of operational conditions on battery performance, particularly in the context of second-life use, and adaptation of the results obtained for a specific application in a Battery Management System (BMS) for second life.
              
              **Technical Environment:**
              - Potentiostat (test batteries) Biologic, EC-lab, GitHub, MS Office, Programming (python)

        - title: R&D Engineer – Energy Management Optimization
          company: Laboratory of Fluid Mechanics and UAV, Barcelona, Spain
          company_url: ''
          # company_logo: icon_drone
          location: Barcelona, Spain
          date_start: '2018-07-01'
          date_end: '2018-09-01'
          description: |2-
              **Project Context**: As part of the development of a high-altitude UAV, I focused on the multiple facets of UAV energy consumption and efficiency. Tasked with analyzing the energy consumption of fixed-wing UAVs, including simple and hybrid systems integrating electrical components and turbines, my role extended to simulating fixed-wing UAV energy systems. This hybrid configuration involved a careful balance between electrical components (motor, controller, battery) and a gasoline turbine to achieve the required speed and oriented support. My analytical role also included the critical task of analyzing and sizing the storage system, taking into account factors such as range and weight. In particular, I contributed to the overall project approach through the use of Model-Based Systems Engineering (MBSE), which enabled a comprehensive understanding of the complex UAV system dynamics.

              **Assigned Tasks:**
              - **In-Depth Energy Consumption Analysis**: Detailed study of fixed-wing drone energy consumption and efficiency, considering battery technologies, as well as drone propulsion systems.
              - **Energy System Modeling and Simulation**: Modeling and simulation of the fixed-wing drone energy system, using tools such as Simulink and MBSE for a complete analysis of the drone.
              - **Drone Energy Performance Simulation**: Ability to simulate and evaluate fixed-wing drone energy performance, considering both simple and hybrid systems for a comprehensive assessment.
              - **Storage System Analysis and Sizing**: Including detailed analysis and sizing of the storage system to achieve the optimal balance between power consumption and weight, to ensure better flight autonomy. (Python)

              **Technical Environment:**
              - GitHub, MS Office, Programming (python), LabVIEW, Simulink, Matlab

        - title: Engineer – Electrical Analysis for Industrial Projects
          company: Centrales Villageoises (Collective PV Production), Vercors, France
          company_url: 'https://www.linkedin.com/company/13003931/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BzMmPikLTRHiiS%2FrwKgJYBg%3D%3D'
          # company_logo: icon_Village
          location: Vercors, France
          date_start: '2018-02-01'
          date_end: '2018-06-01'
          description: |2-
              **Project Context**:As part of a collaboration between a company and the university, this project involved a technical-economic study for the collective production of photovoltaic (PV) energy in the Vercors community. My responsibilities included estimating the annual production of photovoltaic installations, calculating potential losses within the photovoltaic system, and conducting an in-depth analysis of energy consumption patterns. In addition, I conducted a comprehensive financial analysis to assess the economic viability of the proposed project. Beyond the technical aspects, this experience allowed me to understand the complex workings of the renewable energy sector in France, including the legal considerations related to solar panels. 

              **Assigned Tasks:**
              - **Assessment of the Potential Production of PV Installations**: Detailed estimation of the expected annual production of PV installations.
              - **Analysis of Energy Consumption Patterns**: Detailed study of energy consumption patterns within the Vercors region, allowing the feasibility of the collective production model to be assessed. (Python)
              - **Financial Analysis of Project Viability**: Detailed assessment of the financial aspect to determine the viability of the project. (French Law)
              - **Collaboration and Relevance of the Study**: Collaborative work with a multidisciplinary team to ensure the accuracy and relevance of the study conducted. (Project €175,000)

              **Technical Environment:**
              - GitHub, MS Office, Matlab

        - title: Instrumentation & Automation Engineer
          company: Mi Bus UIO (Startup)
          company_url: ''
          # company_logo: icon_mibus
          location: Quito, Ecuador
          date_start: '2015-06-01'
          date_end: '2018-02-01'
          description: |2-
               **Project Context**: As an electronics engineer for a startup specializing in mobility solutions, I led the development of a comprehensive monitoring system for public transportation, specifically the capital's buses. My work focused on microcontroller programming and development, as well as MQQT communication. The successful implementation of this system not only improved monitoring capabilities but also contributed to significant savings, amounting to up to $50,000 per year per operator. The project aimed to optimize bus operations and stops, systematically improving routes to streamline overall operational expenses and costs. This experience not only showcased my technical expertise but also demonstrated the tangible impact of innovative electronic solutions in optimizing urban mobility and transport efficiency.

              **Assigned Tasks:**
              - **Understanding Bus Electrical and CAN System**: In-depth analysis of the electrical part of buses and communication with the CAN system to collect data such as speed and other information from sensors.
              - **Integration of Monitoring Elements**: Implementation of monitoring elements for GPS tracking and passenger counting, resulting in a database for each bus.
              - **Prototype Development**: Creation of a prototype monitoring device, installed and tested on 25 buses to analyze performance, optimize routes and improve schedules.
              - **Model-Based Engineering**: Using the model-based engineering approach to consider each module, from communication to cloud connection and model-based system and applying Failure Modes and Effects Analysis to optimize each element of the system, ensuring its reliability and performance.

              **Technical Environment:**
              - Oscilloscope, Soldering Station, GitHub, MS Office, Programming (C, python), CAN analyzer
    design:
      columns: '2'
      
  # - block: accomplishments
  #   content:
  #     # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
  #     title: 'Accomplish&shy;ments'
  #     subtitle:
  #     # Date format: https://wowchemy.com/docs/customization/#date-format
  #     date_format: Jan 2006
  #     # Accomplishments.
  #     #   Add/remove as many `item` blocks below as you like.
  #     #   `title`, `organization`, and `date_start` are the required parameters.
  #     #   Leave other parameters empty if not required.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - certificate_url: https://www.coursera.org
  #         date_end: ''
  #         date_start: '2021-01-25'
  #         description: ''
  #         organization: Coursera
  #         organization_url: https://www.coursera.org
  #         title: Neural Networks and Deep Learning
  #         url: ''
  #       - certificate_url: https://www.edx.org
  #         date_end: ''
  #         date_start: '2021-01-01'
  #         description: Formulated informed blockchain models, hypotheses, and use cases.
  #         organization: edX
  #         organization_url: https://www.edx.org
  #         title: Blockchain Fundamentals
  #         url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
  #       - certificate_url: https://www.datacamp.com
  #         date_end: '2020-12-21'
  #         date_start: '2020-07-01'
  #         description: ''
  #         organization: DataCamp
  #         organization_url: https://www.datacamp.com
  #         title: 'Object-Oriented Programming in R'
  #         url: ''
  #   design:
  #     columns: '2'


  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'


  # - block: portfolio
  #   id: projects
  #   content:
  #     title: Projects
  #     filters:
  #       folders:
  #         - project
  #     # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  #     default_button_index: 0
  #     # Filter toolbar (optional).
  #     # Add or remove as many filters (`filter_button` instances) as you like.
  #     # To show all items, set `tag` to "*".
  #     # To filter by a specific tag, set `tag` to an existing tag name.
  #     # To remove the toolbar, delete the entire `filter_button` block.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       - name: Deep Learning
  #         tag: Deep Learning
  #       - name: Other
  #         tag: Demo
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     view: showcase
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: false

  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'

  # - block: collection
  #   id: featured
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     columns: '2'
  #     view: card


  # - block: collection
  #   id: featured
  #   content:
  #     title: Publications and Patents
  #     text: |-
  #       {{% callout note %}}
  #       Quickly discover relevant content by [filtering publications](./publication/).
  #       {{% /callout %}}
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: true
  #   design:
  #     columns: '2'
  #     view: citation

  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     columns: '2'
  #     view: compact

  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
          **Get in touch:** Feel free to reach out to me for any inquiries or collaborations
      # Contact (add or remove contact options as necessary)
      # email: test@example.org
      # phone: 888 888 88 88
      # appointment_url: 'https://calendly.com'
      address:
        # street: 450 Serra Mall
        city: Paris
        region: Ile de France
        # postcode: '94305'
        country: France
        country_code: FR
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      contact_links:
        - icon: twitter
          icon_pack: fab
          name: DM Me
          link: 'https://twitter.com/nicomagnet'
        # - icon: skype
        #   icon_pack: fab
        #   name: Skype Me
        #   link: 'skype:echo123?call'
        # - icon: video
        #   icon_pack: fas
        #   name: Zoom Me
        #   link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: false
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
