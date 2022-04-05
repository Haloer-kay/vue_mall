import {
  deleteShopCart,
  reqAddToCart,
  reqCartList,
  reqCheckCart
} from "@/api";
const state = {
  cartList: []
}
const actions = {
  async getCartList({
    commit
  }) {
    let result = await reqCartList()
    if (result.code == 200) {
      commit("GETCARTLIST", result.data)
    }
  },
  // 向后台发送添加到购物车的数据
  async postAddToCart({
    commit
  }, {
    skuId,
    skuNum
  }) {
    try {
      reqAddToCart(skuId, skuNum)
    } catch (error) {
      return new Promise.reject(new Error("faile"))
    }
  },

  async delShopCart({
    commit
  }, skuId) {
    try {
      await deleteShopCart(skuId)
    } catch (error) {
      return Promise.reject(new Error("faile"))
    }
  },
  //通过这种方式发起dispatch可以判断过程中是否发生错误
  async delAllCheckedCart({
    getters,
    dispatch
  }) {
    let promiseAll = []
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = item.isChecked == "1" ? dispatch("delShopCart", item.skuId) : ""
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  },
  // 切换商品选中状态
  async isCheckCart({
    commit
  }, {
    skuId,
    isChecked
  }) {
    try {
      await reqCheckCart(skuId, isChecked)
    } catch (error) {
      return Promise.reject(new Error("faile"))
    }
  },
  //更改全选状态
  updateAllChecked({
    dispatch,
    state
  }, isChecked) {
    let promiseAll = []
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("isCheckCart", {
        skuId: item.skuId,
        isChecked
      });
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  }

}
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList || []
  }
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}