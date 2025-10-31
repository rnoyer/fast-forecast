<script setup lang="ts">
import { ref } from 'vue';
import { useFetchWeather } from '@/composables/useWeather';
import { useSearchStore } from '@/stores/search';

const searchStore = useSearchStore()
const locationInput = ref('')

async function handleSubmit() {
  searchStore.location = locationInput.value
  await useFetchWeather()
  locationInput.value = ''
}

</script>

<template>
  <form @submit.prevent="handleSubmit" id="form" class="flex my-12">
    <label for='location' class="sr-only">Enter a location</label>
    <input
      v-model="locationInput"
      id="location"
      type='text'
      name='location'
      placeholder='Enter a location'
      inputmode="search"
      autocomplete="on"
      class=" rounded-none rounded-l-sm input input-lg text-xl join-item"
    />
    <input type=submit value='>>' class=" btn btn-lg btn-soft rounded-none rounded-r-sm btn-square font-ff text-xl text-slate-600 uppercase join-item" />
  </form>
</template>

<style scoped>
#form {
    @media (min-width: 769px) {
      margin-top: 20vh;
      justify-self: center;
      grid-area: form;
  }
}
</style>
