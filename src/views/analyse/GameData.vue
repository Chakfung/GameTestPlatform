<template>
  <div class="gamedata">
    <div class="shadow"></div>
    <div class="search-box">
      <div class="title">枪火重生</div>
      <div class="search">
        <span>游戏名称:</span>
        <el-input v-model="formInline.user" placeholder="请输入名称"></el-input>
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
    <div class="chart">
      <div class="flow-chart">
        <line-chart :chart-data="datacollection"></line-chart>
        <button @click="fillData()">Randomize</button>
      </div>
      <div class="download-chart"></div>
      <div class="bar-chart"></div>
    </div>
  </div>
</template>

<script>
import LineChart from "../../components/charts/LineChart.js";
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      currentPage: 1,
      gamename: "",
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          no: "1",
          name: "神武4",
          sort: "RPG",
          publishTime: "2021.07",
          hit: "3",
        },
        {
          no: "2",
          name: "王者荣耀",
          sort: "MOBA",
          publishTime: "2021.07",
          hit: "4",
        },
        {
          no: "3",
          name: "阴阳师",
          sort: "CAG",
          publishTime: "2021.07",
          hit: "5",
        },
        {
          no: "4",
          name: "元气众生录",
          sort: "MMORPG",
          publishTime: "2021.07",
          hit: "2",
        },
        {
          no: "1",
          name: "神武4",
          sort: "RPG",
          publishTime: "2021.07",
          hit: "3",
        },
        {
          no: "2",
          name: "王者荣耀",
          sort: "MOBA",
          publishTime: "2021.07",
          hit: "4",
        },
        {
          no: "3",
          name: "阴阳师",
          sort: "CAG",
          publishTime: "2021.07",
          hit: "5",
        },
        {
          no: "4",
          name: "元气众生录",
          sort: "MMORPG",
          publishTime: "2021.07",
          hit: "2",
        },
      ],
    };
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
  mounted() {
    this.fillData();
  },
};
</script>

<style lang="scss" scoped>
.gamedata {
  display: flex;
  align-items: center;
  flex-direction: column;
  .shadow {
    position: fixed;
    top: 60px;
    left: 210px;
    width: 100%;
    height: 140px;
    background: #e9eef3;
  }
  .search-box {
    position: fixed;
    left: 230px;
    width: calc(100% - 250px);
    height: 120px;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 22px;
      font-weight: 550;
    }
    .search {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      padding-left: 40px;
      span {
        font-size: 18px;
        font-weight: 550;
        margin-right: 20px;
      }
      .el-input {
        width: 300px;
        margin-right: 20px;
      }
      .el-button {
        width: 120px;
      }
    }
  }
  .chart {
    margin-top: 140px;
    width: 100%;

    .flow-chart {
      height: 600px;
      width: 100%;
      background-color: #fff;
      border-radius: 6px;
    }
    .download-chart {
      height: 600px;
      margin-top: 20px;
      width: 100%;
      background-color: #fff;
      border-radius: 6px;
    }
    .bar-chart {
      height: 600px;
      margin-top: 20px;
      width: 100%;
      background-color: #fff;
      border-radius: 6px;
    }
  }
}
</style>