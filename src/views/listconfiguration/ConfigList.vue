<template>
  <div class="configlist">
    <div class="search-box">
      <div class="title">
        <div class="left">数据筛选</div>
        <div class="right"><el-button type="text">高级搜索</el-button></div>
      </div>
      <div class="search">
        <span>游戏名称:</span>
        <el-input
          v-model="formInline.user"
          placeholder="请输入名称"
          maxlength="20"
        ></el-input>
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
    <div class="rank-list">
      <div class="top">
        <div class="title">
          <i class="el-icon-tickets"></i>
          招募大厅游戏排行
        </div>
        <el-button type="primary">选择游戏加入排行</el-button>
      </div>
      <div class="middle">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{
            'background-color': '#ededee',
            color: '#000',
            'font-weight': '550',
            height: '60px',
          }"
        >
          <el-table-column prop="no" label="序号" width="120">
          </el-table-column>
          <el-table-column prop="name" label="游戏名称" width="180">
          </el-table-column>
          <el-table-column prop="logo" label="logo" width="100">
          </el-table-column>
          <el-table-column prop="intro" label="简介" width="300">
          </el-table-column>
          <el-table-column
            width="160"
            prop="sort"
            label="游戏类型"
            column-key="sort"
            :filters="[
              { text: 'RPG', value: 'RPG' },
              { text: 'MOBA', value: 'MOBA' },
              { text: 'MMORPG', value: 'MMORPG' },
              { text: 'CAG', value: 'CAG' },
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column prop="rank" label="招募大厅排行" width="160">
          </el-table-column>
          <el-table-column prop="groundingstatus" label="推出天数" width="160">
          </el-table-column>
          <el-table-column
            prop="publishstatus"
            label="发放账号状态"
            width="160"
          >
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="rankSet(scope.row)" type="text" size="small"
                >排行设置</el-button
              >
              <el-button type="text" size="small">移除大厅</el-button>
              <el-button type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="bottom">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="8"
          layout="total, prev, pager, next, jumper"
          :total="50"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog title="排行设置" :visible.sync="rankDialogVisible" width="800px">
      <div class="dialog-bottom">
        <el-button plain @click="rankDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmSet">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="排行设置"
      :visible.sync="selectGameDialogVisible"
      width="800px"
    >
      <div class="dialog-bottom">
        <el-button plain @click="selectGameDialogVisible = false"
          >取消</el-button
        >
        <el-button type="primary" @click="confirmSelect">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankDialogVisible: false,
      selectGameDialogVisible: false,
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
          publishTime: "2021.06",
          hit: "4",
        },
        {
          no: "3",
          name: "阴阳师",
          sort: "CAG",
          publishTime: "2021.07",
          hit: "3",
        },
        {
          no: "4",
          name: "元气众生录",
          sort: "MMORPG",
          publishTime: "2021.06",
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
          publishTime: "2021.06",
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
          publishTime: "2021.06",
          hit: "2",
        },
      ],
    };
  },
  methods: {
    confirmSet(item) {
      console.log(item);
    },
    confirmSelect() {},
    rankSet(item) {
      this.rankDialogVisible = true;
      console.log(item);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style lang="scss" scoped>
.configlist {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 1173px;

  .search-box {
    box-shadow: 0 0 5px #e6e6e6;
    width: 100%;
    height: 120px;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
      border-bottom: 1px solid rgb(228, 228, 228);
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 22px;
      font-weight: 550;
      justify-content: space-between;
      i {
        margin-right: 15px;
      }
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
  .rank-list {
    box-shadow: 0 0 5px #e6e6e6;
    height: 100%;
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    .top {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 40px;
      font-size: 22px;
      font-weight: 550;
    }
    .middle {
      width: 100%;
      padding: 0 40px;
      .el-table {
        .icon-fire {
          font-size: 25px;
          color: rgb(167, 29, 29);
        }
      }
    }
    .bottom {
      padding-right: 50px;
      display: flex;
      flex-direction: row-reverse;
      margin-top: 30px;

      .el-pagination {
        // ::v-deep 和 /deep/ >>>别名
        ::v-deep .number,
        ::v-deep button {
          margin-left: 5px;
          border: 1px rgb(185, 185, 185) solid;
          border-radius: 3px;
          padding: 0;
        }
      }
    }
  }
}
</style>