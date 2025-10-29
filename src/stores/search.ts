import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const isCelsius = ref(true)
  const location = ref('')
  const humidity = ref(0)
  const tempCelsius = ref(0)
  const tempFar = computed(() => {
    if (tempCelsius.value) {
      return Math.floor(tempCelsius.value * (9 / 5) + 32)
    } else {
      return 0
    }
  })
  const isResponseOk = ref(false)
  const isLoading = ref(false)
  const errorMessage = ref('')

  function $reset() {
    location.value = ''
    humidity.value = 0
    tempCelsius.value = 0
  }

  return {
    isCelsius,
    location,
    humidity,
    tempCelsius,
    tempFar,
    isResponseOk,
    isLoading,
    errorMessage,
    $reset
  }
})