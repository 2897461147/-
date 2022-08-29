function request(params,isHeader=false){
  return new Promise((resolve,reject)=>{
          wx.request({
          ...params,
          url:'https://apis.map.qq.com/place_cloud'+params.url,
          success:(res)=>{
              if(isHeader){
              resolve({
                  list:res.data,
                  total:res.data.result.count
              })}else {
              resolve(res.data)
              }
          },
          fail:(err)=>{
              rejects(err)
          },
          copmlete:()=>{
              //隐藏loading

          }
      })
  })
}
export  default  request