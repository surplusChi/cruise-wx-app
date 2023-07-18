import { useIsLoginStore } from '../../store/IsLogin'
import Taro from '@tarojs/taro'
export default {
  requestFun(params, method = 'GET') {
    const store = useIsLoginStore()
    let { url, data } = params
    // var token = testToken || 'Bearer ' + wx.getStorageSync('IsAutoLoginToke')
    const token = ""
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    const option = {
      url: wx.getStorageSync('requestUrl') + url,
      data: data,
      method: method,
      timeout: 60000, // 请求超时的时间，60s
      header: {
        'content-type': contentType,
        'Authorization': token
      },
      success(res) {
        if (res.statusCode == 200) {
          if (res.data.code == 401) {
            store.changeLogin(false);
          }
          Taro.hideLoading()
          return res.data
        }
      },
      fail(res) {
        if (res.errMsg === 'request:fail timeout') {
          wx.showToast({
            title: "网络请求超时请稍后重试!",
            icon: "none",
            duration: 2000,
          });
        }
      }
    }
    return Taro.request(option)
  },

  get(url, data = '') {
    let option = {
      url,
      data
    }
    return this.requestFun(option)
  },
  post: function (url, data, contentType) {
    let params = {
      url,
      data,
      contentType
    }
    return this.requestFun(params, 'POST')
  }
}