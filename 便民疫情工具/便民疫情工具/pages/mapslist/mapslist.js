// pages/mapslist/mapslist.js
import request from "../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[]
  },
  current: 1,
  total:0,
  getList(format, data){
    request({
      url: `/list?table_id=0oLe5K1g-3yZh7TvZ1&orderby=id&page_index=${this.current}&page_size=5&key=YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX`,
      method: 'GET',

    },true).then(res=>{
      console.log(res)
      this.total=Number(res.total)
      this.setData({
        cityList: [...this.data.cityList, ...res.list.result.data]
      }, data)
    })
  },
  handleTap(){
    this.triggerEvent("event")
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
      this.getList()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getList()
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
      setTimeout(()=> {
        wx.stopPullDownRefresh()
      },1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log(this.data.cityList.length,this.total)
    if(this.data.cityList.length>this.total){
      return
    }
    this.current++
    this.getList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  changePage: function (evt) {
    //console.log(evt.currentTarget.dataset.id)
    var id =evt.currentTarget.dataset.id
    var name=evt.currentTarget.dataset.name
    var lat=evt.currentTarget.dataset.lat
    var lng=evt.currentTarget.dataset.lng
    wx.navigateTo({

      url: `/pages/mapdetail/mapdetail?ud_id=${id}&name=${name}&lat=${lat}&lng=${lng}`
    })
  }
})