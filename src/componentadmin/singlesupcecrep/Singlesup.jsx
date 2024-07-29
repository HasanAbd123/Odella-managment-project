import React, { useContext } from 'react'
import "./singlesub.scss"

import { useState,useEffect } from 'react';
import axios from 'axios';

import {Link, useNavigate, useParams} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { User } from '../../pages/context/Contextuser';

const Singlesup= () => {
  const{singlesupsec}=useParams();
  const [statee,setstate]= useState([]);
  
  const [loading,setload]= useState(true);

  const [sssup,setstassup]= useState([]); 
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



  const handlesubfetchsup = async (e)=>{
   
    
    try{
      const resp= await axios.get(`https://yaamen1.com/api/subscriptions/${singlesupsec}`
       
    ,{
          
      headers:{
        Authorization:"Bearer" +token,
        'Content-Type':'multipart/form-data',
  
      }});
      console.log(resp.data)
      setstassup(resp.data.data)
      
     



  }catch(error){
      console.log(error.response);

    }
  }
  
  
   useEffect(() => {
 handlesubfetchsup();
    
    
   },[])
  return (
    <div className='formsubsingle'>
  
    <div className='Listcontainer'>
   
    <h2>addsupsecreption</h2>

    {loading ?      <div className='items'>
    <div className='faild'>

         <form >
              <div className='content'>
                <div className='inputbox'>
                    <lable for="firstname">الإسم</lable>
                    <input type="text" value={sssup && sssup.name} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">عدد الأيام</lable>
                    <input type="text" value={sssup && sssup.daysNumber} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="number">السعر</lable>
                    <input type="text" value={sssup && sssup.price} onChange={handlenum} name='number' />


                </div>
                <div className='inputbox'>
                    <lable for="email">الاسم بالعربي</lable>
                    <input type="email" name='email'   onChange={handlepric} />

                </div>
                <div className='boton' > 
                <div className='bot'>
                    <button >Save</button>
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

export default Singlesup