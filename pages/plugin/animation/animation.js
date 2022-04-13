const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        name: '简约风',
        color: 'red'
      },
      {
        name: '二次元风',
        color: 'orange'
      },
      {
        name: '欧美风',
        color: 'olive'
      },
      {
        name: '日系风',
        color: 'green'
      }, {
        name: '运动风',
        color: 'cyan'
      },
      {
        name: '甜美风',
        color: 'blue'
      },
      {
        name: '学院风',
        color: 'purple'
      },
      {
        name: '传统中国风',
        color: 'mauve'
      },
      {
        name: '复古风',
        color: 'red'
      },
      {
        name: '中性风',
        color: 'orange'
      },
      {
        name: '文艺风',
        color: 'olive'
      },
      {
        name: '性感风',
        color: 'green'
      },
      {
        name: '可爱风',
        color: 'cyan'
      },
      {
        name: '网红风',
        color: 'blue'
      },
      {
        name: '暗黑风',
        color: 'purple'
      },
      {
        name: '民族风',
        color: 'mauve'
      },
      {
        name: '公主风',
        color: 'red'
      },
      {
        name: '仙女风',
        color: 'orange'
      }
    ],
    toggleDelay: false
  },
  toggle(e) {
    console.log(e);
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  toggleDelay() {
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function() {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
  }
})