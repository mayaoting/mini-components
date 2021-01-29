/*
 * @Author: your name
 * @Date: 2021-01-28 18:20:18
 * @LastEditTime: 2021-01-29 10:24:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \little-project\components\stopwatch\stopwatch.js
 */

//Component Object
Component({
  properties: {
    myProperty: {
      type: String,
      value: '',
      observer: function () {}
    },
  },
  data: {
    text: '00.00.000'
  },
  methods: {
    start: function () {
      var convertTimeStampToString = function (ts) {
        let ms = String(1000 + Math.floor(ts) % 1000).slice(1)
        let s = String(100 + Math.floor(ts / 1000) % 60).slice(1)
        let m = Math.floor(ts / 60000)
        if (m < 10) m = '0' + m
        return m + ':' + s + '.' + ms
      }
      this.setData({
        text: convertTimeStampToString(0)
      })
      let startTime = Date.now()
      let self = this
      this._interval = setInterval(function () {
        self.setData({
          text: convertTimeStampToString(Date.now() - startTime)
        })
      }, 33)
    },
    stop: function () {
      clearInterval(this._interval)
    }
  },
  created: function () {

  },
  attached: function () {

  },
  ready: function () {

  },
  moved: function () {

  },
  detached: function () {

  },
});