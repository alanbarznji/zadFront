import axios from 'axios';
import {Form_Get, Form_One_Get, Form_Post, Form_Put, Halsangandn_Post } from '../type';
import  Cookies   from 'js-cookie';

export const Form_Posts = (
    formDatas
    
) => {
    return async (dispatch) => {
        try {

            const res = await axios.post("https://195.200.14.205:9000/api/v1/fh", 
                formDatas
            ,{
                headers:{
                    'Content-Type': 'multipart/form-data'
,
                    Authorization:`Bearer ${  localStorage.getItem('auth_token')}`
                }
            });
            localStorage.setItem('ID',res.data.data._id)
            console.log(res);
dispatch({
    type:Form_Post,
    payload:res.data
    ,status:res.status
})
        } catch (error) {
            console.log(error.response);
            dispatch({
                type:'err',
                err:error.response.data,status:error.response.status
            })
        }
    }
}
export const Halsangandn_Posts = ({
    id,
    HDetails
    ,HDetailsValue
    
}) => {
    return async (dispatch) => {
        try {
  
            const res = await axios.post(`https://195.200.14.205:9000/api/v1/fh/Hd/${id}`, {
                HDetails
                ,
                HDetailsValue
                
            },{
                headers:{
                    'Content-Type':"application/json",
                    Authorization:`Bearer ${  localStorage.getItem('auth_token')}`
                }
            });
            console.log(res);
            dispatch({
                type:Halsangandn_Post,
    payload:res.data
    ,status:res.status
})
} catch (error) {
            console.log(error.response);
            dispatch({
                type:'err',
                err:error.response.data,status:error.response.status
            })
        }
    }
}
export const Form_Gets = (Accept,token) => {
    return async (dispatch) => {
        try {
            
            const res = await axios.get(`https://195.200.14.205:9000/api/v1/fh?Accept=${Accept}`,{
                headers:{
                    'Content-Type':"application/json",
                    Authorization:`Bearer ${  localStorage.getItem('auth_token')}`
                }
            });
            console.log(res);
            dispatch({
    type:Form_Get,
    payload:res.data,
    status:res.status
})
        } catch (error) {
            console.log(error.response,'meme');
            dispatch({
                type:'err',
                err:error.response.data,
                status:error.response.status
            })
        }
    }
}
export const Form_one_Gets = (id) => {
    return async (dispatch) => {
        try {
            
            const res = await axios.get(`https://195.200.14.205:9000/api/v1/fh/${id}`,{
                headers:{
                    'Content-Type':"application/json",
                    Authorization:`Bearer ${localStorage.getItem('auth_token')}`
                }
            });
            console.log(res);
            dispatch({
    type:Form_One_Get,
    payload:res.data,
    status:res.status
})
        } catch (error) {
            console.log(error.response);
            dispatch({
                type:'err',
                err:error.response.data,status:error.response.status
            })
        }
    }
}

export const Form_Puts = ({
    id,
    NameH,
    NameS,
    Number,
    Place,
    House,
    HouseValue,
    HouseValueId,
    Car,
    CarValue,
    CarValueId,
    Loan,
    LoanValueId,
    LoanValue,
    LoanValueAds,
    Wage,
    WageValueId,
    WageValue,
    WageValueAds,
    Children,
    ChildrenValue,
    ChildrenValueId,
    Sicks,
    SicksValue,
    SicksValueId,
    SicksValueAds,
    Payment,
    PaymentValue,
    PaymentValueId,
    Trust,
    TrustValue,
    TrustValueId,
    HDetails
    ,
    HDetailsValue,
    Accept,
    complete
}) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`https://195.200.14.205:9000/api/v1/fh/${id}`, {
                NameH,
                NameS,
                Number,
                Place,
                House,
                HouseValue,
                HouseValueId,
                Car,
                CarValue,
                CarValueId,
                Loan,
                LoanValueId,
                LoanValue,
                LoanValueAds,
                Wage,
                WageValueId,
                WageValue,
                WageValueAds,
                Children,
                ChildrenValue,
                ChildrenValueId,
                Sicks,
                SicksValue,
                SicksValueId,
                SicksValueAds,
                Payment,
                PaymentValue,
                PaymentValueId,
                Trust,
                TrustValue,
                TrustValueId,
                HDetailsValue,
                HDetails,
                Accept,
                complete
            },{
                headers:{
                    'Content-Type':"application/json",
                    Authorization:`Bearer ${  localStorage.getItem('auth_token')}`
                }
            });
            console.log(res);
dispatch({
    type:Form_Put,
    payload:res.data
    ,status:res.status
})
        } catch (error) {
            console.log(error.response);
            dispatch({
                type:'err',
                err:error.response.data,status:error.response.status
            })
        }
    }
}