import { reqGetCode, reqAddUser } from "@/api";

const state = {
  code: "",
};
const actions = {
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
      return new Promise.reject();
    }
  },
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
