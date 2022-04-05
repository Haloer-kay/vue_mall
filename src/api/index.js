//对API进行统一的管理
// 三级联动接口   /api/product/getBaseCategoryList   无参数
import requests from "./request";
import mockReq from "./mockReq.js"
import { method } from "lodash";

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
// /api/cart/addToCart/{ skuId }/{ skuNum }  添加到购物车  post

export const reqAddCart=(skuId,skuNum)=>{
  return requests({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:"post",
  })
}
// 获取购物车列表/api/cart/cartList
export const reqCartList=()=>{
  return requests({
    url:"/cart/cartList",
    method:"get"
  })
}
//添加到购物车  post请求
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddToCart=(skuId,skuNum)=>{
  return requests({
    url:`/cart/addToCart/${skuId}/${ skuNum }`,
    method:"post"
  })
}

export const deleteShopCart=(skuId)=>{
  return requests({
    url:`/cart/deleteCart/${skuId}`,
    method:"delete"
  })
}
// /cart/checkCart/{skuID}/{isChecked}
export const reqCheckCart=(skuID,isChecked)=>{
  return requests({
    url:`/cart/checkCart/${skuID}/${isChecked}`,
    method:"get"
  })
}
//登录接口
// /api/user/passport/login
export const reqLogin=(data)=>{
  return requests({
    url:`/user/passport/login`,
    method:"post",
    data,
  })
}
//获取用户信息，需要携带token
export const reqUserInfo=()=>{
    return requests({
      url:"/user/passport/auth/getUserInfo",
      method:"get"
    })
}
// /api/user/passport/logout
export const reqLogout=()=>{
  return requests({
    url:"/user/passport/logout",
    method:"get"
  })
}