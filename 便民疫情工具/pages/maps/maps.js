// pages/maps/maps.js
const chooseLocation = requirePlugin('chooseLocation');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[],
    markers:[],
    lat:35.252512,
    lng:115.417827,

  },


getPlace(){
  var that =this;
  var latitude= this.data.markers[0].latitude;
  var longitude=this.data.markers[0].longitude;
  wx.request({
    url:'https://apis.map.qq.com/place_cloud/data/list?table_id=0oLe5K1g-3yZh7TvZ1&orderby=id&page_index=1&page_size=46&key=YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX',
    success:function (res){
      console.log(res.data.result)
      var result=res.data.result.data
      
      for(var i=0;i<result.length;i++){
        let lat=result[i].location.lat;
        let lng=result[i].location.lng;
        var index="markers["+(i+1)+"]";
        that.setData({
          [index]:{
            id:1+i,
            latitude:lat,
            longitude:lng,
            iconPath:"../../images/地图.png",
            width:30,
            height:30,
            callout: {
              content:result[i].title,
              color: 'red',
              fontsize: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'white',
              padding: 2,
              display:'BYCLICK'
            }
          }
        })
      }
    },
  })
},
searchArea(){
  let lat;
  let lng;
  wx.request({
      url:"https://apis.map.qq.com/place_cloud/search/nearby?location="+this.data.markers[0].latitude+","+this.data.markers[0].longitude+"&radius=1000&auto_extend=1&orderby=x.price desc&table_id=0oLe5K1g-3yZh7TvZ1&key=YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX",
      success:function (res){
        console.log(res)
        var result=res.data.result
        if(result.count===0){
          wx.showToast({
            title: '一公里内无检测点！',
            icon: 'none',
            duration: 1500  
          })
        }
      }

    })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getLocation({
        success:function (res){
          console.log(res)
          that.setData({
            markers:[
              {
                id:0,
                latitude: res.latitude,
                longitude: res.longitude,
                iconPath:"../../images/地图-地标.png",
                width:30,
                height:30,
                callout:{
                  width:50,
                  height:40,
                  content:"当前位置",
                  color:'red',
                  fontsize:20,
                  borderRadius:5,
                  borderWidth:1,
                  borderColor:'white',
                  padding:2,
                  display:'ALWAYS'
                }
              }
            ]
          })
        }
      })
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