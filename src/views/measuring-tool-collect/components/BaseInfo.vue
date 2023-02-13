<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { User, Area, queryUsers, queryAreas } from "@/api/measuringToolCollect";

const formRef = ref<FormInstance>();
const emits = defineEmits(["changeStep"]);
const form = reactive({
  user: "",
  area: "",
  remark: "",
  category: "",
});
const users = ref<User[]>([]);
const areas = ref<Area[]>([]);
const categories = [
  {
    label: "Mahr无线量测具",
    value: "1",
  },
  {
    label: "Mahr有线量测具",
    value: "2",
  },
  {
    label: "XX量测具",
    value: "3",
  },
];
const rules = reactive<FormRules>({
  user: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  area: [
    {
      required: true,
      message: "请输入工作站位",
      trigger: "blur",
    },
  ],
  category: [
    {
      required: true,
      message: "请输入量测具种类",
      trigger: "blur",
    },
  ],
});
const onNextClick = async () => {
  const res = await formRef.value?.validate();
  if (res) {
    emits("changeStep", "forward", { ...form });
  }
};
const fetchUsers = async () => {
  const res = await queryUsers();
  users.value = res;
};
const fetchAreas = async () => {
  const res = await queryAreas();
  areas.value = res;
};
fetchUsers();
fetchAreas();
</script>

<template>
  <div>
    <el-form
      ref="formRef"
      class="form"
      :model="form"
      label-position="right"
      label-width="6rem"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="user">
        <el-select v-model="form.user" placeholder="请选择用户名">
          <el-option
            v-for="item in users"
            :key="item._id"
            :label="item.name"
            :value="item._id"
        /></el-select>
      </el-form-item>
      <el-form-item label="工作站位" prop="area">
        <el-select v-model="form.area" placeholder="请选择工作站位">
          <el-option
            v-for="item in areas"
            :key="item._id"
            :label="item.name"
            :value="item._id"
        /></el-select>
      </el-form-item>
      <el-form-item label="量测具种类" prop="category">
        <el-select v-model="form.category" placeholder="请选择量测具种类">
          <el-option
            v-for="item in categories"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        /></el-select>
      </el-form-item>

      <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onNextClick">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.form {
  width: 300px;
}
</style>
