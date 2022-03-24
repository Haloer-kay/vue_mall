import {reqSearchInfo} from "@/api"

const state = {
    searchInfo:{}
}
const actions = {
 async getSearchInfo({commit},params={}){
    let result = await reqSearchInfo(params)
    if(result.code ===200){
      commit("REQSEARCHINFO",result.data)
    }
  }
}
const mutations = {
  REQSEARCHINFO(state,searchInfo){
    state.searchInfo = searchInfo
  }
}
const getters = {
  //获得的数据列表
  goodsList(state){
    return state.searchInfo.goodsList
  },
  //品牌分类
  trademarkList(state){
    return state.searchInfo.trademarkList
  },
  //标签分类
  attrsList(state){
    return state.searchInfo.attrsList
  }
}
export default {
  state,
  actions,
  mutations,
  getters,
}