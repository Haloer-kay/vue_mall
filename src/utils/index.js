import { v4 as uuidv4 } from 'uuid';
//创建并返回uuid
export const getUUID=()=>{
  let uuid_token=localStorage.getItem("uuid_token")
  if(!uuid_token){
    localStorage.setItem("uuid_token",uuidv4())
  }
  return uuid_token;
}

export const getToken=()=>{
  let token=localStorage.getItem("token")
  return token
}

export const setToken=(token)=>{
  localStorage.setItem("token",token)
}