<script setup lang="ts"></script>

<template>
  <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
    <div class="bg-red-50">1</div>
    <div class="bg-blue-300 col-start-3">2</div>
    <div class="bg-yellow-300">3</div>
    <div class="bg-pink-400">4</div>
    <div class="lyc">123</div>
    <!-- <div class="bg-green-500 row-start-1 col-start-2 col-span-2">5</div> -->
  </div>
</template>

<style>
.lyc {
  @apply bg-green-500 row-start-1 col-start-2 col-span-2;
}
</style>
