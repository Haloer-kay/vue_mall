import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
      {
        path:"/home",
        component:Home,
        meta:{showFooter:true}
      },
      {
        //占位符名字必须与params对象的key值相同
        path:"/search/:keyword?",
        component:Search,
        meta:{showFooter:true},
        name:"search",
      },
      {
        path:"/login",
        component:Login,
        meta:{showFooter:false}
      },
      {
        path:"/register",
        component:Register,
        meta:{showFooter:false}
      },
      {
        path:"/item/:skuId",
        component:Detail,
        meta:{showFooter:false}
      },
      {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:AddCartSuccess,
        meta:{showFooter:true}
      },
      {
        path:"/shopcart",
        component:ShopCart,
        meta:{showFooter:true}
      },
      {
        path:"*",
        redirect:'/home'
      },
  
    ],
    // 控制滚动行为
    scrollBehavior(to,from,savedPosition){
      return {y : 0}
    }
})