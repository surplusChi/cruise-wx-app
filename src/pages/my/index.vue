<template>
  <view class="my-tab-pages">
    <view>{{ msg }}</view>
  </view>
</template>
<script setup>
import './index.scss'
import { ref } from 'vue'

const msg = ref('我的')
</script>