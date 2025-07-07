<template>
  <div>
    <!-- Breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
      <div class="left-content">
        <span class="main-content-title mg-b-0 mg-b-lg-1">Analyses Financières</span>
      </div>
      <div class="justify-content-center mt-2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item tx-15"><a href="/">Accueil</a></li>
          <li class="breadcrumb-item active" aria-current="page">Analyses</li>
        </ol>
      </div>
    </div>

    <!-- Métriques Principales -->
    <div class="row mb-4">
      <div class="col-xl-3 col-lg-6 col-md-6">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="me-3">
                <span class="avatar avatar-md bg-primary">
                  <i class="ti ti-chart-line fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">Revenus Mensuels</p>
                <h4 class="mb-0">€3,200.00</h4>
                <small class="text-success">+12.5% vs mois dernier</small>
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
                  <i class="ti ti-chart-bar fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">Dépenses Mensuelles</p>
                <h4 class="mb-0">€1,850.00</h4>
                <small class="text-danger">+8.2% vs mois dernier</small>
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
                <span class="avatar avatar-md bg-success">
                  <i class="ti ti-piggy-bank fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">Épargne Mensuelle</p>
                <h4 class="mb-0">€1,350.00</h4>
                <small class="text-success">+15.3% vs mois dernier</small>
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
                <span class="avatar avatar-md bg-warning">
                  <i class="ti ti-percentage fs-16"></i>
                </span>
              </div>
              <div>
                <p class="mb-1 text-muted">Taux d'Épargne</p>
                <h4 class="mb-0">42.2%</h4>
                <small class="text-success">+2.8% vs mois dernier</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Graphiques Principaux -->
    <div class="row mb-4">
      <div class="col-xl-8 col-lg-8 col-md-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Évolution des Revenus et Dépenses</div>
            <div class="card-options">
              <select class="form-select form-select-sm" style="width: auto;">
                <option>6 derniers mois</option>
                <option>12 derniers mois</option>
                <option>2 dernières années</option>
              </select>
            </div>
          </div>
          <div class="card-body">
            <div id="incomeExpensesChart" style="height: 350px;"></div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Répartition des Dépenses</div>
          </div>
          <div class="card-body">
            <div id="expensesPieChart" style="height: 350px;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Graphiques Secondaires -->
    <div class="row mb-4">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Évolution de l'Épargne</div>
          </div>
          <div class="card-body">
            <div id="savingsChart" style="height: 300px;"></div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Utilisation des Cartes de Crédit</div>
          </div>
          <div class="card-body">
            <div id="creditCardChart" style="height: 300px;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tableau des Catégories -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Analyse par Catégorie</div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Catégorie</th>
                    <th>Montant</th>
                    <th>% du Total</th>
                    <th>Évolution</th>
                    <th>Moyenne Mensuelle</th>
                    <th>Tendance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="category in categories" :key="category.id">
                    <td>
                      <div class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-2" :class="category.colorClass">
                          <i :class="category.icon"></i>
                        </span>
                        <span>{{ category.name }}</span>
                      </div>
                    </td>
                    <td class="fw-semibold">{{ category.amount }}</td>
                    <td>{{ category.percentage }}%</td>
                    <td>
                      <span :class="category.evolutionClass">
                        {{ category.evolution }}
                      </span>
                    </td>
                    <td>{{ category.average }}</td>
                    <td>
                      <div class="progress" style="height: 6px; width: 100px;">
                        <div class="progress-bar" :class="category.trendClass" :style="{ width: category.trendPercentage + '%' }"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts'

definePageMeta({ layout: 'banking' })

