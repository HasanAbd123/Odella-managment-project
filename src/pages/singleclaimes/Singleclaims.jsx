import React, { useContext } from 'react'
import "./singleclaim.scss"
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { User } from '../context/Contextuser';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Singleclaims = () => {
  const { t } = useTranslation();

  const [statee,setstate]= useState([]);
  const [statedit,setstatedit]= useState([]);
  const [loading,setload]= useState(false);
  const [apdatemploy,setapp]=useState({
    firstName:'ahmad',
    lastName:'',
    phoneNumber:'',
    area_id:2,
    street:'dssdssddsdssd'
  })

  const{singleclaim}=useParams()
  const [images,setimage]=useState('');
  const [first,setfirst]=useState('');
  const [last,setlast]=useState('');
  const[edit,setedit]=useState(false)
  const[numb,setnumb]=useState('');
  const contex = useContext(User);

const  token= contex.auth.tocken;
 const handleimage =(e)=>{
  setimage(e.target.files[0])
 }
const handlefirst =(e)=>{
  setfirst(e.target.value)
}
const handlelast =(e)=>{
  setlast(e.target.value)
}
const handlenum =(e)=>{
  setnumb(e.target.value)
}
console.log(images)
  const fetchaxios= async () => {

   
    try{
     const response= await axios.get('https://yaamen1.com/api/auth/profile',{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
        setstate(response.data.data)
     console.log(statee.lastName)
     setload(true);
   
     }catch(error){ console.log(error.response);
     
 
     }
  }
  const handeledit= async (e) => {
        e.preventDefault()
        setedit(true)
   
    try{
     const response= await axios.get('https://yaamen1.com/api/auth/profile',{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
        setstatedit(response.data.data)
        setfirst(response.data.data.firstName)
        setlast(response.data.data.lastName)
        setnumb(response.data.data.phoneNumber)
     console.log(statedit.lastName)
    
   
     }catch(error){ console.log(error.response);
     
 
     }
  }

  const handlesubmi = async (e)=>{
    const formdata= new FormData();
    formdata.append('image',images)
   console.log(formdata)
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/employees/3 ?_method=PUT',{
        firstName:first,
        lastName:last,
        phoneNumber:numb,
        area_id:2,
        street:'dssdssddsdssd ',
        image:images,

      }
       
    ,{
          
      headers:{
        Authorization:"Bearer" +token,
        'Content-Type':'multipart/form-data',
  
      }});
      console.log(resp.data)
      alert(resp.data.message);
      



  }catch(error){
      console.log(error.response);

    }
  }
  
  
   useEffect(() => {
 
     fetchaxios();
    
    
   },[])
  return (
    <div className='Listc'>
    <Sidebar/>
    <div className='Listcontainer'>
    <Navbar/>
    <h2>userprofile</h2>

    {loading ?      <div className='items'>
    <div className='faild'>

        {edit?  <form >
              <div className='content'>
                <div className='inputbox'>
                    <lable for="firstname">الإسم الأول</lable>
                    <input type="text" value={first} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">اسم العائلة</lable>
                    <input type="text" value={last} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="number">الرقم</lable>
                    <input type="text" value={numb} onChange={handlenum} name='number' />


                </div>
                <div className='inputbox'>
                    <lable for="email">البريد الالكتروني</lable>
                    <input type="email" name='email'value={statee && statee.email}/>

                </div>
                <div className='boton' > 
                <div className='bot'>
                    <button onClick={handlesubmi}>Save</button>
                </div>
                <div className='bot'>
                    <button onClick={handeledit}>Edit</button>
                </div></div>
              </div>

           </form>:
           <form >
              <div className='content'>
                <div className='inputbox'>
                    <lable for="firstname">الإسم الأول</lable>
                    <input type="text" value={statee && statee.firstName} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">اسم العائلة</lable>
                    <input type="text" value={statee && statee.lastName} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="number">الرقم</lable>
                    <input type="text" value={statee && statee.phoneNumber}onChange={handlenum} name='number' />


                </div>
                <div className='inputbox'>
                    <lable for="email">البريد الالكتروني</lable>
                    <input type="email" name='email'value={statee && statee.email}/>

                </div>
               
              <div className='boton' > 
              <div className='bot'>
                    <button onClick={handlesubmi}>Save</button>
                </div>
                <div className='bot'>
                    <button onClick={handeledit}>Edit</button>
                </div>
                </div>
              </div>

           </form>}


     </div>


     <div className='image'>
       
          <div className='photo'>
           <img src={`https://yaamen1.com/storage/${statee && statee.image} `} className='persphoto' alt='phto'/>
           
          </div>
          <div className='inputboxs'>
                    <lable for="image">اختر صورة</lable>
                    <input type="file" name='file' onChange={handleimage}/>

                </div>
          <h3> {statee && statee.firstName}</h3> 
          <h3> {statee && statee.email}</h3> 
          <h3> {statee && statee.phoneNumber}</h3> 
         

     </div>
    

    </div>: <Backdrop
        sx={{ backgroundColor:'inherit' , margin:'100px  40% 100px 0', width:'500px', color: '#111',
         zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>}
    </div>
    </div>
  )
}

export default Singleclaims