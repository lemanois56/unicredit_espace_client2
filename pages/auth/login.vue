<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

definePageMeta({
  layout: 'custom'
})

const { t, locale, setLocale } = useI18n()
const { authenticateUser } = useAuthStore()
const router = useRouter()
const username = ref('')
const pin = ref('')
const showPin = ref(false)
const loading = ref(false)
const error = ref(false)

const onLogin = async () => {
  loading.value = true
  error.value = false
  const data = await authenticateUser({ id: 0, username: username.value, password: pin.value, token: '' })
  if (data.authenticated) {
    router.push('/')
    toast.success(t('login.success'), { hideProgressBar: true, autoClose: true })
  } else {
    error.value = true
    toast.error(t('login.error'), { hideProgressBar: true, autoClose: true })
  }
  loading.value = false
}
</script>

<template>
  <div class="login-bg d-flex align-items-center justify-content-center min-vh-100">
    <div class="login-card card shadow-lg p-4 border-0" style="max-width: 400px; width: 100%;">
      <div class="d-flex justify-content-end mb-2">
        <div class="btn-group btn-group-sm">
          <button class="btn btn-outline-secondary" :class="{active: locale === 'it'}" @click="setLocale('it')">IT</button>
          <button class="btn btn-outline-secondary" :class="{active: locale === 'en'}" @click="setLocale('en')">EN</button>
          <button class="btn btn-outline-secondary" :class="{active: locale === 'fr'}" @click="setLocale('fr')">FR</button>
        </div>
      </div>
      <div class="text-center mb-4">
        <img src="/logo.png" alt="logo" class="img-fluid" style="max-width: 100px;"/>
      </div>
      <h2 class="login-title mb-2 text-center">{{ t('login.welcome') }}</h2>
      <p class="login-subtitle mb-4 text-center">{{ t('login.promo') }}</p>
      <form @submit.prevent="onLogin">
        <div class="mb-3">
          <label for="username" class="form-label">{{ t('login.username') }}</label>
          <div class="input-icon-group">
            <i class="ti ti-user input-icon"></i>
            <input id="username" v-model="username" type="text" class="form-control modern-input" :placeholder="t('login.usernamePlaceholder')" autocomplete="username" required />
          </div>
        </div>
        <div class="mb-3">
          <label for="pin" class="form-label">{{ t('login.pin') }}</label>
          <div class="input-icon-group">
            <i class="ti ti-lock input-icon"></i>
            <input id="pin" :type="showPin ? 'text' : 'password'" v-model="pin" class="form-control modern-input" :placeholder="t('login.pinPlaceholder')" maxlength="32" minlength="4" autocomplete="current-password" required />
            <button type="button" class="btn btn-outline-secondary btn-sm showpin-btn" @click="showPin = !showPin" tabindex="-1">
              <i :class="showPin ? 'ti ti-eye-off' : 'ti ti-eye'"></i>
            </button>
          </div>
        </div>
        <button type="submit" class="btn btn-unicredit-red w-100 mt-3" :disabled="loading">
          <i class="ti ti-login me-2"></i>{{ t('login.loginBtn') }}
        </button>
        <div v-if="error" class="alert alert-danger d-flex align-items-center mt-2">
          <i class="ti ti-alert-circle me-2"></i>
          <span>{{ t('login.error') }}</span>
        </div>
      </form>
      <div class="d-flex justify-content-between align-items-center mt-3 mb-2">
        <a href="#" class="text-decoration-none small"><i class="ti ti-help-circle me-1"></i>{{ t('login.forgotPin') }}</a>
        <a href="#" class="text-decoration-none small"><i class="ti ti-headset me-1"></i>{{ t('login.needHelp') }}</a>
      </div>
      <div class="row g-2 mt-3">
        <div class="col-12 col-md-6">
          <div class="info-box d-flex align-items-center bg-light rounded p-2">
            <i class="ti ti-shield-lock text-success fs-3 me-2"></i>
            <div>
              <div class="fw-bold">{{ t('login.securityTitle') }}</div>
              <div class="small text-muted">{{ t('login.securityDesc') }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="info-box d-flex align-items-center bg-light rounded p-2">
            <i class="ti ti-device-mobile text-primary fs-3 me-2"></i>
            <div>
              <div class="fw-bold">{{ t('login.mobileTitle') }}</div>
              <div class="small text-muted">{{ t('login.mobileDesc') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff 60%, #e9ecef 100%);
}
.login-card {
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
}
.input-icon-group, .input-icon-group {
  position: relative;
  display: flex;
  align-items: center;
}
.input-icon {
  position: absolute;
  left: 1rem;
  z-index: 2;
  color: #adb5bd;
  font-size: 1.2rem;
}
.modern-input {
  padding-left: 2.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  font-size: 1.1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.modern-input:focus {
  border-color: #e60000;
  box-shadow: 0 0 0 2px rgba(230,0,0,0.08);
}
.showpin-btn {
  position: absolute;
  right: 0.5rem;
  z-index: 2;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0.25rem 0.5rem;
}
.pin-input {
  letter-spacing: 0.3rem;
}
.info-box {
  min-height: 60px;
}
.btn-unicredit-red {
  background: #e60000;
  color: #fff;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  transition: background 0.2s;
}
.btn-unicredit-red:active,
.btn-unicredit-red:focus,
.btn-unicredit-red:hover {
  background: #c40000;
  color: #fff;
}
</style>
