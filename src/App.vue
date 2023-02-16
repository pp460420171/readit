<script setup lang="ts">
import { ElMessage } from "element-plus";
window.myApi.handleFtpLog((event: any, res: any) => {
  ElMessage({
    type: res[0],
    message: res[1],
  });
});
</script>

<template>
  <keep-alive>
    <router-view> </router-view>
  </keep-alive>
</template>

<style scoped></style>
