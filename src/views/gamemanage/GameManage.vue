<template>
  <div class="gamemanage">
    <div class="search-box">
      <div class="title">
        <div class="left"><i class="el-icon-search"></i> 数据筛选</div>
        <div class="right"><el-button type="text">高级搜索</el-button></div>
      </div>
      <div class="search">
        <span>游戏名称:</span>
        <el-input v-model="gamename" placeholder="请输入名称"></el-input>
        <el-button type="primary">查询</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
    <div class="game-list">
      <div class="top">
        <div class="title">
          <i class="el-icon-tickets"></i>
          游戏列表
        </div>
        <el-button type="primary">添加游戏</el-button>
      </div>
      <div class="middle">
        <el-button-group>
          <el-button plain>全部</el-button>
          <el-button plain>上架</el-button>
          <el-button plain>暂未上架</el-button>
          <el-button plain>下架</el-button>
        </el-button-group>

        <el-table
          :data="item"
          border
          style="width: 100%"
          :header-cell-style="{
            'background-color': '#ededee',
            color: '#000',
            'font-weight': '550',
            height: '60px'
          }"
        >
          <el-table-column prop="no" label="序号" width="120">
          </el-table-column>
          <el-table-column prop="name" label="游戏名称" width="180">
          </el-table-column>
          <el-table-column prop="logo" label="logo" width="100">
          </el-table-column>
          <el-table-column prop="intro" label="简介" width="350">
          </el-table-column>
          <el-table-column
            width="120"
            prop="sort"
            label="游戏类型"
            column-key="sort"
            :filters="[
              { text: 'RPG', value: 'RPG' },
              { text: 'MOBA', value: 'MOBA' },
              { text: 'MMORPG', value: 'MMORPG' },
              { text: 'CAG', value: 'CAG' }
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column prop="rank" label="排行榜名次" width="100">
          </el-table-column>
          <el-table-column prop="salestatus" label="上架状态" width="180">
          </el-table-column>
          <el-table-column
            prop="publishstatus"
            label="发放账号状态"
            width="120"
          >
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="280">
            <div slot-scope="scope" v-if="scope.row.deletestatus">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >修改</el-button
              >
              <el-button
                type="text"
                size="small"
                :disabled="scope.row.salestatus === '已上架' ? false : true"
                >上架</el-button
              >
              <el-button
                type="text"
                size="small"
                :disabled="scope.row.salestatus === '未上架' ? false : true"
                >下架</el-button
              >
              <el-button type="text" size="small">查看详情</el-button>
              <el-button
                type="text"
                size="small"
                style="color: #666"
                @click="deleteItem(scope.row)"
                >删除</el-button
              >
            </div>
            <span v-else style="color: #c0c4cc"> 该游戏信息已删除</span>
          </el-table-column>
        </el-table>
      </div>
      <div class="bottom">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="8"
          layout="prev, pager, next, jumper"
          :total="50"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentPage: 1,
      gamename: '',
      formInline: {
        user: '',
        region: ''
      },
      item: [
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: false
        },
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: false
        },
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: false
        },
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: false
        },
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: false
        },
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: false
        },
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '已上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: false
        },
        {
          no: '1',
          name: '神武4',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: true
        },
        {
          no: '2',
          name: '王者农药',
          intro: '阿萨德大撒所多',
          sort: ['策略', '国风'],
          rank: '3',
          salestatus: '未上架',
          publishstatus: '预约',
          deletestatus: false
        }
      ]
    }
  },
  methods: {
    // 删除
    deleteItem(item) {
      console.log(item)
    },
    handleClick(item) {
      console.log(item)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>



<style lang="scss" scoped>
.gamemanage {
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;

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
      .right {
        ::v-deep .el-button {
          font-weight: 600;
        }
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
  .game-list {
    box-shadow: 0 0 5px #e6e6e6;
    padding-bottom: 20px;
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
      display: flex;
      flex-direction: column;
      .el-table {
        margin-top: 20px;
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