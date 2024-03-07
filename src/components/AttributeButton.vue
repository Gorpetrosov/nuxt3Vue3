<script setup lang="ts">
const attributes = defineModel<{ effect: {} }>();
defineProps<{ effect: string }>();
console.log(effect)
</script>

<template>
  <button
      v-if="attributes?.effect"
      class="text-white rounded p-2"
      @click="
        attributes.effect = {
         ...attributes.effect, [effect]: !attributes.effect[effect]
        }"
  >
    <slot/>
  </button>
</template>

<style scoped>

</style>