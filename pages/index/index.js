//index.js
//获取应用实例
import { jumpTo } from '../../utils/util'
const app = getApp()

Page({
  data: {
    weanText: [
      {
        textData: [
          {
            name: '滑动导航栏',
            url: '/pages/tabbar/index'
          },
          {
            name: '滚动导航条',
            url: '/pages/nav/index'
          },
          {
            name: '抽屉',
            url: '/pages/drawer/index'
          },
          {
            name: '时间日期选择器',
            url: '/pages/date/index'
          },
          {
            name: '图片裁剪',
            url: '/pages/canvas/index'
          },
          {
            name: '向上弹出',
            url: '/pages/bottom-draw/index'
          }
        ]
      },
    ]
  },
  onLoad: function () {

  },
  toUrl (e) {
    let { url } = e.target.dataset.item
    jumpTo(url)
  }
})
