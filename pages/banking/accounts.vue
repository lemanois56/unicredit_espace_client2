<template>
  <div>
    <!-- Breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
      <div class="left-content">
        <span class="main-content-title mg-b-0 mg-b-lg-1">{{ t('account.myAccounts') }}</span>
      </div>
      <div class="justify-content-center mt-2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item tx-15"><a href="/">{{ t('account.home') }}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ t('account.accounts') }}</li>
        </ol>
      </div>
    </div>

    <!-- Résumé Global -->
    <div class="row mb-4">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-6 mb-3">
                <div class="text-center">
                  <h3 class="text-unicredit-red mb-1">€3.967.000</h3>
                  <p class="text-muted mb-0">Totale Attivi</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-6 mb-3">
                <div class="text-center">
                  <h3 class="text-success mb-1">€0</h3>
                  <p class="text-muted mb-0">Totale Passivi</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-6 mb-3">
                <div class="text-center">
                  <h3 class="text-info mb-1">€3.967.000</h3>
                  <p class="text-muted mb-0">Patrimonio Netto</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-6 mb-3">
                <div class="text-center">
                  <h3 class="text-warning mb-1">4</h3>
                  <p class="text-muted mb-0">Conti Attivi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Liste des Comptes -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-wallet me-2 text-unicredit-red"></i>
              {{ t('account.myBankAccounts') }}
            </div>
            <div class="card-options">
              <button class="btn btn-unicredit-red btn-sm">
                <i class="ti ti-plus me-1"></i>{{ t('account.newAccount') }}
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-12 col-12 mb-4" v-for="account in accounts" :key="account.id">
                <div class="card account-card" :class="account.cardClass">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div class="flex-grow-1">
                        <h5 class="card-title mb-1">{{ account.name }}</h5>
                        <p class="text-muted mb-0 d-none d-md-block">{{ account.number }}</p>
                        <p class="text-muted mb-0 d-md-none">{{ account.numberShort }}</p>
                      </div>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-outline-light" type="button" data-bs-toggle="dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#"><i class="ti ti-eye me-2"></i>Vedi dettagli</a></li>
                          <li><a class="dropdown-item" href="#"><i class="ti ti-edit me-2"></i>Modifica</a></li>
                          <li><a class="dropdown-item" href="#"><i class="ti ti-download me-2"></i>Scarica IBAN</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item text-danger" href="#"><i class="ti ti-trash me-2"></i>Chiudi conto</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="row mb-3">
                      <div class="col-6">
                        <div class="text-center">
                          <h4 class="mb-1">{{ account.balance }}</h4>
                          <small class="text-muted">Saldo attuale</small>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="text-center">
                          <h6 class="mb-1" :class="account.trendClass">{{ account.trend }}</h6>
                          <small class="text-muted">Questo mese</small>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-6">
                        <small class="text-muted">{{ t('account.type') }}</small>
                        <p class="mb-0">{{ account.type }}</p>
                      </div>
                      <div class="col-6">
                        <small class="text-muted">{{ t('account.status') }}</small>
                        <p class="mb-0">
                          <span class="badge" :class="account.statusClass">{{ account.status }}</span>
                        </p>
                      </div>
                    </div>

                    <div class="d-flex gap-2">
                      <button class="btn btn-sm btn-outline-light flex-fill">
                        <i class="ti ti-arrow-right me-1"></i>{{ t('account.transfer') }}
                      </button>
                      <button class="btn btn-sm btn-outline-light flex-fill">
                        <i class="ti ti-receipt me-1"></i>{{ t('account.statement') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cartes de Crédit -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-credit-card me-2 text-unicredit-red"></i>
              {{ t('account.myCreditCards') }}
            </div>
            <div class="card-options">
              <button class="btn btn-unicredit-red btn-sm">
                <i class="ti ti-plus me-1"></i>{{ t('account.requestCard') }}
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-4 col-lg-6 col-md-12 col-12 mb-4" v-for="card in creditCards" :key="card.id">
                <div class="card credit-card" :class="card.cardClass">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div class="flex-grow-1">
                        <h6 class="card-title mb-1">{{ card.name }}</h6>
                        <p class="text-muted mb-0 d-none d-md-block">{{ card.number }}</p>
                        <p class="text-muted mb-0 d-md-none">{{ card.numberShort }}</p>
                      </div>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-outline-light" type="button" data-bs-toggle="dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#"><i class="ti ti-eye me-2"></i>Vedi dettagli</a></li>
                          <li><a class="dropdown-item" href="#"><i class="ti ti-lock me-2"></i>Blocca</a></li>
                          <li><a class="dropdown-item" href="#"><i class="ti ti-credit-card me-2"></i>Reset PIN</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="row mb-3">
                      <div class="col-6">
                        <small class="text-muted">{{ t('account.balance') }}</small>
                        <h6 class="mb-0">{{ card.balance }}</h6>
                      </div>
                      <div class="col-6">
                        <small class="text-muted">{{ t('account.limit') }}</small>
                        <h6 class="mb-0">{{ card.limit }}</h6>
                      </div>
                    </div>

                    <div class="progress mb-3" style="height: 6px;">
                      <div class="progress-bar" :class="card.progressClass" :style="{ width: card.usagePercentage + '%' }"></div>
                    </div>
                    <small class="text-muted">{{ card.usagePercentage }}% utilizzata</small>

                    <div class="d-flex gap-2 mt-3">
                      <button class="btn btn-sm btn-outline-light flex-fill">
                        <i class="ti ti-credit-card me-1"></i>{{ t('account.pay') }}
                      </button>
                      <button class="btn btn-sm btn-outline-light flex-fill">
                        <i class="ti ti-receipt me-1"></i>{{ t('account.statement') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

const authStore = useAuthStore()
const user = computed(() => authStore.getUser)

// Comptes bancaires dynamiques
const accounts = computed(() => user.value?.accounts || [])
// Cartes de crédit dynamiques
const creditCards = computed(() => user.value?.creditCards || [])

definePageMeta({ layout: 'banking' })
</script>

<style scoped>
/* Breadcrumb */
.breadcrumb-header {
  margin-bottom: 1.5rem;
}

.main-content-title {
  color: var(--unicredit-gray);
  font-weight: 600;
  font-size: 1.5rem;
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

/* Cards */
.custom-card {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.custom-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.card-header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 1.5rem;
}

.card-title {
  color: var(--unicredit-gray);
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}

.card-title i {
  color: var(--unicredit-red);
}

/* Account Cards */
.account-card, .credit-card {
  transition: all 0.3s ease;
  border: none;
  border-radius: 1rem;
  overflow: hidden;
}

.account-card:hover, .credit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* UniCredit Red Card */
.bg-unicredit-red {
  background: var(--unicredit-red) !important;
}

.bg-unicredit-red .card-title,
.bg-unicredit-red h4,
.bg-unicredit-red h6,
.bg-unicredit-red p {
  color: white !important;
}

.bg-unicredit-red .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

.bg-unicredit-red .btn-outline-light {
  border-color: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

.bg-unicredit-red .btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

/* Success Card */
.bg-success .card-title,
.bg-success h4,
.bg-success h6,
.bg-success p {
  color: white !important;
}

.bg-success .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

.bg-success .btn-outline-light {
  border-color: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

.bg-success .btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

/* Info Card */
.bg-info .card-title,
.bg-info h4,
.bg-info h6,
.bg-info p {
  color: white !important;
}

.bg-info .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

.bg-info .btn-outline-light {
  border-color: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

.bg-info .btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

/* Warning Card */
.bg-warning .card-title,
.bg-warning h4,
.bg-warning h6,
.bg-warning p {
  color: white !important;
}

.bg-warning .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

.bg-warning .btn-outline-light {
  border-color: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

.bg-warning .btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

/* Buttons */
.btn-unicredit-red {
  background-color: var(--unicredit-red);
  border-color: var(--unicredit-red);
  color: white;
}

.btn-unicredit-red:hover {
  background-color: var(--unicredit-red-dark);
  border-color: var(--unicredit-red-dark);
  color: white;
}

/* Progress bars */
.progress {
  background-color: rgba(255, 255, 255, 0.2);
}

.progress-bar.bg-warning {
  background-color: #ffc107 !important;
}

.progress-bar.bg-info {
  background-color: #17a2b8 !important;
}

/* Dropdown */
.dropdown-menu {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.dropdown-item {
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: var(--bg-secondary);
  color: var(--unicredit-red);
}

.dropdown-item i {
  color: var(--unicredit-red);
  width: 1rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .card-title {
    font-size: 1rem;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .btn {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
  
  .dropdown-menu {
    font-size: 0.875rem;
  }
  
  .progress {
    height: 4px !important;
  }
}

@media (max-width: 576px) {
  .card-title {
    font-size: 0.9rem;
  }
  
  .card-body {
    padding: 0.75rem;
  }
  
  .btn {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
  
  .dropdown-menu {
    font-size: 0.8rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  h4 {
    font-size: 1.125rem;
  }
  
  h6 {
    font-size: 0.875rem;
  }
}

/* Animations */
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

.account-card, .credit-card {
  animation: slideInUp 0.3s ease;
}

.account-card:nth-child(1) { animation-delay: 0.1s; }
.account-card:nth-child(2) { animation-delay: 0.2s; }
.account-card:nth-child(3) { animation-delay: 0.3s; }
.account-card:nth-child(4) { animation-delay: 0.4s; }
</style> 