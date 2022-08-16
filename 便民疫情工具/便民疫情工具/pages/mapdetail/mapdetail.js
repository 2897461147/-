// pages/mapdetail/mapdetail.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    lng:0,
    lat:0,
    name:'11'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //console.log(options)
    wx.setNavigationBarTitle({
      title:options.name
    })
    this.setData({
        lng:Number(options.lng),
        lat:Number(options.lat),
        name:options.name
    })
  },
  gotoHere(evt){
    var name=evt.currentTarget.dataset.name
    var lat=evt.currentTarget.dataset.lat
    var lng=evt.currentTarget.dataset.lng
    console.log(name,lat,lng)
    wx.navigateTo({
      url: `/pages/maproute/maproute?&name=${name}&lat=${lat}&lng=${lng}`
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //this.getAdr()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})