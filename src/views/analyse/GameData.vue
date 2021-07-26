<template>
  <div class="gamedata">
    <!-- <div class="shadow"></div> -->
    <div class="search-box">
      <div class="title">枪火重生</div>
      <div class="search">
        <span>游戏名称:</span>
        <el-input v-model="formInline.user" placeholder="请输入名称"></el-input>
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
    <div class="chart-list">
      <div class="flow-chart">
        <!-- <line-chart :chart-data="datacollection"></line-chart>
        <button @click="fillData()">Randomize</button> -->
        <div class="chart-content">
          <div class="top">
            <div class="left">浏览量统计图</div>
            <div class="right">
              <el-button-group>
                <el-button plain icon="el-icon-arrow-left">本日</el-button>
                <el-button plain
                  >本周<i class="el-icon-arrow-right el-icon--right"></i
                ></el-button>
                <el-button plain
                  >本月<i class="el-icon-arrow-right el-icon--right"></i
                ></el-button>
              </el-button-group>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                style="width: 150px"
              ></el-date-picker>
            </div>
          </div>
          <div class="char">
            <div class="statiscard"></div>
            <commit-chart :data="orgOptions" :options="options"></commit-chart>
          </div>
        </div>
      </div>
      <div class="download-chart"></div>
      <div class="bar-chart"></div>
    </div>
  </div>
</template>

<script>
import CommitChart from "../../components/charts/CommitChart";
// import LineChart from "echarts/lib/chart/line";
// import LineChart from "../../components/charts/LineChart.js";
// Vue.component("chart", ECharts);
export default {
  components: { CommitChart },
  data() {
    return {
      options: { responsive: true, maintainAspectRatio: false },
      orgOptions: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            grouped: false,
            hoverBackgroundColor: "#0ab0aa",
            label: "Data One",
            backgroundColor: "#73a0fa",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
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
    this.orgOptions = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };
    this.fillData();
  },
};
</script>
960 1440
<style lang="scss" scoped>
.gamedata {
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  .shadow {
    position: fixed;
    top: 60px;
    left: 210px;
    width: 100%;
    height: 140px;
    z-index: 0;
    background: #e9eef3;
  }
  .search-box {
    min-width: 1173px;
    box-shadow: 0 0 5px #e6e6e6;
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
  .chart-list {
    box-shadow: 0 0 5px #e6e6e6;
    margin-top: 140px;
    width: 100%;

    .flow-chart {
      width: 100%;
      background-color: #fff;
      border-radius: 6px;
      padding: 20px;
      .chart-content {
        height: 100%;
        border: 1px rgb(163, 163, 163) solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        .top {
          padding-top: 20px;
          width: 95%;
          display: flex;
          justify-content: space-between;
          .left {
            font-weight: 600;
            font-size: 20px;
          }
          .right {
            .el-button-group {
              margin-right: 20px;
            }
          }
        }
        .char {
          position: relative;
          margin-top: 20px;
          padding-top: 120px;
          width: 90%;
          .statiscard {
            position: absolute;
            right: 20px;
            top: 5px;
            width: 200px;
            height: 120px;
            box-shadow: 0 0 10px #b6b6b6;
            background-color: #fff;
          }
        }
      }
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