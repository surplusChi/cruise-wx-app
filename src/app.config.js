export default defineAppConfig({
  pages: [
    'pages/home/index', // 首页
    'pages/wifi/index', // wifi
    'pages/my/index', // 我的
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#8C8C8E",
    selectedColor: "#E63419",
    borderStyle: 'white',
    list: [
      {
        pagePath: "pages/home/index",
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "assets/tabbar/home-active.png",
        text: "首页"
      },
      {
        pagePath: "pages/wifi/index",
        iconPath: "assets/tabbar/release.png",
        selectedIconPath: "assets/tabbar/release-active.png",
        text: "wifi"
      },
      {
        pagePath: "pages/my/index",
        iconPath: "assets/tabbar/my.png",
        selectedIconPath: "assets/tabbar/my-active.png",
        text: "我的"
      }
    ]
  }
})
