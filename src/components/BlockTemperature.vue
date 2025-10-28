<script setup lang="ts">

defineProps(
{
  temperature: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div @click="$emit('toggleUnit')" id="temperature-block" class="cursor-pointer glassy-card">
    <p>Temperature: <span class="font-bold">{{ temperature }}</span></p>
  </div>
</template>

<style scoped></style>