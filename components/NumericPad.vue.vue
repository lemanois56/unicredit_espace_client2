<template>
  <div class="mx-auto max-w-xs">
    <div class="grid grid-cols-3 gap-2">
      <!-- Chiffres 1 à 9 -->
      <button
        v-for="n in [1,2,3,4,5,6,7,8,9]"
        :key="n"
        type="button"
        class="aspect-square flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl font-mono"
        @click="$emit('input', n.toString())"
      >
        {{ n }}
      </button>

      <!-- Touche suppression -->
      <button
        type="button"
        class="aspect-square flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl"
        @click="$emit('delete')"
      >
        <i class="ti ti-backspace"></i>
      </button>

      <!-- Case vide (pour centrer le 0) -->
      <div class="aspect-square"></div>

      <!-- Chiffre 0 -->
      <button
        type="button"
        class="aspect-square flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl font-mono"
        @click="$emit('input', '0')"
      >
        0
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'input', val: string): void
  (e: 'delete'): void
}>()
</script>
