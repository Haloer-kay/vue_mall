import { reqGetDetail,reqAddCart } from "@/api";
const state={
  goodInfo:{}
}
const actions={
 async getItemDetail({commit},skuId){
    let result= await reqGetDetail(skuId)
    if(result.code===200){
      commit("ETITEMDATAIL",result.data)
    }
  },
  // 返回的数据是null，不需要保存到state中
  async getAddToCart({commit},{skuId,skuNum}){
    let result=await reqAddCart(skuId,skuNum)
    if(result.code==200){
      return "ok"
    }else{
      return Promise.reject(new Error("fail"))
      // console.log("fail")
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
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList || {}
  }
}
export default{
  state,
  actions,
  mutations,
  getters
}