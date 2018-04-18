import Vue from 'vue'
import store from '@/store'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'
import wx from '@/utils/wx'
import wxp from 'minapp-api-promise'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
Vue.prototype.$wx = wx
Vue.prototype.$wxp = wxp

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/index/index'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#18b210',
      backgroundColorTop: '#4bff20',
      navigationBarBackgroundColor: '#279c27',
      navigationBarTitleText: 'xcool',
      navigationBarTextStyle: 'white'
    }
    // tabBar: {
    //   color: '#999999',
    //   selectedColor: '#1AAD16',
    //   backgroundColor: '#ffffff',
    //   borderStyle: 'white',
    //   list: [
    //     {
    //       pagePath: 'pages/tabbar/tabbar',
    //       text: '微信',
    //       iconPath: 'static/images/icon_nav_button.png',
    //       selectedIconPath: 'static/images/icon_nav_button.png'
    //     },
    //     {
    //       pagePath: 'pages/tabbar/tabbar',
    //       text: '通讯录',
    //       iconPath: 'static/images/icon_nav_cell.png',
    //       selectedIconPath: 'static/images/icon_nav_cell.png'
    //     },
    //     {
    //       pagePath: 'pages/tabbar/tabbar',
    //       text: '发现',
    //       iconPath: 'static/images/icon_nav_cell.png',
    //       selectedIconPath: 'static/images/icon_nav_cell.png'
    //     },
    //     {
    //       pagePath: 'pages/tabbar/tabbar',
    //       text: '我',
    //       iconPath: 'static/images/icon_nav_toast.png',
    //       selectedIconPath: 'static/images/icon_nav_toast.png'
    //     }
    //   ]
    // }
  }
}
