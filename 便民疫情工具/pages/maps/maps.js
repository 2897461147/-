// pages/maps/maps.js
const chooseLocation = requirePlugin('chooseLocation');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*jingdu:"",
    weidu:"",
    dizhi:"11",
    mingcheng:"",*/
    setting:{
      skew: 0,
      rotate: 0,
      showLocation: false,
      showScale: false,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    cityList:[]
  },
  showMap(){
    const key = 'YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX'; //使用在腾讯位置服务申请的key
    const referer = 'chooseLocation'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    const category = '生活服务,娱乐休闲';

    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    })
  },

handleGet(){
  wx.request({
    url:'https://apis.map.qq.com/place_cloud/table/list?key=YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX',
    method:"GET",
    success:(res)=>{
      console.log(res)
    }
  })
},
  getList(){
    wx.request({
      url:'https://apis.map.qq.com/place_cloud/data/list?table_id=0oLe5K1g-3yZh7TvZ1&orderby=id&page_index=1&page_size=20&key=YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX',
      method:'GET',
      success:(res)=>{
        console.log(res.data.result.data)
        this.setData({
          cityList:res.data.result.data
        })
      }
    })
  },





  /**getlocal(){
    var that=this
    wx.getLocation({
      success:function (res){
        console.log(res)
        that.setData({
          jingdu:res.longitude,
          weidu:res.latitude,
        })
      }
    })
  },
  chakanweizhi(e){
  wx.openLocation({
    latitude:Number(e.detail.value.weidu),
    longitude:Number(e.detail.value.jingdu)
  })
  },**/




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
  onShow: function() {
    // 此处加载数据，每次进入都加重新加载

    const site = chooseLocation.getLocation();
    // 插件返回的数据放在这个对象里面
    if (site) {
      console.log(site)
      this.setData({
        siteInfo: site.name
      })

      let location = {
        latitude: site.latitude,
        longitude: site.longitude
      }
      wx.setStorageSync('location', location)
    }
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

  }
})