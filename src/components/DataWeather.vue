<script setup lang="ts">
import { computed } from 'vue';
import { useSearchStore } from '@/stores/search';
import BlockTemperature from './BlockTemperature.vue';
import BlockHumidity from './BlockHumidity.vue';

const searchStore = useSearchStore()

const displayTemp = computed(() => searchStore.isCelsius ? `${searchStore.tempCelsius}°C` : `${searchStore.tempFar}°F`)

function toggleUnit(): void {
  searchStore.isCelsius = !searchStore.isCelsius
}

</script>
<template>
  <div id="weather" class="flex flex-col w-full gap-4">
    <h3 class="text-xl">Actual forecast for: <span class="font-bold italic">{{ searchStore.location }}</span></h3>
    <block-temperature
      :temperature="displayTemp"
      @toggleUnit="toggleUnit"
    />
    <block-humidity :humidity="searchStore.humidity"/>
  </div>
</template>

<style scoped></style>