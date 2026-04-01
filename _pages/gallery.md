---
layout: page
permalink: /gallery/
title: Gallery
description: Selected academic activity photos.
nav: true
nav_order: 9
enable_gallery_page: true
---

<div id="academic-gallery-root" class="mb-4"></div>

{% assign gallery_files = site.static_files | where_exp: "file", "file.path contains '/assets/img/gallery/'" | sort: "name" %}
<script id="academic-gallery-data" type="application/json">
[
{% for file in gallery_files %}
  {
    "src": {{ file.path | replace: ' ', '%20' | relative_url | jsonify }},
    "filename": {{ file.name | jsonify }},
    "stem": {{ file.basename | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>
