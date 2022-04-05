import axios from "axios"
import nprogress from "nprogress"
import "nprogress/nprogress.css"
import {getUUID,getToken } from "@/utils"
import store from "@/store"

const requests = axios.create({
  baseURL:'/api',
  timeout:5000,
})


//登录流程
/*
注册后正确输入账号，点击登录发起请求，请求的返回结果包含token，需要本地存储这个token
在请求头中添加参数token，使得下次的请求头包含token，
在接下来获取用户信息的请求中，需要带有token的请求头，在vuex中存储用户信息，通过这个用户信息的有无来确定是否展示个人信息
*/
requests.interceptors.request.use((config)=>{
  nprogress.start()
  if(getToken()){
    config.headers.token=getToken()
  }
  config.headers.userTempId=getUUID()
  return config
})

requests.interceptors.response.use((res)=>{
  nprogress.done()
  return res.data
},(err)=>{
  return Promise.reject(new Error("faile"));
})

export default requests