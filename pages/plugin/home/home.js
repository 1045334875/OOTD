const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '今日搭配',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/pages/plugin/swiper/swiper'
    },
      {
        title: '我的衣柜',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/pages/about/about/about'
      },
      {
        title: '虚拟试衣间',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/pages/plugin/drawer/drawer'
      },
      {
        title: '风格选择',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/pages/plugin/animation/animation'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url:  e.currentTarget.dataset.url
      })
    },
  }
});