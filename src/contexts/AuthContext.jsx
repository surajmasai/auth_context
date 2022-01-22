import { createContext, useState } from "react";

export const AuthContext=createContext({isAuth:'',toggleAuth:()=>{}})

export const AuthContextProvider=({children})=>{
 const [isAuth,setIsAuth]=useState('logout') 
const [token,setToken]=useState('')
 const toggleAuth =(res)=>{
  console.log(res) 
  console.log(isAuth) 
setIsAuth(res.token?"login":"logout")
 }
  return <AuthContext.Provider value={{isAuth,toggleAuth,token,setToken}}>
{children}
  </AuthContext.Provider>
}