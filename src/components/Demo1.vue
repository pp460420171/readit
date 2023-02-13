<script setup lang="ts">
import { onMounted, ref } from "vue";

onMounted(() => {
  console.log(`the component is now mounted.`);
});
// 监听键盘事件
// const handleKeydown = (e: KeyboardEvent) => {
//   console.log(e);
// };
const list = ref<any>([]);
console.log(list.value);

const handleClick = () => {
  window.myApi.startListener();
};
window.myApi.handleMsg((event: any, value: any) => {
  if (value) list.value.push(value);
  console.log(list.value);
});
</script>

<template>
  <div>
    <button @click="handleClick">开启监听</button>
    <div>
      <ul>
        <li v-for="item in list">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
