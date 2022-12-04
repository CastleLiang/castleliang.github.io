---
layout: page
permalink: /publications/
title: publications
description: I have published ~40 papers in refereed journals and conferences, including DM venues (e.g., KDD*5, WWW*4, TKDE*4), AI venues (e.g., NeurIPS*3, IJCAI*5, AAAI*2), and CV venues (e.g., ECCV*1, MM*2). My publications are listed by categories in reversed chronological order, where * indicates equal contribution and ^ denotes corresponding author. 
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">
<a href="https://scholar.google.com/citations?hl=zh-CN&user=n9cODgcAAAAJ&view_op=list_works&sortby=pubdate">[Google Scholar]</a>
<a href="https://dblp.org/pid/183/0977.html">[DBLP]</a>
<a href="https://orcid.org/0000-0003-2817-7337">[ORCID]</a>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
