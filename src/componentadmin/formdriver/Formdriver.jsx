import React, { useContext } from 'react'
import "./formdriver.scss"

import { useState,useEffect } from 'react';
import axios from 'axios';

import {Link, useNavigate} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { User } from '../../pages/context/Contextuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const Formdriver= () => {

  const [statee,setstate]= useState([]);
  
  const [loading,setload]= useState(true);

  
  const navigate=useNavigate();
  const [first,setfirst]=useState('');
  const [last,setlast]=useState('');
 
  const[numbers,setnumber]=useState('');
  const[bus,setbus]=useState([]);
  const contex = useContext(User);
const[buses,setbuses]=useState([])
const  token= contex.auth.tocken;

const handlefirst =(e)=>{
  setfirst(e.target.value)
}
const handlelast =(e)=>{
  setlast(e.target.value)
}
const handlenum =(e)=>{
  setnumber(e.target.value)
}
const  handlebus=(e)=>{
    setbus(e.target.value)
  }



  const handlesubmi = async (e)=>{
    
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/drivers',{
        firstname:first,
        lastname:last ,
        bus_ids:[bus],
       number:numbers
        
      
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
          Swal.fire('Saved!',resp.data.message,'success',navigate("/admin/listdriver"))
       
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
  //get buses
  
  const fetcbuses= async () => {
    try{
     const respo= await axios.get('https://yaamen1.com/api/buses',{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
   
  setbuses(respo.data.data.data)
     console.log(respo.data.data.data)
     setload(true);
     }catch(error){ console.log(error.response);
     
 
     }
  }
  
   useEffect(() => {
    fetcbuses();
 
    
    
   },[])
  return (
    <div className='formdrive'>
  <ToastContainer/>
    <div className='Listcontainer'>
   
    <h2>addsupsecreption</h2>

    {loading ?      <div className='items'>
    <div className='faild'>

         <form >
              <div className='content'>
                <div className='inputbox'>
                    <lable for="firstname">الإسم الأول</lable>
                    <input type="text" value={first} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">الإسم الأخير</lable>
                    <input type="text" value={last} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="image">الرقم</lable>
                    <input type="text" name='file'value={numbers} onChange={handlenum}/>

                </div>
              
                <div className='inputbox'>
                    <lable for="firstname">اختر الباص</lable>
                    <select  className='sel' name='country'  onChange={(e)=>handlebus(e)}>
                    <option className='option'>--sub--</option>
                    {buses.map((p)=>( <option key={p.id} value={p.id}>{p.key}</option>))}
                </select>
               

                </div>
                <div className='boton' > 
                <div className='bot'>
                    <button onClick={handlesubmi}>Save</button>
                </div>
                <Link to="/admin/listdriver" style={{textDecoration:"none"}}>
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

export default Formdriver