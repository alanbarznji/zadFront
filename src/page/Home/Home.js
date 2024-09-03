import { useEffect, useState } from "react";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Form_Post, Form_Posts, Halsangandn_Posts } from "../../Redux/Action/FormAction";
import MultiImageInput from "react-multiple-image-input";
const Home = () => {
    const [ID, setID] = useState(localStorage.getItem("ID"))
  const [formData, setFormData] = useState({
    NameH: '',
    NameS: '',
    Number: '',
    Place: '',
  });
  const [optionValues, setOptionValues] = useState({
    house: { IdValue: '0', text: '',value:'' },
    loan: { IdValue: '0', text: '',value:'', ValueAds:""},
    wage: { IdValue: '0', text: '',value:'',ValueAds:'' },
    children: { IdValue: '0', text: '',value:'' },
    numberSick: { IdValue: '0', text: '',value:'', ValueAds:""},
    payment: { IdValue: '0', text: '',value:'' },
    trust: { IdValue: '0', text: '',value:'' },
    Car: { IdValue: '0', text: '',value:'' }
  });
  const [img, setImg] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)

  const [Halsangandn, setHalsangandn] = useState({
      HDetails: '0',HDetailsValue:'' 
  
  });
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
 
const status=useSelector(state=> state.form.status)
const Id=useSelector(state=> state.form?state.form.data:state.form.data)
const err=useSelector(state=> state.form.err)
console.log('====================================');
console.log(status);
console.log('====================================');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  useEffect(()=>{
setID(localStorage.getItem("ID"))
  },[localStorage.getItem("ID")])
const Halsangand=async()=>{
  setID(localStorage.getItem(ID))
  setLoading(true)
  console.log(Id?Id.data?Id.data._id:null:null,"kdkdkkkdkkd");
 await dispatch(Halsangandn_Posts({id:ID,HDetails:Halsangandn.HDetails,HDetailsValue:Halsangandn.HDetailsValue})) 
  setLoading(false)

}
  const handleSelectChange = (e, field) => {
    const selectedOption = e.target.options[e.target.selectedIndex];

    setOptionValues((prevValues) => ({
      ...prevValues,
      [field]: { IdValue: e.target.value, text: selectedOption.text,value:e.target.value=="3"?0:null||e.target.value=="2"?5:null||e.target.value=="1"?10:null }
    }))
  };
 const FormDate=async()=>{
   console.log(ID);
  if(!ID){
const allimg=Array.from(Array(Object.keys(img).length).keys()).map(
  (item,index)=>{
    return dataURLtoFile(img[item],Math.random()+".png")
  }
)
console.log(allimg,"ldlldldldl");
    setLoading(true) 
 
  const formDatas = new FormData();
  formDatas.append('NameH', formData.NameH);
  formDatas.append('NameS', formData.NameS);
  formDatas.append('Number', formData.Number);
  formDatas.append('Place', formData.Place);
  formDatas.append('House', optionValues.house.text);
  formDatas.append('HouseValue', optionValues.house.value);
  formDatas.append('HouseValueId', optionValues.house.IdValue);
  formDatas.append('Car', optionValues.Car.text);
  formDatas.append('CarValue', optionValues.Car.value);
  formDatas.append('CarValueId', optionValues.Car.IdValue);
  formDatas.append('Loan', optionValues.loan.text);
  formDatas.append('LoanValueId', optionValues.loan.IdValue);
  formDatas.append('LoanValue', optionValues.loan.value);
  formDatas.append('LoanValueAds', optionValues.loan.ValueAds?optionValues.loan.ValueAds:0);
  formDatas.append('Wage', optionValues.wage.text);
  formDatas.append('WageValueId', optionValues.wage.IdValue);
  formDatas.append('WageValue', optionValues.wage.value);
  formDatas.append('WageValueAds', optionValues.wage.ValueAds?optionValues.wage.ValueAds:0);
  formDatas.append('Children', optionValues.children.text);
  formDatas.append('ChildrenValue', optionValues.children.value);
  formDatas.append('ChildrenValueId', optionValues.children.IdValue);
  formDatas.append('Sicks', optionValues.numberSick.text);
  formDatas.append('SicksValue', optionValues.numberSick.value);
  formDatas.append('SicksValueId', optionValues.numberSick.IdValue);
  formDatas.append('SicksValueAds', optionValues.numberSick.ValueAds?optionValues.numberSick.ValueAds:0);
  formDatas.append('Payment', optionValues.payment.text);
  formDatas.append('PaymentValue', optionValues.payment.value);
  formDatas.append('PaymentValueId', optionValues.payment.IdValue);
  formDatas.append('Trust', optionValues.trust.text);
  formDatas.append('TrustValue', optionValues.trust.value);
  formDatas.append('TrustValueId', optionValues.trust.IdValue);
  allimg.map(e=>formDatas.append('image',e))
  await dispatch(Form_Posts(formDatas));

  setLoading(false); 
  }else{
    toast.error("تکایە هەڵسەنگاندنی فۆرما کۆناکات ماوە")
  }
 
 
  
 }
 function dataURLtoFile(dataurl, filename) {
console.log(dataurl,filename,"dlddllllll");
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }
 const onImageChange = (event) => {
  setSelectedFile(Array.from(Array(Object.keys(img).length).keys).map(
    (item,index)=>{
      return dataURLtoFile(img[item],Math.random()+".png")
    }
  ))
      console.log(selectedFile);
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

    if(!Loading){
      if(status === 201){
        toast.success('Form submitted successfully');
        setID(localStorage.getItem("ID"))
      }
       else if (status === 202) {
        toast.success('Form submitted successfully');
        localStorage.removeItem("ID")
        window.location.reload()
      }
       else if (err && err.error && err.error.length > 0 && err.error[0].msg) {
        toast.error(err.error[0].msg);
      }
    }
  },[Loading,err,status])
 console.log(img,"dkkdkdk");
  return (
    <div className="Home">
      
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
              
              defaultValue={0}
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
              defaultValue={0}
              type="number"
              className="numeric"
            />
          </div>
        </div>
        <div className="children">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">منداڵەکان</label>
            <select onChange={(e) => handleSelectChange(e, 'children')} className="form-control" id="exampleFormControlSelect1">
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
              defaultValue={0}
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
        <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="300px"
                                width="320px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <MultiImageInput 
                        images={img}
                        setImages={setImg}
                        theme={'light'}
                        cropConfig={true}
                        max={5}
                        />
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
        <div className="insertButton">
          <button onClick={FormDate} className={'btn'}>ناردن</button>
        </div>
        <div className="line"></div>
        <div className="inf">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">هەڵسەنگاندنی هاوکارەکە ٣٠٪</label>
            <textarea name="HDetails" onChange={HandleHalsangandn} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            
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
        </div>
        <div className="insertButton">
          <button onClick={Halsangand} className={'btn'}>ناردن</button>
        </div>
      </div>

    </div>
  );
};

export default Home;
