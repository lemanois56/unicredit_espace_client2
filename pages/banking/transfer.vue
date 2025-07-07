<template>
  <div>
    <!-- Breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
      <div class="left-content">
        <span class="main-content-title mg-b-0 mg-b-lg-1">{{ t('transfer.title') }}</span>
      </div>
      <div class="justify-content-center mt-2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item tx-15"><a href="/">{{ t('home.title') }}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ t('transfer.title') }}</li>
        </ol>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">{{ t('transfer.newTransfer') }}</div>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitTransfer">
              <!-- Compte Débiteur -->
              <div class="mb-4">
                <label class="form-label">{{ t('transfer.fromAccount') }}</label>
                <select class="form-select" v-model="transferForm.fromAccount" required>
                  <option value="">{{ t('transfer.selectAccount') }}</option>
                  <option value="principal">{{ t('transfer.principalAccount') }} - €24,580.00</option>
                  <option value="epargne">{{ t('transfer.epargneAccount') }} - €12,450.00</option>
                  <option value="joint">{{ t('transfer.jointAccount') }} - €1,000.00</option>
                </select>
              </div>

              <!-- Type de Virement -->
              <div class="mb-4">
                <label class="form-label">{{ t('transfer.type') }}</label>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="transferForm.type" value="immediate" id="immediate">
                      <label class="form-check-label" for="immediate">
                        <i class="ti ti-bolt me-1"></i>{{ t('transfer.immediate') }}
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="transferForm.type" value="scheduled" id="scheduled">
                      <label class="form-check-label" for="scheduled">
                        <i class="ti ti-calendar me-1"></i>{{ t('transfer.scheduled') }}
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="transferForm.type" value="recurring" id="recurring">
                      <label class="form-check-label" for="recurring">
                        <i class="ti ti-repeat me-1"></i>{{ t('transfer.recurring') }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Informations Bénéficiaire -->
              <div class="mb-4">
                <label class="form-label">{{ t('transfer.beneficiary') }}</label>
                <div class="row">
                  <div class="col-md-6">
                    <input type="text" class="form-control" :placeholder="t('transfer.beneficiaryNamePlaceholder')" v-model="transferForm.beneficiaryName" required>
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" :placeholder="t('transfer.ibanPlaceholder')" v-model="transferForm.iban" required>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <input type="text" class="form-control" :placeholder="t('transfer.bicPlaceholder')" v-model="transferForm.bic">
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" :placeholder="t('transfer.bankNamePlaceholder')" v-model="transferForm.bankName">
                  </div>
                </div>
              </div>

              <!-- Montant et Référence -->
              <div class="mb-4">
                <div class="row">
                  <div class="col-md-6">
                    <label class="form-label">{{ t('transfer.amount') }}</label>
                    <div class="input-group">
                      <span class="input-group-text">€</span>
                      <input type="number" class="form-control" :placeholder="t('transfer.amountPlaceholder')" v-model="transferForm.amount" step="0.01" min="0" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ t('transfer.reference') }}</label>
                    <input type="text" class="form-control" :placeholder="t('transfer.referencePlaceholder')" v-model="transferForm.reference" required>
                  </div>
                </div>
              </div>

              <!-- Date de Virement (si programmé) -->
              <div class="mb-4" v-if="transferForm.type === 'scheduled'">
                <label class="form-label">{{ t('transfer.scheduledDate') }}</label>
                <input type="date" class="form-control" v-model="transferForm.scheduledDate" required>
              </div>

              <!-- Fréquence (si récurrent) -->
              <div class="mb-4" v-if="transferForm.type === 'recurring'">
                <div class="row">
                  <div class="col-md-6">
                    <label class="form-label">{{ t('transfer.frequency') }}</label>
                    <select class="form-select" v-model="transferForm.frequency" required>
                      <option value="">{{ t('transfer.selectFrequency') }}</option>
                      <option value="weekly">{{ t('transfer.weekly') }}</option>
                      <option value="monthly">{{ t('transfer.monthly') }}</option>
                      <option value="quarterly">{{ t('transfer.quarterly') }}</option>
                      <option value="yearly">{{ t('transfer.yearly') }}</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">{{ t('transfer.endDate') }}</label>
                    <input type="date" class="form-control" v-model="transferForm.endDate">
                  </div>
                </div>
              </div>

              <!-- Frais -->
              <div class="mb-4">
                <div class="alert alert-info">
                  <div class="d-flex align-items-center">
                    <i class="ti ti-info-circle me-2"></i>
                    <div>
                      <strong>{{ t('transfer.fees') }}</strong> 
                      <span v-if="transferForm.amount <= 1000">{{ t('transfer.free') }}</span>
                      <span v-else>€2.50</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Boutons -->
              <div class="d-flex gap-2">
                <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                  <i class="ti ti-send me-1"></i>
                  {{ isSubmitting ? t('transfer.processing') : t('transfer.performTransfer') }}
                </button>
                <button type="button" class="btn btn-outline-secondary" @click="resetForm">
                  <i class="ti ti-refresh me-1"></i>{{ t('transfer.reset') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-xl-4 col-lg-4 col-md-12">
        <!-- Résumé du Virement -->
        <div class="card custom-card mb-4">
          <div class="card-header">
            <div class="card-title">{{ t('transfer.summary') }}</div>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <small class="text-muted">{{ t('transfer.fromAccount') }}</small>
              <p class="mb-0">{{ getAccountName(transferForm.fromAccount) }}</p>
            </div>
            <div class="mb-3">
              <small class="text-muted">{{ t('transfer.beneficiary') }}</small>
              <p class="mb-0">{{ transferForm.beneficiaryName || t('transfer.notProvided') }}</p>
            </div>
            <div class="mb-3">
              <small class="text-muted">{{ t('transfer.amount') }}</small>
              <h5 class="mb-0 text-primary">{{ transferForm.amount ? '€' + transferForm.amount : '€0.00' }}</h5>
            </div>
            <div class="mb-3">
              <small class="text-muted">{{ t('transfer.fees') }}</small>
              <p class="mb-0">{{ getFees() }}</p>
            </div>
            <hr>
            <div class="mb-0">
              <small class="text-muted">{{ t('transfer.total') }}</small>
              <h5 class="mb-0 text-success">{{ getTotal() }}</h5>
            </div>
          </div>
        </div>

        <!-- Bénéficiaires Favoris -->
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">{{ t('transfer.favorites') }}</div>
          </div>
          <div class="card-body">
            <div class="list-group list-group-flush">
              <div class="list-group-item d-flex justify-content-between align-items-center" v-for="favorite in favorites" :key="favorite.id">
                <div>
                  <h6 class="mb-1">{{ favorite.name }}</h6>
                  <small class="text-muted">{{ favorite.iban }}</small>
                </div>
                <button class="btn btn-sm btn-outline-primary" @click="selectFavorite(favorite)">
                  <i class="ti ti-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

definePageMeta({ layout: 'banking' })

const { t, locale, setLocale } = useI18n()

const router = useRouter()

// État du formulaire
const transferForm = ref({
  fromAccount: '',
  type: 'immediate',
  beneficiaryName: '',
  iban: '',
  bic: '',
  bankName: '',
  amount: '',
  reference: '',
  scheduledDate: '',
  frequency: '',
  endDate: ''
})

const isSubmitting = ref(false)

// Bénéficiaires favoris
const favorites = ref([
  {
    id: 1,
    name: 'Marie Dupont',
    iban: 'FR76 1234 5678 9012 3456 7890 456',
    bic: 'BNPAFRPP'
  },
  {
    id: 2,
    name: 'Jean Martin',
    iban: 'FR76 1234 5678 9012 3456 7890 789',
    bic: 'CRLYFRPP'
  },
  {
    id: 3,
    name: 'Sophie Bernard',
    iban: 'FR76 1234 5678 9012 3456 7890 012',
    bic: 'SOGEFRPP'
  }
])

// Méthodes
const getAccountName = (accountId: string) => {
  const accounts = {
    principal: 'Compte Principal - €24,580.00',
    epargne: 'Compte Épargne - €12,450.00',
    joint: 'Compte Joint - €1,000.00'
  }
  return accounts[accountId as keyof typeof accounts] || 'Non sélectionné'
}

const getFees = () => {
  const amount = parseFloat(transferForm.value.amount) || 0
  return amount <= 1000 ? 'Gratuit' : '€2.50'
}

const getTotal = () => {
  const amount = parseFloat(transferForm.value.amount) || 0
  const fees = amount <= 1000 ? 0 : 2.50
  return `€${(amount + fees).toFixed(2)}`
}

const selectFavorite = (favorite: any) => {
  transferForm.value.beneficiaryName = favorite.name
  transferForm.value.iban = favorite.iban
  transferForm.value.bic = favorite.bic
}

const resetForm = () => {
  transferForm.value = {
    fromAccount: '',
    type: 'immediate',
    beneficiaryName: '',
    iban: '',
    bic: '',
    bankName: '',
    amount: '',
    reference: '',
    scheduledDate: '',
    frequency: '',
    endDate: ''
  }
}

const submitTransfer = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  // Création de la nouvelle transaction
  const tx = {
    id: Date.now(),
    date: new Date().toLocaleDateString('fr-FR'),
    description: transferForm.value.beneficiaryName + ' ← Moi',
    reference: transferForm.value.reference || 'REF-' + Date.now(),
    category: 'Virement',
    categoryClass: 'bg-light text-dark',
    account: 'Compte Principal',
    amount: '-€' + Number(transferForm.value.amount).toFixed(2),
    amountClass: 'text-danger',
    status: 'Validé',
    statusClass: 'bg-success',
    icon: 'ti ti-arrows-exchange',
    iconClass: 'bg-danger'
  }
  // Ajout dans localStorage
  const local = localStorage.getItem('transactions')
  let txs = local ? JSON.parse(local) : []
  txs.unshift(tx)
  localStorage.setItem('transactions', JSON.stringify(txs))
  isSubmitting.value = false
  await Swal.fire({
    title: 'Succès',
    text: 'Transaction ajoutée avec succès !',
    icon: 'success',
    confirmButtonText: 'OK'
  })
  router.push('/banking/transactions')
  resetForm()
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

.form-check-input:checked {
  background-color: #6366f1;
  border-color: #6366f1;
}

.list-group-item {
  border: none;
  padding: 0.75rem 0;
}

.list-group-item:not(:last-child) {
  border-bottom: 1px solid #e2e8f0;
}
</style> 