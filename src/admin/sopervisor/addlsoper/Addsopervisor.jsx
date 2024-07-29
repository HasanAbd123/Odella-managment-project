import React, { useContext } from 'react'
import "./addsopervisor.scss"

import { useState,useEffect } from 'react';
import axios from 'axios';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin';
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin';
import { User } from '../../../pages/context/Contextuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

import {Link, useNavigate} from 'react-router-dom';

const Addsopervisor = () => {

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
  const [images,setimage]=useState('');
  const [first,setfirst]=useState('');
  const [last,setlast]=useState('');
  const navigate=useNavigate();
  const[numb,setnumb]=useState('');
  const contex = useContext(User);
  const[emaile,setemail]=useState('')
  const[passwor,setpass]=useState('')
  const[streets,setstreet]=useState('')
  const[cityid,setcityid]=useState('')
  const[areaid,setareaid]=useState('')
  const[citarr,setcitarr]=useState([])
  const[areaarr,setcareaarr]=useState([])
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

const handleemail =(e)=>{
  setemail(e.target.value)
}

const handlepasword =(e)=>{
  setpass(e.target.value)
}
const handlestreet=(e)=>{
  setstreet(e.target.value)
}
const handlecity=(e)=>{
  setcityid(e.target.value)
}

const handlearea=(e)=>{
  setareaid(e.target.value)
}

  const fetchcity= async () => {

   
    try{
     const response= await axios.get('https://yaamen1.com/api/cities',{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
        setcitarr(response.data.data.data)
     
     setload(true);
   
     }catch(error){ console.log(error.response);
     
 
     }
  }

  const fetcharea= async () => {

   
    try{
     const response= await axios.get('https://yaamen1.com/api/areas',{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
        setcareaarr(response.data.data)
     
     setload(true);
   
     }catch(error){ console.log(error.response);
     
 
     }
  }
 

  const handlesubmi = async (e)=>{
    const formdata= new FormData();
    formdata.append('image',images)
   console.log(formdata)
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/supervisors',{
        firstName:first,
        lastName:last,
        email:emaile,
        password:passwor,
        phoneNumber:numb,
        city_id:cityid,
        area_id:areaid,
        street:streets,
        image:images,

      }
       
    ,{
          
      headers:{
        Authorization:"Bearer" +token,
        'Content-Type':'multipart/form-data',
  
      }});
      console.log(resp.data)
      
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!',resp.data.message,'success',navigate("/admin/listsopervisor"))
       
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
       
      })

  }catch(error){
      console.log(error.response);
      if(error.response.status==422){
        
        toast.error(error.response.data.message,{position:"top-center",theme:'colored'});
        
      }
    }
  }
  
  
   useEffect(() => {
 
     fetchcity();
     fetcharea();
    
    
   },[])
  return (
    <div className='List'>
    <ToastContainer/>
    <Sidbaradmin/>
    <div className='Listcontainer'>
    <Navbaradmin/>
    <h2>addSoupervisor</h2>

    {loading ?      <div className='items'>
    <div className='failds'>

       
           <form >
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
                    <input type="text" value={numb}onChange={handlenum} name='number' />


                </div>
                <div className='inputbox'>
                    <lable for="email">البريد الالكتروني</lable>
                    <input type="email" name='email'value={emaile} onChange={handleemail}/>

                </div>
                <div className='inputbox'>
                    <lable for="email">كلمة السر</lable>
                    <input type="email" name='email'value={passwor} onChange={handlepasword}/>

                </div>
                <div className='inputbox'>
                    <lable for="email">الشارع</lable>
                    <input type="email" name='email'value={streets} onChange={handlestreet}/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">اختر المدينة</lable>
                    <select  className='sel' name='country'  onChange={(e)=>handlecity(e)}>
                    <option className='option'>--sub--</option>
                    {citarr.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
                </select></div>

                <div className='inputbox'>
                    <lable for="firstname">اختر المنطقة</lable>
                    <select  className='sel' name='country'  onChange={(e)=>handlearea(e)}>
                    <option className='option'>--sub--</option>
                    {areaarr.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
                </select></div>
              <div className='boton' > 
              <div className='bots'>
                    <button onClick={handlesubmi}>Save</button>
                </div>
                <Link to="/admin/listsopervisor" style={{textDecoration:"none"}}>
                <div className='bots'>
                    <button>back</button>
                </div></Link>
                </div>
              </div>

           </form>


     </div>


     <div className='images'>
       
          <div className='photo'>
           <img src={`https://yaamen1.com/storage/${statee && statee.image} `} className='persphoto' alt='phto'/>
           
          </div>
          <div className='inputboxs'>
                    <lable for="image">اختر صورة</lable>
                    <input type="file" name='file' onChange={handleimage}/>

                </div>
          <h3> </h3> 
          <h3> </h3> 
          <h3> </h3> 
         

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

export default Addsopervisor