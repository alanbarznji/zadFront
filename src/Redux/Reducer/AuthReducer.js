import { Form_Get, Form_One_Get, Form_Post, Form_Put, Halsangandn_Post, login, signup } from "../type"

const init={
    logins:[],
    signups:[],
    status:null,
err:[],
loading:false,
}
 const AuthReducer=(state=init,action)=>{
 
    switch (action.type){
case login:
    return{
        ...state,
        logins:action.payload,
        status:action.status,
        loading:true
    }
case signup:
    return{
        ...state,
        signups:action.payload,
        status:action.status,
        loading:true
    }
case 'err':
    return{
        ...state,
        err:action.err,
        status:action.status,
        loading:true
    }

    default:
        return state
    }
}
export default AuthReducer