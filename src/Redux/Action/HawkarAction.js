import axios from "axios";
import {Hawkar_Post,  } from '../type';

export const Hawkar_Posts = (NameH) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/h",
        { NameH },
        {
          headers:{
              'Content-Type':"application/json",
              Authorization:`Bearer ${  localStorage.getItem('auth_token')}`
          }
      }
      );
      console.log(res);
      dispatch({
        type: "Hawkar_Post",
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

export const Hawkar_Gets = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:9000/api/v1/h`
      ,{
          headers:{
              'Content-Type':"application/json",
              Authorization:`Bearer ${  localStorage.getItem('auth_token')}`
          }
      }
      );
      console.log(res);
      dispatch({
        type: "Hwakar_Get",
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


export const Hawkar_Delete = (
  id,
) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:9000/api/v1/h/${id}`,{
        headers:{
            'Content-Type':"application/json",
            Authorization:`Bearer ${  localStorage.getItem('auth_token')}`
        }
    });
      console.log(res);
      dispatch({
        type: "Hawkar_Put",
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
