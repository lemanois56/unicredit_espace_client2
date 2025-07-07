<script lang="js">
export default {
  props: {
    ulClass: String,
    liClass: String,
    avatarColor: String,
    card: Object,
    dflexClass: String,
    ulId: String,
    classFlex: String
  }
}
</script>

<template>
  <ul :class="ulClass" :id="ulId">
    <li :class="card.liClass" v-for="card, index in card" :key="index">
      <div :class="['d-flex', dflexClass]">
        <div :class="`me-2 ${card.classFlex}`">
          <span :class="card.avatarClass">
            <template v-if="card.avatar">
              <img :src="card.avatar" alt="">
            </template>
            <template v-else>
              <i v-if="card.icons" :class="`bi ${card.icons} fs-16 text-${card.textColour}`"></i>
              <template v-else>
                <span v-html="card.svgIcon"></span>
              </template>
              {{ card.initials }}
            </template>
          </span>
        </div>
        <div class="flex-fill text-black">
          <p class="fw-semibold mb-0" v-if="card.name" v-html="card.name"></p>
          <div class="ms-3 flex-fill lh-1" v-else>
            <span class="fs-12">{{ card.country }}</span>
          </div>
          <span :class="`text-${card.textColors} fs-12`" v-if="card.text">{{ card.text }} <i v-if="card.icon"
              :class="`bi ${card.icon} fs-14 text-primary ms-2`"></i></span>

        </div>
        <div class="text-end">
          <div v-if="card.balance"
            :class="['fw-semibold', `fs-${card.fs}`, 'd-block', card.balanceClass || card.textColor]">
            {{ card.balance }}<span class="text-default" v-if="card.symbel"> - {{ card.symbel }}</span>
          </div>
          <div :id="card.chartId">
            <apexchart v-if="card.chart" width="80px" height="20px" type="line" :options="card.chart.options"
              :series="card.chart.series"></apexchart>
          </div>
          <div v-if="card.dropdowns" class="mt-3">
            <a aria-label="anchor" href="javascript:void(0);" class="text-danger me-2">
              <i class="bi bi-heart-fill"></i>
            </a>
            <a aria-label="anchor" href="javascript:void(0);" class="text-muted" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="bi bi-three-dots fs-14"></i>
            </a>
            <ul class="dropdown-menu">
              <li class="mb-0" v-for="card, index in card.dropdowns" :key="index"><a href="javascript:void(0);"
                  class="dropdown-item">{{ card.name }}</a></li>
            </ul>
          </div>
          <span :class="card.downTextClass" v-if="card.downText">{{ card.downText }}</span>
          <template v-else>
            <div :class="`text-${card.textColor} badge bg-${card.bgColour} fw-semibold mt-3`">{{ card.badge }}</div>
          </template>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>