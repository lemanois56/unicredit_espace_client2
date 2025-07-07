<script lang="ts">
import type { DefineComponent } from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    component: {
      type: Object as () => DefineComponent<{}, {}, any>,
      required: true
    }
  }
}
</script>

<template>
  <div class="card custom-card">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
    </div>
    <div class="card-body">
      <component :is="component"></component>
    </div>
  </div>
</template>

<style scoped></style>
