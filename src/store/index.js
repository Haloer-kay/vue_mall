import Vue from "vue";
import Vuex from "vuex";
//引入小仓库
import search from "./search"
import home from "./home"
import user  from "./user"
import detail from "./detail"
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      home,
      search,
      user,
      detail 
    }
})