<template>
  <div class="banking-layout">
    <!-- Sidebar Desktop -->
    <div class="banking-sidebar-container d-none d-lg-block">
      <BankingSidebar :is-collapsed="sidebarCollapsed" />
    </div>

    <!-- Contenu Principal -->
    <div class="banking-main-content" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <!-- Header Mobile Optimisé -->
      <header class="banking-header">
        <div class="d-flex justify-content-between align-items-center">
          <!-- Côté gauche -->
          <div class="d-flex align-items-center">
            <!-- Bouton menu pour desktop -->
            <button class="btn btn-link sidebar-toggle me-3 d-none d-lg-block" @click="toggleSidebar">
              <i class="ti ti-menu-2"></i>
            </button>
            
            <!-- Logo et titre pour mobile -->
            <div class="header-content">
              <div class="d-flex align-items-center">
                <div class="mobile-logo me-2 d-lg-none">
                  <img src="/logo_mini.png" alt="logo mini" class="header-logo" />
                </div>
               
              </div>
            </div>
          </div>
          
          <!-- Côté droit -->
          <div class="d-flex align-items-center gap-2">
            <!-- Notifications -->
            <div class="dropdown">
              <button class="btn btn-link position-relative" type="button" data-bs-toggle="dropdown">
                <i class="ti ti-bell fs-5 text-unicredit-gray"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-unicredit-red">3</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><h6 class="dropdown-header">{{ t('notifications.title') }}</h6></li>
                <li><a class="dropdown-item" href="#"><i class="ti ti-arrow-down me-2 text-success"></i>{{ t('notifications.newTransfer') }}</a></li>
                <li><a class="dropdown-item" href="#"><i class="ti ti-credit-card me-2 text-info"></i>{{ t('notifications.cardPayment') }}</a></li>
                <li><a class="dropdown-item" href="#"><i class="ti ti-file-text me-2 text-warning"></i>{{ t('notifications.statementAvailable') }}</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><i class="ti ti-eye me-2"></i>{{ t('notifications.viewAll') }}</a></li>
              </ul>
            </div>
            <!-- Sélecteur de langue - Dropdown -->
            <div class="dropdown d-none d-md-block">
              <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <i class="ti ti-world me-1"></i>
                {{ (locale && locale.value && locale.value.toUpperCase()) || '' }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" :class="{ active: locale && locale.value === 'it' }" href="#" @click.prevent="locale && setLocale('it')"><strong>IT</strong> - Italiano</a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: locale && locale.value === 'en' }" href="#" @click.prevent="locale && setLocale('en')"><strong>EN</strong> - English</a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: locale && locale.value === 'fr' }" href="#" @click.prevent="locale && setLocale('fr')"><strong>FR</strong> - Français</a>
                </li>
              </ul>
            </div>
            <!-- Profil Utilisateur -->
            <div class="dropdown">
              <button class="btn btn-link d-flex align-items-center profile-button" type="button" data-bs-toggle="dropdown">
                <div class="profile-avatar me-2">
                  <span class="avatar-text">AF</span>
                </div>
                <div class="profile-info d-none d-lg-block">
                  <span class="profile-name">ALFREDO Frassati</span>
                  <small class="profile-status">{{ t('account.blocked') }}</small>
                </div>
                <i class="ti ti-chevron-down ms-1 text-unicredit-gray d-none d-lg-block"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#"><i class="ti ti-user me-2"></i>{{ t('profile.profile') }}</a></li>
                <li><a class="dropdown-item" href="#"><i class="ti ti-settings me-2"></i>{{ t('profile.settings') }}</a></li>
                <li><a class="dropdown-item" href="#"><i class="ti ti-help me-2"></i>{{ t('profile.help') }}</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" @click.prevent="onLogout"><i class="ti ti-logout me-2"></i>{{ t('profile.logout') }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <!-- Contenu de la Page -->
      <main class="banking-content">
        <slot />
      </main>
    </div>

    <!-- Menu de Navigation Mobile (Bottom Navigation) -->
    <nav class="mobile-bottom-nav d-lg-none">
      <div v-for="item in mobileNav" :key="item.path" class="nav-item" :class="{ active: isActiveRoute(item.path) }" @click="navigateTo(item.path)">
        <i :class="item.icon"></i>
        <span>{{ t(item.label) }}</span>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const sidebarCollapsed = ref(false)
const { t, locale, setLocale } = useI18n()
const { logUserOut, initUserFromCookie } = useAuthStore()

const pageTitle = computed(() => {
  const titles: { [key: string]: string } = {
    '/': t('account.dashboard'),
    '/banking/accounts': t('account.myAccounts'),
    '/banking/transactions': t('account.transactions'),
    '/banking/transfer': t('account.transfers'),
    '/banking/cards': t('account.cards'),
    '/banking/analytics': t('account.analytics')
  }
  return titles[route.path] || t('account.dashboard')
})

const pageSubtitle = computed(() => {
  const subtitles: { [key: string]: string } = {
    '/': t('page.overview'),
    '/banking/accounts': t('page.manageAccounts'),
    '/banking/transactions': t('page.transactionHistory'),
    '/banking/transfer': t('page.makeTransfer'),
    '/banking/cards': t('page.manageCards'),
    '/banking/analytics': t('page.analyticsReport')
  }
  return subtitles[route.path] || t('page.defaultSubtitle')
})

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const isActiveRoute = (path: string) => {
  return route.path === path
}

const navigateTo = (path: string) => {
  router.push(path)
}

const onLogout = () => {
  if (process.client) {
    localStorage.removeItem('banking_pin')
    logUserOut()
    router.push('/auth/login')
  }
}

const mobileNav = [
  { path: '/', icon: 'ti ti-home', label: 'account.dashboard' },
  { path: '/banking/accounts', icon: 'ti ti-wallet', label: 'account.myAccounts' },
  { path: '/banking/transactions', icon: 'ti ti-receipt', label: 'account.transactions' },
  { path: '/banking/transfer', icon: 'ti ti-arrow-right-left', label: 'account.transfers' },
  { path: '/banking/analytics', icon: 'ti ti-chart-line', label: 'account.analytics' }
]

onMounted(() => {
  useAuthStore().initUserFromCookie()
})
</script>

<style scoped>
.banking-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-secondary);
  position: relative;
}

