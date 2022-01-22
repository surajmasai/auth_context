import { useContext, useState } from "react"
import {AuthContext} from '../contexts/AuthContext'
import './Navbar.css'
export const Navbar=()=>{

  const {isAuth,toggleAuth,setToken}=useContext(AuthContext)
const [form,setForm]=useState(null)

const handleChange=(e)=>{
let {name,value}=e.target
setForm({...form,[name]:value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(form)

  fetch(`https://reqres.in/api/login`,{
    method:"POST",
    body:JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
  }).then((res)=>res.json()).then((res)=>{ 
   
setToken(res.token?res.token:res.error)
toggleAuth(res)
    
  })

}



return <div>
<div id="nav"> <button>{isAuth}</button></div>
  <form action="" onSubmit={handleSubmit}>
    <input onChange={handleChange}  name="email" type="email" placeholder="enter your email"/>
    <input onChange={handleChange}  name="password" type="password" />
    <input type="submit" value="Submit"/>
  </form>
 
 
</div>
}