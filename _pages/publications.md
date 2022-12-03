---
layout: page
permalink: /publications/
title: publications
description: I have published ~40 papers in refereed journals and conferences (with 1.7K+ citations), including DM venues (e.g., TKDE*4, KDD*5, WWW*3), AI venues (e.g., NeurIPS*3, IJCAI*5, AAAI*2), and CV venues (ECCV*1, MM*2). Publications by categories in reversed chronological order (* indicates equal contribution, ^ denotes corresponding author). 
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
