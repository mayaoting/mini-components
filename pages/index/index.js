/*
 * @Author: your name
 * @Date: 2021-01-28 16:23:25
 * @LastEditTime: 2021-01-29 15:35:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \little-project\pages\index\index.js
 */
// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    shadowFlag: false,
    started: false
  },
  onLoad() {

  },
  // shadow() {
  //   console.log('showShadow')
  //   this.setData({
  //     shadowFlag: true
  //   })
  //   this.animate('.mask', [{
  //       opacity: 0,
  //       backgroundColor: "#000"
  //     },
  //     {
  //       opacity: 0.6,
  //       backgroundColor: "#000"
  //     }
  //   ], 300, function () {}.bind(this))

  //   this.animate('.box', [{
  //       bottom: '-100%'
  //     },
  //     {
  //       bottom: 0
  //     }
  //   ], 300, function () {}.bind(this))
  // },
  // close() {
  //   this.setData({
  //     shadowFlag: false
  //   })
  // },
  openShadow() {
    this.selectComponent('#bottomdrawer').shadow()
  },
  start() {
    this.setData({
      started: true
    })
    this.selectComponent('#stopwatch').start()
  },
  stop() {
    this.setData({
      started: false
    })
    this.selectComponent('#stopwatch').stop()
  }
})