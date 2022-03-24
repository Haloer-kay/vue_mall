import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

const state = {
  categoryList:[],
  bannerList:[],
  floorList:[]
}
const actions = {

  //接收categoryList事件，第一个参数为context（actions的上下文），第二个数据为接收到的参数
 async categoryList({commit}){
    const result = await reqCategoryList()
    console.log(result);
    if(result.code == 200){
      //向mutations发送一个CATEGORYLIST事件，第二个数据为发送的参数
      commit("CATEGORYLIST",result.data)
    }
  },
 async getBannerList({commit}){
    const result = await reqGetBannerList()
    console.log(result);
    if(result.code == 200){
      commit("GETBANNERLIST",result.data)
    }
  },
  async getFloorList({commit}){
    const result = await reqGetFloorList()
    console.log(result);
    if(result.code == 200){
      commit("GETFLOORLIST",result.data)
    }
  }
}
const mutations = {
  //接收事件，第一个参数为state，第二个参数为接收到的数据
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList.splice(0,16)
  },
  GETBANNERLIST(state,bannerList){
    state.bannerList=bannerList
  },
  GETFLOORLIST(state,floorList){
    state.floorList=floorList
  }
}
const getters = {
  
}
export default {
  state,
  actions,
  mutations,
  getters,
}