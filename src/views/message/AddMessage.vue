<template>
  <div class="addmessage">
    <div class="card">
      <div class="top">
        <span class="title">新增消息</span>
        <span class="info">
          <span>*</span>
          为必填项
        </span>
      </div>
      <div class="detail">
        <div class="part">
          <div class="partdetial" style="width: 800px">
            <el-form
              :model="item"
              :rules="rules"
              ref="item"
              label-width="130px"
              class="demo-ruleForm"
            >
              <el-form-item label="使用已有消息创建"
                ><el-button type="primary" @click="messageDialog = true"
                  >选择已有消息进行创建</el-button
                >
              </el-form-item>
              <el-dialog :visible.sync="messageDialog" class="selectmessage">
                <i class="el-icon-arrow-left"></i>
                <div class="messagecontent">
                  <div class="top">
                    <div class="left">
                      <el-input
                        v-model="searchId"
                        placeholder="请输入消息标题"
                        width="120"
                      ></el-input>
                      <el-button type="primary" @click="searchTemplate()"
                        >查找</el-button
                      >
                    </div>
                    <div class="right">
                      <el-button @click="messageDialog = false">取消</el-button
                      ><el-button type="primary" @click="selectTemplate()"
                        >使用该消息作为模板创建</el-button
                      >
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="line">
                      <span class="title">消息类型:</span>
                      <span class="content">{{
                        currentMessage.messageType
                      }}</span>
                    </div>
                    <div class="line">
                      <span class="title">消息标题:</span>
                      <span class="content">{{
                        currentMessage.messageTitle
                      }}</span>
                    </div>
                    <div class="line">
                      <span class="title">消息内容:</span>
                      <span class="content">{{
                        currentMessage.messageContent
                      }}</span>
                    </div>
                    <div class="line">
                      <span class="title">信息类型:</span>
                      <span
                        class="content"
                        v-for="targetTtem in currentMessage.sendTargets"
                        :key="targetTtem"
                        >{{ targetTtem }}</span
                      >
                    </div>
                  </div>
                </div>
                <i class="el-icon-arrow-right"></i>
              </el-dialog>
              <el-form-item label="消息类别">
                <el-radio-group v-model="item.messageType">
                  <el-radio label="通知消息"></el-radio>
                  <el-radio label="预约消息"></el-radio>
                  <el-radio label="奖励消息"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="消息标题" prop="messageTitle">
                <el-input
                  placeholder="请输入消息标题"
                  v-model="item.messageTitle"
                  maxlength="10"
                ></el-input>
              </el-form-item>
              <el-form-item label="消息内容" prop="messageContent">
                <el-input
                  type="textarea"
                  v-model="item.messageContent"
                  maxlength="1000"
                  :rows="6"
                  resize="none"
                  placeholder="请输入消息内容"
                ></el-input>
                <span class="count"
                  >已输入{{ item.messageContent.length }}/1000</span
                >
              </el-form-item>

              <el-form-item label="发送对象" prop="targets">
                <div class="typechoice">
                  <div class="selectbox" v-if="item.sendTargets.length">
                    <div class="selectcards">
                      <el-tag
                        v-for="target in item.sendTargets"
                        :key="target"
                        closable
                        @close="deleteTarget(target)"
                      >
                        {{ target }}
                      </el-tag>
                    </div>
                  </div>
                  <el-button type="primary" @click="dialogFormVisible = true"
                    >选择用户群体</el-button
                  >
                </div>

                <el-dialog
                  title="选择用户群体"
                  :visible.sync="dialogFormVisible"
                  width="800px"
                >
                  <el-checkbox-group v-model="readyTarget">
                    <el-checkbox
                      v-for="target in groups"
                      :label="target"
                      :key="target"
                      >{{ target }}</el-checkbox
                    >
                  </el-checkbox-group>

                  <div class="dialog-bottom">
                    <el-button plain @click="dialogFormVisible = false"
                      >取消</el-button
                    >
                    <el-button type="primary" @click="confirmChoiceType"
                      >确认</el-button
                    >
                  </div>
                </el-dialog>
              </el-form-item>
              <el-form-item label="发送时间">
                <el-radio-group v-model="item.sendTime">
                  <el-radio label="立即发送"></el-radio>
                  <el-radio label="定时发送"></el-radio
                  ><el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="item.sendTime"
                  ></el-date-picker>
                  <el-radio
                    label="暂不发送"
                    style="margin-left: 10px"
                  ></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="part">
          <div class="partdetial" style="width: 800px">
            <el-button type="primary" plain>取消</el-button>
            <el-button type="primary">确定</el-button>
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
      searchId: '',
      imageUrl: '',
      readyTarget: [],
      messageDialog: false,
      dialogFormVisible: false,
      // currentMessage: {},
      listIndex: 0,
      messageList: [
        {
          messageId: '01',
          messageType: '预约消息',
          messageTitle: '游戏测试时间改动',
          messageContent: '大数据暗示法回落到合理的合法俩',
          sendTargets: ['神武预约群体', '哈哈预约群体']
        },
        {
          messageId: '02',
          messageType: '预约消息',
          messageTitle: '游戏测试时奥术大师间改动',
          messageContent: '大数据暗示法回落到合理的合法俩',
          sendTargets: ['神武预约群体', '哈哈预约群体']
        },
        {
          messageId: '03',
          messageType: '预约消息',
          messageTitle: '游戏测试时间改动',
          messageContent: '大数据暗示法回落到合理的合法俩',
          sendTargets: ['神武预约群体', '哈哈预约群体']
        },
        {
          messageId: '04',
          messageType: '预约消息',
          messageTitle: '游戏测试时间改动',
          messageContent: '大数据暗示法回落到合理的合法俩',
          sendTargets: ['神武预约群体', '哈哈预约群体']
        }
      ],
      groups: [
        '枪火重生预约用户1',
        '枪火重生预约用户2',
        '枪火重生预约用户3',
        '枪火重生预约用户4',
        '枪火重生预约用户5',
        '枪火重生预约用户6',
        '枪火重生预约用户7',
        '枪火重生预约用户8',
        '枪火重生预约用户9',
        '枪火重生预约用户10',
        '枪火重生预约用户11',
        '枪火重生预约用户12'
      ],
      item: {
        messageType: '',
        messageTitle: '',
        messageContent: '',
        sendTargets: [],
        sendTime: ''
      },
      rules: {
        messageTitle: [
          { required: true, message: '请输入消息标题', trigger: 'blur' },
          { min: 1, max: 10, message: '请输入消息标题', trigger: 'blur' }
        ],
        messageContent: [
          { required: true, message: '请输入消息标题', trigger: 'blur' }
        ]
        // type: [{ required: true }],
        // recommend: [
        //   {
        //     required: true,
        //     type: 'number',
        //     message: '请选择推荐点数',
        //     trigger: 'focus'
        //   }
        // ],
        // desc: [{ required: true, message: '请输入游戏简介', trigger: 'blur' }],
        // gamedetail: [
        //   { required: true, message: '请输入游戏详情', trigger: 'blur' }
        // ],
        // notification: [
        //   { required: true, message: '请输入内侧提醒', trigger: 'blur' }
        // ],
        // status: [{ required: true, message: '请输入内侧提醒', trigger: 'blur' }]
      }
    }
  },
  computed: {
    currentMessage() {
      return this.messageList[this.listIndex]
    }
  },
  methods: {
    searchTemplate() {
      console.log(this.searchId)
      this.messageList.forEach((item, index) => {
        if (item.messageId === this.searchId) {
          this.listIndex = index
        }
      })
    },
    selectTemplate() {
      this.item.messageType = this.currentMessage.messageType
      this.item.messageTitle = this.currentMessage.messageTitle
      this.item.messageContent = this.currentMessage.messageContent
      this.item.sendTargets = this.currentMessage.sendTargets
      this.messageDialog = false
    },
    // 删除标签
    deleteTarget(item) {
      this.item.briefInfo.targets.splice(
        this.item.briefInfo.targets.indexOf(item),
        1
      )
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    confirmChoiceType() {
      this.dialogFormVisible = false
      this.item.sendTargets = this.readyTarget
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>



<style lang="scss" scoped>
.addmessage {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 1173px;

  .card {
    min-height: calc(100vh - 150px);
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
          display: flex;
          justify-content: space-around;
          // 第一个dialog
          .selectmessage {
            position: absolute;
            min-width: 1440px;
            ::v-deep .el-dialog {
              width: 100%;
              height: 100%;
              background-color: transparent;
              margin: 0 !important;
              .el-dialog__body {
                padding: 0 !important;
                width: 100%;
                height: calc(100% - 30px);
                display: flex;
                justify-content: center;
                align-items: center;
                .el-icon-arrow-left {
                  cursor: pointer;
                  color: #000;
                  font-size: 100px;
                }
                .el-icon-arrow-right {
                  cursor: pointer;
                  color: #000;
                  font-size: 100px;
                }
                .messagecontent {
                  width: 1000px;
                  height: 600px;

                  display: flex;
                  flex-direction: column;
                  box-shadow: 0 0 10px rgb(83, 83, 83);
                  border-radius: 5px;
                  .top {
                    background-color: rgb(202, 202, 202);
                    border-bottom: 0;
                    .left {
                      display: flex;
                      .el-button {
                        margin-left: 20px;
                      }
                    }
                  }
                  .bottom {
                    width: 100%;
                    flex: 1;
                    background-color: #fff;

                    padding: 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    .line {
                      &:not(:first-child) {
                        margin-top: 35px;
                      }

                      .title {
                        font-weight: 600;
                        font-size: 20px;
                      }
                      .content {
                        margin-left: 15px;
                        font-size: 18px;
                      }
                    }
                  }
                }
              }
            }
          }
          .el-form {
            .el-form-item {
              padding-bottom: 10px;
              ::v-deep .el-form-item__content {
                resize: none;
                display: flex;
                align-items: center;
                .el-radio-group {
                  height: 40px;
                  display: flex;
                  align-items: center;
                }
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
                  color: #d4d4d4;
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