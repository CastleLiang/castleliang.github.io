---
layout: page
permalink: /mentoring/
title: Team
description: We are CityMind Lab. Our target is shaping the future of AI and foundation models for urban spatio-temporal data. I am honored to work alongside these talented students and colleagues!
nav: true
nav_order: 3.7
---

<link rel="stylesheet" href="{{ '/assets/css/mentoring.css' | relative_url }}">

<div class="mentoring-page">
  <section class="mentoring-section mentoring-section-phd" aria-labelledby="doctoral-students-heading">
    <header class="mentoring-section-header">
      <h2 id="doctoral-students-heading">PhD Students</h2>
      <p>Current students and graduates under my main supervision.</p>
    </header>
    <div class="mentoring-grid">
      {% for student in site.data.mentoring.doctoral %}
        {% if student.link %}<a class="mentoring-person-card mentoring-person-current mentoring-person-linked" href="{{ student.link }}" target="_blank" rel="noopener noreferrer" aria-label="Visit {{ student.name }}'s profile">{% else %}<article class="mentoring-person-card mentoring-person-current">{% endif %}
          {% if student.image %}
            <img class="mentoring-avatar mentoring-avatar-photo" src="{{ student.image | relative_url }}" alt="Portrait of {{ student.name }}" loading="lazy" decoding="async">
          {% else %}
            <span class="mentoring-avatar mentoring-avatar-placeholder" role="img" aria-label="Portrait unavailable"><i class="fas fa-user" aria-hidden="true"></i></span>
          {% endif %}
          <div class="mentoring-person-copy">
            <h3>{{ student.name }}</h3>
            <p>{{ student.research }}</p>
            <span class="mentoring-staff-affiliation">From: {{ student.affiliation }}</span>
          </div>
          <span class="mentoring-cohort" title="{{ student.cohort }} cohort" aria-label="{{ student.cohort }} cohort">{{ student.cohort }}</span>
        {% if student.link %}</a>{% else %}</article>{% endif %}
      {% endfor %}
      {% for student in site.data.mentoring.doctoral_alumni %}
        {% if student.link %}<a class="mentoring-person-card mentoring-person-alumni mentoring-person-linked" href="{{ student.link }}" target="_blank" rel="noopener noreferrer" aria-label="Visit {{ student.name }}'s profile">{% else %}<article class="mentoring-person-card mentoring-person-alumni">{% endif %}
          {% if student.image %}
            <img class="mentoring-avatar mentoring-avatar-photo" src="{{ student.image | relative_url }}" alt="Portrait of {{ student.name }}" loading="lazy" decoding="async">
          {% else %}
            <span class="mentoring-avatar mentoring-avatar-placeholder" role="img" aria-label="Portrait unavailable"><i class="fas fa-user" aria-hidden="true"></i></span>
          {% endif %}
          <div class="mentoring-person-copy">
            <h3>{{ student.name }}</h3>
            <span class="mentoring-placement" title="First placement" aria-label="First placement: {{ student.role }} at {{ student.organization }}"><i class="fas fa-briefcase" aria-hidden="true"></i>{{ student.role }} at {{ student.organization }}</span>
          </div>
          <span class="mentoring-graduated"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Alumni</span>
        {% if student.link %}</a>{% else %}</article>{% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="mentoring-section mentoring-section-mphil" aria-labelledby="master-students-heading">
    <header class="mentoring-section-header">
      <h2 id="master-students-heading">MPhil Students</h2>
      <p>Current students and graduates under my main supervision.</p>
    </header>
    <div class="mentoring-grid">
      {% for student in site.data.mentoring.masters %}
        {% if student.link %}<a class="mentoring-person-card mentoring-person-current mentoring-person-linked" href="{{ student.link }}" target="_blank" rel="noopener noreferrer" aria-label="Visit {{ student.name }}'s profile">{% else %}<article class="mentoring-person-card mentoring-person-current">{% endif %}
          {% if student.image %}
            <img class="mentoring-avatar mentoring-avatar-photo" src="{{ student.image | relative_url }}" alt="Portrait of {{ student.name }}" loading="lazy" decoding="async">
          {% else %}
            <span class="mentoring-avatar mentoring-avatar-placeholder" role="img" aria-label="Portrait unavailable"><i class="fas fa-user" aria-hidden="true"></i></span>
          {% endif %}
          <div class="mentoring-person-copy">
            <h3>{{ student.name }}</h3>
            <p>{{ student.research }}</p>
            <span class="mentoring-staff-affiliation">From: {{ student.affiliation }}</span>
          </div>
          <span class="mentoring-cohort" title="{{ student.cohort }} cohort" aria-label="{{ student.cohort }} cohort">{{ student.cohort }}</span>
        {% if student.link %}</a>{% else %}</article>{% endif %}
      {% endfor %}
      {% for student in site.data.mentoring.masters_alumni %}
        {% if student.link %}<a class="mentoring-person-card mentoring-person-alumni mentoring-person-linked" href="{{ student.link }}" target="_blank" rel="noopener noreferrer" aria-label="Visit {{ student.name }}'s profile">{% else %}<article class="mentoring-person-card mentoring-person-alumni">{% endif %}
          {% if student.image %}
            <img class="mentoring-avatar mentoring-avatar-photo" src="{{ student.image | relative_url }}" alt="Portrait of {{ student.name }}" loading="lazy" decoding="async">
          {% else %}
            <span class="mentoring-avatar mentoring-avatar-placeholder" role="img" aria-label="Portrait unavailable"><i class="fas fa-user" aria-hidden="true"></i></span>
          {% endif %}
          <div class="mentoring-person-copy">
            <h3>{{ student.name }}</h3>
            <span class="mentoring-placement" title="First placement" aria-label="First placement: {{ student.role }} at {{ student.organization }}"><i class="fas fa-briefcase" aria-hidden="true"></i>{{ student.role }} at {{ student.organization }}</span>
          </div>
          <span class="mentoring-graduated"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Alumni</span>
        {% if student.link %}</a>{% else %}</article>{% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="mentoring-section mentoring-section-researchers" aria-labelledby="staffs-heading">
    <header class="mentoring-section-header">
      <h2 id="staffs-heading">Staff and Interns</h2>
      <p>Current and former research staff and interns.</p>
    </header>
    <div class="mentoring-grid">
      {% for researcher in site.data.mentoring.current_staff %}
        {% if researcher.link %}<a class="mentoring-person-card mentoring-person-current mentoring-person-linked" href="{{ researcher.link }}" target="_blank" rel="noopener noreferrer" aria-label="Visit {{ researcher.name }}'s profile">{% else %}<article class="mentoring-person-card mentoring-person-current">{% endif %}
          {% if researcher.image %}
            <img class="mentoring-avatar mentoring-avatar-photo" src="{{ researcher.image | relative_url }}" alt="Portrait of {{ researcher.name }}" loading="lazy" decoding="async">
          {% else %}
            <span class="mentoring-avatar mentoring-avatar-placeholder" role="img" aria-label="Portrait unavailable"><i class="fas fa-user" aria-hidden="true"></i></span>
          {% endif %}
          <div class="mentoring-person-copy">
            <h3>{{ researcher.name }}</h3>
            <p>{{ researcher.research }}</p>
            <span class="mentoring-staff-affiliation">From: {{ researcher.affiliation }}</span>
            <span class="mentoring-person-meta">{{ researcher.position }}{% if researcher.period %} &middot; {{ researcher.period }}{% endif %}</span>
          </div>
        {% if researcher.link %}</a>{% else %}</article>{% endif %}
      {% endfor %}
      {% for researcher in site.data.mentoring.former_staff %}
        {% if researcher.link %}<a class="mentoring-person-card mentoring-person-alumni mentoring-person-linked" href="{{ researcher.link }}" target="_blank" rel="noopener noreferrer" aria-label="Visit {{ researcher.name }}'s profile">{% else %}<article class="mentoring-person-card mentoring-person-alumni">{% endif %}
          {% if researcher.image %}
            <img class="mentoring-avatar mentoring-avatar-photo" src="{{ researcher.image | relative_url }}" alt="Portrait of {{ researcher.name }}" loading="lazy" decoding="async">
          {% else %}
            <span class="mentoring-avatar mentoring-avatar-placeholder" role="img" aria-label="Portrait unavailable"><i class="fas fa-user" aria-hidden="true"></i></span>
          {% endif %}
          <div class="mentoring-person-copy">
            <h3>{{ researcher.name }}</h3>
            <p class="mentoring-alumni-role">{{ researcher.position }}</p>
            <span class="mentoring-placement" title="First placement" aria-label="First placement: {{ researcher.destination | default: 'TBD' }}"><i class="fas fa-briefcase" aria-hidden="true"></i>{{ researcher.destination | default: "TBD" }}</span>
          </div>
          <span class="mentoring-graduated"><i class="fas fa-user-check" aria-hidden="true"></i> Former</span>
        {% if researcher.link %}</a>{% else %}</article>{% endif %}
      {% endfor %}
    </div>
  </section>
</div>
