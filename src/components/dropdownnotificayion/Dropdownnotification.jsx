import React from 'react'
import "./dropdownnoti.scss";
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User } from '../../pages/context/Contextuser';
import  { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { colors } from '@mui/material';
const Dropdownnotification = () => {
  const { t } = useTranslation();
  const [sta,setstat]= useState([]);
  const [not,setnot]= useState(false);
  const contex = useContext(User);
  const  token= contex.auth.tocken;
  const [read,setred]=useState('false')
  
  const handleaaddamount = async (e,id)=>{
    e.preventDefault();
    
    try{
      const resp= await axios.post(`https://yaamen1.com/api/user/make_read_notification/${id}`,{
      
   
      
    },{
      
        headers:{
          Authorization:"Bearer" +token,
    
        }});
    
    console.log(resp.data)
  
   
    
   
  

   
}catch(error){
    console.log(error.response);
   

    }
  }
  const fetchaxios= async ( ) => {
    
  
    try{
     const response= await axios.get('https://yaamen1.com/api/user/notification',{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstat(response.data.data)
     console.log(response.data.data[0].title)
     if(response.data.data!=null){
      setnot(true)
     }
  
     }catch(error){ console.log(error.response);
     
 
     }
  }
  useEffect(() => {
    fetchaxios();
   
   
  },[])
  return (
    
    <div className='flex flex-col dropdownot'>
    
       <ui className="flex flex-col gap:4">
       {sta.map((T)=>(<Link to="/Requests" style={{textDecoration:"none"}}><li key={T.id} value={T.id}  >
       
                     {T.is_read==1?<button style={{backgroundColor:'white'}}>{T.body}</button>
                     :<button  style={{backgroundColor:'gray'}}>{T.body}</button>}       </li> </Link>))}
         
       
        <hr/>
        
       </ui>

    </div>
    
    
  )
}

export default Dropdownnotification