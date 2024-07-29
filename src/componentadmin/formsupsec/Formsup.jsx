import React, { useContext } from 'react'
import "./formsup.scss"

import { useState,useEffect } from 'react';
import axios from 'axios';

import {Link, useNavigate} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { User } from '../../pages/context/Contextuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Formsup= () => {

  const [statee,setstate]= useState([]);
  
  const [loading,setload]= useState(true);

  
  const navigate=useNavigate();
  const [namear,setfirst]=useState('');
  const [nameen,setlast]=useState('');
 
  const[numb,setnumb]=useState('');
  const[pric,setpric]=useState('');
  const contex = useContext(User);

const  token= contex.auth.tocken;

const handlefirst =(e)=>{
  setfirst(e.target.value)
}
const handlelast =(e)=>{
  setlast(e.target.value)
}
const handlenum =(e)=>{
  setnumb(e.target.value)
}
const  handlepric=(e)=>{
    setpric(e.target.value)
  }



  const handlesubmi = async (e)=>{
   
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/subscriptions',{
        name_ar:namear,
        name_en:nameen,
        daysNumber:numb,
        price:pric,
        
      
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
          Swal.fire('Saved!',resp.data.message,'success',navigate("/admin/listsupsecrption"))
       
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
    <div className='formsub'>
  <ToastContainer/>
    <div className='Listcontainer'>
   
    <h2>addsupsecreption</h2>

    {loading ?      <div className='items'>
    <div className='faild'>

         <form >
              <div className='content'>
                <div className='inputbox'>
                    <lable for="firstname">الإسم بالعربي</lable>
                    <input type="text" value={namear} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">الإسم بالانكيزي</lable>
                    <input type="text" value={nameen} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="number">عدد الأيام</lable>
                    <input type="text" value={numb} onChange={handlenum} name='number' />


                </div>
                <div className='inputbox'>
                    <lable for="email">السعر</lable>
                    <input type="email" name='email'  value={pric} onChange={handlepric} />

                </div>
                <div className='boton' > 
                <div className='bot'>
                    <button onClick={handlesubmi}>Save</button>
                </div>
                <Link to="/admin/listsupsecrption" style={{textDecoration:"none"}}>
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

export default Formsup