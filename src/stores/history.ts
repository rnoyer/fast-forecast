import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import type { WeatherRecord } from "@/types/types";

export const useHistoryStore = defineStore('history', () => {
  const history: Ref<WeatherRecord[]> = ref([])
  const isEmpty = ref(true)

  function addRecord(record: WeatherRecord) {
    history.value.unshift(record)
    isEmpty.value = false
  }

  function $reset() {
    history.value = []
    isEmpty.value = true
  }

  return { history, isEmpty, addRecord, $reset }
})
