// pages/maproute/maproute.js


Page({
  /**
   * 页面的初始数据
   */
  data: {
    cityName:'',
    lat:0,
    lng:0
  },
handledSetdata(lng,lat,name){
  let plugin = requirePlugin('routePlan');
  let key = 'YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX';  //使用在腾讯位置服务申请的key
  let referer = '找核酸检测点';   //调用插件的app的名称
  let endPoint = JSON.stringify({  //终点
    'name': name,
    'latitude': lat,
    'longitude': lng
  });

  wx.navigateTo({
    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.name)
    this.handledSetdata(options.lng,options.lat,options.name)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.handledSetdata()

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