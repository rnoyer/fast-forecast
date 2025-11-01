<script setup lang="ts"></script>
<template>
  <div id="search-result" class="mb-12 w-full flex justify-center">
    <slot />
  </div>

</template>

<style scoped>
#search-result {
  @media (min-width: 769px) {
    max-width: 35rem;
    justify-self: center;
    align-self: start;
    grid-area: result;
  }
}
</style>
