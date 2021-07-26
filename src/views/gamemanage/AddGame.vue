<template>
  <div class="gamemanage">
    <div class="card">
      <div class="top">
        <span class="title">新增游戏</span>
        <span class="info">
          <span>*</span>
          为必填项
        </span>
      </div>
      <div class="detail">
        <div class="part">
          <div class="partname">基础信息</div>
          <div class="partdetial" style="width: 800px">
            <el-form
              :model="item.briefInfo"
              :rules="rules"
              ref="item.briefInfo"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="游戏名称"
                placeholder="请输入游戏名称"
                prop="name"
              >
                <el-input
                  v-model="item.briefInfo.name"
                  maxlength="20"
                ></el-input>
              </el-form-item>
              <el-form-item label="游戏简介" prop="desc">
                <el-input
                  type="textarea"
                  v-model="item.briefInfo.desc"
                  maxlength="50"
                  :rows="6"
                  resize="none"
                ></el-input>
                <span class="count"
                  >已输入{{ item.briefInfo.desc.length }}/50</span
                >
              </el-form-item>
              <el-form-item label="推荐点数设置" prop="recommend">
                <el-input
                  v-model="item.briefInfo.recommend"
                  maxlength="20"
                  onkeyup="this.value=this.value.replace(/[^\d.]/g,'')"
                  placeholder="请输入推荐点数"
                ></el-input>
                <span
                  style="position: absolute; left: 0; top: 30px; color: #777"
                  >推荐点数范围为:5.0~10.0</span
                >
              </el-form-item>
              <el-form-item label="游戏类型" prop="type">
                <div class="typechoice">
                  <div class="selectbox" v-if="item.briefInfo.type.length">
                    <div class="selectcards">
                      <el-tag
                        v-for="item in item.briefInfo.type"
                        :key="item"
                        closable
                      >
                        {{ item }}
                      </el-tag>
                    </div>
                    <span>已选择({{ item.briefInfo.type.length }}/3)</span>
                  </div>
                  <el-button type="primary" @click="dialogFormVisible = true"
                    >选择游戏类型</el-button
                  >
                </div>

                <el-dialog
                  title="选择游戏类型"
                  :visible.sync="dialogFormVisible"
                  width="800px"
                >
                  <el-checkbox-group v-model="readyType" :max="3">
                    <el-checkbox
                      v-for="type in types"
                      :label="type"
                      :key="type"
                      >{{ type }}</el-checkbox
                    >
                  </el-checkbox-group>

                  <div class="dialog-bottom">
                    <span class="selectcount"
                      >已选择({{ readyType.length }}/3)</span
                    >
                    <el-button plain @click="dialogFormVisible = false"
                      >取消</el-button
                    >
                    <el-button type="primary" @click="confirmChoiceType"
                      >确认</el-button
                    >
                  </div>
                </el-dialog>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="part">
          <div class="partname">图片信息</div>
          <div class="partdetial" style="width: 800px">
            <el-form
              :model="item.briefInfo"
              :rules="rules"
              ref="item.briefInfo"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="游戏大图"
                ><el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="part">
          <div class="partname">游戏测试状态</div>
          <div class="partdetial" style="width: 800px">
            <el-form
              :model="item.briefInfo"
              :rules="rules"
              ref="item.briefInfo"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="发放账号状态" prop="status">
                <el-select
                  v-model="item.testInofo.status"
                  placeholder="请选择发放账号状态"
                >
                  <el-option label="预约" value="预约"></el-option>
                  <el-option label="预下载" value="预下载"></el-option>
                  <el-option label="抢先体验" value="抢先体验"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="安装包路径"
                placeholder="请输入游戏名称"
                prop="installurl"
              >
                <el-input
                  v-model="item.testInofo.installurl"
                  maxlength="20"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="part">
          <div class="partname">游戏详细信息</div>
          <div class="partdetial" style="width: 800px">
            <el-form
              :model="item.detailInfo"
              :rules="rules"
              ref="item.detailInfo"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="游戏详情" prop="gamedetail">
                <el-input
                  type="textarea"
                  v-model="item.detailInfo.gamedetail"
                  maxlength="500"
                  :rows="6"
                  resize="none"
                ></el-input>
                <span class="count"
                  >已输入{{ item.detailInfo.gamedetail.length }}/500</span
                >
              </el-form-item>
              <el-form-item label="游戏详情" prop="notification">
                <el-input
                  type="textarea"
                  v-model="item.detailInfo.notification"
                  maxlength="500"
                  :rows="6"
                  resize="none"
                ></el-input>
                <span class="count"
                  >已输入{{ item.detailInfo.notification.length }}/500</span
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="part">
          <div class="partdetial" style="width: 800px">
            <el-button type="primary" plain>暂不上架</el-button>
            <el-button type="primary">立即上架</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      imageUrl: "",
      readyType: [],
      dialogFormVisible: false,
      types: [
        "RPG",
        "MMORPG",
        "CAG",
        "策略",
        "战争",
        "恋爱",
        "赛车",
        "种菜",
        "养成",
        "解压",
        "动作",
        "爱情",
      ],
      item: {
        briefInfo: {
          name: "",
          type: [],
          desc: "",
          recommend: "",
        },
        testInofo: {
          status: "",
          installurl: "",
        },
        detailInfo: {
          gamedetail: "",
          notification: "",
        },
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        type: [{ required: true }],
        recommend: [
          {
            required: true,
            type: "number",
            message: "请选择推荐点数",
            trigger: "focus",
          },
        ],
        desc: [{ required: true, message: "请输入游戏简介", trigger: "blur" }],
        gamedetail: [
          { required: true, message: "请输入游戏详情", trigger: "blur" },
        ],
        notification: [
          { required: true, message: "请输入内侧提醒", trigger: "blur" },
        ],
        status: [
          { required: true, message: "请输入内侧提醒", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    confirmChoiceType() {
      this.dialogFormVisible = false;
      this.item.briefInfo.type = this.readyType;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>



<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.gamemanage {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 1173px;
  .card {
    box-shadow: 0 0 5px #e6e6e6;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .top {
      padding: 20px 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgb(207, 207, 207);
      .title {
        font-weight: 550;
        font-size: 20px;
      }
      .info {
        span {
          color: red;
        }
        color: rgb(131, 131, 131);
      }
    }
    .detail {
      width: 100%;
      padding: 40px;
      .part {
        display: flex;
        flex-direction: column;
        .partname {
          align-self: start;
          font-weight: 550;
          font-size: 20px;
        }
        .partdetial {
          margin-top: 15px;
          padding-left: 60px;
          .el-form {
            .el-form-item {
              padding-bottom: 10px;
              ::v-deep .el-form-item__content {
                resize: none;
                display: flex;
                align-items: center;
                .typechoice {
                  .selectbox {
                    .selectcards {
                      span {
                        // display: inline-block;
                        // border: 1px #66b1ff solid;
                        // border-radius: 5px;
                        // width: 120px;
                        // height: 30px;
                        // line-height: 30px;
                        margin-right: 15px;
                      }
                    }
                  }
                }
                .count {
                  bottom: 0px;
                  right: 10px;
                  position: absolute;
                }
                .el-dialog {
                  .el-dialog__header {
                    background-color: #f2f2f2;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 50px;
                    line-height: 50px;
                    padding: 20px;
                    .el-dialog__title {
                      font-size: 16px;
                      font-weight: 550;
                    }
                    .el-dialog__headerbtn {
                      top: 10px;
                      i {
                        font-size: 28px;
                      }
                    }
                  }
                  .el-dialog__body {
                    padding: 0;
                    .el-checkbox-group {
                      padding: 30px;
                      display: flex;
                      flex-wrap: wrap;
                      position: relative;
                      .el-checkbox {
                        text-align: left;
                        width: 28%;
                      }
                    }
                    .dialog-bottom {
                      line-height: 60px;
                      height: 60px;
                      width: 100%;
                      border-top: 1px solid rgb(214, 214, 214);
                      margin-top: 15px;
                      position: relative;
                      text-align: right;
                      // padding-top: 10px;
                      padding-right: 20px;
                      .selectcount {
                        position: absolute;
                        top: -50px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>