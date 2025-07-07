<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search..." @input="filterData" />
    <table class="data-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Email</th>
          <th>ID</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredData" :key="index">
          <td>{{ row.date }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.id }}</td>
          <td>{{ row.price }}</td>
          <td>{{ row.quantity }}</td>
          <td>{{ row.total }}</td>
        </tr>
        <tr v-if="filteredData.length === 0">
          <td colspan="7">No results found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ['Date', 'Name', 'Email', 'ID', 'Price', 'Quantity', 'Total'],
      gridData: [],
      searchQuery: '',
      filteredData: [],
    };
  },
  mounted() {
    this.loadGridData();
  },
  methods: {
    loadGridData() {
      // Simulate async data fetching
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { date: "24-10-2022 12:47", name: "john", email: "john123@gmail.com", id: "#12012", price: "$1799", quantity: "1", total: "$1799" },
            { date: "12-09-2022 04:24", name: "mark", email: "markzenner23@gmail.com", id: "#12013", price: "$2479", quantity: "2", total: "$4958" },
            { date: "18-11-2022 18:43", name: "eoin", email: "eoin1992@gmail.com", id: "#12014", price: "$769", quantity: "1", total: "$769" },
            { date: "10-09-2022 10:35", name: "sarahcdd", email: "sarahcdd129@gmail.com", id: "#12015", price: "$1299", quantity: "3", total: "$3997" },
            { date: "27-10-2022 09:55", name: "afshin", email: "afshin@example.com", id: "#12016", price: "$1449", quantity: "1", total: "$1449" },
          ]);
        }, 2000);
      }).then((data) => {
        this.gridData = data;
        this.filteredData = data; // Initially set filteredData to gridData
      });
    },
    filterData() {
      const query = this.searchQuery.toLowerCase();
      this.filteredData = this.gridData.filter(row =>
        Object.values(row).some(cell => String(cell).toLowerCase().includes(query))
      );
    },
  },
};
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.data-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.data-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.data-table tr:hover {
  background-color: #f1f1f1;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}
</style>