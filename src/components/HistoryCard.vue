<script setup lang="ts">
import { computed } from 'vue';
import { useSearchStore } from '@/stores/search';

const props = defineProps({
  itemData: {
    type: Object,
    required: true
  }
})

const searchStore = useSearchStore()
const displayTemp = computed(() => searchStore.isCelsius ? `${props.itemData.tempCelsius}°C` : `${props.itemData.tempFar}°F`)


</script>
<template>
  <div class="glassy-card">
    <h3 class="pb-2 font-bold text-slate-600 uppercase truncate">{{itemData.location}}</h3>
    <ul class="">
      <li class="">Temperature: <span class="font-bold">{{displayTemp}}</span></li>
      <li class="">Humidity: <span class="font-bold">{{itemData.humidity}}%</span></li>
    </ul>
  </div>
</template>

<style scoped>

</style>
