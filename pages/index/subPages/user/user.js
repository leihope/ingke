// pages/user/user.js
const app = getApp();
let userInfo = app.globalData.userInfo;
let login = app.globalData.login;

Component({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  ready: function (options) {
    app.userInfoReadyCallback = function () {
      console.log(app.globalData);
    }
    var that = this;
    //获得设备信息
    wx.getSystemInfo({
      success(res) {
        console.log(res.windowHeight);
        that.setData({
          phoneHeight: res.windowHeight,
        })
      }
    })
    // 查看是否授权
    if (app.globalData.userInfo === null) {
      that.setData({
        login: login
      })
    } else {
      that.setData({
        login: app.globalData.login,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        nickName: app.globalData.userInfo.nickName
      })
    }
  },
  
  methods: {
    // 获取用户的头像和昵称信息
    bindGetUserInfo(e) {
      var that = this;
      wx.getUserInfo({
        success: function (res) {
          console.log(e.detail.userInfo);
          app.globalData.userInfo = e.detail.userInfo;
          app.globalData.login = false;
          that.setData({
            login: app.globalData.login,
            avatarUrl: e.detail.userInfo.avatarUrl,
            nickName: e.detail.userInfo.nickName
          })
        }
      })
    },
    /**
  * 用户点击右上角分享
  */
    onShareAppMessage: function () {

    },

    contact_server: function() {
      wx.showToast({
      title: 'QQ:646106467',
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 2000     
    }) 
    },
    
    phoneLogin: function () {
      wx.navigateTo({
        url: './phoneLogin/phoneLogin',
        success: (result) => {

        },
        fail: () => { },
        complete: () => { }
      });
    }
  }

  
  
 
})