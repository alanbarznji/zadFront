import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Form_Posts, Form_Puts, Form_one_Gets, Halsangandn_Posts } from '../../Redux/Action/FormAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const FormyPrkraw = () => {
const {id}=useParams()

const status=useSelector(state=> state.form.status)
const data=useSelector(state=> state.form?state.form.GetOneData?state.form.GetOneData.data:null:null)
const err=useSelector(state=> state.form.err)

  const [formData, setFormData] = useState({
    NameH: null,
    NameS: null,
    Number: null,
    Place: null,
  });
  const [Halsangandn, setHalsangandn] = useState({
    HDetails: null, HDetailsValue: null
  });
  const [optionValues, setOptionValues] = useState({
    house: { IdValue: '0', text: null, value: null },
    loan: { IdValue: '0', text: null, value: null },
    wage: { IdValue: '0', text: null, value: null },
    children: { IdValue: '0', text: null, value: null },
    numberSick: { IdValue: '0', text: null, value: null },
    payment: { IdValue: '0', text: null, value: null },
    trust: { IdValue: '0', text: null, value: null },
    Car: { IdValue: '0', text: null, value: null }
  });
useEffect(()=>{
 dispatch(Form_one_Gets(id))
},[status,id])
useEffect(() => {
  if (data) {
    setFormData({
      NameH: data.NameH,
      NameS: data.NameS,
      Number: data.Number,
      Place: data.Place,
    });
    setOptionValues({
      house: { IdValue: getOptionIdValue(data.HouseValue), text: data.House, value: data.HouseValue },
      loan: { IdValue: getOptionIdValue(data.LoanValue), text: data.Loan, value: data.LoanValue ,ValueAds:data.LoanValueAds},
      wage: { IdValue: getOptionIdValue(data.WageValue), text: data.Wage, value: data.WageValue,ValueAds:data.LoanValueAds },
      children: { IdValue: getOptionIdValue(data.ChildrenValue), text: data.Children, value: data.ChildrenValue  },
      numberSick: { IdValue: getOptionIdValue(data.SicksValue), text: data.Sicks, value: data.SicksValue ,ValueAds:data.LoanValueAds},
      payment: { IdValue: getOptionIdValue(data.PaymentValue), text: data.Payment, value: data.PaymentValue },
      trust: { IdValue: getOptionIdValue(data.TrustValue), text: data.Trust, value: data.TrustValue },
      Car: { IdValue: getOptionIdValue(data.CarValue), text: data.Car, value: data.CarValue }
    });
    setHalsangandn({
      HDetails: data.HDetails, HDetailsValue: data.HDetailsValue
    });
  }
}, [data]);
const getOptionIdValue = (value) => {
  return value === 0 ? '3' : value === 5 ? '2' : value === 10 ? '1' : '0';
};
 
  const [Loading, setLoading] = useState(true);
  const dispatch=useDispatch()
