<template>
  <div class="messagerecord">
    <div class="search-box">
      <div class="title">
        <i class="el-icon-search"></i>
        筛选条件
      </div>
      <div class="search" ref="filterForm">
        <div class="condition">
          <span>消息ID:</span>
          <el-input
            v-model="filters.messageID"
            placeholder="请输入消息ID"
          ></el-input>
          <span>接收者:</span>
          <el-input
            v-model="filters.receiverID"
            placeholder="请输入接收者ID"
          ></el-input>
        </div>
        <div class="condition">
          <span>消息类型:</span>

          <el-select v-model="filters.messageTypen" placeholder="消息类型">
            <el-option label="通知" value="notification"></el-option>
            <el-option label="预约" value="appointment"></el-option>
            <el-option label="奖励" value="award"></el-option>
          </el-select>
          <span>接收时间:</span>
          <el-select v-model="filters.receiveTime" placeholder="接收时间">
            <el-option label="近一天" value="day"></el-option>
            <el-option label="近一月" value="month"></el-option>
            <el-option label="近三月" value="threemonth"></el-option>
          </el-select>
        </div>
        <div class="condition">
          <el-button type="primary">筛选</el-button>
          <el-button type="info" @click="resetFilter">重置</el-button>
        </div>
      </div>
    </div>
    <div class="game-list">
      <div class="top">
        <div class="title">
          <i class="el-icon-tickets"></i>
          记录列表
        </div>
      </div>
      <div class="middle">
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
          <el-table-column prop="messageId" label="消息ID" width="120">
          </el-table-column>
          <el-table-column prop="messageType" label="类型" width="180">
          </el-table-column>
          <el-table-column prop="receiverName" label="接收者" width="180">
          </el-table-column>
          <el-table-column
            width="180"
            prop="receiveTime"
            label="接收时间"
            sortable
            column-key="receiveTime"
            :filters="[
              { text: '2021.06', value: '2021.06' },
              { text: '2021.07', value: '2021.07' }
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column prop="messageContent" label="内容">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      gamename: '',
      filters: {
        messageId: '',
        receiverID: '',
        messageType: '',
        receiveTime: ''
      },
      item: [
        {
          messageId: '1',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '1',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '2',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '3',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '4',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '5',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '6',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '7',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        },
        {
          messageId: '8',
          messageType: '奖励',
          receiverName: '瓜皮',
          receiveTime: '2021-7-14 16:00',
          messageContent: '啊实打实大师大师发发呆'
        }
      ]
    }
  },
  methods: {
    resetFilter() {
      for (let key in this.filters) {
        this.filters[key] = ''
      }
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
.messagerecord {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  flex-direction: column;

  .search-box {
    box-shadow: 0 0 5px #e6e6e6;
    width: 100%;
    height: 250px;
    background-color: #fff;
    border-radius: 6px;
    display: flex;

    flex-direction: column;
    .title {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 22px;
      font-weight: 550;
      i {
        margin-right: 15px;
      }
    }
    .search {
      justify-content: space-between;
      margin: 10px 0;
      width: 600px;
      height: 160px;
      display: flex;
      flex-direction: column;

      span {
        font-size: 18px;
        font-weight: 550;
        margin-right: 20px;
      }

      .el-button {
        width: 120px;
      }
      .condition {
        width: 600px;
        .el-input,
        .el-select {
          margin-right: 20px;
          width: 160px;
        }
        &:first-child {
          margin-left: 7px;
          .el-input:last-child {
            padding-left: 20px;
            width: 180px;
          }
        }
        &:last-child {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
  .game-list {
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