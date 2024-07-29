import React, { useContext } from 'react'
import "./singlerequestform.scss"
import {Link, useParams, } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { User } from '../../pages/context/Contextuser';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Selectforday from '../selectforday/Selectforday';
import { useTranslation } from 'react-i18next';
const Singlerequestform = () => {
  const { t } = useTranslation();
    const navigate=useNavigate();
    const [stat,setstate]= useState();
    const contex = useContext(User);
    const [loading,setload]= useState(false);
    const{RequestId}=useParams()
   
  const  token= contex.auth.tocken;
  const select=1

  const [days,setdays]=useState([]);
  const [Trip,settrip]=useState([]);
  const [Tripre,settripre]=useState([]);
  const [pos,setpos]=useState([]);


  const [days_id,setidd]=useState([]);
  const[tripid,settid]=useState([]);
  const[tripidre,settidr]=useState([]);
  const[posid,setposid]=useState([]);

  const[amount,setamount]= useState('')
  const[dateday,setdatda]= useState('')
  const[dateend,setdatend]=useState('')
  const[nd,setnd]=useState()

  console.log(days_id)
  console.log(tripid)
  console.log(tripidre)
  console.log(posid)
  console.log(amount)
  console.log(dateday)
  console.log(dateend)
  
    const fetchaxios= async () => {
        try{
         const response= await axios.get('https://yaamen1.com/api/students/'+RequestId,{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         setstate(response.data.data)
      
         
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      
      
       

       const fetchday= async () => {
        
        try{
         const respons= await axios.get('https://yaamen1.com/api/days',{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         setdays(respons.data.data)
      
        
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      
      

      const fetchtrip= async () => {
        
        try{
         const respon= await axios.get('https://yaamen1.com/api/trip/goTrips',{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         settrip(respon.data.data.data)
      
         
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      
     
      const fetchtripre= async () => {
        
        try{
         const respon= await axios.get('https://yaamen1.com/api/trip/returnTrips',{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         settripre(respon.data.data.data)
      
         
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }

      

      const fetchpos= async () => {
        try{
         const respo= await axios.get('https://yaamen1.com/api/transferPositions/transportationLines/'+1,{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         setpos(respo.data.data)
      
         console.log(respo.data.data)
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      
      useEffect(() => {
        fetchaxios();
       
      },[])

      
      const handleday=(event)=>{

       
       
     const id= event.target.value
       setidd(id)
      
       
       
      
      }
      const handletripgo=(event)=>{

       
       
        settid(event.target.value)
         
        
         
         
        
        }
        const handletripre=(event)=>{

       
       
            settidr(event.target.value)
             
            
             
             
            
            }

            const handlepos=(event)=>{

       
       
                setposid(event.target.value)
                 
                
          
                }
                const handleamount =(e)=>{
                    setamount(e.target.value)
            
                  }
                  const handldateday =(e)=>{
                    setdatda(e.target.value)
            
                  }
                  const handdatend =(e)=>{
                    setdatend(e.target.value)
            
                  }


                  //submiteconfirm
                      
  const handlesubmite = async (e)=>{
    
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/employees/confirmRegistration/'+RequestId,{
        amount:amount,
        date:dateday,
        day_ids:[days_id],
        position_ids:[posid],
       
        trip_ids:[tripid,tripidre],
        
        expiredSubscriptionDate:dateend

      
    },{
      
        headers:{
          Authorization:"Bearer" +token,
    
        }});
    
    console.log(resp.data)
    alert(resp.data.message);
   
    navigate('/Requests');
     
  }catch(error){
      console.log(error.response);

    }
  }
     
     
      
       const Myselect=()=>{
  

    
            
         if(select===1){
            return(
                <>
               <div className='boxselect'>

                <h3>first day</h3>
                <div className='form'>
                <select name='country' className='formcon' onChange={(e)=>handleday(e)}>
                    <option >- day-</option>
                     {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                    
                </select>
                <select name='country' className='formcon' onChange={(e)=>handletripgo(e)}>
                <option >-  go trip-</option>
                {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                         

                </select>
                
                <select name='country' className='formcon' onChange={(e)=>handletripre(e)} >
                <option >- return trip-</option>
                {Tripre.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                         

                </select>
               
                <select name='country' className='formcon' onChange={(e)=>handlepos(e)}>
                    <option className='option'>--position--</option>
                    {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
                </div>
                </div>
                
                
                
              
                </>
            )
        }
        else if(select===2){
            return(
                <>
                <div className='boxselect'>
                
                
                <h3>first day</h3>
                <div className='form'>
                <select name='country' className='formcon' onChange={(e)=>handleday(e)}>
                    <option >- day-</option>
                     {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                    
                </select>
                <select name='country' className='formcon' onChange={(e)=>handletripgo(e)}>
                <option >-  go trip-</option>
                {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                         

                </select>
                
                <select name='country' className='formcon' onChange={(e)=>handletripre(e)} >
                <option >- return trip-</option>
                {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                         

                </select>
               
                <select name='country' className='formcon' onChange={(e)=>handlepos(e)}>
                    <option className='option'>--position--</option>
                    {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
                </div></div>
                <div className='boxselect'>
                
                
                <h3>first day</h3>
                <div className='form'>
                <select name='country' className='formcon' onChange={(e)=>handleday(e)}>
                    <option >- day-</option>
                     {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                    
                </select>
                <select name='country' className='formcon' onChange={(e)=>handletripgo(e)}>
                <option >-  go trip-</option>
                {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                         

                </select>
                
                <select name='country' className='formcon' onChange={(e)=>handletripre(e)} >
                <option >- return trip-</option>
                {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                         

                </select>
               
                <select name='country' className='formcon' onChange={(e)=>handlepos(e)}>
                    <option className='option'>--position--</option>
                    {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
                </div></div>
                
              
                </>
            )
        }
        else{
            return(<h3>hi</h3>)
        }
       }
       

  return (
          <div className='items'>
           <div className='Select'>
 
       <Selectforday/>


                          </div>



    {loading?  <div className='failde'>

          <form >
              <div className='content'>
              <div className='all'>
              <div className='left'>
                <div className='inputbox'>
                    <lable for="firstname">الموقف</lable>
                    <input type="text" name='first' value={ stat && stat.position.name} />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">المدينة</lable>
                    <input type="text" name='last' value={stat && stat.location.city.name}/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">المنطقة</lable>
                    <input type="text" name='first' value={stat && stat.location.area.name}/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">الشارع</lable>
                    <input type="text" name='first' value={stat && stat.location.street}/>

                </div>
                
                </div>
                <div className='right'>
                <div className='inputbox'>
                    <lable for="number">الكلية</lable>
                    <input type="text" name='number' value={stat && stat.university.name} />

                </div>
                <div className='inputbox'>
                    <lable for="email">عدد الأيام</lable>
                    <input type="text" name='email' value={stat && stat.subscription.daysNumber}/>

                </div>   
                <div className='inputbox'>
                    <lable for="firstname">السعر</lable>
                    <input type="text" name='first' value={stat && stat.subscription.price} />

                </div>
                <div className='inputbox'>
                    <lable for="firstname">نوع الإشتراك </lable>
                    <input type="text" name='first' value={stat && stat.subscription.name}/>

                </div>
               
                </div>
                </div>
                <div className=' botons'>
                <Link to="/Requests" style={{textDecoration:"none"}}>
                <div className='bot'>
                    <button>back</button>
                </div></Link>
                
                
                </div>
              </div>

           </form>


     </div>
     : <Backdrop
        sx={{ backgroundColor:'inherit' , margin:'100px  40% 100px 0', width:'500px', color: '#111',
         zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>}

     <div className='imagee'>
       
          <div className='photo'>
          <img src={`https://yaamen1.com/storage/${stat && stat.image} `} className='persphoto' alt='phto'/>
          </div>
          
          <h3><span>{stat && stat.firstName}</span> : الإسم</h3> 
          <h3><span>{stat && stat.email}</span>  :البريد</h3> 
          <h3><span> {stat && stat.phoneNumber}</span>  :الرقم </h3> 
           <h3> <span>{stat && stat.line.name}</span>  :خط النقل</h3>
          
         

     </div>
   

    </div>
  )
}

export default Singlerequestform