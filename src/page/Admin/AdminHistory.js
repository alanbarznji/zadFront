import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminHistory.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form_Gets } from '../../Redux/Action/FormAction';

const AdminHistory = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(Form_Gets('Accept'));
  }, [dispatch]);

  const data = useSelector(state => state.form ? state.form.GetData ? state.form.GetData.data : null : null);
  const status = useSelector(state =>  state.form.status);

  // Filter function for search
  const filteredData = data ? data.filter(item => {
    return item.NameS.toLowerCase().includes(searchTerm.toLowerCase());
  }) : [];

  return (
    <>
  {status===200?
      <div className='History'>
      <div className='mt-5 text-center'>فۆڕمە کۆنەکان</div>
      <div className='get_form d-flex flex-column'>
        <input
          type="search"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="ناوی نەخۆش"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <button onClick={async () => {
            await dispatch(Form_Gets("Accept"));
          }} className='btn btn-success btn-outline-success'>وەرگیراوەکان </button>
          <button onClick={async () => {
            await dispatch(Form_Gets("NotAccept"));
          }} className='btn btn-success btn-outline-success'>وەرنەگیراوەکان </button>
        </div>
      </div>

      {filteredData.length > 0 ? (
        filteredData.map((e) => (
          <Link key={e._id} to={`/Formytawawkraw/${e._id}`} className='hawkarakan mt-5 d-flex text-center justify-content-center align-item-center row'>
            <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.NameH}</div>
            <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.NameS}</div>
            <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.Place}</div>
            <div className='col-12 col-sm-12 col-lg-3 text-light'>{e.Number}</div>
          </Link>
        ))
      ) : (
        <div className="mt-3 text-center text-muted">هیچ زانیاریەک نەدۆزرایەوە</div>
      )}

    </div>:"tkaya login bka "
  }  
    </>

  );
}

export default AdminHistory;
