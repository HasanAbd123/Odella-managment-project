import React, { useContext } from 'react'
import { User } from '../../pages/context/Contextuser';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./selectforday.scss"
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';


const Selectforday = () => {

    const { t } = useTranslation();
    const navigate=useNavigate();
   
    const [days,setdays]=useState([]);
    const [Trip,settrip]=useState([]);
    const [Tripre,settripre]=useState([]);
    const [pos,setpos]=useState([]);
    const{RequestId}=useParams()
  
    const [loading,setload]= useState(false);
    const [days_id,setidd]=useState([]);
    const [days_id2,setidd2]=useState([]);
    const [days_id3,setidd3]=useState([]);
    const [days_id4,setidd4]=useState([]);
    const [days_id5,setidd5]=useState([]);
    const [days_id6,setidd6]=useState([]);
   

    const[tripid,settid]=useState([]);
    const[tripid2,settid2]=useState([]);
    const[tripid3,settid3]=useState([]);
    const[tripid4,settid4]=useState([]);
    const[tripid5,settid5]=useState([]);
    const[tripid6,settid6]=useState([]);

    const[tripidre,settidr]=useState([]);
    const[tripidre2,settidr2]=useState([]);
    const[tripidre3,settidr3]=useState([]);
    const[tripidre4,settidr4]=useState([]);
    const[tripidre5,settidr5]=useState([]);
    const[tripidre6,settidr6]=useState([]);

    const[posid,setposid]=useState([]);
    const[posid2,setposid2]=useState([]);
    const[posid3,setposid3]=useState([]);
    const[posid4,setposid4]=useState([]);
    const[posid5,setposid5]=useState([]);
    const[posid6,setposid6]=useState([]);


    const contex = useContext(User);
    const  token= contex.auth.tocken;
    
  const[amount,setamount]= useState('')
  const[dateday,setdatda]= useState('')
  const[dateend,setdatend]=useState('')
  const [stat,setstate]= useState();
 const [select,setsel]=useState(1);
const mm=parseInt(stat)
console.log("after",mm)
 const fetchaxios= async () => {
    
    try{
     const response= await axios.get('https://yaamen1.com/api/students/'+RequestId,{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstate(response.data.data.subscription.daysNumber)
     console.log("uuu",response.data.data.subscription.daysNumber)
     setload(true);
     }catch(error){ console.log(error.response);
     
 
     }
  }


   
    const handleday=(event)=>{   const id= event.target.value;  setidd(id);
           }
         
    const handleday2=(event)=>{ const id= event.target.value; setidd2(id) ;
       }
       const handleday3=(event)=>{ const id= event.target.value; setidd3(id) ;
       }
       const handleday4=(event)=>{ const id= event.target.value; setidd4(id) ;
       }
       const handleday5=(event)=>{ const id= event.target.value; setidd5(id) ;
       }
       const handleday6=(event)=>{ const id= event.target.value; setidd6(id) ;
       }
             
        
    const handletripgo=(event)=>{    settid(event.target.value);}   
    const handletripgo2=(event)=>{    settid2(event.target.value);}   
    const handletripgo3=(event)=>{    settid3(event.target.value);} 
    const handletripgo4=(event)=>{    settid4(event.target.value);}   
    const handletripgo5=(event)=>{    settid5(event.target.value);}   
    const handletripgo6=(event)=>{    settid6(event.target.value);} 


    const handletripre=(event)=>{const i=event.target.value;  settidr(i);   }
      
    const handletripre2=(event)=>{   const i=event.target.value; settidr2(i);   }
    const handletripre3=(event)=>{   const i=event.target.value; settidr3(i);   }
    const handletripre4=(event)=>{const i=event.target.value;  settidr4(i);   }
      
    const handletripre5=(event)=>{   const i=event.target.value; settidr5(i);   }
    const handletripre6=(event)=>{   const i=event.target.value; settidr6(i);   }


    const handlepos=(event)=>{  setposid(event.target.value) ; }
   const handlepos2=(event)=>{  setposid2(event.target.value) ; }
    const handlepos3=(event)=>{  setposid3(event.target.value) ; }       
    const handlepos4=(event)=>{  setposid4(event.target.value) ; }
    const handlepos5=(event)=>{  setposid5(event.target.value) ; }
     const handlepos6=(event)=>{  setposid6(event.target.value) ; }         
       
         
        
     const handleamount =(e)=>{  setamount(e.target.value);}

      const handldateday =(e)=>{ setdatda(e.target.value); }
      const handdatend =(e)=>{ setdatend(e.target.value);}
         
 
       

    useEffect(() => {
       
        fetchday();
        fetchpos();
        fetchtrip();
        fetchtripre();
       fetchaxios();
     
       },[])   
         
         
          

       
       const handlesubmite = async (e)=>{
    
        e.preventDefault();
        try{
          const resp= await axios.post('https://yaamen1.com/api/employees/confirmRegistration/'+RequestId,{
            amount:amount,
            date:dateday,
            day_ids:[days_id],
            position_ids:[posid],
           
            trip_ids:[tripidre,tripid],
            
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
        
      const  handlecount =  ()=>{
     
        setsel(mm)


      }
      const  handlecountremove =  (e)=>{
        e.preventDefault();
        setsel(select-1)


      }
             
      const handlesubmite2 = async (e)=>{
    
        e.preventDefault();
        try{
          const resp= await axios.post('https://yaamen1.com/api/employees/confirmRegistration/'+RequestId,{
            amount:amount,
            date:dateday,
            day_ids:[days_id,days_id2],
            position_ids:[posid,posid2],
           
            trip_ids:[tripid,tripid2, tripidre,tripidre2],
            
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
          
      const handlesubmite3= async (e)=>{
    
        e.preventDefault();
        try{
          const resp= await axios.post('https://yaamen1.com/api/employees/confirmRegistration/'+RequestId,{
            amount:amount,
            date:dateday,
            day_ids:[days_id,days_id2,days_id3],
            position_ids:[posid,posid2,posid3],
           
            trip_ids:[tripid,tripid2,tripid3, tripidre,tripidre2,tripidre3],
            
            expiredSubscriptionDate:dateend
     
          
        },{
          
            headers:{
              Authorization:"Bearer" +token,
        
            }});
        
        console.log(resp.data)
     
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: resp.data.message,
            showConfirmButton: true,
            timer: 3000,
           
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
               navigate('/Requests')
           
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
      const handlesubmite4= async (e)=>{
    
        e.preventDefault();
        try{
          const resp= await axios.post('https://yaamen1.com/api/employees/confirmRegistration/'+RequestId,{
            amount:amount,
            date:dateday,
            day_ids:[days_id,days_id2,days_id3,days_id4],
            position_ids:[posid,posid2,posid3,posid4],
           
            trip_ids:[tripid,tripid2,tripid3,tripid4, tripidre,tripidre2,tripidre3,tripidre4],
            
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
      const handlesubmite5= async (e)=>{
    
        e.preventDefault();
        try{
          const resp= await axios.post('https://yaamen1.com/api/employees/confirmRegistration/'+RequestId,{
            amount:amount,
            date:dateday,
            day_ids:[days_id,days_id2,days_id3,days_id4,days_id5],
            position_ids:[posid,posid2,posid3,posid4,posid5],
           
            trip_ids:[tripid,tripid2,tripid3,tripid4,tripid5, tripidre,tripidre2,tripidre3,tripidre4,tripidre5],
            
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

      const handlesubmite6= async (e)=>{
    
        e.preventDefault();
        try{
          const resp= await axios.post('https://yaamen1.com/api/employees/confirmRegistration/'+RequestId,{
            amount:amount,
            date:dateday,
            day_ids:[days_id,days_id2,days_id3,days_id4,days_id5,days_id6],
            position_ids:[posid,posid2,posid3,posid4,posid5,posid6],
           
            trip_ids:[tripid,tripid2,tripid3,tripid4,tripid5,tripid6, tripidre,tripidre2,tripidre3,tripidre4,tripidre5,tripidre6],
            
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

 

      if(mm===1){
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
            {Tripre.map((R)=>(<option key={R.id} value={R.id}>{R.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div>
            </div>
           <div className='alls'>
            <div className='inputbox'>
                    <lable for="firstname">تاريخ الدفع</lable>
                    <input  type="date"  value={dateday}  onChange={handldateday} name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">المبلغ المدفوع</lable>
                    <input  value={amount} onChange={handleamount} type="text" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">تاريخ الانتهاء</lable>
                    <input value={dateend} onChange={handdatend} type="date" name='first'/>

                </div> </div>
                <div className='bot'>
                    <button onClick={handlesubmite}>Confirm</button>
                   
                </div>
                
            
          
            </>
        )
    }
    else if(mm===2){
        return(
            <>
            <ToastContainer />
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
            
            
            <h3>secound day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday2(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo2(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre2(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos2(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            <div className='alls'>
            <div className='inputbox'>
                    <lable for="firstname">تاريخ الدفع</lable>
                    <input value={dateday}  onChange={handldateday} type="date" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">المبلغ المدفوع</lable>
                    <input  value={amount} onChange={handleamount} type="text" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">تاريخ الانتهاء</lable>
                    <input value={dateend} onChange={handdatend} type="date" name='first'/>

                </div></div>
                <div className='bot'>
                    <button onClick={handlesubmite2}>Confirm</button>
                </div>
                
          
            </>
        )
    }
    else if(mm===3){
        return(
            <>
            <ToastContainer />
            <div className='boxselect'>
            
            
            <h3>first</h3>
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
            
            
            <h3>secound day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday2(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo2(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre2(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos2(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            
            <div className='boxselect'>
            
            
            <h3>third day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday3(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo3(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre3(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos3(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            <div className='alls'>
            <div className='inputbox'>
                    <lable for="firstname">تاريخ الدفع</lable>
                    <input value={dateday}  onChange={handldateday} type="date" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">المبلغ المدفوع</lable>
                    <input  value={amount} onChange={handleamount} type="text" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">تاريخ الانتهاء</lable>
                    <input value={dateend} onChange={handdatend} type="date" name='first'/>

                </div></div>
                <div className='bot'>
                    <button onClick={handlesubmite3}>Confirm</button>
                </div>
                
            </>
        )
    }

    else if(mm===4){
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
            
            
            <h3>secound day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday2(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo2(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre2(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos2(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            
            <div className='boxselect'>
            
            
            <h3>third day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday3(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo3(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre3(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos3(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
          

            <div className='boxselect'>
            
            
            <h3>fourth day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday4(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo4(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre4(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos4(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            <div className='alls'>
            <div className='inputbox'>
                    <lable for="firstname">تاريخ الدفع</lable>
                    <input value={dateday}  onChange={handldateday} type="date" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">المبلغ المدفوع</lable>
                    <input  value={amount} onChange={handleamount} type="text" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">تاريخ الانتهاء</lable>
                    <input value={dateend} onChange={handdatend} type="date" name='first'/>

                </div></div>
                <div className='bot'>
                    <button onClick={handlesubmite4}>Confirm</button>
                </div>
                
            </>
        )
    }


    else if(mm===5){
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
            
            
            <h3>secound day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday2(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo2(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre2(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos2(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            
            <div className='boxselect'>
            
            
            <h3>third day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday3(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo3(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre3(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos3(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
          

            <div className='boxselect'>
            
            
            <h3>fourth day </h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday4(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo4(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre4(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos4(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>

            
            <div className='boxselect'>
            
            
            <h3>five day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday5(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo5(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre5(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos5(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            <div className='alls'>
            <div className='inputbox'>
                    <lable for="firstname">تاريخ الدفع</lable>
                    <input value={dateday}  onChange={handldateday} type="date" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">المبلغ المدفوع</lable>
                    <input  value={amount} onChange={handleamount} type="text" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">تاريخ الانتهاء</lable>
                    <input value={dateend} onChange={handdatend} type="date" name='first'/>

                </div></div>
                <div className='bot'>
                    <button onClick={handlesubmite5}>Confirm</button>
                </div>
                
            </>
        )
    }

    
    else if(mm===6){
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
            
            
            <h3>secound day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday2(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo2(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre2(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos2(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            
            <div className='boxselect'>
            
            
            <h3>third day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday3(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo3(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre3(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos3(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
          

            <div className='boxselect'>
            
            
            <h3>fourth day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday4(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo4(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre4(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos4(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>

            
            <div className='boxselect'>
            
            
            <h3>five day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday5(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo5(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre5(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos5(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            <div className='boxselect'>
            
            
            <h3>six  day</h3>
            <div className='form'>
            <select name='country' className='formcon' onChange={(e)=>handleday6(e)}>
                <option >- day-</option>
                 {days.map((d)=>( <option key={d.id} value={d.id}>{d.name}</option>))}
                
            </select>
            <select name='country' className='formcon' onChange={(e)=>handletripgo6(e)}>
            <option >-  go trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
            
            <select name='country' className='formcon' onChange={(e)=>handletripre6(e)} >
            <option >- return trip-</option>
            {Trip.map((T)=>(<option key={T.id} value={T.id}>{T.time.start}</option>))}
                     

            </select>
           
            <select name='country' className='formcon' onChange={(e)=>handlepos6(e)}>
                <option className='option'>--position--</option>
                {pos.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
            </div></div>
            <div className='alls'>
            <div className='inputbox'>
                    <lable for="firstname">تاريخ الدفع</lable>
                    <input value={dateday}  onChange={handldateday} type="date" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">المبلغ المدفوع</lable>
                    <input  value={amount} onChange={handleamount} type="text" name='first'/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">تاريخ الانتهاء</lable>
                    <input value={dateend} onChange={handdatend} type="date" name='first'/>

                </div></div>
                <div className='bot'>
                    <button onClick={handlesubmite6}>Confirm</button>
                </div>
                
            </>
        )
    }
    else{
        return(<h3>hi</h3>)
    }
   
    
    

  
    
   

}

export default Selectforday