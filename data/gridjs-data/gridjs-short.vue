<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sortData(0)">
            Name
            <span v-if="sortColumn === 0">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th @click="sortData(1)">
            Email
            <span v-if="sortColumn === 1">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th @click="sortData(2)">
            Date
            <span v-if="sortColumn === 2">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th @click="sortData(3)">
            Id
            <span v-if="sortColumn === 3">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th @click="sortData(4)">
            Price
            <span v-if="sortColumn === 4">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th @click="sortData(5)">
            Quantity
            <span v-if="sortColumn === 5">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th @click="sortData(6)">
            Total
            <span v-if="sortColumn === 6">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedData" :key="index">
          <td>{{ row[1] }}</td>
          <td>{{ row[2] }}</td>
          <td>{{ row[0] }}</td>
          <td>{{ row[3] }}</td>
          <td>{{ row[4] }}</td>
          <td>{{ row[5] }}</td>
          <td>{{ row[6] }}</td>

        </tr>
        <tr v-if="sortedData.length === 0">
          <td colspan="3">No results found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
        ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
        ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
        ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
        ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"],
        ["24-10-2022 12:47", "john", "john123@gmail.com", "#12012", "$1799", "1", "$1799"],
        ["12-09-2022 04:24", "mark", "markzenner23@gmail.com", "#12013", "$2479", "2", "$4958"],
        ["18-11-2022 18:43", "eoin", "eoin1992@gmail.com", "#12014", "$769", "1", "$769"],
        ["10-09-2022 10:35", "sarahcdd", "sarahcdd129@gmail.com", "#12015", "$1299", "3", "$3997"],
        ["27-10-2022 09:55", "afshin", "afshin@example.com", "#12016", "$1449", "1", "$1449"]
      ],
      sortedData: [],
      sortOrder: 'asc',
      sortColumn: 0
    };
  },
  created() {
    this.sortedData = [...this.data];
    this.sortData(this.sortColumn);
  },
  methods: {
    sortData(columnIndex) {
      this.sortColumn = columnIndex;
      const direction = this.sortOrder === 'asc' ? 1 : -1;
      this.sortedData.sort((a, b) => {
        if (a[columnIndex] < b[columnIndex]) return -1 * direction;
        if (a[columnIndex] > b[columnIndex]) return 1 * direction;
        return 0;
      });
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

th:hover {
  background-color: #f0f0f0;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
