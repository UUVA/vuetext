<template>
  <div>
    <h1 class="name">饿了么表单</h1>
    <div class="form-container">
      <el-form ref="formRef" :model="form" label-width="140px">
        <el-form-item>
          <template #label>
            <span class="label-with-icon">
              <el-icon>
                <Edit />
              </el-icon>
              活动名称
            </span>
          </template>
          <el-input v-model="form.name" placeholder="请输入活动名称" />
        </el-form-item>
        <el-form-item>
          <template #label>
            <span class="label-with-icon">
              <el-icon>
                <Location />
              </el-icon>
              活动区域
            </span>
          </template>
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <template #label>
            <span class="label-with-icon">
              <el-icon>
                <Clock />
              </el-icon>
              活动时间
            </span>
          </template>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <el-form-item>
        <template #label>
          <span class="label-with-icon">
            <el-icon>
              <Van />
            </el-icon>
            即时配送
          </span>
        </template>
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="label-with-icon">
            <el-icon>
              <Star></Star>
            </el-icon>
            活动性质
          </span>
        </template>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="213123线上活动1222线上活动22222222" name="type"></el-checkbox>
          <el-checkbox label="线上活动223233线上活动333333333" name="type"></el-checkbox>
          <el-checkbox label="线上活动3423线上活动2344" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="label-with-icon">
            <el-icon>
              <Food />
            </el-icon>
            特殊资源
          </span>
        </template>
        <el-radio-group v-model="form.resource">
          <el-radio label="活动资源1"></el-radio>
          <el-radio label="活动资源2"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="label-with-icon">
            <el-icon>
              <Document />
            </el-icon>
            活动形式
          </span>
        </template>
        <el-input type="textarea" v-model="form.desc" :rows="3"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">立即创建</el-button>
        <el-button type="success" @click="reset">取消</el-button>
      </el-form-item>
    </div>
  </div>
</template>


<script setup>
import { Clock, Location, Edit, Van, Star, Food, Document } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'

const formRef = ref(null);

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
});

const submit = () => {
  ElMessage.success('提交成功');
};

const reset = () => {
  Object.assign(form, {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
  });
  ElMessage.info('重置成功')
};
</script>

<style scoped>
.name {
  color: aqua;
  z-index: 12;
}

.form-container {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-title {
  color: #409eff;
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  z-index: 100;
}

.line {
  text-align: center;
  color: #606266;
}

.label-with-icon {
  display: flex;
  align-items: center;
  gap: 6px;
}

.label-with-icon .el-icon {
  color: #409eff;
  font-size: 16px;
}
</style>
