<script setup lang="ts">
import { ref } from "vue";

const menu = ref({
  items: [
    {
      title: "量测具数据采集",
      icon: "el-icon-camera",
      children: [
        { title: "数据采集", path: "/measuring-tool-collect" },
        { title: "数据历史", path: "/page2" },
      ],
    },
    {
      title: "智能力矩扳手数据采集",
      icon: "el-icon-camera",
      children: [
        { title: "数据采集", path: "/page3" },
        { title: "数据历史", path: "/page4" },
      ],
    },
    {
      title: "专用设备数据采集",
      icon: "el-icon-camera",
      children: [
        {
          title: "设置FTP客户端",
          path: "set-ftp-client",
        },
        {
          title: "文件上传",
          path: "upload-file",
        },
        { title: "数据采集", path: "/page5" },
        { title: "数据历史", path: "/page6" },
      ],
    },
  ],
});

const handleSelect = (path: string, title: string) => {
  console.log(path, title);
};
</script>

<template>
  <div class="h-screen bg-blue-200">
    <el-scrollbar>
      <el-menu router>
        <el-sub-menu
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}}`"
        >
          <template #title>
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <div
            v-for="(subItem, subIndex) in item.children"
            :key="`menu-item-${index}-${subIndex}`"
          >
            <el-menu-item
              :index="subItem.path"
              @click="handleSelect(subItem.path, subItem.title)"
              >{{ subItem.title }}</el-menu-item
            >
          </div>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style scoped></style>
