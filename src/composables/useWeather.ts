import { useHistoryStore } from "@/stores/history";
import { useSearchStore } from "@/stores/search";

export async function useFetchWeather() {
  // Stores instanciation
  const historyStore = useHistoryStore()
  const searchStore = useSearchStore()

  searchStore.isLoading = true
  searchStore.errorMessage = ''
  const url = `https://api.weatherapi.com/v1/current.json?q=${searchStore.location}&key=${import.meta.env.VITE_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      searchStore.isResponseOk = false
      searchStore.$reset()
      if (response.status === 400) {
        searchStore.errorMessage = 'No result for your request.'
      } else {
        searchStore.errorMessage = 'An error happened, Try again later.'
      }
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    searchStore.humidity = result.current.humidity
    searchStore.tempCelsius = result.current.temp_c
    searchStore.isResponseOk = true

    const lastRecord = historyStore.history[0]

    const resultFormatted = {
      'location': searchStore.location,
      'humidity': searchStore.humidity,
      'tempCelsius': searchStore.tempCelsius,
      'tempFar': searchStore.tempFar
    }

    if (lastRecord?.location === resultFormatted.location &&
      lastRecord?.humidity === resultFormatted.humidity &&
      lastRecord?.tempCelsius === resultFormatted.tempCelsius) {
      console.log('Duplicate record, skipping.')
      return
    }
    historyStore.addRecord(resultFormatted)

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  } finally {
    searchStore.isLoading = false
  }
}
