import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import TypeNav from "@/components/TypeNav/"
import Pagination from "@/components/Pagination"
// import {reqCategoryList} from "@/api"
import store from "@/store"
//mockServer至少执行一次
import "@/mock/mockServer"

// reqCategoryList()

// console.log(store);

//注册为全局组件，可以在任意组件内使用
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this       //安装全局事件总线
  }
}).$mount('#app')
