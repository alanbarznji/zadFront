import React, { useEffect, useState } from 'react';
import './hawkar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Hawkar_Delete, Hawkar_Gets, Hawkar_Posts } from '../../Redux/Action/HawkarAction';

const Hawkar = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [Name, setName] = useState('');
    const [Id, setId] = useState('');
    const handleDelete = (e) => {
        setId(e.target.id)
        setShowConfirmation(true);
    };
    const handleConfirmDelete =async () => {
    await dispatch(Hawkar_Delete(Id))
        setShowConfirmation(false);
    };
    const handleCancelDelete = () => {
        // Close confirmation modal
        setShowConfirmation(false);
    };
    const dispatch=useDispatch()
    const status=useSelector(state=>state.hawkar.status)

    useEffect(()=>{
        dispatch(Hawkar_Gets())
    },[dispatch])
    const data=useSelector(state=>state.hawkar.GetData)
 
    return (
    <>
 
        {
        <div className='Hawkar'>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">هاوکار:</label>
                    <input type="text" onChange={(e)=>{
                        setName(e.target.value)
                    }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ناو"/>
                </div>
                <div className='insertButton hawkarContainerButton d-flex justify-content-start mt-3'>
                    <button type="submit" onClick={async()=>{
await dispatch(Hawkar_Posts(Name))
                    }} className="btn hawkarButton btn-sm">زیاد کردن</button>
                </div>
            </form>
    
            <div className='HawkarList d-flex flex-column '>
                <h3 className='text-center mb-5'>لیستی هاوکارەکان</h3>
                <div className='list d-flex flex-column overflow-auto'>
                    
                    
                {
                     data.data?data.data.map(e=>{
                    
                            return <div className='listItem  d-flex flex-row'>
                        <p>{e.NameH}</p>
                        <button className='btn btn-sm btn-danger' id={e._id} onClick={handleDelete}>سڕینەوە</button>
                    </div>
                        
                     }):'wait'

                }             
                </div>
            </div>

            {/* Confirmation Modal */}
            <div className={`modal fade ${showConfirmation ? 'show' : ''}`} style={{ display: showConfirmation ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header headerAlert">
                            <h5 className="modal-title">سڕینەوە</h5>
                            <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
                        </div>
                        <div className="modal-body">
              دلنیای اتەوێت بیسریتەوە؟
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>No</button>
                            <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-backdrop fade ${showConfirmation ? 'show' : ''}`} style={{ display: showConfirmation ? 'block' : 'none' }}></div>
        </div>
        }
          </>
    );
}

export default Hawkar;
