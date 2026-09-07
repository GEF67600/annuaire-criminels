<nav class="menu-pays">
  {% for continent, pays in collections.menu %}
  <details>
    <summary>{{ continent }}</summary>
    {% for nom_pays, types in pays %}
    <details class="sous-niveau">
      <summary>{{ nom_pays }}</summary>
      {% for type, fiches in types %}
      <details class="sous-niveau">
        <summary>{{ type }}</summary>
        <ul>
          {% for f in fiches %}
          <li><a href="{{ f.url | url }}">{{ f.data.title }}</a></li>
          {% endfor %}
        </ul>
      </details>
      {% endfor %}
    </details>
    {% endfor %}
  </details>
  {% endfor %}
</nav>