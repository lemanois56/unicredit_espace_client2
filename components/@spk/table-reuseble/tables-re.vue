<template>
  <div :class="['table-responsive', tableReponsiveClass]">
    <table :class="tableClass">
      <thead :class="theadClass">
        <tr>
          <th v-for="(header, index) in headers" :key="index" v-html="header"></th>
        </tr>
      </thead>
      <tbody :class="tbodyClass">
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex" :class="row.trClass">
          <slot name="cell" :row="row" :index="rowIndex"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    tableClass: {
      type: String,
      default: 'table text-nowrap',
    },
    theadClass: {
      type: String,
      default: '',
    },
    tbodyClass: {
      type: String,
      default: '',
    },
    trClass: {
      type: String ,
      default: '',
    },
    tableReponsiveClass: {
      type: String,
      default: ''
    }
  },
};
</script>

<style scoped></style>
