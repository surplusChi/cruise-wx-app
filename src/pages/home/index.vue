<template>
  <view class="home-tab-pages">
    <view>{{ msg }}</view>
  </view>
</template>
<script setup>
import './index.scss'
import { useIsLoginStore } from '../../store/IsLogin'
import { ref, inject, onMounted } from 'vue'

const msg = ref('首页')
const request = inject('request')
const store = useIsLoginStore()

onMounted(() => {
  getList()
  console.log('登录状态打印', store.IsLogin)
  store.changeLogin(true)
  console.log('登录状态重新打印', store.IsLogin)
  console.log(request)
})

function getList() {
  const data = {
    pageNum: 1,
    pageSize: 10,
    typeList: []
  }
  request.post('/service/list', data)
  .then((res) => {
    console.log(res)
  })
}
</script>