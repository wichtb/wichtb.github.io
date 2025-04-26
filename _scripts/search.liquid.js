---
permalink: /assets/js/search-data.js
---
// obtenir l'élément ninja-keys
const ninja = document.querySelector('ninja-keys');

// ajouter les éléments du menu accueil et autres pages
ninja.data = [
  {%- for page in site.pages -%}
    {%- if page.permalink == '/' -%}{%- assign about_title = page.title | strip -%}{%- endif -%}
  {%- endfor -%}
  {
    id: "nav-{{ about_title | slugify }}",
    title: "{{ about_title | truncatewords: 13 }}",
    section: "Navigation",
    handler: () => {
      window.location.href = "{{ '/' | relative_url }}";
    },
  },
  {%- assign sorted_pages = site.pages | sort: "nav_order" -%}
  {%- for p in sorted_pages -%}
    {%- if p.nav and p.autogen == null -%}
      {%- if p.dropdown -%}
        {%- for child in p.children -%}
          {%- unless child.title == 'divider' -%}
            {
              {%- assign title = child.title | escape | strip -%}
              {%- if child.permalink contains "/blog/" -%}{%- assign url = "/blog/" -%} {%- else -%}{%- assign url = child.permalink -%}{%- endif -%}
              id: "dropdown-{{ title | slugify }}",
              title: "{{ title | truncatewords: 13 }}",
              description: "{{ child.description | strip_html | strip_newlines | escape | strip }}",
              section: "Menu déroulant",
              handler: () => {
                window.location.href = "{{ url | relative_url }}";
              },
            },
          {%- endunless -%}
        {%- endfor -%}
      {%- else -%}
        {
          {%- assign title = p.title | escape | strip -%}
          {%- if p.permalink contains "/blog/" -%}{%- assign url = "/blog/" -%} {%- else -%}{%- assign url = p.url -%}{%- endif -%}
          id: "nav-{{ title | slugify }}",
          title: "{{ title | truncatewords: 13 }}",
          description: "{{ p.description | strip_html | strip_newlines | escape | strip }}",
          section: "Navigation",
          handler: () => {
            window.location.href = "{{ url | relative_url }}";
          },
        },
      {%- endif -%}
    {%- endif -%}
  {%- endfor -%}
  {%- if site.posts_in_search -%}
    {%- for post in site.posts -%}
      {
        {%- assign title = post.title | escape | strip -%}
        id: "post-{{ title | slugify }}",
        {% if post.redirect == blank %}
          title: "{{ title | truncatewords: 13 }}",
        {% elsif post.redirect contains '://' %}
          title: '{{ title | truncatewords: 13 }} <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        {% else %}
          title: "{{ title | truncatewords: 13 }}",
        {% endif %}
        description: "{{ post.description | strip_html | strip_newlines | escape | strip }}",
        section: "Articles",
        handler: () => {
          {% if post.redirect == blank %}
            window.location.href = "{{ post.url | relative_url }}";
          {% elsif post.redirect contains '://' %}
            window.open("{{ post.redirect }}", "_blank");
          {% else %}
            window.location.href = "{{ post.redirect | relative_url }}";
          {% endif %}
        },
      },
    {%- endfor -%}
  {%- endif -%}
  {%- for collection in site.collections -%}
    {%- if collection.label != 'posts' -%}
      {%- for item in collection.docs -%}
        {
          {%- if item.inline -%}
            {%- assign title = item.content | newline_to_br | replace: "<br />", " " | replace: "<br/>", " " | strip_html | strip_newlines | escape | strip -%}
          {%- else -%}
            {%- assign title = item.title | newline_to_br | replace: "<br />", " " | replace: "<br/>", " " | strip_html | strip_newlines | escape | strip -%}
          {%- endif -%}
          id: "{{ collection.label }}-{{ title | slugify }}",
          title: '{{ title | escape | emojify | truncatewords: 13 }}',
          description: "{{ item.description | strip_html | strip_newlines | escape | strip }}",
          section: "{{ collection.label | capitalize }}",
          {%- unless item.inline -%}
            handler: () => {
              window.location.href = "{{ item.url | relative_url }}";
            },
          {%- endunless -%}
        },
      {%- endfor -%}
    {%- endif -%}
  {%- endfor -%}
  {%- if site.socials_in_search -%}
    {%- for social in site.data.socials -%}
      {
        id: 'social-{{ social[0] | slugify }}',
        title: '{{ social[0] | capitalize }}',
        section: 'Réseaux sociaux',
        handler: () => {
          window.open('{{ social[1] }}', '_blank');
        },
      },
    {%- endfor -%}
  {%- endif -%}
  {%- if site.enable_darkmode -%}
    {
      id: 'light-theme',
      title: 'Passer au thème clair',
      description: 'Changer le thème du site en clair',
      section: 'Thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Passer au thème sombre',
      description: 'Changer le thème du site en sombre',
      section: 'Thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Utiliser le thème du système',
      description: 'Changer le thème du site selon le système',
      section: 'Thème',
      handler: () => {
        setThemeSetting("system");
      },
    },
  {%- endif -%}
];
