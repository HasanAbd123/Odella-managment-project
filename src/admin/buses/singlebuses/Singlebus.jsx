import React, { useContext } from 'react'
import "./singlebus.scss"

import { useState,useEffect } from 'react';
import axios from 'axios';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin';
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin';
import { User } from '../../../pages/context/Contextuser';
import { useParams } from 'react-router-dom';

const Singlebus = () => {
  const{singlebus}=useParams();
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
     const response= await axios.get(`https://yaamen1.com/api/buses/${singlebus}`,{
       
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
     const response= await axios.get(`https://yaamen1.com/api/buses/${singlebus}`,{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
        setstatedit(response.data.data)
        setfirst(response.data.data.key)
        setlast(response.data.data.capacity)
        setnumb(response.data.data.details)
    
    
   
     }catch(error){ console.log(error.response);
     
 
     }
  }

  const handlesubmi = async (e)=>{
    const formdata= new FormData();
    formdata.append('image',images)
   console.log(formdata)
    e.preventDefault();
    try{
      const resp= await axios.put(`https://yaamen1.com/api/buses/${singlebus}`,{
        key:first,
        capacity:last,
        details:numb,
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
    <div className='singbus'>
    <Sidbaradmin/>
    <div className='Listcontainer'>
    <Navbaradmin/>
    <h2>Addbus</h2>

    {loading ?      <div className='items'>
    <div className='faild'>

        {edit?  <form >
              <div className='content'>
                <div className='inputbox'>
                    <lable for="firstname">النوع</lable>
                    <input type="text" value={first} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">عدد المقاعد</lable>
                    <input type="text" value={last} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="number">التفاصيل</lable>
                    <input type="text" value={numb} onChange={handlenum} name='number' />


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
                    <lable for="firstname">النوع</lable>
                    <input type="text" value={statee && statee.key} onChange={handlefirst} name='first' />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">عدد المقاعد</lable>
                    <input type="text" value={statee && statee.capacity} onChange={handlelast} name='last' />

                </div>
                <div className='inputbox'>
                    <lable for="number">التفاصيل</lable>
                    <input type="text" value={statee && statee.details}onChange={handlenum} name='number' />


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
          <h3> {statee && statee.key}</h3> 
          <h3> {statee && statee.capacity}</h3> 
          <h3> {statee && statee.details}</h3> 
         

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

export default Singlebus