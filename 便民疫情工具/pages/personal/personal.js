//import CheckAuth from '../../utils/auth.js'//

// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
   },
    


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
    this.setData({
      userInfo:wx.getStorageSync('token')
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  login(){
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: res=>{
        let user=res.userInfo
        console.log("用户信息",user)
        this.setData({
          userInfo: user
        })
      },
      fail: res=>{
        console.log("授权失败",res)
      }
    })
  },
  handleTap(){
    wx.navigateToMiniProgram({
      appId: 'wx65e2741d921d61bb',
      path: 'page/index/index?id=123',
    })
  },
  handleCheckin(){
    wx.navigateTo({
      url: '/pages/addList/addList',
    })
  }

})