.banking-sidebar-container {
  flex-shrink: 0;
  z-index: 1000;
}

.banking-main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding-bottom: 80px; /* Espace pour le menu mobile */
  margin-left: 320px; /* Espace pour le sidebar */
  transition: margin-left 0.3s ease;
  background-color: var(--bg-secondary);
  position: relative;
  z-index: 1;
}

.banking-main-content.sidebar-collapsed {
  margin-left: 70px; /* Espace pour le sidebar collapsed */
}

.banking-header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 0.75rem 1rem;
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 999;
}

.sidebar-toggle {
  color: var(--unicredit-gray);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  border: none;
  background: transparent;
}

.sidebar-toggle:hover {
  background-color: var(--bg-secondary);
  color: var(--unicredit-red);
}

.header-logo {
  max-width: 36px;
  max-height: 36px;
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.mobile-logo {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 0.5rem;
  overflow: hidden;
}

.header-content h4, .header-content h5 {
  color: var(--unicredit-gray);
  font-weight: 600;
  margin: 0;
}

.header-content small {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.banking-content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: var(--bg-secondary);
}

/* Bouton de profil */
.profile-button {
  text-decoration: none;
  color: var(--unicredit-gray);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  border: none;
  background: transparent;
}

.profile-button:hover {
  background-color: var(--bg-secondary);
  color: var(--unicredit-red);
}

.profile-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--unicredit-red);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-text {
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

.profile-name {
  display: block;
  font-weight: 600;
  color: var(--unicredit-gray);
  font-size: 0.875rem;
}

.profile-status {
  display: block;
  color: var(--text-secondary);
  font-size: 0.75rem;
}

/* Menu de Navigation Mobile */
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-bottom-nav .nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 60px;
}

.mobile-bottom-nav .nav-item i {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.mobile-bottom-nav .nav-item span {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s ease;
}

.mobile-bottom-nav .nav-item.active {
  background-color: var(--unicredit-red-soft);
}

.mobile-bottom-nav .nav-item.active i,
.mobile-bottom-nav .nav-item.active span {
  color: var(--unicredit-red);
}

.mobile-bottom-nav .nav-item:hover {
  background-color: var(--bg-secondary);
}

.mobile-bottom-nav .nav-item:hover i,
.mobile-bottom-nav .nav-item:hover span {
  color: var(--unicredit-red);
}

/* Dropdowns */
.dropdown-menu {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 0.5rem 0;
}

.dropdown-header {
  font-weight: 600;
  color: var(--unicredit-gray);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: var(--bg-secondary);
  color: var(--unicredit-red);
}

.dropdown-item.active {
  background-color: var(--unicredit-red-soft);
  color: var(--unicredit-red);
}

.dropdown-item i {
  width: 1rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .banking-main-content {
    margin-left: 0;
  }

  .banking-header {
    padding: 0.75rem 1rem;
  }

  .banking-content {
    padding: 1rem;
  }

  .header-logo {
    max-width: 32px;
    max-height: 32px;
  }
  .mobile-logo {
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 992px) {
  .banking-main-content {
    padding-bottom: 0; /* Pas de padding sur desktop */
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.banking-content {
  animation: fadeIn 0.3s ease;
}

/* Scrollbar personnalisée */
.banking-content::-webkit-scrollbar {
  width: 6px;
}

.banking-content::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

.banking-content::-webkit-scrollbar-thumb {
  background: var(--unicredit-red);
  border-radius: 3px;
}

.banking-content::-webkit-scrollbar-thumb:hover {
  background: var(--unicredit-red-dark);
}
</style> 