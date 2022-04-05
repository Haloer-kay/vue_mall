import { reqGetCode, reqAddUser, reqLogin, reqUserInfo, reqLogout } from "@/api";
import { setToken,getToken } from "@/utils";

const state = {
  code: "",
  userInfo:{},
  token:getToken()
};
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    const result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
    }
  },
  //注册业务只需要发出请求，不用存放数据
  async registerUser({ commit }, data) {
    const result = await reqAddUser(data);
    console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //用户登录并本地存储token
  async userLogin({commit},data){
    const result=await reqLogin(data)
    if(result.code===200){
    setToken(result.data.token)
      return "ok"
    }else{
      return Promise.reject(new Error("faile"));
    }
  },
  //获取用户信息
  async getUserInfo({commit}){
    const result=await reqUserInfo()
    if(result.code===200){
      commit("GETUSERINFO",result.data)
      return "ok"
    }else{
      return Promise.reject(new Error("faile"))
    }
  },
  // 退出登录
  async logout({commit}){
    let result= await reqLogout()
    console.log("nice",result );
      if(result.code==200){
        commit("LOGOUT")
        return "ok"
      }else{
        return Promise.reject(new Error("faile"))
      }
  }
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
 GETUSERINFO(state,userInfo){
    state.userInfo=userInfo
  },
  LOGOUT(state){
    state.userInfo={}
    localStorage.removeItem("token")
  }
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
