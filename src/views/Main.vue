<script setup lang="ts">
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="border-b-2 bg-white"><Header /></el-header>

      <el-container>
        <el-aside width="200px"><Menu /></el-aside>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
