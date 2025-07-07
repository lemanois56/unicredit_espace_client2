# UniCredit Banking Dashboard - Nuxt 3

Une application de tableau de bord bancaire moderne construite avec Nuxt 3, optimisée pour UniCredit avec un design responsive et une interface mobile-first.

## 🚀 Fonctionnalités

### Interface Utilisateur
- **Design UniCredit** : Thème personnalisé aux couleurs de UniCredit (rouge #e30613)
- **Interface Responsive** : Optimisée pour desktop, tablette et mobile
- **Navigation Mobile** : Menu de navigation en bas pour les appareils mobiles
- **Barre Supérieure Simplifiée** : Interface épurée sur mobile avec logo et notifications
- **Animations Fluides** : Transitions et animations pour une expérience utilisateur optimale

### Fonctionnalités Bancaires
- **Vue d'ensemble des comptes** : Saldo total €3.967.000,00
- **Gestion des comptes** : Conto principale, risparmio, investimenti, carte di credito
- **Transactions** : Historique et gestion des transactions
- **Bonifici** : Système de transferts et virements
- **Analytics** : Graphiques et analyses financières
- **Notifications** : Système de notifications en temps réel

### Informations Client
- **Propriétaire** : ALFREDO Frassati
- **Statut** : Conto Bloccato
- **Langues** : Italien (IT) et Anglais (EN)
- **Banque** : UniCredit S.p.A., Piazza Gae Aulenti, 3 (Tower A), 20154 Milano (MI), Italia

## 📱 Optimisations Mobile

### Navigation Mobile
- **Menu Bottom Navigation** : Navigation en bas d'écran sur mobile
- **Icônes Intuitives** : Home, Conti, Transazioni, Bonifici, Analisi
- **Indicateur Actif** : Mise en évidence de la page courante
- **Animations Tactiles** : Retour visuel sur les interactions

### Interface Mobile Optimisée
- **Header Simplifié** : Logo UniCredit, titre de page, notifications
- **Cartes Responsives** : Adaptation automatique selon la taille d'écran
- **Tableaux Adaptatifs** : Colonnes masquées sur mobile pour plus de clarté
- **Graphiques Redimensionnés** : Hauteur adaptée aux écrans mobiles
- **Boutons Tactiles** : Taille optimisée pour les interactions tactiles

### Responsive Design
- **Breakpoints** : 
  - Mobile : < 768px
  - Tablet : 768px - 991px
  - Desktop : > 992px
- **Grille Flexible** : Utilisation de Bootstrap 5 pour la responsivité
- **Typographie Adaptative** : Tailles de police ajustées selon l'écran
- **Espacement Optimisé** : Marges et paddings adaptés au mobile

## 🛠️ Technologies

- **Framework** : Nuxt 3
- **CSS Framework** : Bootstrap 5
- **Icons** : Tabler Icons
- **Charts** : ApexCharts
- **Styling** : SCSS avec variables CSS personnalisées
- **State Management** : Pinia
- **TypeScript** : Support complet

## 📁 Structure du Projet

```
Ynex/
├── assets/
│   ├── scss/
│   │   └── _banking-variables.scss    # Variables UniCredit
│   └── css/
├── components/
│   ├── banking/
│   │   ├── BankingSidebar.vue         # Sidebar desktop
│   │   └── UniCreditInfo.vue          # Informations banque
│   └── common/
├── layouts/
│   └── banking.vue                    # Layout principal avec navigation mobile
├── pages/
│   ├── index.vue                      # Dashboard principal
│   └── banking/
│       ├── accounts.vue               # Gestion des comptes
│       ├── transactions.vue           # Historique transactions
│       ├── transfer.vue               # Système de bonifici
│       └── analytics.vue              # Analyses financières
└── stores/
    └── auth.ts                        # Gestion authentification
```

## 🎨 Thème UniCredit

### Couleurs Principales
- **Rouge UniCredit** : #e30613
- **Rouge Foncé** : #b3050f
- **Rouge Clair** : #ff1a1a
- **Gris UniCredit** : #2c3e50
- **Gris Clair** : #6c757d

### Variables CSS
```scss
:root {
  --unicredit-red: #e30613;
  --unicredit-red-dark: #b3050f;
  --unicredit-red-light: #ff1a1a;
  --unicredit-red-soft: rgba(227, 6, 19, 0.1);
  --unicredit-gray: #2c3e50;
}
```

## 📱 Fonctionnalités Mobile Spécifiques

### Navigation Bottom
- **5 Sections Principales** : Home, Conti, Transazioni, Bonifici, Analisi
- **Indicateur Visuel** : Couleur rouge UniCredit pour l'élément actif
- **Animations** : Transitions fluides entre les sections
- **Accessibilité** : Support des gestes tactiles

### Optimisations Performance
- **Lazy Loading** : Chargement différé des composants
- **Images Optimisées** : Formats WebP et responsive
- **Code Splitting** : Séparation automatique du code par route
- **Cache Intelligent** : Mise en cache des données fréquemment utilisées

### Expérience Utilisateur Mobile
- **Gestures** : Support des gestes de navigation
- **Feedback Tactile** : Retour visuel sur les interactions
- **Orientation** : Adaptation automatique portrait/paysage
- **Accessibilité** : Support des lecteurs d'écran

## 🚀 Installation et Démarrage

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Build pour production
npm run build

# Preview de la production
npm run preview
```

## 📊 Fonctionnalités Avancées

### Sécurité
- **Authentification** : Système de connexion sécurisé
- **Validation** : Vérification des données côté client et serveur
- **HTTPS** : Communication chiffrée
- **Session Management** : Gestion sécurisée des sessions

### Performance
- **SSR** : Rendu côté serveur pour un SEO optimal
- **PWA Ready** : Prêt pour les Progressive Web Apps
- **Optimisation Images** : Compression et formats modernes
- **Bundle Optimization** : Minimisation et tree-shaking

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : support@unicredit.it
- Téléphone : +39 02 8862 1
- Site web : www.unicredit.it

---

**UniCredit S.p.A.** - Piazza Gae Aulenti, 3 (Tower A) • 20154 Milano (MI) • Italia
