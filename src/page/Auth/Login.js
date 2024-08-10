import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Auth_Login } from '../../Redux/Action/AuthAction'
import { toast, ToastContainer } from 'react-toastify'
const Login = () => {
  const[Loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onChangePassword = (e) => {
    setPassword(e.target.value)
}
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
}

const onSubmit = async () => {
    setLoading(true)
    await dispatch(Auth_Login(email,password))
    setLoading(false)
 
}
const naviagtion=useNavigate()
 const status=useSelector(state=>state.auth.status)
 const err=useSelector(state=>state.auth.err)
 useEffect(()=>{
  console.log('====================================');
  console.log(status,err,Loading);
  console.log('====================================');
  if(!Loading){
    if(status === 201){
      toast.success('Form submitted successfully');
      window.location.href ='/AdminHome'
    } 
    else if(status===401) {
 
      toast.error(err.message);
    }
  }
},[Loading,err,status])

 console.log(status);
  return (
    <div className='d-flex flex-column'>
  <ToastContainer />
  <div class="form-group">
    <label for="exampleInputEmail1">جیمێڵ</label>
    <input onChange={onChangeEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
     
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">وشەی نهێنی</label>
    <input type="password" onChange={onChangePassword} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button onClick={onSubmit} type="submit" class="Login-btn mt-5 btn btn-outline-light d-flex justify-content-center align-self-center">Login</button>
</div>
  )
}

export default Login
// to={'/AdminHome'}