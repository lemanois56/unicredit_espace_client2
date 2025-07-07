<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const getImagePath = (imageName: any) => {
  const publicPath = import.meta.env.BASE_URL || '';
  return `${publicPath}${imageName}`;
}

useHead({
  title: 'UniCredit - Banking Online | ALFREDO Frassati',
  link: [{ rel: 'icon', type: 'image/png', href: getImagePath('images/brand-logos/favicon.ico') }],
  meta: [
    {
      name: 'viewport',
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: 'keywords',
      content: "UniCredit, banca online, conto bancario, bonifici, transazioni, investimenti, carte di credito, ALFREDO Frassati, Milano",
    },
    {
      name: 'description',
      content: "UniCredit Banking Online - Gestione completa del conto bancario di ALFREDO Frassati. Bonifici, transazioni, investimenti e servizi bancari avanzati.",
    },
    {
      name: 'author',
      content: 'UniCredit S.p.A.'
    }
  ],
})
</script>

<style>
/* Styles globaux pour l'application bancaire UniCredit */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

/* Animations pour les cartes */
.card {
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  background: var(--bg-primary);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-header {
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  padding: 1.25rem 1.5rem;
}

.card-title {
  font-weight: 600;
  color: var(--unicredit-gray);
  margin: 0;
  display: flex;
  align-items: center;
}

.card-options {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Styles pour les badges */
.badge {
  font-weight: 500;
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
}

/* Styles pour les boutons */
.btn {
  font-weight: 500;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: var(--unicredit-red);
  border-color: var(--unicredit-red);
}

.btn-primary:hover {
  background-color: var(--unicredit-red-dark);
  border-color: var(--unicredit-red-dark);
}

.btn-outline-primary {
  color: var(--unicredit-red);
  border-color: var(--unicredit-red);
}

.btn-outline-primary:hover {
  background-color: var(--unicredit-red);
  border-color: var(--unicredit-red);
}

/* Styles pour les tableaux */
.table {
  margin-bottom: 0;
}

.table th {
  font-weight: 600;
  color: var(--unicredit-gray);
  border-bottom-width: 1px;
  border-bottom-color: var(--border-color);
  padding: 1rem 0.75rem;
  background-color: var(--bg-secondary);
}

.table td {
  vertical-align: middle;
  padding: 1rem 0.75rem;
  border-bottom-color: var(--border-color);
}

.table-hover tbody tr:hover {
  background-color: var(--unicredit-red-soft);
}

/* Styles pour les formulaires */
.form-control, .form-select {
  border-radius: var(--border-radius);
  border-color: var(--border-color);
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.form-control:focus, .form-select:focus {
  border-color: var(--unicredit-red);
  box-shadow: 0 0 0 0.2rem rgba(227, 6, 19, 0.25);
}

.form-label {
  font-weight: 500;
  color: var(--unicredit-gray);
  margin-bottom: 0.5rem;
}

/* Styles pour les alertes */
.alert {
  border-radius: var(--border-radius);
  border: none;
  padding: 1rem 1.25rem;
}

.alert-info {
  background-color: var(--unicredit-red-soft);
  color: var(--unicredit-red);
}

/* Styles pour les progress bars */
.progress {
  border-radius: var(--border-radius);
  background-color: var(--bg-tertiary);
  height: 0.5rem;
}

.progress-bar {
  background-color: var(--unicredit-red);
}

/* Styles pour les avatars */
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
}

/* Couleurs personnalisées */
.bg-purple {
  background-color: #8b5cf6 !important;
}

.text-purple {
  color: #8b5cf6 !important;
}

/* Indicateur de chargement Nuxt */
#nuxt-loading-indicator {
  background: var(--unicredit-red) !important;
}

/* Styles pour les breadcrumbs */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "›";
  color: var(--text-muted);
  font-weight: 600;
}

.breadcrumb-item a {
  color: var(--unicredit-red);
  text-decoration: none;
}

.breadcrumb-item a:hover {
  color: var(--unicredit-red-dark);
}

.breadcrumb-item.active {
  color: var(--text-secondary);
}

/* Styles pour les paginations */
.pagination {
  margin: 0;
}

.page-link {
  color: var(--unicredit-red);
  border-color: var(--border-color);
  padding: 0.5rem 0.75rem;
}

.page-link:hover {
  color: var(--unicredit-red-dark);
  background-color: var(--unicredit-red-soft);
  border-color: var(--unicredit-red);
}

.page-item.active .page-link {
  background-color: var(--unicredit-red);
  border-color: var(--unicredit-red);
}

/* Styles pour les tooltips */
.tooltip {
  font-size: 0.875rem;
}

.tooltip-inner {
  background-color: var(--unicredit-gray);
  border-radius: var(--border-radius);
}

/* Styles pour les modales */
.modal-content {
  border-radius: var(--border-radius-lg);
  border: none;
  box-shadow: var(--shadow-lg);
}

.modal-header {
  border-bottom-color: var(--border-color);
  padding: 1.5rem;
}

.modal-footer {
  border-top-color: var(--border-color);
  padding: 1.5rem;
}

/* Responsive utilities */
@media (max-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  
  .d-md-block {
    display: block !important;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .table-responsive {
    font-size: 0.875rem;
  }
}

/* Animations globales */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-up {
  animation: slideInUp 0.3s ease;
}

/* Styles pour les icônes */
.ti {
  font-size: 1em;
  line-height: 1;
}

/* Styles pour les gradients */
.gradient-unicredit {
  background: linear-gradient(135deg, var(--unicredit-red) 0%, var(--unicredit-red-dark) 100%);
}

.gradient-unicredit-light {
  background: linear-gradient(135deg, var(--unicredit-red-soft) 0%, #ffffff 100%);
}

/* Styles pour les statuts */
.status-blocked {
  background-color: var(--status-blocked);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

/* Styles pour les langues */
.language-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  margin-left: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.language-badge.active {
  background: var(--unicredit-red);
  color: white;
}

.language-badge:hover {
  background: var(--unicredit-red);
  color: white;
}

/* Styles pour les comptes */
.account-icon {
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.account-name {
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.account-balance {
  color: var(--unicredit-gray);
  font-weight: 700;
  margin-bottom: 0.25rem;
}

/* Styles pour les transactions */
.transaction-icon {
  width: 32px;
  height: 32px;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

/* Styles pour les contacts */
.contact-info p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.contact-info i {
  color: var(--unicredit-red);
  width: 1rem;
  text-align: center;
  margin-right: 0.5rem;
}
</style>
