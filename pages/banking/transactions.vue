<template>
  <div>
    <!-- Breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
      <div class="left-content">
        <span class="main-content-title mg-b-0 mg-b-lg-1">{{ t('transactions.title') }}</span>
      </div>
      <div class="justify-content-center mt-2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item tx-15"><a href="/">{{ t('transactions.home') }}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ t('transactions.title') }}</li>
        </ol>
      </div>
    </div>

    <!-- Filtres -->
    <div class="row mb-4">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <label class="form-label">{{ t('transactions.period') }}</label>
                <select class="form-select" v-model="selectedPeriod">
                  <option value="7">{{ t('transactions.last7Days') }}</option>
                  <option value="30">{{ t('transactions.last30Days') }}</option>
                  <option value="90">{{ t('transactions.last3Months') }}</option>
                  <option value="365">{{ t('transactions.lastYear') }}</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">{{ t('transactions.type') }}</label>
                <select class="form-select" v-model="selectedType">
                  <option value="">{{ t('transactions.all') }}</option>
                  <option value="credit">{{ t('transactions.credits') }}</option>
                  <option value="debit">{{ t('transactions.debits') }}</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">{{ t('transactions.category') }}</label>
                <select class="form-select" v-model="selectedCategory">
                  <option value="">{{ t('transactions.allCategories') }}</option>
                  <option value="alimentation">{{ t('transactions.food') }}</option>
                  <option value="transport">{{ t('transactions.transport') }}</option>
                  <option value="logement">{{ t('transactions.housing') }}</option>
                  <option value="loisirs">{{ t('transactions.leisure') }}</option>
                  <option value="revenus">{{ t('transactions.income') }}</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">{{ t('transactions.amount') }}</label>
                <input type="text" class="form-control" placeholder="{{ t('transactions.searchAmount') }}" v-model="searchAmount">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Résumé -->
    <div class="row mb-4">
      <div class="col-xl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="me-3">
                <span class="avatar avatar-md bg-success">
                  <i class="ti ti-arrow-down fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">{{ t('transactions.totalCredits') }}</p>
                <h4 class="mb-0 text-success">€8,450.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="me-3">
                <span class="avatar avatar-md bg-danger">
                  <i class="ti ti-arrow-up fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">{{ t('transactions.totalDebits') }}</p>
                <h4 class="mb-0 text-danger">€2,150.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="me-3">
                <span class="avatar avatar-md bg-primary">
                  <i class="ti ti-calculator fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">{{ t('transactions.netBalance') }}</p>
                <h4 class="mb-0 text-primary">€6,300.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="me-3">
                <span class="avatar avatar-md bg-info">
                  <i class="ti ti-receipt fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">{{ t('transactions.transactions') }}</p>
                <h4 class="mb-0 text-info">47</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Liste des Transactions -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">{{ t('transactions.history') }}</div>
            <div class="card-options">
              <button class="btn btn-sm btn-outline-primary me-2">
                <i class="ti ti-download me-1"></i>{{ t('transactions.export') }}
              </button>
              <button class="btn btn-sm btn-primary" @click="newTransaction">
                <i class="ti ti-plus me-1"></i>{{ t('transactions.newTransaction') }}
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>{{ t('transactions.date') }}</th>
                    <th>{{ t('transactions.description') }}</th>
                    <th>{{ t('transactions.category') }}</th>
                    <th>{{ t('transactions.account') }}</th>
                    <th>{{ t('transactions.amount') }}</th>
                    <th>{{ t('transactions.status') }}</th>
                    <th>{{ t('transactions.actions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="transaction in filteredTransactions" :key="transaction.id">
                    <td>{{ transaction.date }}</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-2" :class="transaction.iconClass">
                          <i :class="transaction.icon"></i>
                        </span>
                        <div>
                          <span class="fw-semibold">{{ transaction.description }}</span>
                          <br>
                          <small class="text-muted">{{ transaction.reference }}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="badge" :class="transaction.categoryClass">
                        {{ transaction.category }}
                      </span>
                    </td>
                    <td>{{ transaction.account }}</td>
                    <td :class="transaction.amountClass">
                      {{ transaction.amount }}
                    </td>
                    <td>
                      <span class="badge" :class="transaction.statusClass">
                        {{ t('transactions.statuses.' + (transaction.status || 'unknown')) }}
                      </span>
                    </td>
                    <td>
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary" @click="viewTransaction(transaction)">
                          <i class="ti ti-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-secondary" @click="editTransaction(transaction)">
                          <i class="ti ti-edit"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="d-flex justify-content-between align-items-center mt-4">
              <div>
                <span class="text-muted">{{ t('transactions.pagination', { from: 1, to: 10, total: transactions.length }) }}</span>
              </div>
              <nav>
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">{{ t('transactions.previous') }}</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">{{ t('transactions.next') }}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

definePageMeta({ layout: 'banking' })

const { t, locale, setLocale } = useI18n()

const router = useRouter()

// État réactif
const selectedPeriod = ref('30')
const selectedType = ref('')
const selectedCategory = ref('')
const searchAmount = ref('')

// Initialisation des transactions depuis localStorage ou data/apps/transaction.js
import { transactionsData } from '~/data/apps/transaction.js'

const getInitialTransactions = () => {
  const local = localStorage.getItem('transactions')
  if (local) return JSON.parse(local)
  return transactionsData.map(t => ({
    id: t.id,
    date: t.date,
    description: t.senderName + ' → ' + t.receiver,
    reference: t.transactionHash,
    category: t.coinName,
    categoryClass: 'bg-light text-dark',
    account: 'Compte Principal',
    amount: (t.amountColor === 'danger' ? '-' : '+') + '€' + Math.abs(Number(t.amount)),
    amountClass: t.amountColor === 'danger' ? 'text-danger' : 'text-success',
    status: t.statusBadgeText,
    statusClass: t.statusBadgeColor === 'success' ? 'bg-success' : t.statusBadgeColor === 'warning' ? 'bg-warning' : t.statusBadgeColor === 'danger' ? 'bg-danger' : 'bg-info',
    icon: 'ti ti-arrows-exchange',
    iconClass: t.amountColor === 'danger' ? 'bg-danger' : 'bg-success'
  }))
}

const transactions = ref(getInitialTransactions())

const saveTransactions = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}

onMounted(() => {
  transactions.value = getInitialTransactions()
})

const addTransaction = (tx) => {
  transactions.value.unshift(tx)
  saveTransactions()
}

// Méthode pour le bouton Nouvelle Transaction
const newTransaction = async () => {
  const result = await Swal.fire({
    title: 'Nouvelle transaction',
    text: 'Voulez-vous créer une nouvelle transaction ?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non'
  })
  if (result.isConfirmed) {
    router.push('/banking/transfer')
  }
}

// Filtrage des transactions
const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    const matchesType = !selectedType.value || 
      (selectedType.value === 'credit' && transaction.amount.startsWith('+')) ||
      (selectedType.value === 'debit' && transaction.amount.startsWith('-'))
    
    const matchesCategory = !selectedCategory.value || 
      transaction.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
    
    const matchesAmount = !searchAmount.value || 
      transaction.amount.includes(searchAmount.value)
    
    return matchesType && matchesCategory && matchesAmount
  })
})

// Méthodes
const viewTransaction = (transaction: any) => {
  console.log('Voir transaction:', transaction)
  // Ici vous pouvez ouvrir une modal ou naviguer vers une page de détails
}

const editTransaction = (transaction: any) => {
  console.log('Éditer transaction:', transaction)
  // Ici vous pouvez ouvrir un formulaire d'édition
}
</script>

<style scoped>
.breadcrumb-header {
  padding: 1rem 0;
  margin-bottom: 1.5rem;
}

.custom-card {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: transparent;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 1.5rem;
}

.card-title {
  font-weight: 600;
  color: #1f2937;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
}

.avatar-xs {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
}

.avatar-md {
  width: 3rem;
  height: 3rem;
  font-size: 1rem;
}

.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.bg-purple {
  background-color: #8b5cf6 !important;
}
</style> 