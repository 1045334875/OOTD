//app.js
App({
  onLaunch: function() {
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
		if (capsule) {
		 	this.globalData.Custom = capsule;
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
  },
  globalData: {
    ColorList: [{
        title: '淡蓝',
        name: 'blue1',
        color: '#c1cbd7'
      },
      {
        title: '淡灰',
        name: 'grey1',
        color: '#afb0b2'
      },
      {
        title: '深蓝',
        name: 'blue2',
        color: '#8696a7'
      },
      {
        title: '淡绿',
        name: 'green1',
        color: '#b5c4b1'
      },
      {
        title: '森绿',
        name: 'green2',
        color: '#96a48b'
      },
      {
        title: '淡粉',
        name: 'pink1',
        color: '#e0cdcf'
      },
      {
        title: '深粉',
        name: 'pink2',
        color: '#a27e7e'
      },
      {
        title: '姹紫',
        name: 'purple1',
        color: '#c9c0d3'
      },
      {
        title: '深紫',
        name: 'purple2',
        color: '#7a7281'
      },
      {
        title: '棕色1',
        name: 'brown1',
        color: '#c5b8a5'
      },
      {
        title: '棕褐',
        name: 'brown2',
        color: '#a29988'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#879a93'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  }
})