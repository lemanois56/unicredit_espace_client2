<script lang="ts">

export default {
  name: 'CustomCard',
  props: {
    customCardClass: String,
    cardHeaderClass: String,
    title: String,
    cardClassBody: String,
    showCardFooter: { type: Boolean, default: false },
    cardFooterClass: String,
  }
};
</script>

<template>
  <div :class="['card custom-card', customCardClass]">
    <template v-if="title">
      <div :class="['card-header', cardHeaderClass]">
        <div class="card-title" v-html="title"> </div>
      </div>
    </template>
    <div :class="['card-body', cardClassBody]">
      <slot></slot>
    </div>

    <template v-if="showCardFooter">
      <div :class="['card-footer', cardFooterClass]">
        <slot name="cardFooter"></slot>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
