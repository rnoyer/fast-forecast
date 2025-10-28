<script setup lang="ts">

defineProps(
{
  humidity: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div id="humidity-block" class="glassy-card">
    <p>Humidity: <span class="font-bold">{{ humidity }}%</span></p>
  </div>
</template>

<style scoped></style>