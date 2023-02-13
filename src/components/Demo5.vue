<script setup lang="ts"></script>

<template>
  <div class="h-screen w-full flex flex-col justify-center items-center">
    <button class="btn">Click Me!</button>
    <button class="btn-paramary">Click Me!</button>
    <button class="btn-danger">Click Me!</button>
  </div>
</template>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-lg;
}
.btn-paramary {
  @apply btn bg-blue-500 hover:bg-blue-900 text-white;
}
.btn-danger {
  @apply btn bg-red-500 hover:bg-red-900 text-white;
}
</style>
