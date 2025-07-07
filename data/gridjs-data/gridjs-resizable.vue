<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column }}
            <button @click="sortData(column)">Sort</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in sortedData" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    resizable: {
      type: Boolean,
      default: false,
    },
    sort: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      sortedData: this.data,
    };
  },
  methods: {
    sortData(column) {
      const columnIndex = this.columns.indexOf(column);
      if (columnIndex !== -1) {
        this.sortedData.sort((a, b) => {
          if (a[columnIndex] < b[columnIndex]) return -1;
          if (a[columnIndex] > b[columnIndex]) return 1;
          return 0;
        });
      }
    }
  }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}
</style>