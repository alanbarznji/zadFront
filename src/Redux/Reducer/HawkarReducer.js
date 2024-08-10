import { Form_Get, Form_One_Get, Form_Post, Form_Put, Halsangandn_Post, Hwakar_Get, Hwakar_Post, Hwakar_Put } from "../type"

const init={
    hawkar:[]
,status:null,
err:[],
loading:false,
Halsangand:[],
GetData:[],
GetOneData:[],
AdminForm:[]
}
 const HawkarReducer=(state=init,action)=>{
    console.log('====================================');
    console.log(action);
    console.log('====================================');
    switch (action.type){
case Hwakar_Post:
    return{
        ...state,
        hawkar:action.payload,
        status:action.status,
        loading:true
    }
case Hwakar_Put:
    return{
        ...state,
        AdminForm:action.payload,
        status:action.status,
        loading:true
    }
case Hwakar_Get:
    return{
        ...state,
        GetData:action.payload,
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
export default HawkarReducer