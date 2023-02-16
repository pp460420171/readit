<script setup lang="ts">
import { ref } from "vue";
const form = ref({
  host: "",
  port: "",
  user: "",
  password: "",
});
const rules = ref([]);

const startFTP = () => {
  const args = JSON.stringify(form.value);
  window.myApi.startFtp(args);
};
const stopFTP = () => {
  window.myApi.stopFtp();
};
</script>

<template>
  <div class="w-80">
    <el-form
      :model="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="small"
    >
      <el-form-item label="host">
        <el-input v-model="form.host"></el-input>
      </el-form-item>
      <el-form-item label="port">
        <el-input v-model="form.port"></el-input>
      </el-form-item>
      <el-form-item label="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="startFTP">连接至FTP服务器</el-button>
        <el-button type="primary" @click="stopFTP">断开连接</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
