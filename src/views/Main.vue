<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title">游戏测试平台后台系统</div>
        <div class="control">
          <span>欢迎您！</span>
          <el-dropdown size="medium">
            <span class="el-dropdown-link">
              千城<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="avatar">
            <img src="../assets/images/protrait.png" alt="" />
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="210px">
          <el-menu
            router
            :default-openeds="['1', '3']"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#66b1ff"
          >
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>数据分析</template
              >
              <el-menu-item-group>
                <template slot="title">游戏数据分析</template>
                <el-menu-item index="/gameinfo">基本信息</el-menu-item>
                <el-menu-item index="/gamedata">游戏数据</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">玩家数据分析</template>
                <el-menu-item index="1-3">玩家画像</el-menu-item>
                <el-menu-item index="1-4">玩家数据</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">测试信息列表</template>
                <el-menu-item index="1-5">评价测试平台</el-menu-item>
                <el-menu-item index="1-6">评价已玩游戏</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-menu"></i>游戏管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="/gameinfo">选项1</el-menu-item>
                <el-menu-item index="/gamedata">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>导航三</template
              >
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  // background-image: url(../assets/images/bg2.jpg);
}
.el-header {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 1440px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    margin-left: 30px;
    font-size: 28px;
    font-weight: 600;
  }
  .control {
    height: 100%;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.1rem;
      font-weight: 550;
    }
    .el-dropdown {
      cursor: pointer;
      color: #66b1ff;
    }
    .avatar {
      margin-left: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.el-aside {
  margin-top: 60px;

  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: calc(100vh - 60px);
  background-color: #545c64;
  .el-menu {
    .el-submenu {
      .el-submenu__title {
        text-align: left;
      }
      .el-menu-item-group {
        .el-menu-item-group__title {
          text-align: left;
        }
        .el-menu-item {
          text-align: left;
        }
      }
    }
  }
}

.el-main {
  min-width: 1670px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px; 导致设不了表格高度
  line-height: 20px !important;
  min-height: 100%;
  margin-top: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>