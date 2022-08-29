// pages/uesrForm/userForm.js
import judge from '../../utils/judge'
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data(){
      return{
        isPhoneFlag: true, // 联系方式手机号状态
        isCardFlag: true, // 身份证状态
        isName:true,
      }
    },
    nationIndex: 0,
    nation_data: [
      {name:'请选择民族'},
      {id:1 ,name:'汉族'},
      {id:2 ,name:'蒙古族'},
      {id:3 ,name:'回族'},
      {id:4 ,name:'藏族'},
      {id:5 ,name:'维吾尔族'},
      {id:6 ,name:'苗族'},
      {id:7 ,name:'彝族'},
      {id:8 ,name:'壮族'},
      {id:9 ,name:'布依族'},
      {id:10,name:'朝鲜族'},
      {id:11,name:'满族'},
      {id:12,name:'侗族'},
      {id:13,name:'瑶族'},
      {id:14,name:'白族'},
      {id:15,name:'土家族'},
      {id:16,name:'哈尼族'},
      {id:17,name:'哈萨克族'},
      {id:18,name:'傣族'},
      {id:19,name:'黎族'},
      {id:20,name:'傈僳族'},
      {id:21,name:'佤族'},
      {id:22,name:'畲族'},
      {id:23,name:'高山族'},
      {id:24,name:'拉祜族'},
      {id:25,name:'水族'},
      {id:26,name:'东乡族'},
      {id:27,name:'纳西族'},
      {id:28,name:'景颇族'},
      {id:29,name:'柯尔克孜族'},
      {id:30,name:'土族'},
      {id:31,name:'达翰尔族'},
      {id:32,name:'么佬族'},
      {id:33,name:'羌族'},
      {id:34,name:'布朗族'},
      {id:35,name:'撒拉族'},
      {id:36,name:'毛南族'},
      {id:37,name:'仡佬族'},
      {id:38,name:'锡伯族'},
      {id:39,name:'阿昌族'},
      {id:40,name:'普米族'},
      {id:41,name:'塔吉克族'},
      {id:42,name:'怒族'},
      {id:43,name:'乌孜别克族'},
      {id:44,name:'俄罗斯族'},
      {id:45,name:'鄂温克族'},
      {id:46,name:'德昂族'},
      {id:47,name:'保安族'},
      {id:48,name:'裕固族'},
      {id:49,name:'京族'},
      {id:50,name:'塔塔尔族'},
      {id:51,name:'独龙族'},
      {id:52,name:'鄂伦春族'},
      {id:53,name:'赫哲族'},
      {id:54,name:'门巴族'},
      {id:55,name:'珞巴族'},
      {id:56,name:'基诺族'},

    ],


  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      nationIndex: e.detail.value
    })
  },
  bindChange(e) {

    if (e.target.dataset.key){
      if(e.target.dataset.key === 'formOne.name'){
        this.setData({ 
          isName:judge.isName(e.detail.value)
        })
      }
      if(!this.data.isName){
        wx.showToast({
          title: '姓名有误',
          icon: 'none',
          duration: 2000,
        })
      }
      if (e.target.dataset.key === 'formOne.tele') {
        this.setData({
          isPhoneFlag: judge.isPhone(e.detail.value)
        })
        if (!this.data.isPhoneFlag) {
          wx.showToast({
            title: '电话格式有误',
            icon: 'none',
            duration: 2000,
          })
        }
      }
    
      if (e.target.dataset.key === 'formOne.idcard') {
        this.setData({
          isCardFlag: judge.IdentityIDCard(e.detail.value)
        })
        //console.log(this.data.isCardFlag.isPass)
        if (!this.data.isCardFlag.isPass) {
          wx.showToast({
            title: this.data.isCardFlag.errorMess,
            icon: 'none',
            duration: 2000,
          })
        }
      }
    }
    this.setData({
      [e.target.dataset.key]: e.detail.value
    })
  },
  
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }, 
  submitUserinfo(res){
    wx.showLoading({
      title: '数据提交中......',
    })
    var {name,idcard,nation,region,tel,detailAd}=res.detail.value;
    //var resVlu=res.detail.value
    console.log(name,idcard,nation,region,tel,detailAd)
    db.collection("userInfo").add({
      data:{
        name:name,idcard:idcard,nation:nation,region:region,tel:tel,detailAd:detailAd
      } 
    }).then(res=>{
      console.log(res)
      wx.hideLoading({
        success: (res) => {
          wx.switchTab({
            url: '/pages/home/home',
          })
        },
      })
    })
  }

})