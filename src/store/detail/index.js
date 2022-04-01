
import { reqGetDetail } from "@/api";
const state={
  goodInfo:{}
}
const actions={
 async getItemDetail({commit},skuId){
    let result= await reqGetDetail(skuId)
    if(result.code===200){
      commit("ETITEMDATAIL",result.data)
    }
  }

}
const mutations={
  ETITEMDATAIL(state,goodInfo){
    state.goodInfo=goodInfo
  }
}
const getters={
  categoryView(state){
    //当goodInfo数据没有返回时，skuInfo是个空对象
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
}
export default{
  state,
  actions,
  mutations,
  getters
}