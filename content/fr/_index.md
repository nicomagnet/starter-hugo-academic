---
# Leave the homepage title empty to use the site title
title:
date: 2025-03-22
type: landing

sections:

  - block: about.biography
    id: about
    content:
      title: Biographie
      username: admin

  - block: features
    id: skills
    content:
      title: Compétences
      items:
        - name: Modélisation et Simulation de Batteries
          description: Expertise en modélisation du stockage d'énergie, modèles de circuits équivalents et estimation de la durée de vie.
          icon: battery-full
          icon_pack: fas
        - name: BMS & EMS
          description: Développement et validation des systèmes de gestion de batterie (BMS) et de gestion d'énergie (EMS).
          icon: microchip
          icon_pack: fas
        - name: Validation Système et Analyse de Données
          description: Tests de performance, estimation SOH, analyse PVAL et optimisation basée sur les données.
          icon: chart-line
          icon_pack: fas
        - name: Outils de Programmation et Simulation
          description: MATLAB, Python, Simulink, Converto AVL, Power BI, Excel, GitHub.
          icon: code
          icon_pack: fas
        - name: Génie Électrique et Électronique
          description: Conception de circuits, intégration de capteurs, analyse CAN, prototypage électronique.
          icon: plug
          icon_pack: fas
        - name: Électrochimie et Tests de Batteries
          description: Expérience avec les tests de batteries Biologic/Arbin, spectroscopie d'impédance et techniques de diagnostic.
          icon: flask
          icon_pack: fas
        - name: Technologies Cloud et IoT
          description: Maîtrise de HTTP, MQTT, TCP/IP et surveillance à distance pour les systèmes de batteries connectés.
          icon: cloud
          icon_pack: fas
        - name: Gestion de Projet et Leadership Technique
          description: Collaboration interfonctionnelle, coordination avec les fournisseurs et conformité réglementaire (GTR-EVE).
          icon: tasks
          icon_pack: fas

  - block: experience
    id: experience
    content:
      title: Expérience
      date_format: Jan 2006
      items:
        - title: Ingénieur Système – Systèmes de Stockage d'Énergie et Performance
          company: Segula Technologies (Ampere - Renault Group)
          company_url: 'https://www.linkedin.com/company/15633/'
          location: Paris, France
          date_start: '2024-01-01'
          date_end: ''
          description: |2-
              **Mission actuelle :** Pilote Fonction Système – GTR-EVE, Ampere (Renault Group)
              - Dans le cadre des exigences **GTR-EVE (Réglementations Techniques Globales - Durabilité des Véhicules Électriques)**, mon rôle chez **Ampere - Renault Group** implique la **validation et l'optimisation des estimateurs d'état de batterie (SOH, SOCE)** grâce à une **analyse avancée des tests et à l'étalonnage des algorithmes intégrés dans le BMS (Battery Management System).**
              - La **performance des véhicules électriques** est significativamente affectée par l'évolution de la batterie au cours de son cycle de vie. Mon travail se concentre sur l'**évaluation, l'étalonnage et la validation des modèles d'estimation**, en tenant compte des contraintes réglementaires et des architectures spécifiques des différentes batteries et véhicules.

              **Tâches attribuées :**
              - **Analyse et validation des estimateurs BMS :** Étude et comparaison des **performances des estimateurs SOH et SOCE** intégrés dans le **BMS**, identification des écarts entre les modèles théoriques et les résultats expérimentaux pour **améliorer la précision de l'estimation**.
              - **Évaluation et étalonnage par tests expérimentaux :** Analyse des **tests de batteries et de véhicules** pour évaluer le **comportement réel du système de stockage d'énergie**. Utilisation des **tests WLTP à 23°C et -7°C** pour mesurer les performances du système dans des conditions climatiques et opérationnelles variées.
              - **Développement d'une méthodologie avancée d'estimation SOH :** Implémentation de plusieurs méthodes d'estimation SOH, y compris les approches **empiriques, algorithmiques et basées sur l'apprentissage automatique**, comparaison de leurs performances et sélection de la méthode la plus **fiable et adaptée au véhicule**.
              - **Optimisation et rapports de performance :** Utilisation de **MATLAB, Python** pour l'analyse des modèles et le développement d'algorithmes, **Concerto AVL** pour la visualisation des données de test, et **Power BI & Excel** pour le suivi des performances.

              **Environnement technique :**
              - MATLAB, Python, Converto AVL, Power BI, Excel.

        - title: Ingénieur Développement d'Algorithmes de Batteries
          company: Freelance - Entreprise Suisse
          company_url: ''
          location: Genève, Suisse
          date_start: '2023-08-01'
          date_end: '2023-10-01'
          description: |2-
              **Contexte du projet :** L'entreprise, spécialisée dans le **stockage d'énergie stationnaire**, nécessitait une expertise en technologie de systèmes de gestion de batterie (BMS) avancés. Ce rôle impliquait la conception et la mise en œuvre d'une architecture logicielle robuste, incluant l'intégration d'**algorithmes d'estimation d'état de batterie avancés (SoC, SoH, SoS, etc.)**. L'objectif était d'optimiser le BMS pour améliorer les performances, la sécurité et l'efficacité du système.

              **Tâches attribuées :**
              - **Conception de l'architecture logicielle pour BMS** : Définition de la structure et de l'organisation du système avec scalability, modularité et intégration matérielle à l'esprit.
              - **Intégration des estimateurs d'état de batterie** : Implémentation d'algorithmes de traitement de données capteurs pour estimer l'État de Charge (SoC), l'État de Santé (SoH) et l'État de Sécurité (SoS).
              - **Rapports techniques** : Production de deux rapports détaillés documentant la conception de l'architecture logicielle BMS, la sélection des algorithmes et les stratégies d'intégration.

              **Environnement technique :**
              - Bases de données de batteries, programmation Python, GitHub, Teams.

        - title: Ingénieur R&D – Optimisation des Performances des Batteries Li-ion
          company: Laboratoire d'Électrochimie (LEPMI - Grenoble INP)
          company_url: 'https://www.linkedin.com/company/100130918/'
          location: Grenoble, France
          date_start: '2019-08-01'
          date_end: '2023-04-01'
          description: |2-
              **Contexte du projet :** Ce projet de recherche s'est concentré sur l'optimisation des performances des batteries lithium-fer-phosphate (LFP) et nickel-manganèse-cobalt (NMC), especialmente dans les scénarios de décharge à courant élevé, en utilisant des méthodes de compensation de chute ohmique. La recherche impliquait une collaboration avec des partenaires industriels (fabricants de vélos électriques et de drones) et a abouti à des publications scientifiques et un brevet industriel.

              **Tâches attribuées :**
              - **Protocoles et campagnes de tests :** Définition et exécution de tests de cyclage, spectroscopie d'impédance (EIS) et analyse de capacité différentielle (dq/dv) sur les batteries NMC et LFP, en intégrant la méthode de compensation de chute ohmique (ODC).
              - **Analyse du vieillissement et amélioration des performances** : Évaluation du vieillissement des batteries dans des conditions de décharge élevée, implémentation d'une méthode ODC à protocole rapide qui a amélioré la capacité de 20%.
              - **Développement de modèles paramétriques** : Conception et implémentation d'un modèle de circuit équivalent (ECM) intégrant les effets ODC pour l'intégration BMS dans les applications à petite échelle (drones, vélos électriques).

              **Environnement technique :**
              - Oscilloscope, Potentiostat (tests de batteries) Biologic/Arbin, Station de soudure, MATLAB, Simulink, EC-Lab, GitHub, MS Office, Programmation (C, Python)

        - title: Ingénieur Développement – Analyse de Batteries de Seconde Vie
          company: Laboratoire d'Électrochimie (LEPMI - Grenoble INP)
          company_url: 'https://www.linkedin.com/company/100130918/'
          location: Grenoble, France
          date_start: '2019-02-01'
          date_end: '2019-07-01'
          description: |2-
              **Contexte du projet** : Ce projet s'est concentré sur l'analyse de la dégradation des batteries. Mes responsabilités incluaient le développement de protocoles rigoureux pour la caractérisation des batteries Li-ion, l'exploration des modèles de dégradation basés sur les Modèles de Circuit Équivalents (ECM) et les paramètres d'État de Santé (SOH), et la réalisation de tests de vieillissement en laboratoire adaptés aux véhicules électriques (VE). Cette collaboration, faisant partie d'une initiative plus large menée par un étudiant travaillant sur sa thèse, a favorisé une approche interdisciplinaire.

              **Tâches attribuées :**
              - **Protocoles de caractérisation** : Développement de protocoles opérationnels pour caractériser les batteries Li-ion pour une seconde vie, incluant les méthodes de mesure des paramètres électriques. (OCV, CC-CV, EIS, dV/dQ)
              - **Modèle de dégradation des performances** : Développement et utilisation d'un modèle simple basé sur le circuit équivalent pour caractériser la dégradation des performances des batteries de seconde vie avec python et Matlab.
              - **Tests de vieillissement en laboratoire** : Réalisation de tests de vieillissement en laboratoire pour évaluer et caractériser le vieillissement des batteries Li-ion dans des conditions similaires à une seconde vie.
              - **Analyse de l'impact des conditions opérationnelles** : Évaluation approfondie des effets des conditions opérationnelles sur les performances des batteries, particulièrement dans le contexte de l'utilisation en seconde vie, et adaptation des résultats obtenus pour une application spécifique dans un Système de Gestion de Batterie (BMS) pour seconde vie.

              **Environnement technique :**
              - Potentiostat (tests de batteries) Biologic, EC-lab, GitHub, MS Office, Programmation (python)

        - title: Ingénieur R&D – Optimisation de la Gestion Énergétique
          company: Laboratoire de Mécanique des Fluides et UAV, Barcelone, Espagne
          company_url: ''
          location: Barcelona, Espagne
          date_start: '2018-07-01'
          date_end: '2018-09-01'
          description: |2-
              **Contexte du projet** : Dans le cadre du développement d'un UAV de haute altitude, je me suis concentré sur les multiples facettes de la consommation et de l'efficacité énergétique des UAV. Chargé d'analyser la consommation énergétique des UAV à voilure fixe, incluant les systèmes simples et hybrides intégrant des composants électriques et des turbines, mon rôle s'est étendu à la simulation des systèmes énergétiques des UAV à voilure fixe. Cette configuration hybride impliquait un équilibre careful entre les composants électriques (moteur, contrôleur, batterie) et une turbine à essence pour atteindre la vitesse requise et le support orienté. Mon rôle analytique incluait également la tâche critique d'analyser et de dimensionner le système de stockage, en tenant compte de facteurs tels que l'autonomie et le poids. En particulier, j'ai contribué à l'approche globale du projet par l'utilisation de l'Ingénierie Système Basée sur les Modèles (MBSE), qui a permis une compréhension complète de la dynamique complexe du système UAV.

              **Tâches attribuées :**
              - **Analyse approfondie de la consommation énergétique** : Étude détaillée de la consommation et de l'efficacité énergétique des drones à voilure fixe, considérant les technologies de batteries, ainsi que les systèmes de propulsion des drones.
              - **Modélisation et Simulation du Système Énergétique** : Modélisation et simulation du système énergétique du drone à voilure fixe, en utilisant des outils tels que Simulink et MBSE pour une analyse complète du drone.
              - **Simulation des Performances Énergétiques du Drone** : Capacité à simuler et évaluer les performances énergétiques des drones à voilure fixe, considérant à la fois les systèmes simples et hybrides pour une évaluation complète.
              - **Analyse et Dimensionnement du Système de Stockage** : Analyse détaillée et dimensionnement du système de stockage pour atteindre l'équilibre optimal entre consommation d'énergie et poids, pour assurer une meilleure autonomie de vol. (Python)

              **Environnement technique :**
              - GitHub, MS Office, Programmation (python), LabVIEW, Simulink, Matlab

        - title: Ingénieur – Analyse Électrique pour Projets Industriels
          company: Centrales Villageoises (Production Photovoltaïque Collective), Vercors, France
          company_url: 'https://www.linkedin.com/company/13003931/'
          location: Vercors, France
          date_start: '2018-02-01'
          date_end: '2018-06-01'
          description: |2-
              **Contexte du projet** : Dans le cadre d'une collaboration entre une entreprise et l'université, ce projet impliquait une étude técnico-économique pour la production collective d'énergie photovoltaïque (PV) dans la communauté du Vercors. Mes responsabilités incluaient l'estimation de la production annuelle des installations photovoltaïques, le calcul des pertes potentielles au sein du système photovoltaïque, et la réalisation d'une analyse approfondie des modèles de consommation énergétique. De plus, j'ai mené une analyse financière complète pour évaluer la viabilité économique du projet proposé. Au-delà des aspects techniques, cette expérience m'a permis de comprendre le fonctionnement complexe du secteur des énergies renouvelables en France, notamment les considérations juridiques liées aux panneaux solaires.

              **Tâches attribuées :**
              - **Évaluation de la Production Potentielle des Installations PV** : Estimation détaillée de la production annuelle attendue des installations PV.
              - **Analyse des Modèles de Consommation Énergétique** : Étude détaillée des modèles de consommation énergétique dans la région du Vercors, permettant d'évaluer la faisabilité du modèle de production collective. (Python)
              - **Analyse Financière de la Viabilité du Projet** : Évaluation détaillée de l'aspect financier pour déterminer la viabilité du projet. (Droit Français)
              - **Collaboration et Pertinence de l'Étude** : Travail collaboratif avec une équipe multidisciplinaire pour assurer la précision et la pertinence de l'étude réalisée. (Projet 175 000 €)

              **Environnement technique :**
              - GitHub, MS Office, Matlab

        - title: Ingénieur Instrumentation et Automatisation
          company: Mi Bus UIO (Startup)
          company_url: ''
          location: Quito, Équateur
          date_start: '2015-06-01'
          date_end: '2018-02-01'
          description: |2-
               **Contexte du projet** : En tant qu'ingénieur électronique pour une startup spécialisée dans les solutions de mobilité, j'ai dirigé le développement d'un système de surveillance complet pour les transports publics, notamment les bus de la capitale. Mon travail s'est concentré sur la programmation et le développement de microcontrôleurs, ainsi que sur la communication MQTT. La mise en œuvre réussie de ce système non seulement a amélioré les capacités de surveillance mais a également contribué à des économies significatives, atteignant jusqu'à 50 000 $ par an et par opérateur. Le projet visait à optimiser les opérations et les arrêts des bus, en améliorant systématiquement les itinéraires pour rationaliser les dépenses opérationnelles globales. Cette expérience non seulement a mis en valeur mon expertise technique mais a également démontré l'impact concret des solutions électroniques innovantes dans l'optimisation de la mobilité urbaine et de l'efficacité des transports.

              **Tâches attribuées :**
              - **Comprendre le Système Électrique et CAN des Bus** : Analyse approfondie de la partie électrique des bus et de la communication avec le système CAN pour collecter des données telles que la vitesse et d'autres informations provenant des capteurs.
              - **Intégration des Éléments de Surveillance** : Implémentation d'éléments de surveillance pour le suivi GPS et le comptage des passagers, resultingant en une base de données pour chaque bus.
              - **Développement de Prototype** : Création d'un prototype de dispositif de surveillance, installé et testé sur 25 bus pour analyser les performances, optimiser les itinéraires et améliorer les horaires.
              - **Ingénierie Basée sur les Modèles** : Utilisation de l'approche d'ingénierie basée sur les modèles pour considérer chaque module, de la communication à la connexion cloud et du système basé sur les modèles, et application de l'Analyse des Modes de Défaillance et de leurs Effets (AMDEC) pour optimiser chaque élément du système, assurant sa fiabilité et ses performances.

              **Environnement technique :**
              - Oscilloscope, Station de soudure, GitHub, MS Office, Programmation (C, python), Analyseur CAN
    design:
      columns: '2'

  - block: accomplishments
    id: accomplishments
    content:
      title: 'Certifications et Cours'
      subtitle: ''
      date_format: Jan 2006
      items: []
    design:
      columns: '2'

  - block: collection
    id: posts
    content:
      title: Articles Récents
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - fr/post
      offset: 0
      order: desc
    design:
      view: compact
      columns: '2'

  - block: portfolio
    id: projects
    content:
      title: Projets
      filters:
        folders:
          - fr/project
      default_button_index: 0
      buttons:
        - name: All
          tag: '*'
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false

  - block: collection
    id: publications
    content:
      title: Publications
      text: |-
        {{% callout note %}}
        Découvrez facilement le contenu pertinent en [filtrant les publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - fr/publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation

  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
          **Contactez-moi :** N'hésitez pas à me contacter pour toute demande ou collaboration
      address:
        city: Paris
        region: Ile de France
        country: France
        country_code: FR
      contact_links:
        - icon: twitter
          icon_pack: fab
          name: Me contacter
          link: 'https://twitter.com/nicomagnet'
      autolink: false
      form:
        provider: netlify
        netlify:
          captcha: false
    design:
      columns: '2'
---