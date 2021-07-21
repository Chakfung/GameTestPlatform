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
          <div class="partdetial" style="width: 600px">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="游戏名称"
                placeholder="请输入游戏名称"
                prop="name"
              >
                <el-input v-model="ruleForm.name" maxlength="20"></el-input>
              </el-form-item>
              <el-form-item label="游戏简介" prop="desc">
                <el-input
                  type="textarea"
                  v-model="ruleForm.desc"
                  @input="descInput"
                  maxlength="50"
                  :rows="6"
                  resize="none"
                ></el-input>
                <span class="count">已输入{{ ruleForm.desc.length }}/50</span>
              </el-form-item>
              <el-form-item label="推荐点数设置" prop="recommend">
                <el-input
                  v-model="ruleForm.recommend"
                  maxlength="20"
                  onkeyup="this.value=this.value.replace(/[^\d.]/g,'')"
                  placeholder="请输入推荐点数"
                ></el-input>
                <span
                  style="position: absolute; left: 0; top: 30px; color: #777"
                  >推荐点数范围为:5.0~10.0</span
                >
              </el-form-item>
              <el-form-item label="游戏类型" prop="sort">
                <el-button type="primary" @click="open">选择游戏类型</el-button>
              </el-form-item>

              <el-form-item label="活动区域" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间" required>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="ruleForm.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="ruleForm.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox
                    label="美食/餐厅线上活动"
                    name="type"
                  ></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >立即创建</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="part"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        sort: [],
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        recommend: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        recommend: [
          {
            required: true,
            type: "number",
            message: "请选择推荐点数",
            trigger: "focus",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
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
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>



<style lang="scss" scoped>
.gamemanage {
  display: flex;
  align-items: center;
  flex-direction: column;
  .card {
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

      border: 1px red solid;
      padding: 40px;
      .part {
        display: flex;
        flex-direction: column;
        .partname {
          border: 1px red solid;
          align-self: start;
          font-weight: 550;
          font-size: 20px;
        }
        .partdetial {
          margin-top: 15px;
          padding-left: 60px;
          ::v-deep .el-form-item__content {
            resize: none;
          }
          .el-form-item {
            padding-bottom: 15px;
          }
          .count {
            bottom: 0px;
            right: 10px;
            position: absolute;
          }
        }
      }
    }
  }
}
</style>