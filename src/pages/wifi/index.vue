<template>
  <view class="wifi-tab-pages">
    <view>{{ msg }}</view>
  </view>
</template>
<script setup>
import './index.scss'
import { ref } from 'vue'

const msg = ref('wifi')
</script>