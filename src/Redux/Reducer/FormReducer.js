import { Form_Get, Form_One_Get, Form_Post, Form_Put, Halsangandn_Post } from "../type"

const init={
    form:[]
,status:null,
err:[],
loading:false,
Halsangand:[],
GetData:[],
GetOneData:[],
AdminForm:[]
}
 const FormReducer=(state=init,action)=>{
    console.log('====================================');
    console.log(action);
    console.log('====================================');
    switch (action.type){
case Form_Post:
    return{
        ...state,
        form:action.payload,
        status:action.status,
        loading:true
    }
case Form_Put:
    return{
        ...state,
        AdminForm:action.payload,
        status:action.status,
        loading:true
    }
case Form_Get:
    return{
        ...state,
        GetData:action.payload,
        status:action.status,
        loading:true
    }
case Form_One_Get:
    return{
        ...state,
        GetOneData:action.payload,
        status:action.status,
        loading:true
    }
case Halsangandn_Post:
    return{
        ...state,
        Halsangand:action.payload,
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
export default FormReducer