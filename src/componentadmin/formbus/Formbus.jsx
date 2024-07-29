import React, { useContext } from 'react'
import "./formbus.scss"

import { useState,useEffect } from 'react';
import axios from 'axios';

import {Link, useNavigate} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { User } from '../../pages/context/Contextuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Formbus= () => {

  const [statee,setstate]= useState([]);
  
  const [loading,setload]= useState(true);

  
  const navigate=useNavigate();
  const [keys,setkey]=useState('');
  const [capacitys,setcapacity]=useState('');
 
  const[images,setimage]=useState('');
  const[pric,setpric]=useState('');
  const contex = useContext(User);

const  token= contex.auth.tocken;

const handlefirst =(e)=>{
  setkey(e.target.value)
}
const handlelast =(e)=>{
  setcapacity(e.target.value)
}
const handlenum =(e)=>{
  setimage(e.target.files[0])
}
const  handlepric=(e)=>{
    setpric(e.target.value)
  }



  const handlesubmi = async (e)=>{
    const formdata= new FormData();
    formdata.append('image',images)
   console.log(formdata)
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/buses',{
       key:keys,
       capacity:capacitys,
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
          Swal.fire('Saved!',resp.data.message,'success',navigate("/admin/listbuses"))
       
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
 
    
    
   },[])
  return (
    <div className='formbuss'>
  <ToastContainer/>
    <div className='Listcontainer'>
   
    <h2>addsupsecreption</h2>

    {loading ?      <div className='items'>
    <div className='faild'>

         <form >
              <div className='content'>
                <div className='inputbox'>
                    <lable for="firstname">نوع الباص</lable>
                    <input type="text" value={keys} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">عدد المقاعد</lable>
                    <input type="text" value={capacitys} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="image">اختر صورة</lable>
                    <input type="file" name='file' onChange={handlenum}/>

                </div>
                <div className='inputbox'>
                    <lable for="email">التفاصيل</lable>
                    <input type="email" name='email'  value={pric} />

                </div>
                <div className='boton' > 
                <div className='bot'>
                    <button onClick={handlesubmi}>Save</button>
                </div>
                <Link to="/admin/listbuses" style={{textDecoration:"none"}}>
                <div className='bot'>
                    <button>back</button>
                </div></Link>
                </div>
              </div>

           </form>


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

export default Formbus