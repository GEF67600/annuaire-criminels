# Annuaire criminel

Site statique généré avec Eleventy, recherche full-text avec Pagefind.

## Ajouter une fiche

1. Créer un fichier dans `src/criminels/` (ex : `ted-bundy.md`).
2. Copier le format d'un des fichiers `exemple-*.md`.
3. Remplir le front-matter (`title`, `type`, `pays`, `periode`, `victimes`, `statut`) et le texte en dessous.
4. `git add`, `git commit`, `git push` sur `main` → le site se met à jour automatiquement (GitHub Actions).

`type` accepte plusieurs valeurs (ex: `["Tueur en série", "Cannibale"]`) et sert de filtre de recherche.

## Tester en local

```bash
npm install
npm run build          # build + indexation Pagefind
npx serve _site        # ou: npm run serve-build
```

Pour un rechargement en direct pendant l'écriture (sans recherche fonctionnelle, Pagefind ne s'exécute qu'au build) :

```bash
npm start
```

## Mise en ligne (GitHub Pages)

1. Pousser ce dossier dans un dépôt GitHub (public ou privé si tu as GitHub Pro).
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source : "GitHub Actions"**.
3. Chaque push sur `main` déclenche `.github/workflows/deploy.yml` : build + déploiement automatique.

Pas besoin d'InfinityFree : GitHub Pages est gratuit, fiable, sans publicité, et suffisant pour un site statique de ce type.

## Structure

```
src/
  criminels/*.md        ← une fiche = un fichier
  _includes/layouts/     ← gabarits HTML
  index.njk              ← page d'accueil (liste + recherche)
  style.css
.eleventy.js              ← config du générateur
.github/workflows/deploy.yml
```
