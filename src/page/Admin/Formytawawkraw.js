import React, { useEffect, useState } from 'react';
import './Formytawawkraw.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Form_one_Gets } from '../../Redux/Action/AuthAction';
import { useParams } from 'react-router';

const Formytawawkraw = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const status = useSelector(state => state.form.status);
  const data = useSelector(state => state.form ? state.form.GetOneData ? state.form.GetOneData.data : null : null);
  const err = useSelector(state => state.form.status);

  useEffect(() => {
    dispatch(Form_one_Gets(id));
  }, [status, id]);

  
  const getOptionIdValue = (value) => {
    return value === 0 ? '3' : value === 5 ? '2' : value === 10 ? '1' : '0';
  };


  console.log(data ? data : null, 'selo');

  return (
    <>

    {
      status===200?<div className='Tawawkraw pt-5 pb-5'>
      <div className="Home-Content">
        <div className="HawkarName">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">هاوکار:</label>
            <div className="form-control" id="exampleFormControlInput1">{data.NameH}</div>
          </div>
        </div>
        <div className="InformationAbout">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">ناو: </label>
            <div className="form-control" id="exampleFormControlInput1">{data.NameS}</div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">ڕەقەم: </label>
            <div className="form-control" id="exampleFormControlInput1">{data.Number}</div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">گەڕەک:</label>
            <div className="form-control" id="exampleFormControlInput1">{data.Place}</div>
          </div>
        </div>
        <div className="House">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">جۆری خانوو:{data.HouseValue}</label>
            <div className="form-control" id="exampleFormControlSelect1">{data.House}</div>
          </div>
        </div>
        <div className="Car">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">ئۆتۆمبێل:{data.CarValue}</label>
            <div className="form-control" id="exampleFormControlSelect1">{data.Car}</div>
          </div>
        </div>
        <div className="Loan">
          <div className="form-group">
            <div className="qarz">
              <label htmlFor="exampleFormControlSelect1">قەرزاری:{data.LoanValue}</label>
              <div className="form-control" id="exampleFormControlSelect1">{data.Loan}</div>
            </div>
            <div className="form-control numeric">{data.LoanValueAds}</div>
          </div>
        </div>
        <div className="wage">
          <div className="form-group">
            <div className="qarz">
              <label htmlFor="exampleFormControlSelect1">داهاتی مانگانە:{data.WageValue}</label>
              <div className="form-control" id="exampleFormControlSelect1">{data.Wage}</div>
            </div>
            <div className="form-control numeric">{data.WageValueAds}</div>
          </div>
        </div>
        <div className="children">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">منداڵەکان:{data.ChildrenValue}</label>
            <div className="form-control" id="exampleFormControlSelect1">{data.Children}</div>
          </div>
        </div>
        <div className="NumberSick">
          <div className="form-group">
            <div className="qarz">
              <label htmlFor="exampleFormControlSelect1">نەخۆشی تر:{data.SicksValue}</label>
              <div className="form-control" id="exampleFormControlSelect1">{data.Sicks}</div>
            </div>
            <div className="form-control numeric">{data.SicksValueAds}</div>
          </div>
        </div>
        <div className="Payment">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">تێچووی نەشتەرگەری:{data.PaymentValue}</label>
            <div className="form-control" id="exampleFormControlSelect1">{data.Payment}</div>
          </div>
        </div>
        <div className="trust">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">ڕاستگۆیی ماڵەکە:{data.TrustValue}</label>
            <div className="form-control" id="exampleFormControlSelect1">{data.Trust}</div>
          </div>
        </div>
        <div className="inf">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">هەڵسەنگاندنی هاوکارەکە ٣٠٪:{data.HDetailsValue}</label>
            <div className="form-control" id="exampleFormControlTextarea1" rows="3">{data.HDetails}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">انجامی کۆتایی</label>
          <div className="form-control" id="exampleFormControlTextarea1" rows="3">{data?data.AllSummation:null} {data?data.Accept==='Accept'?"قبوول کراوە":"قبوول نەکراوە":null}</div>
        </div>
      </div>
    </div>  :'please login again'
    }
      </>
  );
};
export default Formytawawkraw;