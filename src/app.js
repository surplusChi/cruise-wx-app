import { createApp } from 'vue'
import { createPinia } from 'pinia'
import request from './utils/request/index'
import './app.scss'

const App = createApp({
  onShow (options) {},
  onLaunch() {
    let version = __wxConfig.envVersion || 'release';
    const baseUrl = 'https://test.easyzhuan.com' //（测试）测试环境地址的baseUrl
    const releaseUrl = 'https://hd-api.fiimii.cn'// 正式环境的baseUrl
    //uploadRequestUrl 上传文件域名
    //requestUrl  普通域名
    switch (version) {
      case 'develop': //开发环境
        wx.setStorage({
          key: "requestUrl",
          data: baseUrl
        })
        wx.setStorage({
          key: "uploadRequestUrl",
          data: baseUrl
        })
        break;
      case 'trial': //体验
        wx.setStorage({
          key: "requestUrl",
          data: baseUrl
        })
        wx.setStorage({
          key: "uploadRequestUrl",
          data: baseUrl
        })
        break;
      case 'release': //正式环境
        wx.setStorage({
          key: "requestUrl",
          data: releaseUrl
        })
        wx.setStorage({
          key: "uploadRequestUrl",
          data: releaseUrl
        })
        break;
    }
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖 1
})
const pinia = createPinia()
App.use(pinia)
App.provide('request', request)

export default App
