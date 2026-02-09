# Portfolio Website - Abondance SANAMA

Site web portfolio professionnel pour Abondance SANAMA, Auditrice Interne Junior spécialisé en Contrôle Interne et Gestion des Risques.

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement Local

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

### Build de Production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

### Prévisualisation de la Production

```bash
npm run preview
```

## 📦 Déploiement sur GitHub Pages

### Option 1: Déploiement Manuel

1. **Build le projet:**
   ```bash
   npm run build
   ```

2. **Créer un nouveau repository GitHub**

3. **Initialiser Git et pousser le code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
   git push -u origin main
   ```

4. **Déployer le dossier dist:**
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

5. **Configurer GitHub Pages:**
   - Allez dans Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Cliquez sur Save

### Option 2: Déploiement Automatique avec GitHub Actions

Créez le fichier `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Après avoir poussé ce fichier, chaque commit sur la branche `main` déclenchera automatiquement un déploiement.

## 🎨 Technologies Utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **TailwindCSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **React Scroll** - Navigation fluide

## 📋 Structure du Projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Section héros avec nom et CTA
│   │   ├── About.jsx          # Section à propos
│   │   ├── Education.jsx      # Formation académique
│   │   ├── Experience.jsx     # Expérience professionnelle
│   │   ├── Skills.jsx         # Compétences techniques
│   │   ├── SoftSkills.jsx     # Compétences comportementales
│   │   ├── Languages.jsx      # Langues
│   │   ├── Interests.jsx      # Centres d'intérêt
│   │   ├── Contact.jsx        # Formulaire de contact
│   │   └── Footer.jsx         # Pied de page
│   ├── App.jsx                # Composant principal
│   ├── main.jsx               # Point d'entrée
│   └── index.css              # Styles globaux
├── index.html                 # Template HTML
├── vite.config.js             # Configuration Vite
├── tailwind.config.js         # Configuration Tailwind
└── package.json               # Dépendances
```

## 🎯 Fonctionnalités

- ✅ Design minimaliste et professionnel
- ✅ Palette de couleurs corporate (blanc, bleu foncé, gris)
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation avec défilement fluide
- ✅ Responsive design (desktop first)
- ✅ Optimisé pour le SEO
- ✅ Prêt pour GitHub Pages
- ✅ Contenu entièrement en français

## 📱 Sections du Site

1. **Hero** - Présentation avec nom, titre et boutons d'action
2. **À Propos** - Résumé professionnel et points clés
3. **Formation** - Parcours académique
4. **Expérience** - Expériences professionnelles avec timeline
5. **Compétences Techniques** - Expertise avec barres de progression
6. **Compétences Comportementales** - Soft skills
7. **Langues** - Compétences linguistiques
8. **Centres d'Intérêt** - Passions personnelles
9. **Contact** - Formulaire et informations de contact
10. **Footer** - Navigation et copyright

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` et `index.css`. La palette actuelle:
- Bleu foncé (primary): `#0f172a` (slate-900)
- Bleu secondaire: `#1e3a8a` (blue-900)
- Accent: `#3b82f6` (blue-500)
- Fond clair: `#f8fafc` (slate-50)

### Contenu

Modifiez le contenu directement dans les composants situés dans `src/components/`.

## 📄 Licence

© 2026 Abondance SANAMA - Tous droits réservés

## 📞 Contact

- **Email:** sanamaabondance@gmail.com
- **Téléphone:** +33 6 07 03 55 50
- **LinkedIn:** [Abondance SANAMA](http://linkedin.com/in/abondance-sanama-642b8b238)
- **Localisation:** Toulouse, France
