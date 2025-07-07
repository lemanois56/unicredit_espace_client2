<template>
  <div>
    <!-- Header avec informations du compte -->
    <div class="account-header gradient-unicredit-light">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-7 col-12">
            <div class="account-info">
              <h1 class="account-title">{{ t('account.welcome', { name: fullname }) }}</h1>
              <div class="account-details">
                <div class="account-status">
                  <template v-if="isAccountBlocked">
                  <div class="status-marquee">
                    <span class="status-badge status-blocked">
                      <i class="ti ti-lock me-1"></i>{{ t('account.blocked') }}
                    </span>
                  </div>

<!--                    <span class="status-badge status-blocked">-->
<!--                      <i class="ti ti-lock me-1"></i>{{ t('account.blocked') }}-->
<!--                    </span>-->
                  </template>
<!--                  <template v-else>-->
<!--                    <span class="status-badge status-active">-->
<!--                      <i class="ti ti-check me-1"></i>{{ t('account.active') }}-->
<!--                    </span>-->
<!--                  </template>-->
                </div>
                <div class="account-balance">
                  <span class="balance-label">{{ t('account.totalBalance') }}</span>
                  <h2 class="balance-amount">{{ formatAmount(mainAccount?.balance) }}</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-12">
            <div class="account-actions">
              <div class="d-grid gap-2 d-md-flex">
                <button class="btn btn-unicredit-red btn-sm">
                  <i class="ti ti-plus me-1"></i>{{ t('account.newTransfer') }}
                </button>
                <button class="btn btn-outline-unicredit-red btn-sm">
                  <i class="ti ti-download me-1"></i>{{ t('account.iban') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Informations de la banque -->
    <div class="bank-info-banner">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="bank-details">
              <h6 class="bank-name mb-1">
                <i class="ti ti-building-bank me-2 text-unicredit-red"></i>
                UniCredit S.p.A.
              </h6>
              <p class="bank-address mb-0 d-none d-md-block">
                Piazza Gae Aulenti, 3 (Tower A) • 20154 Milano (MI) • Italia
              </p>
              <p class="bank-address mb-0 d-md-none">
                Milano, Italia
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <div class="bank-languages text-end">
              <span class="language-badge" :class="{ active: locale.value === 'it' }" @click="setLocale('it')">IT</span>
              <span class="language-badge" :class="{ active: locale.value === 'en' }" @click="setLocale('en')">EN</span>
              <span class="language-badge" :class="{ active: locale.value === 'fr' }" @click="setLocale('fr')">FR</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vue d'ensemble des comptes -->
    <div class="row mt-4">
      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card account-card card-hover">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between w-100">
              <div class="account-icon bg-unicredit-red-soft flex-shrink-0">
                <i class="ti ti-wallet text-unicredit-red"></i>
              </div>
              <div class="account-details-layout flex-grow-1 ms-3 d-flex flex-column justify-content-between h-100">
                <div class="d-flex flex-column align-items-end w-100">
                  <h6 class="account-name text-truncate">{{ t('account.mainAccount') }}</h6>
                </div>
                <div class="d-flex justify-content-between align-items-end w-100 mt-auto">
                  <h4 class="account-balance mb-0 no-wrap">{{ formatAmount(mainAccount?.balance) }}</h4>
                  <small class="text-muted d-none d-md-block iban-text ms-2">{{ mainAccount?.iban }}</small>
                  <small class="text-muted d-md-none iban-text ms-2">{{ mainAccount?.ibanShort }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card account-card card-hover">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between w-100">
              <div class="account-icon bg-success bg-opacity-10 flex-shrink-0">
                <i class="ti ti-piggy-bank text-success"></i>
              </div>
              <div class="account-details-layout flex-grow-1 ms-3 d-flex flex-column justify-content-between h-100">
                <div class="d-flex flex-column align-items-end w-100">
                  <h6 class="account-name text-truncate">{{ t('account.savingsAccount') }}</h6>
                </div>
                <div class="d-flex justify-content-between align-items-end w-100 mt-auto">
                  <h4 class="account-balance mb-0 no-wrap">{{ formatAmount(savingsAccount?.balance) }}</h4>
                  <small class="text-success text-truncate ms-2">{{ savingsAccount?.interestRate }}%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card account-card card-hover">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between w-100">
              <div class="account-icon bg-info bg-opacity-10 flex-shrink-0">
                <i class="ti ti-chart-line text-info"></i>
              </div>
              <div class="account-details-layout flex-grow-1 ms-3 d-flex flex-column justify-content-between h-100">
                <div class="d-flex flex-column align-items-end w-100">
                  <h6 class="account-name text-truncate">{{ t('account.investments') }}</h6>
                </div>
                <div class="d-flex justify-content-between align-items-end w-100 mt-auto">
                  <h4 class="account-balance mb-0 no-wrap">{{ formatAmount(investmentsAccount?.balance) }}</h4>
                  <small class="text-info text-truncate ms-2">{{ investmentsAccount?.interestRate }}%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card account-card card-hover">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between w-100">
              <div class="account-icon bg-warning bg-opacity-10 flex-shrink-0">
                <i class="ti ti-credit-card text-warning"></i>
              </div>
              <div class="account-details-layout flex-grow-1 ms-3 d-flex flex-column justify-content-between h-100">
                <div class="d-flex flex-column align-items-end w-100">
                  <h6 class="account-name text-truncate">{{ t('account.creditCard') }}</h6>
                </div>
                <div class="d-flex justify-content-between align-items-end w-100 mt-auto">
                  <h4 class="account-balance mb-0 no-wrap">{{ formatAmount(creditCardAccount?.balance) }}</h4>
                  <small class="text-warning text-truncate ms-2">{{ formatAmount(creditCardAccount?.limit) }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistiques Rapides -->
    <div class="row mb-4">
      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card stat-card">
          <div class="card-body text-center">
            <div class="stat-icon bg-success bg-opacity-10">
              <i class="ti ti-arrow-up text-success"></i>
            </div>
            <h4 class="stat-value text-success">{{ t('account.incomeThisMonth') }}</h4>
            <p class="stat-label">{{ t('account.incomeThisMonthLabel') }}</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card stat-card">
          <div class="card-body text-center">
            <div class="stat-icon bg-danger bg-opacity-10">
              <i class="ti ti-arrow-down text-danger"></i>
            </div>
            <h4 class="stat-value text-danger">{{ t('account.expensesThisMonth') }}</h4>
            <p class="stat-label">{{ t('account.expensesThisMonthLabel') }}</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card stat-card">
          <div class="card-body text-center">
            <div class="stat-icon bg-info bg-opacity-10">
              <i class="ti ti-chart-pie text-info"></i>
            </div>
            <h4 class="stat-value text-info">{{ t('account.netSavings') }}</h4>
            <p class="stat-label">{{ t('account.netSavingsLabel') }}</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
        <div class="card stat-card">
          <div class="card-body text-center">
            <div class="stat-icon bg-warning bg-opacity-10">
              <i class="ti ti-target text-warning"></i>
            </div>
            <h4 class="stat-value text-warning">{{ t('account.savingsGoal') }}</h4>
            <p class="stat-label">{{ t('account.savingsGoalLabel') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Graphiques et Analyses -->
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12 col-12 mb-4">
        <div class="card card-hover">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-chart-line me-2 text-unicredit-red"></i>
              {{ t('account.balanceTrend') }}
            </div>
            <div class="card-options">
              <select class="form-select form-select-sm" style="width: auto;">
                <option>{{ t('account.last6Months') }}</option>
                <option>{{ t('account.lastYear') }}</option>
                <option>{{ t('account.last2Years') }}</option>
              </select>
            </div>
          </div>
          <div class="card-body">
            <div id="balanceChart" style="height: 300px;"></div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-4 col-md-12 col-12 mb-4">
        <div class="card card-hover">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-chart-pie me-2 text-unicredit-red"></i>
              {{ t('account.expensesDistribution') }}
            </div>
          </div>
          <div class="card-body">
            <div id="expensesChart" style="height: 300px;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Rapides -->
    <div class="row mb-4">
      <div class="col-xl-12">
        <div class="card card-hover">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-bolt me-2 text-unicredit-red"></i>
              {{ t('account.quickServices') }}
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                <div class="service-item text-center">
                  <div class="service-icon bg-unicredit-red-soft">
                    <i class="ti ti-arrow-right-left text-unicredit-red"></i>
                  </div>
                  <h6 class="service-name">{{ t('account.transfer') }}</h6>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                <div class="service-item text-center">
                  <div class="service-icon bg-success bg-opacity-10">
                    <i class="ti ti-credit-card text-success"></i>
                  </div>
                  <h6 class="service-name">{{ t('account.payment') }}</h6>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                <div class="service-item text-center">
                  <div class="service-icon bg-info bg-opacity-10">
                    <i class="ti ti-download text-info"></i>
                  </div>
                  <h6 class="service-name">{{ t('account.iban') }}</h6>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                <div class="service-item text-center">
                  <div class="service-icon bg-warning bg-opacity-10">
                    <i class="ti ti-file-text text-warning"></i>
                  </div>
                  <h6 class="service-name">{{ t('account.statement') }}</h6>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                <div class="service-item text-center">
                  <div class="service-icon bg-primary bg-opacity-10">
                    <i class="ti ti-settings text-primary"></i>
                  </div>
                  <h6 class="service-name">{{ t('account.settings') }}</h6>
                </div>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                <div class="service-item text-center">
                  <div class="service-icon bg-secondary bg-opacity-10">
                    <i class="ti ti-headset text-secondary"></i>
                  </div>
                  <h6 class="service-name">{{ t('account.support') }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Transactions Récentes -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card card-hover">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-receipt me-2 text-unicredit-red"></i>
              {{ t('account.recentTransactions') }}
            </div>
            <div class="card-options">
              <NuxtLink to="/banking/transactions" class="btn btn-unicredit-red btn-sm">
                <i class="ti ti-arrow-right me-1"></i>{{ t('account.viewAll') }}
              </NuxtLink>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>{{ t('account.date') }}</th>
                    <th>{{ t('account.description') }}</th>
                    <th class="d-none d-md-table-cell">{{ t('account.category') }}</th>
                    <th>{{ t('account.amount') }}</th>
                    <th class="d-none d-md-table-cell">{{ t('account.status') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tx in transactions.slice(0,5)" :key="tx.id">
                    <td>{{ tx.date }}</td>
                    <td>{{ tx.description }}</td>
                    <td class="d-none d-md-table-cell">{{ tx.category }}</td>
                    <td :class="tx.amountClass">{{ tx.amount }}</td>
                    <td class="d-none d-md-table-cell"><span class="badge" :class="tx.statusClass">{{ tx.status }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifiche e Avvisi -->
    <div class="row mt-4">
      <div class="col-xl-6 col-lg-6 col-md-12 col-12 mb-4">
        <div class="card card-hover">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-bell me-2 text-unicredit-red"></i>
              {{ t('account.recentNotifications') }}
            </div>
          </div>
          <div class="card-body">
            <div class="notification-list">
              <div class="notification-item">
                <div class="notification-icon bg-success bg-opacity-10">
                  <i class="ti ti-check text-success"></i>
                </div>
                <div class="notification-content">
                  <h6>{{ t('account.transferCompleted') }}</h6>
                  <p>{{ t('account.transferCompletedMessage') }}</p>
                  <small class="text-muted">{{ t('account.2HoursAgo') }}</small>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon bg-warning bg-opacity-10">
                  <i class="ti ti-alert-triangle text-warning"></i>
                </div>
                <div class="notification-content">
                  <h6>{{ t('account.accountBlocked') }}</h6>
                  <p>{{ t('account.accountBlockedMessage') }}</p>
                  <small class="text-muted">{{ t('account.1DayAgo') }}</small>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon bg-info bg-opacity-10">
                  <i class="ti ti-file-text text-info"></i>
                </div>
                <div class="notification-content">
                  <h6>{{ t('account.statementAvailable') }}</h6>
                  <p>{{ t('account.statementAvailableMessage') }}</p>
                  <small class="text-muted">{{ t('account.3DaysAgo') }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12 col-12 mb-4">
        <div class="card card-hover">
          <div class="card-header">
            <div class="card-title">
              <i class="ti ti-calendar me-2 text-unicredit-red"></i>
              {{ t('account.upcomingPayments') }}
            </div>
          </div>
          <div class="card-body">
            <div class="payment-list">
              <div class="payment-item">
                <div class="payment-icon bg-danger bg-opacity-10">
                  <i class="ti ti-home text-danger"></i>
                </div>
                <div class="payment-content">
                  <h6>{{ t('account.homeLoan') }}</h6>
                  <p>{{ t('account.homeLoanAmount') }} - {{ t('account.dueDate') }}: 25 Dic</p>
                  <div class="progress" style="height: 4px;">
                    <div class="progress-bar bg-danger" style="width: 60%"></div>
                  </div>
                </div>
              </div>
              <div class="payment-item">
                <div class="payment-icon bg-warning bg-opacity-10">
                  <i class="ti ti-car text-warning"></i>
                </div>
                <div class="payment-content">
                  <h6>{{ t('account.autoInsurance') }}</h6>
                  <p>{{ t('account.autoInsuranceAmount') }} - {{ t('account.dueDate') }}: 30 Dic</p>
                  <div class="progress" style="height: 4px;">
                    <div class="progress-bar bg-warning" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              <div class="payment-item">
                <div class="payment-icon bg-info bg-opacity-10">
                  <i class="ti ti-wifi text-info"></i>
                </div>
                <div class="payment-content">
                  <h6>{{ t('account.internetBill') }}</h6>
                  <p>{{ t('account.internetBillAmount') }} - {{ t('account.dueDate') }}: 5 Gen</p>
                  <div class="progress" style="height: 4px;">
                    <div class="progress-bar bg-info" style="width: 20%"></div>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp, definePageMeta } from "#imports";
definePageMeta({
  layout: "banking",
  middleware: ['auth']
});
import ApexCharts from 'apexcharts'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'

const { t, locale, setLocale } = useI18n()
console.log("this is the local", locale.value)
console.log('t(account.welcome)', t('account.welcome'))
console.log('t(login.welcome)', t('login.welcome'))

const authStore = useAuthStore()
const user = computed(() => authStore.getUser)

// Centralisation du statut du compte
const isAccountBlocked = computed(() => user.value?.accountblocked ?? false)

// Gestion des comptes
const mainAccount = computed(() => user.value?.accounts?.find(a => a.type === 'main'))
const savingsAccount = computed(() => user.value?.accounts?.find(a => a.type === 'savings'))
const investmentsAccount = computed(() => user.value?.accounts?.find(a => a.type === 'investments'))
const creditCardAccount = computed(() => user.value?.accounts?.find(a => a.type === 'creditCard'))

// Gestion des stats
const stats = computed(() => user.value?.stats || {})

// Gestion des transactions
const transactions = computed(() => user.value?.transactions || [])

// Gestion de la devise
const currency = computed(() => user.value?.currency || '€')
const currencyPosition = computed(() => user.value?.currencyPosition || 'left')

// Fonctions utilitaires pour affichage des montants
function formatAmount(amount: number) {
  if (currencyPosition.value === 'left') {
    return `${currency.value}${amount?.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}`
  } else {
    return `${amount?.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}${currency.value}`
  }
}

// Pour le template : gestion du nom
const fullname = computed(() => user.value?.fullname || '')

// Graphiques (inchangés, mais pourraient utiliser les données dynamiques si besoin)
onMounted(() => {
  // Graphique d'évolution du solde
  const balanceChartOptions = {
    series: [{
      name: 'Saldo',
      data: [3800000, 3850000, 3820000, 3900000, 3950000, 3967000]
    }],
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      },
      fontFamily: 'Inter, sans-serif'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#e30613']
    },
    colors: ['#e30613'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: '#e30613',
            opacity: 0.7
          },
          {
            offset: 100,
            color: '#e30613',
            opacity: 0.2
          }
        ]
      }
    },
    xaxis: {
      categories: ['Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      labels: {
        style: {
          colors: '#6c757d'
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return '€' + (val / 1000000).toFixed(1) + 'M'
        },
        style: {
          colors: '#6c757d'
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return '€' + val.toLocaleString('it-IT')
        }
      }
    },
    grid: {
      borderColor: '#e9ecef',
      strokeDashArray: 4
    }
  }

  const balanceChart = new ApexCharts(document.querySelector("#balanceChart"), balanceChartOptions)
  balanceChart.render()

  // Graphique des dépenses
  const expensesChartOptions = {
    series: [35, 25, 20, 15, 5],
    chart: {
      type: 'donut',
      height: 350,
      fontFamily: 'Inter, sans-serif'
    },
    labels: ['Alimentazione', 'Trasporto', 'Abitazione', 'Svago', 'Altri'],
    colors: ['#e30613', '#ffc107', '#17a2b8', '#28a745', '#6c757d'],
    legend: {
      position: 'bottom',
      labels: {
        colors: '#6c757d'
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Totale',
              color: '#6c757d',
              formatter: function (w: any) {
                return '€' + w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0).toLocaleString('it-IT')
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    }
  }

  const expensesChart = new ApexCharts(document.querySelector("#expensesChart"), expensesChartOptions)
  expensesChart.render()
})

onBeforeUnmount(() => {
  // ...
})
</script>

<style scoped>
/* Header du compte */
.account-header {
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.account-title {
  color: var(--unicredit-gray);
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.account-details {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.account-balance {
  display: flex;
  flex-direction: column;
}

.balance-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.balance-amount {
  color: var(--unicredit-red);
  font-weight: 700;
  margin: 0;
  font-size: 1.75rem;
}

/* Status Marquee */
.status-marquee {
  overflow: hidden;
  position: relative;
  background: linear-gradient(90deg, transparent, rgba(220, 53, 69, 0.1), transparent);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--bg-danger);
  color: var(--text-danger);
  animation: marquee 3s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Bannière d'informations de la banque */
.bank-info-banner {
  background: var(--bg-secondary);
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.bank-name {
  color: var(--unicredit-gray);
  font-weight: 600;
}

.bank-address {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

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

/* Cartes de compte */
.account-card {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  transition: all 0.3s ease;
  height: 100%;
}

.account-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--unicredit-red);
}

.account-icon {
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.account-details-layout {
  height: 64px;
  min-width: 0;
}

.account-name {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  text-align: right;
}

.account-balance {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0;
  text-align: left;
}

.iban-text {
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-align: right;
  min-width: 0;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-card .d-flex.justify-content-between.align-items-end {
  width: 100%;
}

/* Statistiques */
.stat-card {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  transition: all 0.3s ease;
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}

.stat-value {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

/* Services */
.service-item {
  padding: 1rem;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  background-color: var(--bg-secondary);
  transform: translateY(-2px);
}

.service-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin: 0 auto 0.5rem;
}

.service-name {
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  color: var(--text-primary);
}

/* Notifications */
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.notification-item:hover {
  background-color: var(--bg-secondary);
}

.notification-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.notification-content h6 {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  font-weight: 600;
}

.notification-content p {
  margin: 0 0 0.25rem 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.notification-content small {
  font-size: 0.75rem;
}

/* Payments */
.payment-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.payment-item:hover {
  background-color: var(--bg-secondary);
}

.payment-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.payment-content {
  flex: 1;
}

.payment-content h6 {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  font-weight: 600;
}

.payment-content p {
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .account-header {
    padding: 1rem 0;
  }

  .account-title {
    font-size: 1.25rem;
  }

  .balance-amount {
    font-size: 1.5rem;
  }

  .account-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .account-actions {
    text-align: left;
    margin-top: 1rem;
  }

  .bank-info-banner .text-end {
    text-align: left !important;
    margin-top: 1rem;
  }

  .account-card {
    margin-bottom: 1rem;
  }

  .account-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .account-name {
    font-size: 0.85rem;
  }

  .account-balance {
    font-size: 1rem;
  }

  .account-iban-text {
    font-size: 0.75rem;
    max-width: 80px;
  }

  /* Optimisation des graphiques pour mobile */
  #balanceChart, #expensesChart {
    height: 250px !important;
  }

  /* Optimisation des tableaux pour mobile */
  .table {
    font-size: 0.875rem;
  }

  .table th,
  .table td {
    padding: 0.5rem 0.25rem;
  }
}

@media (max-width: 576px) {
  .account-title {
    font-size: 1.125rem;
  }

  .balance-amount {
    font-size: 1.25rem;
  }

  .account-icon {
    width: 36px;
    height: 36px;
    font-size: 0.875rem;
  }

  .account-name {
    font-size: 0.8rem;
  }

  .account-balance {
    font-size: 1rem;
  }

  /* Optimisation des graphiques pour très petit écran */
  #balanceChart, #expensesChart {
    height: 200px !important;
  }

  /* Optimisation des tableaux pour très petit écran */
  .table {
    font-size: 0.8rem;
  }

  .table th,
  .table td {
    padding: 0.375rem 0.125rem;
  }
}

/* Animation pour les cartes */
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

.account-card, .stat-card {
  animation: slideInUp 0.3s ease;
}

.account-card:nth-child(1) { animation-delay: 0.1s; }
.account-card:nth-child(2) { animation-delay: 0.2s; }
.account-card:nth-child(3) { animation-delay: 0.3s; }
.account-card:nth-child(4) { animation-delay: 0.4s; }

.account-details {
  min-width: 0;
  flex: 1 1 0%;
}

.account-name, .account-balance, .iban-text {
  min-width: 0;
}

.account-name, .iban-text {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.iban-text {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .account-details {
    min-width: 0;
    flex: 1 1 0%;
  }
  .account-name, .iban-text {
    max-width: 120px;
    font-size: 0.8rem;
  }
}

.account-balance, .no-wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
