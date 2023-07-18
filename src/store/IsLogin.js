import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIsLoginStore = defineStore('IsLogin', () => {
  const IsLogin = ref(false)
  function changeLogin(value) {
    IsLogin.value = value
  }

  return { IsLogin, changeLogin }
})
