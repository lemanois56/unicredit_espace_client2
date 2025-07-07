<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    customCardClass: String,
    cardBodyClass: String,
    card: Object,
  },
});
</script>

<template>
  <div class="card custom-card" :class="customCardClass">
    <div class="card-body" :class="cardBodyClass">
      <div class="d-flex align-items-top">
        <div class="me-3">
          <span class="avatar avatar-sm shadow-sm avatar-rounded" v-html="card.icon"></span>
        </div>
        <div class="flex-fill">
          <div class="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
            <span class="flex-fill">{{ card.title }}</span>
            <span class="ms-1 text-muted">{{ card.iconShorcut }}</span>
          </div>
          <div class="d-flex flex-wrap align-items-center justify-content-between">
            <h5 class="fw-semibold mb-0">{{ card.price }}</h5>
            <div class="flex-fill">
              <span :class="`ms-2 badge bg-${card.badgeClass}-transparent rounded-pill`">{{ card.badgeText }}</span>
            </div>
            <div style="min-height: 20px;" :id="card.chartId">
              <apexchart type="line" height="20px" width="100px" :options="card.chart.options"
                :series="card.chart.series"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>