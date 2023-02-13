<script setup lang="ts">
import { ref } from "vue";
import moment from "moment";

const now = ref(moment().format("YYYY-MM-DD HH:mm:ss"));
setInterval(() => {
  now.value = moment().format("YYYY-MM-DD HH:mm:ss");
}, 1000);
</script>

<template>
  <div class="flex flex-row justify-between h-full items-center">
    <div class="left-side flex flex-row items-center">
      <img class="w-8 h-8 mr-2" src="@/assets/logo.png" alt="" />
      <div>数据采集系统</div>
    </div>
    <div class="right-side flex flex-row items-center">
      <div>{{ now }}</div>
    </div>
  </div>
</template>

<style scoped></style>
