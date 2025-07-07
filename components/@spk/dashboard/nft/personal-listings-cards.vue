<script lang="js">
export default {
  props: {
    customCardClass: String,
    cardHeaderClass: String,
    cardBodyClass: String,
    tile: String,
    dropdownToggleClass: String,
    showViewallDropdown: { Boolean, default: false },
    dropdownMenuClass: String,
    ulClass: String,
    dropdown: { type: Array, default: () => { } },
    liClass: String,
    nftItems: { type: Array, default: () => { } },
    showDropdown: { type: Boolean, default: false }
  }
}
</script>
<template>
  <div :class="['card custom-card', customCardClass]">
    <div :class="['card-header', cardHeaderClass]">
      <div class="card-title">
        {{ tile }}
      </div>
      <template v-if="showDropdown">
        <div class="dropdown">
          <a href="javascript:void(0);" :class="dropdownToggleClass" data-bs-toggle="dropdown" aria-expanded="false">
            <template v-if="showViewallDropdown">
              View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
            </template>
          </a>
          <ul :class="dropdownMenuClass" role="menu">
            <li v-for="(card, index) in dropdown" :key="index">
              <a class="dropdown-item" href="javascript:void(0);">{{ card.name }}</a>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div :class="['card-body', cardBodyClass]">
      <ul :class="ulClass">
        <li :class="liClass" v-for="(item, index) in nftItems" :key="index">
          <a href="javascript:void(0);">
            <div class="d-flex flex-wrap align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="me-2 lh-1">
                  <span class="avatar avatar-md">
                    <img :src="item.avatar" alt="" />
                  </span>
                </div>
                <div>
                  <p class="fw-semibold mb-0">{{ item.name }}</p>
                  <span class="text-muted fs-12 d-inline-flex">
                    @{{ item.username }}
                    <span :class="item.percentageChange > 0 ? 'text-success' : 'text-danger'" class="ms-2 fs-11">
                      <i :class="item.percentageChange > 0 ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
                        class="align-middle me-1"></i>
                      {{ item.percentageChange }}%
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <span class="fs-10 text-muted ps-4">PRICE</span>
                <p class="mb-0 fw-semibold d-flex align-items-center">
                  <span class="avatar avatar-sm p-1">
                    <img :src="item.currencyLogo" alt="" />
                  </span>
                  {{ item.price }}ETH
                </p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>