// Données des catégories
const categories = [
  {
    id: 1,
    name: 'Alimentation',
    amount: '€450.00',
    percentage: 24.3,
    evolution: '+5.2%',
    evolutionClass: 'text-success',
    average: '€420.00',
    trendPercentage: 75,
    trendClass: 'bg-success',
    icon: 'ti ti-shopping-cart',
    colorClass: 'bg-primary'
  },
  {
    id: 2,
    name: 'Transport',
    amount: '€320.00',
    percentage: 17.3,
    evolution: '-2.1%',
    evolutionClass: 'text-danger',
    average: '€340.00',
    trendPercentage: 60,
    trendClass: 'bg-warning',
    icon: 'ti ti-gas-station',
    colorClass: 'bg-warning'
  },
  {
    id: 3,
    name: 'Logement',
    amount: '€580.00',
    percentage: 31.4,
    evolution: '+0.0%',
    evolutionClass: 'text-muted',
    average: '€580.00',
    trendPercentage: 100,
    trendClass: 'bg-info',
    icon: 'ti ti-home',
    colorClass: 'bg-info'
  },
  {
    id: 4,
    name: 'Loisirs',
    amount: '€280.00',
    percentage: 15.1,
    evolution: '+12.5%',
    evolutionClass: 'text-success',
    average: '€250.00',
    trendPercentage: 85,
    trendClass: 'bg-success',
    icon: 'ti ti-device-tv',
    colorClass: 'bg-purple'
  },
  {
    id: 5,
    name: 'Santé',
    amount: '€120.00',
    percentage: 6.5,
    evolution: '-8.3%',
    evolutionClass: 'text-danger',
    average: '€130.00',
    trendPercentage: 40,
    trendClass: 'bg-danger',
    icon: 'ti ti-heart',
    colorClass: 'bg-danger'
  },
  {
    id: 6,
    name: 'Autres',
    amount: '€100.00',
    percentage: 5.4,
    evolution: '+3.2%',
    evolutionClass: 'text-success',
    average: '€95.00',
    trendPercentage: 65,
    trendClass: 'bg-secondary',
    icon: 'ti ti-dots',
    colorClass: 'bg-secondary'
  }
]

onMounted(() => {
  // Graphique Revenus vs Dépenses
  const incomeExpensesOptions = {
    series: [{
      name: 'Revenus',
      data: [2800, 2900, 3100, 2950, 3200, 3400]
    }, {
      name: 'Dépenses',
      data: [1600, 1700, 1850, 1750, 1900, 1850]
    }],
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    colors: ['#10b981', '#ef4444'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: ['Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return '€' + val.toLocaleString()
        }
      }
    }
  }

  const incomeExpensesChart = new ApexCharts(document.querySelector("#incomeExpensesChart"), incomeExpensesOptions)
  incomeExpensesChart.render()

  // Graphique Répartition Dépenses
  const expensesPieOptions = {
    series: [24.3, 17.3, 31.4, 15.1, 6.5, 5.4],
    chart: {
      type: 'donut',
      height: 350
    },
    labels: ['Alimentation', 'Transport', 'Logement', 'Loisirs', 'Santé', 'Autres'],
    colors: ['#6366f1', '#f59e0b', '#3b82f6', '#8b5cf6', '#ef4444', '#6b7280'],
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%'
        }
      }
    }
  }

  const expensesPieChart = new ApexCharts(document.querySelector("#expensesPieChart"), expensesPieOptions)
  expensesPieChart.render()

  // Graphique Épargne
  const savingsOptions = {
    series: [{
      name: 'Épargne',
      data: [800, 950, 1100, 1200, 1350, 1500]
    }],
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false
      }
    },
    colors: ['#10b981'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      categories: ['Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return '€' + val.toLocaleString()
        }
      }
    }
  }

  const savingsChart = new ApexCharts(document.querySelector("#savingsChart"), savingsOptions)
  savingsChart.render()

  // Graphique Cartes de Crédit
  const creditCardOptions = {
    series: [{
      name: 'Utilisation',
      data: [25, 22, 70, 45, 30, 60]
    }],
    chart: {
      type: 'bar',
      height: 300,
      toolbar: {
        show: false
      }
    },
    colors: ['#6366f1'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Visa Gold', 'Mastercard', 'Amex', 'Visa Classic', 'MC Gold', 'Visa Business']
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return val + '%'
        }
      }
    }
  }

  const creditCardChart = new ApexCharts(document.querySelector("#creditCardChart"), creditCardOptions)
  creditCardChart.render()
})
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

.progress {
  background-color: #f3f4f6;
}

.bg-purple {
  background-color: #8b5cf6 !important;
}
</style> 