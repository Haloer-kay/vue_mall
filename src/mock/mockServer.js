import Mock from "mockjs";
import banner from "./banner.json"
import floor from "./floor.json"

//相当于把json数据存放到服务器中，可以借用接口来请求
//mock数据，第一个参数为请求地址，第二个参数为请求到的数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
