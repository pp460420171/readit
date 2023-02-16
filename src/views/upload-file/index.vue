<script setup lang="ts">
import { ref } from "vue";

const filePath = ref("");

const selectLocalFolder = () => {
  window.myApi.selectLocalFolder();
};
const uploadFile = () => {
  window.myApi.uploadFile(filePath.value);
};

window.myApi.handleFillFolderAddress((event: any, res: any) => {
  filePath.value = res;
});
</script>

<template>
  <div>
    <div>上传文件</div>
    <div>
      <el-button type="primary" size="default" @click="selectLocalFolder"
        >选择文件夹</el-button
      >
      <el-input v-model="filePath"></el-input>
    </div>
    <el-divider direction="horizontal" content-position="left"></el-divider>

    <div>上传</div>
    <el-button type="primary" size="default" @click="uploadFile"
      >上传</el-button
    >
  </div>
</template>

<style scoped></style>
