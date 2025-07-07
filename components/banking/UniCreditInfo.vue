<template>
  <div class="unicredit-info">
    <!-- En-tête UniCredit -->
    <div class="unicredit-header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="bank-branding">
              <div class="bank-logo">
                <i class="ti ti-building-bank fs-1 text-unicredit-red"></i>
              </div>
              <div class="bank-details">
                <h3 class="bank-name">UniCredit S.p.A.</h3>
                <p class="bank-tagline">Banca Europea - European Bank</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <div class="bank-contact">
              <p class="mb-1">
                <i class="ti ti-map-pin me-2 text-unicredit-red"></i>
                Piazza Gae Aulenti, 3 (Tower A)
              </p>
              <p class="mb-1">20154 Milano (MI) • Italia</p>
              <p class="mb-0">
                <i class="ti ti-phone me-2 text-unicredit-red"></i>
                +39 02 8862 1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Informations du client -->
    <div class="client-info">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="client-details">
              <h4 class="client-name">ALFREDO Frassati</h4>
              <div class="client-status">
                <span class="status-badge status-blocked">
                  <i class="ti ti-lock me-1"></i>Conto Bloccato
                </span>
                <span class="client-id">ID Cliente: UC-2024-001</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-end">
            <div class="total-balance">
              <span class="balance-label">Saldo Totale</span>
              <h2 class="balance-amount">€3.967.000,00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Informations sur UniCredit -->
    <div class="unicredit-about">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="about-content">
              <h5 class="about-title">
                <i class="ti ti-info-circle me-2 text-unicredit-red"></i>
                Informazioni su UniCredit
              </h5>
              <p class="about-text">
                UniCredit è una banca commerciale europea con una rete internazionale che copre 50 mercati. 
                Il Gruppo è presente in 17 paesi europei, offrendo servizi bancari completi e soluzioni finanziarie innovative.
              </p>
              <div class="about-stats">
                <div class="stat-item">
                  <span class="stat-number">17</span>
                  <span class="stat-label">Paesi Europei</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">50</span>
                  <span class="stat-label">Mercati</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">150+</span>
                  <span class="stat-label">Anni di Storia</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="language-support">
              <h6 class="language-title">Lingue Supportate</h6>
              <div class="language-buttons">
                <button class="btn btn-unicredit-red btn-sm active">
                  <i class="ti ti-flag me-1"></i>Italiano
                </button>
                <button class="btn btn-outline-unicredit-red btn-sm">
                  <i class="ti ti-flag me-1"></i>English
                </button>
              </div>
              <div class="support-info">
                <p class="mb-2">
                  <i class="ti ti-headset me-2 text-unicredit-red"></i>
                  <strong>Supporto Clienti</strong>
                </p>
                <p class="mb-1">Lun-Ven: 8:00-20:00</p>
                <p class="mb-0">Sab: 8:00-14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sécurité et Conformité -->
    <div class="security-compliance">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="security-badges">
              <div class="badge-item">
                <i class="ti ti-shield-check text-success"></i>
                <span>SSL Sicuro</span>
              </div>
              <div class="badge-item">
                <i class="ti ti-certificate text-info"></i>
                <span>Certificato PCI DSS</span>
              </div>
              <div class="badge-item">
                <i class="ti ti-lock text-warning"></i>
                <span>Crittografia 256-bit</span>
              </div>
              <div class="badge-item">
                <i class="ti ti-eye-off text-danger"></i>
                <span>Protezione Dati GDPR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant d'informations UniCredit
</script>

<style scoped>
.unicredit-info {
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

/* En-tête UniCredit */
.unicredit-header {
  background: var(--unicredit-red);
  color: white;
  padding: 2rem 0;
}

.bank-branding {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bank-logo {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bank-name {
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
}

.bank-tagline {
  margin: 0;
  opacity: 0.9;
  font-size: 0.875rem;
}

.bank-contact {
  font-size: 0.875rem;
  opacity: 0.9;
}

.bank-contact p {
  margin: 0;
}

/* Informations du client */
.client-info {
  background: var(--bg-secondary);
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.client-name {
  color: var(--unicredit-gray);
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.client-status {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.client-id {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.total-balance {
  text-align: right;
}

.balance-label {
  display: block;
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

/* Informations sur UniCredit */
.unicredit-about {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-color);
}

.about-title {
  color: var(--unicredit-gray);
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-text {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--unicredit-red);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Support linguistique */
.language-support {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.language-title {
  color: var(--unicredit-gray);
  font-weight: 600;
  margin-bottom: 1rem;
}

.language-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.language-buttons .btn {
  justify-content: flex-start;
}

.support-info {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.support-info p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Sécurité et conformité */
.security-compliance {
  background: var(--bg-secondary);
  padding: 1rem 0;
}

.security-badges {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.badge-item i {
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .bank-branding {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .bank-contact {
    text-align: left;
    margin-top: 1rem;
  }
  
  .client-status {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .total-balance {
    text-align: left;
    margin-top: 1rem;
  }
  
  .about-stats {
    justify-content: space-around;
    gap: 1rem;
  }
  
  .security-badges {
    gap: 1rem;
  }
  
  .badge-item {
    font-size: 0.75rem;
  }
}
</style> 