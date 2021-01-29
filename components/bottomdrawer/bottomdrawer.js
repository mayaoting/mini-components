/*
 * @Author: your name
 * @Date: 2021-01-29 15:05:02
 * @LastEditTime: 2021-01-29 15:08:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \little-project\components\bottomdrawer\bottomdrawer.js
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
    shadowFlag: false
  },
  methods: {
    shadow() {
      console.log('showShadow')
      this.setData({
        shadowFlag: true
      })
      this.animate('.mask', [{
          opacity: 0,
          backgroundColor: "#000"
        },
        {
          opacity: 0.6,
          backgroundColor: "#000"
        }
      ], 300, function () {}.bind(this))

      this.animate('.box', [{
          bottom: '-100%'
        },
        {
          bottom: 0
        }
      ], 300, function () {}.bind(this))
    },
    close() {
      this.setData({
        shadowFlag: false
      })
    },
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