const HandleHalsangandn=(e)=>{
  const {name,value}=e.target
 
    setHalsangandn((prev)=>({
      ...prev,
      [name]:value
    })
  )
 
}
console.log(data?data.image:null,'selo');
  const handleInputChange = (e) => {
  
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSelectChange = (e, field) => {
    const selectedOption = e.target.options[e.target.selectedIndex];

    setOptionValues((prevValues) => ({
      ...prevValues,
      [field]: { IdValue: e.target.value, text: selectedOption.text,value:e.target.value=="3"?0:null||e.target.value=="2"?5:null||e.target.value=="1"?10:null }
    }))
  };
  console.log(optionValues);
 const FormDate=async(e)=>{
  setLoading(true) 
  console.log(formData,e.target.value,'seo');
  await dispatch(Form_Puts({
    id:id,
    NameH: formData.NameH,
    NameS: formData.NameS,
    Number: formData.Number,
    Place: formData.Place,
    House: optionValues.house.text,
    HouseValue: optionValues.house.value,
    HouseValueId: optionValues.house.IdValue,
    Car: optionValues.Car.text,
    CarValue: optionValues.Car.value,
    CarValueId: optionValues.Car.IdValue,
    Loan: optionValues.loan.text,
    LoanValueId: optionValues.loan.IdValue,
    LoanValue: optionValues.loan.value,
    LoanValueAds: optionValues.loan.ValueAds,
    Wage: optionValues.wage.text,
    WageValueId: optionValues.wage.IdValue,
    WageValue: optionValues.wage.value,
    WageValueAds: optionValues.wage.ValueAds,
    Children: optionValues.children.text,
    ChildrenValue: optionValues.children.value,
    ChildrenValueId: optionValues.children.IdValue,
    Sicks: optionValues.numberSick.text,
    SicksValue: optionValues.numberSick.value,
    SicksValueId: optionValues.numberSick.IdValue,
    SicksValueAds: optionValues.numberSick.ValueAds,
    Payment: optionValues.payment.text,
    PaymentValue: optionValues.payment.value,
    PaymentValueId: optionValues.payment.IdValue,
    Trust: optionValues.trust.text,
    TrustValue: optionValues.trust.value,
    TrustValueId: optionValues.trust.IdValue,
    HDetails:Halsangandn.HDetails,
    HDetailsValue:Halsangandn.HDetailsValue,
    Accept:"NotAccept",
    complete:true
  }));

  setLoading(false)
  
 }
 const FormDate1=async(e)=>{
  setLoading(true) 
  console.log(formData,e.target.value,'seo');
  await dispatch(Form_Puts({
    id:id,
    NameH: formData.NameH,
    NameS: formData.NameS,
    Number: formData.Number,
    Place: formData.Place,
    House: optionValues.house.text,
    HouseValue: optionValues.house.value,
    HouseValueId: optionValues.house.IdValue,
    Car: optionValues.Car.text,
    CarValue: optionValues.Car.value,
    CarValueId: optionValues.Car.IdValue,
    Loan: optionValues.loan.text,
    LoanValueId: optionValues.loan.IdValue,
    LoanValue: optionValues.loan.value,
    LoanValueAds: optionValues.loan.ValueAds,
    Wage: optionValues.wage.text,
    WageValueId: optionValues.wage.IdValue,
    WageValue: optionValues.wage.value,
    WageValueAds: optionValues.wage.ValueAds,
    Children: optionValues.children.text,
    ChildrenValue: optionValues.children.value,
    ChildrenValueId: optionValues.children.IdValue,
    Sicks: optionValues.numberSick.text,
    SicksValue: optionValues.numberSick.value,
    SicksValueId: optionValues.numberSick.IdValue,
    SicksValueAds: optionValues.numberSick.ValueAds,
    Payment: optionValues.payment.text,
    PaymentValue: optionValues.payment.value,
    PaymentValueId: optionValues.payment.IdValue,
    Trust: optionValues.trust.text,
    TrustValue: optionValues.trust.value,
    TrustValueId: optionValues.trust.IdValue,
    HDetails:Halsangandn.HDetails,
    HDetailsValue:Halsangandn.HDetailsValue,
    Accept: "Accept",
    complete:true
  }));

  setLoading(false)
  
 }
  const getMinValue = (option) => {
    if (option.IdValue === '1') return -10;
    if (option.IdValue === '2') return -5;
    if (option.IdValue === '3') return 0;
    return 0;
  };

  const getMaxValue = (option) => {
    if (option.IdValue === '1') return 0;
    if (option.IdValue === '2') return 5;
    if (option.IdValue === '3') return 10;
    return 0;
  };
  useEffect(()=>{
    console.log('====================================');
    console.log(Loading);
    console.log('====================================');
    if(!Loading){
      if(status === 200){
        toast.success('Form submitted successfully');
              window.location.href ='/AdminHome'
      } else if (err && err.error && err.error.length > 0 && err.error[0].msg) {
        toast.error(err.message);
      }
    }
  },[Loading,err,status])
 
  return (
    <>

    {status===200?
     <div className="Home">
            <div className='mt-5 text-center' > انجامی گشتی {data?data.AllSummation:null}</div>
      <ToastContainer />

      <div className="Home-Content">
        <div className="HawkarName">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">هاوکار:</label>
            <input onChange={handleInputChange} name="NameH" value={formData.NameH} type="email" className="form-control" id="exampleFormControlInput1" placeholder="ناوی هاوکار" />
          </div>
        </div>
        <div className="InformationAbout">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">ناو </label>
            <input onChange={handleInputChange} name="NameS" value={formData.NameS}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="ناو" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">ڕەقەم </label>
            <input onChange={handleInputChange} name="Number" value={formData.Number}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="ڕەقەم" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">گەڕەک </label>
            <input onChange={handleInputChange} name="Place" value={formData.Place}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="ڕەقەم" />
          </div>
        </div>
        <div className="House">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">جۆری خانوو</label>
            <select    onChange={(e) => handleSelectChange(e, 'house')}     value={optionValues.house.IdValue}  className="form-control" id="exampleFormControlSelect1">
              <option value={'0'}>...</option>
              <option value={'1'} className="success">خانووەکە کرێیە یان موڵكە و کۆنە یان وەرەسەیە</option>
              <option value={'2'} className="warning">خانووەکە موڵک و مام ناوەندە.</option>
              <option value={'3'} className="danger">خانووەکە موڵك و تازەیە.</option>
            </select>
          </div>
        </div>
        <div className="Car">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">ئۆتۆمبێل</label>
            <select onChange={(e) => handleSelectChange(e, 'Car')} value={optionValues.Car.IdValue}  className="form-control" id="exampleFormControlSelect1">
              <option value={'0'}>...</option>
              <option value={'1'} className="success"> ئۆتۆمبێلی نیە یان نرخەکەی ٤٠ گەڵا کەمترە.</option>
              <option value={'2'} className="warning">رخی ئۆتۆمبێلەکەی ٤٠ - ٧٥ گەڵایە.</option>
              <option value={'3'} className="danger"> نرخی ئۆتۆمبێلەکەی ٧٥ گەڵا بەسەرەوەیە.</option>
            </select>
          </div>
        </div>
        <div className="Loan">
          <div className="form-group">
            <div className="qarz">
              <label htmlFor="exampleFormControlSelect1">قەرزاری</label>
              <select
                value={optionValues.loan.IdValue}
                onChange={(e) => handleSelectChange(e, 'loan')}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option value={'0'}>...</option>
                <option value={'1'} className="success">بڕی ملیۆنێك یان زیاتر قەرزارە</option>
                <option value={'2'} className="warning">بڕی قەرز ملیۆنێك کەمتر</option>
                <option value={'3'} className="danger">قەرزار نییە</option>
              </select>
            </div>
            <input
              min={getMinValue(optionValues.loan)}
              max={getMaxValue(optionValues.loan)}
              onChange={(e)=>{
 
              if(e.target.value>getMaxValue(optionValues.loan)||e.target.value<getMinValue(optionValues.loan)){
              toast("Wow so easy!")
              e.target.value=0
              }
              const wages=optionValues.wage
 
              setOptionValues((prevValues) => ({
                ...prevValues,
                loan: {IdValue:  optionValues.loan.IdValue, text:  optionValues.loan.text,value:optionValues.loan.value,ValueAds:e.target.value }
              }))
              }}
              
              defaultValue={optionValues.loan.ValueAds}
              type="number"
              className="numeric"
            />
          </div>
        </div>
        <div className="wage">
          <div className="form-group">
            <div className="qarz">
              <label htmlFor="exampleFormControlSelect1">داهاتی مانگانە</label>
              <select
                value={optionValues.wage.IdValue}
                onChange={(e) => handleSelectChange(e, 'wage')}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option value={'0'}>...</option>
                <option value={'1'} className="success">  داهاتی مانگانەی نەخۆش ٣٥٠ هەزار کەمترە</option>
                <option value={'2'} className="warning"> داهاتەکەی ٣٥٠-٦٠٠ هەزارە</option>
                <option value={'3'} className="danger">  داهاتەکەی ٦٠٠ هەزار زیاترە</option>
              </select>
            </div>
            <input
              min={getMinValue(optionValues.wage)}
              max={getMaxValue(optionValues.wage)}
              onChange={(e)=>{
 
              if(e.target.value>getMaxValue(optionValues.wage)||e.target.value<getMinValue(optionValues.wage)){
              toast("Wow so easy!")
              e.target.value=0
              } 
              setOptionValues((prevValues) => ({
                ...prevValues,
                wage: {IdValue:  optionValues.wage.IdValue, text:  optionValues.wage.text,value:optionValues.wage.value,ValueAds:e.target.value }
              }))
              }}
              defaultValue={optionValues.wage.ValueAds}
              type="number"
              className="numeric"
            />
          </div>
        </div>
        <div className="children">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">منداڵەکان</label>
            <select       value={optionValues.children.IdValue} onChange={(e) => handleSelectChange(e, 'children')} className="form-control" id="exampleFormControlSelect1">
              <option value={'0'}>...</option>
              <option value={'1'} className="success">ماڵەکە منداڵی ورد و قوتابیان هەیە</option>
              <option value={'2'} className="warning">ماڵەکە منداڵیان نیە</option>
              <option value={'3'} className="danger"> ماڵەکە منداڵی گەورەیان هەیە و کار دەکەن</option>
            </select>
          </div>
        </div>
        <div className="NumberSick">
          <div className="form-group">
            <div className="qarz">
              <label htmlFor="exampleFormControlSelect1">نەخۆشی تر</label>
              <select
                value={optionValues.numberSick.IdValue}
                onChange={(e) => handleSelectChange(e, 'numberSick')}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option value={'0'}>...</option>
                <option value={'1'} className="warning">ئەو ماڵە نەخۆشی تریان هەیە </option>
                <option value={'3'} className="danger"> ماڵەکە نەخۆشی تریان نیە.</option>
              </select>
            </div>
            <input
              min={getMinValue(optionValues.numberSick)}
              max={getMaxValue(optionValues.numberSick)}
              defaultValue={optionValues.numberSick.ValueAds}
              onChange={(e)=>{
 
              if(e.target.value>getMaxValue(optionValues.numberSick)||e.target.value<getMinValue(optionValues.numberSick)){
              toast("Wow so easy!")
              e.target.value=0
              }
              setOptionValues((prevValues) => ({
                ...prevValues,
                numberSick: {IdValue:  optionValues.numberSick.IdValue, text:  optionValues.numberSick.text,value:optionValues.numberSick.value,ValueAds:e.target.value }
              }))
              }}
              
              type="number"
              className="numeric"
            />
          </div>
        </div>
        <div className="Payment">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">تێچووی نەشتەرگەری</label>
            <select value={optionValues.payment.IdValue} onChange={(e) => handleSelectChange(e, 'payment')} className="form-control" id="exampleFormControlSelect1">
              <option value={'0'}></option>
              <option value={'1'} className="success"> تێچووی نەشتەرگەری ملیۆن و نیوێک زیاتر</option>
              <option value={'2'} className="warning">٥٠٠ هەزار بۆ ملیۆن و نیو</option>
              <option value={'3'} className="danger">٥٠٠ هەزار کەمتر</option>
            </select>
          </div>
        </div>
        <div className="trust">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">ڕاستگۆیی ماڵەکە</label>
            <select value={optionValues.trust.IdValue} onChange={(e) => handleSelectChange(e, 'trust')} className="form-control" id="exampleFormControlSelect1">
              <option value={'0'}>....</option>
              <option value={'1'} className="success">ماڵەکە ڕاستگۆبوون لە پێدانی زانیاریەکانیان</option>
              <option value={'2'} className="warning">ە یەك خاڵی بچوك ڕاستگۆ نەبوون</option>
              <option value={'3'} className="danger">لە یەك خاڵی گەورە یاخود زیاتر ڕاستگۆ نەبوون </option>
            </select>
          </div>
        </div>
        {/* <div className="insertButton">
          <button onClick={FormDate} className={'btn'}>ناردن</button>
        </div>
        <div className="line"></div> */}
        <div className="inf">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">هەڵسەنگاندنی هاوکارەکە ٣٠٪</label>
            <textarea name="HDetails" value={Halsangandn.HDetails}  onChange={HandleHalsangandn} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            
            <input name="HDetailsValue" value={Halsangandn.HDetailsValue} onChange={(e)=>{
  const {name,value}=e.target
 if(value>30||value<0){
  toast.success('hahaha')
  setHalsangandn((prev)=>({
    ...prev,
    HDetailsValue:0
  })
)
 }
 else{
      setHalsangandn((prev)=>({
      ...prev,
      HDetailsValue:value
    })
  )
  e.preventDefault=true
 }

 
}} type="number" className="numeric"/>
          </div>
          <div>
            {
              data.image.map((e)=>{
                console.log(e,"jdksjdkjjsk");
                return<label for="upload-photo" className='pt-5'>
                    <img
                        src={e}
                        alt="fzx"
                        height="300px"
                        width="100%"
                        style={{ cursor: "pointer" }}
                    />
                </label>

              })
            }
                    </div>
        </div>
        <div className="insertButton d-flex justify-content-around pt-5">
          <button onClick={FormDate1} className={'btn'}>وەرگرتن</button>
          <button onClick={FormDate} className={'btn'}>رەفز کردن</button>
        </div>
      </div>

    </div>:null}    </>
  )
}

export default FormyPrkraw
