import React, { useEffect, useState } from 'react'

import './AdminHome.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form_Gets } from '../../Redux/Action/FormAction'
import Cookies  from 'js-cookie';
import { useCookies } from 'react-cookie'
const AdminHome = () => {
  const dispatch=useDispatch()
  const [token, setToken] = useState(null);
  useEffect(()=>{
dispatch(Form_Gets("Waiting"))
  },[])
const data=useSelector(state=>state.form?state.form.GetData?state.form.GetData.data:null:null)
console.log(data,'ssssss');
  return (
    <div className='AdminHome'>
      <div className='mt-5 text-center' >فۆڕمی ‌هاوکار</div>
      {

data?data.map((e)=>{
  return       <Link to={`/FormyPrkraw/${e._id}`}  className='hawkarakan mt-5 d-flex text-center justify-content-center align-item-center row'>
  <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.NameH}</div>
  <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.NameS} </div>
  <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.Place}</div>
  <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.Number}</div>
   </Link>
}):null
        
      }

    </div>
  )
}

export default AdminHome
