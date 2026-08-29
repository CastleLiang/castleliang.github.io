---
layout: page
permalink: /publications/
title: Selected Publications
nav_title: Publications
description: Only list publications as the corresponding author or first author.
nav: true
nav_order: 3.5
---

<link rel="stylesheet" href="{{ '/assets/css/corresponding-publications.css' | relative_url }}">

<section class="corresponding-pubs" data-default-year="2026" aria-label="Selected publications">
  <div class="corresponding-pubs-author-legend" aria-label="Author relationship legend">
    <span class="corresponding-pubs-legend-student"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Student</span>
    <span class="corresponding-pubs-legend-mentee"><i class="fas fa-flask" aria-hidden="true"></i> Mentored researcher</span>
    <span class="corresponding-pubs-legend-corresponding"><b aria-hidden="true">*</b> Corresponding author</span>
  </div>

  <div class="corresponding-pubs-search" role="search">
    <i class="fas fa-search" aria-hidden="true"></i>
    <label class="sr-only" for="corresponding-pubs-search-input">Search publications</label>
    <input id="corresponding-pubs-search-input" type="search" inputmode="search" autocomplete="off" placeholder="Search by paper title, author, venue, or year" aria-describedby="corresponding-pubs-search-help">
    <button class="corresponding-pubs-search-clear" type="button" aria-label="Clear publication search" hidden><i class="fas fa-times" aria-hidden="true"></i></button>
    <span id="corresponding-pubs-search-help" class="sr-only">Searches across publications from all years.</span>
  </div>

  <div class="corresponding-pubs-toolbar">
    <div class="corresponding-pubs-years" role="tablist" aria-label="Select publication year">
      <button class="corresponding-pubs-year is-active" type="button" role="tab" aria-selected="true" tabindex="0" data-year="2026">2026 <span>24</span></button>
      <button class="corresponding-pubs-year" type="button" role="tab" aria-selected="false" tabindex="-1" data-year="2025">2025 <span>21</span></button>
      <button class="corresponding-pubs-year" type="button" role="tab" aria-selected="false" tabindex="-1" data-year="2024">2024 <span>17</span></button>
      <button class="corresponding-pubs-year" type="button" role="tab" aria-selected="false" tabindex="-1" data-year="2023">2023 <span>9</span></button>
      <button class="corresponding-pubs-year" type="button" role="tab" aria-selected="false" tabindex="-1" data-year="2016-2022" data-label="2016&ndash;2022">2016&ndash;2022 <span>9</span></button>
    </div>
    <p class="corresponding-pubs-status" aria-live="polite">Showing 24 publications from 2026</p>
  </div>

  <div class="corresponding-pubs-list">
    {% for pub in site.data.corresponding_publications %}
      {% if pub.group %}{% assign display_group = pub.group %}{% else %}{% assign display_group = pub.year %}{% endif %}
      {% assign authorship = pub.authorship | default: "Corresponding" %}
      {% assign venue_full = site.data.venue_names[pub.venue] | default: pub.venue %}
      {% assign venue_year = pub.venue | append: "-" | append: pub.year %}
      {% assign venue_display = site.data.venue_editions[venue_year] | default: venue_full %}
      {% if pub.venue_full %}{% assign venue_display = pub.venue_full %}{% endif %}
      <article class="corresponding-pub-card" data-year="{{ display_group }}" data-pub-year="{{ pub.year }}"{% unless display_group == 2026 %} hidden{% endunless %}>
        <div class="corresponding-pub-card-top">
          <span class="corresponding-pub-venue">{{ pub.venue }}</span>
          <span class="corresponding-pub-type">{{ pub.type }}</span>
          {% if pub.presentation %}
            <span class="corresponding-pub-presentation corresponding-pub-presentation-{{ pub.presentation | downcase }}">
              {% if pub.presentation == "Oral" %}
                <i class="fas fa-microphone-alt" aria-hidden="true"></i>
              {% else %}
                <i class="fas fa-star" aria-hidden="true"></i>
              {% endif %}
              {{ pub.presentation }}
            </span>
          {% endif %}
          {% if pub.group %}<span class="corresponding-pub-year-badge">{{ pub.year }}</span>{% endif %}
        </div>
        <h3 class="corresponding-pub-title">
          {% if pub.url %}
            <a href="{{ pub.url }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
          {% else %}
            {{ pub.title }}
          {% endif %}
        </h3>
        <p class="corresponding-pub-authors">
          {%- for author in pub.author_list -%}
            <span class="corresponding-pub-author corresponding-pub-author-{{ author.role }}">
              {{- author.name -}}
              {%- if author.role == "student" -%}
                <span class="corresponding-pub-role-marker" title="Student" aria-label="Student"><i class="fas fa-graduation-cap" aria-hidden="true"></i></span>
              {%- elsif author.role == "mentee" -%}
                <span class="corresponding-pub-role-marker" title="Mentored researcher" aria-label="Mentored researcher"><i class="fas fa-flask" aria-hidden="true"></i></span>
              {%- elsif author.role == "self" -%}
                {%- if authorship == "Corresponding" -%}
                  <sup class="corresponding-pub-corresponding-mark" title="Corresponding author" aria-label="Corresponding author">*</sup>
                {%- endif -%}
              {%- endif -%}
              {%- if author.role != "self" and pub.corresponding_authors contains author.name -%}
                <sup class="corresponding-pub-corresponding-mark" title="Corresponding author" aria-label="Corresponding author">*</sup>
              {%- endif -%}
            </span>
            {%- unless forloop.last -%}{% if forloop.rindex == 2 %}, and {% else %}, {% endif %}{%- endunless -%}
          {%- endfor -%}
        </p>
        <p class="corresponding-pub-venue-full">{{ venue_display }}</p>
      </article>
    {% endfor %}
  </div>
  <p class="corresponding-pubs-empty" hidden>No publications match this search.</p>
</section>

<script defer src="{{ '/assets/js/corresponding_publications.js' | relative_url }}"></script>
