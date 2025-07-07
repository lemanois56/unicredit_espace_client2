<script lang="js">

export default {
  props: {
    customCardClass: String,
    cardBodyClass: String,
    cardHeaderClass: String,
    title: String,
    btnClass: String,
    btnLable: String,
    showDropdown: { type: Boolean, default: false },
    dropdownToggleClass: String,
    showVerticalIconDropdown: { type: Boolean, default: false },
    contentClass: String,
    data: { type: Array, default: () => { } }
  }
}
</script>
<template>
  <div :class="['card custom-card', customCardClass]">
    <div :class="['card-header', cardHeaderClass]">
      <div class="card-title">
        {{ title }}
      </div>
      <div class="d-flex">
        <button type="button" :class="btnClass">{{ btnLable }}</button>
        <template v-if="showDropdown">
          <div class="dropdown">
            <a aria-label="anchor" href="javascript:void(0);" :class="dropdownToggleClass" data-bs-toggle="dropdown">
              <template v-if="showVerticalIconDropdown">
                <i class="fe fe-more-vertical"></i>
              </template>
            </a>
            <ul class="dropdown-menu">
              <li v-for="(card, index) in dropdown" :key="index">
                <a class="dropdown-item" href="javascript:void(0);">
                  {{ card.name }}
                </a>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
    <div :class="['card-body', cardBodyClass]">
      <div class="list-group border-0 crypto-list">
        <a href="javascript:void(0);"
          class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom"
          v-for="(card, index) in data" :key="index">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <p :class="contentClass">{{ card.content }}
              <span :class="`badge bg-${card.badgeColor}-transparent ms-3 text-${card.text}`">{{ card.badgeText
                }}</span>
            </p>
            <p :class="`text-${card.color} mb-0 font-weight-normal tx-13`">
              <span class="numberfont">{{ card.price }}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>