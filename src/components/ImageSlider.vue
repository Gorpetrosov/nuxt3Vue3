<script setup lang="ts">
const slider = defineModel<number>();

</script>

<template>
  <section class="border p-4 flex flex-col items-center w-full">
    <label for="defaultRange" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <slot/>
    </label>
    <input
        id="defaultRange"
        type="range"
        class="w-full n-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        v-model.number="slider"
    >
    {{ slider }}
  </section>
</template>

<style scoped>

</style>