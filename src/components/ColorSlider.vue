<script setup lang="ts">
  const colorHex = defineModel<string>();

</script>

<template>
  <section class="border p-4 flex flex-col items-center w-full">
    <label for="haxRange" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <slot/>
    </label>
    <input
        id="haxRange"
        type="color"
        class="w-full n-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        v-model="colorHex"
    >
    {{ colorHex }}
  </section>
</template>

<style scoped>

</style>