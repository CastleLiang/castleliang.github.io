---
layout: page
permalink: /awards/
title: Awards
nav: true
nav_order: 4
---

<div class="awards-page">
  <div class="awards-featured-grid">
    {% assign featured_titles = "Stanford/Elsevier Top 2% Scientists|ACM SIGSPATIAL China Chapter Rising Star Award|Best Paper Runner-up Award at IEEE ICDM 2025|The 23rd China Patent Excellence Award" | split: "|" %}
    {% assign featured_years = "2024, 2025|2024|2025|2022" | split: "|" %}
    {% assign featured_descs = "Recognized for sustained research impact in spatio-temporal data mining and urban computing.|Honored for emerging academic leadership and research influence in spatio-temporal data mining.| Test-Time Graph Rebirth For GNN Generalization Under Distribution Shifts.|National-level invention recognition for high-impact patented innovation." | split: "|" %}

    {% for title in featured_titles %}
      {% assign idx = forloop.index0 %}
      <article class="award-featured-card">
        <div class="award-year">{{ featured_years[idx] }}</div>
        <h2 class="award-title"><strong>{{ title }}</strong></h2>
        <p class="award-desc">{{ featured_descs[idx] }}</p>
      </article>
    {% endfor %}
  </div>

  <div class="awards-timeline">
    {% assign timeline_titles = "Outstanding Area Chair at ACM Multimedia 2025|Best Paper Award at IEEE WCSP 2025|Silver Medal at International Exhibition of Inventions Geneva|Outstanding Program Committee, ACM SIGSPATIAL 2023|Dean's Graduate Research Excellence Award, National University of Singapore|SDSC Dissertation Research Fellowship|Outstanding Winners of The Interdisciplinary Contest in Modeling|China Computer Federation Outstanding Student|Student Travel Grants at AAAI-23, SIGSPATIAL-22, CIKM-22, AAAI-20, and KDD-19" | split: "|" %}
    {% assign timeline_years = "2025|2025|2024|2023|2022|2021|2015|2015|2019-2023" | split: "|" %}
    {% assign timeline_descs = "Service recognition for outstanding area chair contribution.|Best paper recognition for research excellence at IEEE WCSP 2025.|International invention exhibition honor.|Community service recognition.|Graduate research distinction at NUS.|Awarded to 1 out of 10 most innovative and impactful PhD students focusing on data science in Singapore.|Top 0.1% distinction in interdisciplinary modeling competition.|Selected with only 1 to 4 annual quotas in top-tier China-based universities.|Conference travel support across major AI and data mining venues." | split: "|" %}

    {% for title in timeline_titles %}
      {% assign idx = forloop.index0 %}
      {% assign item_downcase = title | downcase %}
      {% assign timeline_highlight = false %}
      {% if item_downcase contains "award" or item_downcase contains "best paper" or item_downcase contains "rising star" or item_downcase contains "patent" %}
        {% assign timeline_highlight = true %}
      {% endif %}
      <article class="award-timeline-item{% if timeline_highlight %} award-timeline-highlight{% endif %}">
        <div class="award-timeline-dot"></div>
        <div class="award-timeline-year">{{ timeline_years[idx] }}</div>
        <div class="award-timeline-content">
          <div class="award-timeline-title">
            {% if title contains "Dean's Graduate Research Excellence Award" %}
              <strong>Dean's Graduate Research Excellence Award</strong>, National University of Singapore
            {% elsif title contains "SDSC Dissertation Research Fellowship" %}
              <strong>SDSC Dissertation Research Fellowship</strong>, Singapore Data Science Consortium
            {% elsif title contains "Best Paper Award at IEEE WCSP 2025" %}
              Best Paper Award at IEEE WCSP 2025
            {% elsif title contains "Best Paper Runner-up Award at IEEE ICDM 2025" %}
              <strong>Best Paper Runner-up Award</strong> at IEEE ICDM 2025
            {% elsif title contains "Outstanding Area Chair at ACM Multimedia 2025" %}
              <strong>Outstanding Area Chair</strong> at ACM Multimedia 2025
            {% elsif title contains "Outstanding Winners of The Interdisciplinary Contest in Modeling" %}
              Outstanding Winners of The Interdisciplinary Contest in Modeling
            {% elsif title contains "China Computer Federation Outstanding Student" %}
               China Computer Federation Outstanding Student
            {% elsif title contains "Student Travel Grants" %}
              Student Travel Grants at AAAI-23, SIGSPATIAL-22, CIKM-22, AAAI-20, and KDD-19
            {% else %}
              {{ title }}
            {% endif %}
          </div>
          <div class="award-timeline-desc">{{ timeline_descs[idx] }}</div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
