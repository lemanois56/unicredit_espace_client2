<template>
  <div class="banking-sidebar" :class="{ collapsed: isCollapsed }">
    <!-- Logo UniCredit -->
    <div class="sidebar-header">
      <div class="logo-container">
        <div class="logo">
          <img v-if="isCollapsed" src="/logo_mini.png" alt="logo mini" class="sidebar-logo" />
          <img v-else src="/logo.png" alt="logo" class="sidebar-logo" />
        </div>
        
      </div>
    </div>

    <!-- Profil Utilisateur -->
    <div class="user-profile" v-show="!isCollapsed">
      <div class="profile-card">
        <div class="profile-avatar">
          <div class="avatar-circle">
            <span class="avatar-text">{{ initials }}</span>
          </div>
        </div>
        <div class="profile-info">
          <h6 class="profile-name">{{ fullname }}</h6>
          <div class="profile-status">
            <span v-if="isBlocked" class="status-badge status-blocked">
              <i class="ti ti-lock me-1"></i>{{ t('account.blocked') }}
            </span>
            <span v-else class="status-badge status-active">
              <i class="ti ti-check me-1"></i>{{ t('account.active') }}
            </span>
          </div>
          <div class="profile-balance">
            <span class="balance-label">Saldo Totale</span>
            <span class="balance-amount">{{ formatAmount(totalBalance) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Profil Utilisateur Collapsed -->
    <div class="user-profile-collapsed" v-show="isCollapsed">
      <div class="profile-avatar-collapsed">
        <div class="avatar-circle">
          <span class="avatar-text">{{ initials }}</span>
        </div>
      </div>
    </div>

    <!-- Navigation Principale -->
    <nav class="banking-nav">
      <div class="nav-section" v-show="!isCollapsed">
        <h6 class="nav-section-title">{{ t('account.dashboard') }}</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">
              <i class="ti ti-dashboard me-2"></i>
              <span>{{ t('account.dashboard') }}</span>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/accounts" class="nav-link" :class="{ active: $route.path === '/banking/accounts' }">
              <i class="ti ti-wallet me-2"></i>
              <span>{{ t('account.myAccounts') }}</span>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/transactions" class="nav-link" :class="{ active: $route.path === '/banking/transactions' }">
              <i class="ti ti-receipt me-2"></i>
              <span>{{ t('account.transactions') }}</span>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/transfer" class="nav-link" :class="{ active: $route.path === '/banking/transfer' }">
              <i class="ti ti-arrow-right me-2"></i>
              <span>{{ t('account.transfers') }}</span>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/cards" class="nav-link" :class="{ active: $route.path === '/banking/cards' }">
              <i class="ti ti-credit-card me-2"></i>
              <span>{{ t('account.cards') }}</span>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/analytics" class="nav-link" :class="{ active: $route.path === '/banking/analytics' }">
              <i class="ti ti-chart-pie me-2"></i>
              <span>{{ t('account.analytics') }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Navigation Collapsed -->
      <div class="nav-section-collapsed" v-show="isCollapsed">
        <ul class="nav flex-column">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link-collapsed" :class="{ active: $route.path === '/' }" title="Panoramica">
              <i class="ti ti-dashboard"></i>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/accounts" class="nav-link-collapsed" :class="{ active: $route.path === '/banking/accounts' }" title="I Miei Conti">
              <i class="ti ti-wallet"></i>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/transactions" class="nav-link-collapsed" :class="{ active: $route.path === '/banking/transactions' }" title="Transazioni">
              <i class="ti ti-receipt"></i>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/transfer" class="nav-link-collapsed" :class="{ active: $route.path === '/banking/transfer' }" title="Bonifici">
              <i class="ti ti-arrow-right"></i>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/cards" class="nav-link-collapsed" :class="{ active: $route.path === '/banking/cards' }" title="Carte">
              <i class="ti ti-credit-card"></i>
            </NuxtLink>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/banking/analytics" class="nav-link-collapsed" :class="{ active: $route.path === '/banking/analytics' }" title="Analisi">
              <i class="ti ti-chart-pie"></i>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Section Services -->
      <div class="nav-section" v-show="!isCollapsed">
        <h6 class="nav-section-title">Servizi</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti ti-calendar me-2"></i>
              <span>Addebiti Diretti</span>
            </a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti ti-file-text me-2"></i>
              <span>Estratti Conto</span>
            </a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti ti-settings me-2"></i>
              <span>Impostazioni</span>
            </a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti ti-headset me-2"></i>
              <span>Supporto</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Section Sécurité -->
      <div class="nav-section" v-show="!isCollapsed">
        <h6 class="nav-section-title">Sicurezza</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti ti-shield-lock me-2"></i>
              <span>Sicurezza</span>
            </a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti ti-bell me-2"></i>
              <span>Avvisi</span>
            </a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti ti-history me-2"></i>
              <span>Cronologia</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Actions Rapides -->
    <div class="quick-actions" v-show="!isCollapsed">
      <h6 class="nav-section-title">Azioni Rapide</h6>
      <div class="action-buttons">
        <button class="btn btn-unicredit-red btn-sm w-100 mb-2">
          <i class="ti ti-plus me-1"></i>Nuovo Bonifico
        </button>
        <button class="btn btn-outline-light btn-sm w-100 mb-2">
          <i class="ti ti-download me-1"></i>Scarica IBAN
        </button>
        <button class="btn btn-outline-light btn-sm w-100">
          <i class="ti ti-phone me-1"></i>Contattaci
        </button>
      </div>
    </div>

    <!-- Actions Rapides Collapsed -->
    <div class="quick-actions-collapsed" v-show="isCollapsed">
      <div class="action-buttons-collapsed">
        <button class="btn btn-unicredit-red btn-sm" title="Nuovo Bonifico">
          <i class="ti ti-plus"></i>
        </button>
        <button class="btn btn-outline-light btn-sm" title="Scarica IBAN">
          <i class="ti ti-download"></i>
        </button>
        <button class="btn btn-outline-light btn-sm" title="Contattaci">
          <i class="ti ti-phone"></i>
        </button>
      </div>
    </div>

    <!-- Informations de Sécurité -->
    <div class="security-info" v-show="!isCollapsed">
      <div class="security-card">
        <div class="security-header">
          <i class="ti ti-shield-check text-success"></i>
          <span class="security-title">Sessione Sicura</span>
        </div>
        <div class="security-details">
          <small class="text-muted">Ultimo accesso: 15 Dic 14:30</small>
          <small class="text-muted">IP: 192.168.1.100</small>
        </div>
      </div>
    </div>

    <!-- Informations de la Banque -->
    <div class="bank-info" v-show="!isCollapsed">
      <div class="bank-details">
        <h6 class="bank-name">UniCredit S.p.A.</h6>
        <p class="bank-address">
          Piazza Gae Aulenti, 3 (Tower A)<br>
          20154 Milano (MI)<br>
          Italia
        </p>
        <div class="bank-languages">
          <span class="language-badge">IT</span>
          <span class="language-badge">EN</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'
const { t, locale, setLocale } = useI18n()

interface Props {
  isCollapsed?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isCollapsed: false
})

const authStore = useAuthStore()
const user = computed(() => authStore.getUser)

// Nom complet
const fullname = computed(() => user.value?.fullname || '')
// Initiales pour l'avatar
const initials = computed(() => {
  if (!user.value?.fullname) return ''
  return user.value.fullname.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)
})
// Statut du compte
const isBlocked = computed(() => user.value?.accountblocked)
// Solde total (somme des comptes)
const totalBalance = computed(() => {
  if (!user.value?.accounts) return 0
  return user.value.accounts.reduce((sum, acc) => sum + (acc.balance || 0), 0)
})
// Devise
const currency = computed(() => user.value?.currency || '€')
function formatAmount(amount) {
  return `${currency.value}${amount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}`
}
</script>

<style scoped>
.banking-sidebar {
  background: var(--bg-sidebar);
  height: 100vh;
  padding: 0;
  overflow-y: auto;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  transition: width 0.3s ease;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.banking-sidebar.collapsed {
  width: 70px;
}

/* Header avec logo */
.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 80px;
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.logo {
  
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 0.4rem;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.logo-text h5 {
  font-weight: 600;
  margin: 0;
}

/* Profil utilisateur */
.user-profile {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.user-profile-collapsed {
  padding: 1rem 0.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-avatar-collapsed {
  display: flex;
  justify-content: center;
}

.profile-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-avatar {
  text-align: center;
  margin-bottom: 1rem;
}

.avatar-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--unicredit-red);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.avatar-text {
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
}

.profile-name {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
}

.profile-status {
  text-align: center;
  margin-bottom: 1rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.profile-balance {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.balance-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.balance-amount {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--unicredit-gold);
}

/* Navigation */
.banking-nav {
  padding: 1.5rem;
  flex: 1;
}

.nav-section {
  margin-bottom: 2rem;
}

.nav-section-collapsed {
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-section-title {
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  background-color: var(--bg-sidebar-hover);
  color: white;
  transform: translateX(4px);
}

.nav-link.active {
  background-color: var(--unicredit-red);
  color: white;
  box-shadow: 0 2px 8px rgba(227, 6, 19, 0.3);
}

.nav-link i {
  width: 1.25rem;
  text-align: center;
  margin-right: 0.75rem;
}

/* Navigation Collapsed */
.nav-link-collapsed {
  color: rgba(255, 255, 255, 0.8);
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.nav-link-collapsed:hover {
  background-color: var(--bg-sidebar-hover);
  color: white;
}

.nav-link-collapsed.active {
  background-color: var(--unicredit-red);
  color: white;
  box-shadow: 0 2px 8px rgba(227, 6, 19, 0.3);
}

.nav-link-collapsed i {
  font-size: 1.25rem;
}

/* Actions rapides */
.quick-actions {
  padding: 0 1.5rem 1.5rem;
}

.quick-actions-collapsed {
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-buttons-collapsed {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.action-buttons-collapsed .btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 0.5rem;
}

.btn-outline-light {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

/* Informations de sécurité */
.security-info {
  padding: 0 1.5rem 1.5rem;
}

.security-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.security-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.security-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
}

.security-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* Informations de la banque */
.bank-info {
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
}

.bank-name {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.bank-address {
  color: var(--text-muted);
  font-size: 0.75rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.bank-languages {
  display: flex;
  gap: 0.5rem;
}

.language-badge {
  background: var(--unicredit-red);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Scrollbar personnalisée */
.banking-sidebar::-webkit-scrollbar {
  width: 4px;
}

.banking-sidebar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.banking-sidebar::-webkit-scrollbar-thumb {
  background: var(--unicredit-red);
  border-radius: 2px;
}

.banking-sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--unicredit-red-dark);
}

/* Responsive */
@media (max-width: 768px) {
  .banking-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    width: 320px;
  }

  .banking-sidebar.show {
    transform: translateX(0);
  }
}

/* Tooltips pour le mode collapsed */
.nav-link-collapsed {
  position: relative;
}

.nav-link-collapsed:hover::after {
  content: attr(title);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
  margin-left: 0.5rem;
  z-index: 1001;
}

.nav-link-collapsed:hover::before {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid transparent;
  border-right-color: rgba(0, 0, 0, 0.8);
  margin-left: -0.25rem;
  z-index: 1001;
}
</style> 