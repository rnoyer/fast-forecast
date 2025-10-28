<script setup lang="ts">
import SectionHeader from '@/components/sections/SectionHeader.vue';
import SectionFooter from '@/components/sections/SectionFooter.vue';
</script>
<template>
  <SectionHeader />
    <slot />
  <SectionFooter />
</template>
<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
</style>