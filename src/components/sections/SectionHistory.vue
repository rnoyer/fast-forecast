<script setup lang="ts">
import { useHistoryStore } from '@/stores/history';
import HistoryCard from '../HistoryCard.vue';

const historyStore = useHistoryStore()

</script>
<template>
  <div v-if="!historyStore.isEmpty" id="sidebar" class="flex flex-col w-full items-center gap-4 max-w-xs">
    <h2 class="flex justify-center items-center glass w-full min-h-12 text-xl text-slate-600 font-ff uppercase">History</h2>
    <div class="flex flex-col gap-4 w-full">
        <HistoryCard
          v-for="(item, index) in historyStore.history"
          :key="index"
          :itemData="item"
        />
    </div>
    <button
      @click="historyStore.$reset"
      class="btn btn-lg px-16 text-xl text-slate-600 mb-4"
    >
    Reset
    </button>
  </div>
</template>
<style scoped>
#sidebar{
  @media (min-width: 769px) {
    padding: 0 2rem;
    padding-top: 3rem;
    align-self: start;
    grid-area: sidebar;
    max-height: calc(100vh - 7rem);
    overflow-y: auto;
  }
}
</style>
