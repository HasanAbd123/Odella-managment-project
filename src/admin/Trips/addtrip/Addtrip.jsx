import React, { useContext, useEffect, useState } from 'react'
import "./addtrip.scss"
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link, useNavigate} from 'react-router-dom';
import { User } from '../../../pages/context/Contextuser';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

export const Addtrip = () => {
  const navigate=useNavigate();
    const contex = useContext(User);
    const  token= contex.auth.tocken;
    const [loading,setload]= useState(false);
    const[sss,setsoper]=useState([])
    const[idsopervisor,setidsop]=useState('')
    const[driv,setdriver]=useState([])
    const[iddriv,setiddriv]=useState('')
    const[line,setline]=useState([])
    const[idlin,setidine]=useState('')
    const[starttime,setstart]=useState(moment().format("HH:mm"))
    const[datetrip,setdatetrip]=useState('')
    const[postion,setposi]=useState([])
    const[timarr,settimarr]=useState([moment().format("HH:mm")])
    const[postionid,setposiid]=useState([])
    const[i,seti]=useState(1)
    console.log(timarr)
    console.log(postionid)
    const fetchsoper= async () => {
        try{
         const respo= await axios.get('https://yaamen1.com/api/supervisors',{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         setsoper(respo.data.data.data)
      
         console.log(respo.data.data.data)
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      const fetchsdriver= async () => {
        try{
         const respo= await axios.get('https://yaamen1.com/api/drivers',{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         setdriver(respo.data.data.data)
      
         console.log(respo.data.data.data)
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      const fetchline= async () => {
        try{
         const respo= await axios.get('https://yaamen1.com/api/transportationLines',{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         setline(respo.data.data.data)
      
         console.log(respo.data.data.data)
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      const fetchposition= async (e) => {
        e.preventDefault();
        setload(false)
        try{
         const respo= await axios.get(`https://yaamen1.com/api/transferPositions/transportationLines/${idlin}`,{
      
         headers:{
           Authorization:"Bearer" +token,
     
         }})
         setposi(respo.data.data)
      
         console.log(respo.data.data)
         setload(true);
         }catch(error){ console.log(error.response);
         
     
         }
      }
      
      const handlesop =(e)=>{ setidsop(e.target.value); }
      const handliddrivr =(e)=>{ setiddriv(e.target.value); }
      const handlidlin =(e)=>{ setidine(e.target.value); }
      const handdatetrip =(e)=>{ setdatetrip(e.target.value); }
      const  handelstart =(e)=>{ setstart(e.target.value); }
      
      const  handetim =(e,id)=>{
        e.preventDefault()
     
     seti(i+1)
    const id1=id-1
    timarr.splice(id1,1,e.target.value)
     settimarr([...timarr])
     postionid.splice(id1,1,id)
     setposiid([...postionid])
      console.log(timarr)
      console.log(id)
      console.log(postionid)
     
      }
      
      const hanleidpos=(e)=>{
     
        setposiid([...postionid,e.key])
         
         }
         
      useEffect(() => {
       
        fetchsoper();
        fetchsdriver();
        fetchline();
       
       },[])   

       const submittrip = async (e)=>{
        
        e.preventDefault();
        try{
          const resp= await axios.post('https://yaamen1.com/api/trips',{
            supervisor_id:idsopervisor ,
            bus_driver_id:iddriv,
            line_ids:[idlin],
            start:starttime,
            date:datetrip,
            position_ids:postionid,
            time:timarr,
     
          
        },{
          
            headers:{
              Authorization:"Bearer" +token,
        
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
            Swal.fire('Saved!',resp.data.message,'success',navigate("/admin/listtrips"))
         
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
  return (
    <div className='addtrip'>
    <ToastContainer/>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
        <h3>addTrip</h3>
        <div className='addcontaner'>
        <div className='rightadd'>
        <div className='selectin'>
        <div className='inputbox'>
        <lable for="firstname" >اختر المشرف</lable>
            <select name='country' className='forsel' onChange={(e)=>handlesop(e)} >
                <option >- sopervisor-</option>
                {sss.map((T)=>(<option key={T.id} value={T.id}>{T.firstName}</option>))}
                         

                </select></div>
                <div className='inputbox'>
                <lable for="firstname" >اختر السائق</lable>

             <select name='country' className='forsel' onChange={(e)=>handliddrivr(e)} >
                <option >- driver-</option>
                {driv.map((T)=>(<option key={T.id} value={T.id}>{T.firstname}</option>))}
                         

                </select></div>
                <div className='inputbox'>
                <lable for="firstname" >اختر خط</lable>
                <select name='country' className='forsel' onChange={(e)=>handlidlin(e)} >
                <option >- line-</option>
                {line.map((T)=>(<option key={T.id} value={T.id}>{T.name}</option>))}
                         

                </select></div>

                </div>
                <div className='inputfor'>
                <div className='inputbox'>
                <lable for="firstname" >تاريخ الرحلة</lable>
                    <input type="date"   className='forse' value={datetrip} name='first' onChange={handdatetrip}/>
                    </div>
                    <div className='inputbox'>
                <lable for="firstname" >وقت البداية</lable>
                    <input type="time" className='forse' value={starttime} name='first' onChange={handelstart}/>
                    </div>
                    </div>

                    <button  className='bott' onClick={fetchposition}>position</button>
                   
        </div>
       {loading? <div className='leftadd'> <div className='pos'>
                    <div className='postim'>
                    {postion.map((T)=>(<div key={T.id} value={T.id}  className='singpos' onChange={hanleidpos}>{T.name}</div> ))}

                    </div>
                    <div className='tim'>

                    
                    {postion.map((T)=>(<div key={T.id} className='singtim'>
                       <input className='inp'  type="time"  onChange={(e)=>handetim(e,T.id)} name='tim'/></div>))}
                    </div>
                   
                    </div>
                    <div className='boootun'>

                    <button className='bott' onClick={submittrip}>add</button></div>

                    </div>: <Backdrop
          sx={{ backgroundColor:'inherit' , margin:'100px  40% 100px 0', width:'500px', color: '#111',
           zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
          
        >
          <CircularProgress color="inherit" />
        </Backdrop>}  

       

                    

        </div>

          </div>
    </div>
   

  )
}
