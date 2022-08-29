// app.js


wx.cloud.init({
  env: 'cloud1-2g43oyra905ad481', //填上你的云开发环境id
  traceUser: true,
})
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

  },
  globalData: {
    userInfo: null
  }
})