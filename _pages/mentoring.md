---
layout: page
permalink: /mentoring/
title: Team
description: We are CityMind Lab. Our target is shaping the future of AI and foundation models for urban spatio-temporal data. I am honored to work alongside these talented students and colleagues!
nav: true
nav_order: 2
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
        {% include mentoring_card.html member=student kind="current_student" %}
      {% endfor %}
      {% for student in site.data.mentoring.doctoral_alumni %}
        {% include mentoring_card.html member=student kind="alumni_student" %}
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
        {% include mentoring_card.html member=student kind="current_student" %}
      {% endfor %}
      {% for student in site.data.mentoring.masters_alumni %}
        {% include mentoring_card.html member=student kind="alumni_student" %}
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
        {% include mentoring_card.html member=researcher kind="current_staff" %}
      {% endfor %}
      {% for researcher in site.data.mentoring.former_staff %}
        {% include mentoring_card.html member=researcher kind="former_staff" %}
      {% endfor %}
    </div>
  </section>
</div>

<script defer src="{{ '/assets/js/mentoring.js' | relative_url }}"></script>
