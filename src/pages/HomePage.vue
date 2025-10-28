<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import SectionForm from '@/components/sections/SectionForm.vue';
import SectionSearchResult from '@/components/sections/SectionSearchResult.vue';
import SectionHistory from '@/components/sections/SectionHistory.vue';
import DataLoading from '@/components/DataLoading.vue';
import DataError from '@/components/DataError.vue';
import DataWeather from '@/components/DataWeather.vue';
import DataWelcome from '@/components/DataWelcome.vue';
import { useSearchStore } from '@/stores/search';

const searchStore = useSearchStore()

</script>

<template>
  <MainLayout>
    <main id="main" class="overflow-auto px-2">
      <SectionForm />
      <SectionSearchResult>
        <DataLoading v-if="searchStore.isLoading"/>
        <DataError v-else-if="searchStore.errorMessage" :error-message="searchStore.errorMessage"/>
        <DataWeather v-else-if="!searchStore.isLoading && searchStore.isResponseOk"/>
        <DataWelcome v-else />
      </SectionSearchResult>
      <SectionHistory />
    </main>
  </MainLayout>
</template>

<style scoped>
#main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr 12fr;
    grid-template-areas: "form sidebar"
                         "result sidebar";
    column-gap: 2rem;
    padding: 0 4rem;
  }

}
</style>