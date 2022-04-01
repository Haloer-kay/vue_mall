//对API进行统一的管理
// 三级联动接口   /api/product/getBaseCategoryList   无参数
import requests from "./request";
import mockReq from "./mockReq.js"

export const reqCategoryList = () =>{
  return requests({
    url:'/product/getBaseCategoryList',
    method:'get',
  })
}
//获取mock模拟数据
export const reqGetBannerList = () =>{
  return mockReq({
    url:'/banner',
    method:'get',
  })
}
export const reqGetFloorList = () =>{
  return mockReq({
    url:'/floor',
    method:'get',
  })
}
//获取search页面数据,设置默认参数为空字符串
export const reqSearchInfo = (params = '') =>{
  return requests({
    url:'/list',
    method:'post',
    data:params//post请求的参数为data，get请求为params
  })
}
export const reqGetCode=(phone)=>{
  return requests({
    url:`/user/passport/sendCode/${phone}`,
    method:"get"
  })
}
export const reqAddUser=(data)=>{
  return requests({
    url:"/user/passport/register",
    method:'post',
    data:data,
  })
}
// 请求商品详情
// /api/item/{ skuId }
export const reqGetDetail=(skuId)=>{
  return requests({
    url:`/item/${skuId}`,
    method:"get",
  })
}