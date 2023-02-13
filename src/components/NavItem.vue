<template>
  <li>
    <a
      :href="href"
      :class="[
        'block px-4 py-2 rounded-md',
        { 'bg-amber-100 text-amber-700': isActive },
      ]"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  isActive: Boolean,
});
</script>
