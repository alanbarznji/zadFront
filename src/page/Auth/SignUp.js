import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
<form className='d-flex flex-column'>
  <div class="form-group">
    <label for="exampleInputEmail1">جیمێڵ</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
     
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">وشەی نهێنی</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button  type="submit" class="Login-btn mt-5 btn btn-outline-light d-flex justify-content-center align-self-center">SignUp</button>
</form>
  )
}

export default SignUp