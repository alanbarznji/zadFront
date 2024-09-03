import axios from "axios";
import {
  Form_Get,
  Form_One_Get,
  Form_Post,
  Form_Put,
  Halsangandn_Post,
  login,
} from "../type";
import Cookies from 'js-cookie';
export const Auth_Login = (email, password) => {
  return async (dispatch) => {
    try {

      
      const res = await axios.post(
        "http://195.200.14.205:9000/api/v1/auth/login",
        {
          email,
          password,
        },
        {
          headers: {  // Corrected this line
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include this to send cookies
        }
      );
      
      console.log(Cookies.get('auth_token'),res.data);
      localStorage.setItem('auth_token', res.data.Token);
      dispatch({
        type: 'login',
        payload: res.data,
        status: res.status,
      });
    } catch (error) {
      console.log(error.response,'meme');
      dispatch({
        type: 'err',
        err: error.response.data,
        status: error.response.data.error.statuscode,
      });
    }
  };
};
export const Halsangandn_Posts = ({ id, HDetails, HDetailsValue }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://195.200.14.205:9000/api/v1/fh/Hd/${id}`, {
        HDetails,
        HDetailsValue,
      });
      console.log(res);
      dispatch({
        type: Halsangandn_Post,
        payload: res.data,
        status: res.status,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "err",
        err: error.response.data,
        status: error.response.status,
      });
    }
  };
};
export const Form_Gets = (Accept) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://195.200.14.205:9000/api/v1/fh?Accept=${Accept}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      dispatch({
        type: Form_Get,
        payload: res.data,
        status: res.status,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "err",
        err: error.response.data,
        status: error.response.status,
      });
    }
  };
};
export const Form_one_Gets = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://195.200.14.205:9000/api/v1/fh/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      dispatch({
        type: Form_One_Get,
        payload: res.data,
        status: res.status,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "err",
        err: error.response.data,
        status: error.response.status,
      });
    }
  };
};

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
  HDetails,
  HDetailsValue,
  Accept,
  complete,
}) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://195.200.14.205:9000/api/v1/fh/${id}`, {
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
        Accept,
        complete,
      });
      console.log(res);
      dispatch({
        type: Form_Put,
        payload: res.data,
        status: res.status,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "err",
        err: error.response.data,
        status: error.response.status,
      });
    }
  };
};
