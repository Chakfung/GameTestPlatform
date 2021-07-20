<template>
  <div class="login">
    <div class="left">游戏测试平台后台系统</div>
    <div class="right">
      <div class="top">
        <el-dropdown size="medium">
          <span class="el-dropdown-link">
            语言选择<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item value="简体中文">简体中文</el-dropdown-item>
            <el-dropdown-item value="English">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <span>使用说明</span>
      </div>
      <div class="bottom">
        <div class="card">
          <el-form
            :model="ruleForm"
            :rules="rules"
            status-icon
            ref="ruleForm"
            label-position="left"
            label-width="0px"
            class="demo-ruleForm login-page"
          >
            <h3 class="title">登录后台</h3>
            <el-form-item prop="username">
              <el-input
                type="text"
                v-model="ruleForm.username"
                auto-complete="off"
                placeholder="用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                auto-complete="off"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <!-- <el-checkbox v-model="checked" class="rememberme"
              >记住密码</el-checkbox
            > -->
            <el-form-item style="width: 100%">
              <el-button
                type="primary"
                style="width: 100%"
                @click="handleSubmit"
                :loading="logining"
                >登录</el-button
              >
            </el-form-item>
            <span>忘记密码</span>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      logining: false,
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      // 记住密码
      // checked: false,
    };
  },
  methods: {
    handleSubmit(event) {
      this.$message({
        message: "登录成功",
        type: "success",
      });
      this.$router.push({ path: "/main" });
      // this.$refs.ruleForm.validate((valid) => {
      //   if (valid) {
      //     this.logining = true;
      //     if (
      //       this.ruleForm.username === "admin" &&
      //       this.ruleForm.password === "123456"
      //     ) {
      //       this.logining = false;
      //       sessionStorage.setItem("user", this.ruleForm.username);
      //       this.$router.push({ path: "/" });
      //     } else {
      //       this.logining = false;
      //       this.$alert("username or password wrong!", "info", {
      //         confirmButtonText: "ok",
      //       });
      //     }
      //   } else {
      //     console.log("error submit!");
      //     return false;
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  .left {
    height: 100%;
    flex: 1;
    background-color: rgb(77, 77, 77);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
  }
  .right {
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .top {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span {
        font-weight: 550;
        font-size: 16px;
        color: rgb(36, 36, 36);
        margin-right: 30px;
      }
    }
    .bottom {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .card {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .el-form {
          width: 100%;
          .el-form-item:last-of-type {
            margin-bottom: 5px;
            & + span {
              color: #66b1ff;
              text-align: right;
              display: inline-block;
              width: 100%;
              cursor: pointer;
            }
          }
        }
        .title {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>