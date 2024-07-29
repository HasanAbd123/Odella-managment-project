import React, { useContext, useEffect, useState } from 'react'
import "./singleformtrips.scss"
import {Link, useNavigate, useParams} from 'react-router-dom';
import { User } from '../../pages/context/Contextuser';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import Swal from 'sweetalert2';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const Singleformtrips = () => {
  const { t } = useTranslation();
  const [student,setstud]=useState([]);
  const[stuvalue,setstuv]=useState([]);
const navigate=useNavigate()
  const [sta,setstat]= useState();
  const contex = useContext(User);
  const [loading,setload]= useState(false);
  const[selectop,setselectiop]=useState([]);
  const[lnlat,setlnlat]=useState([])
  
  const position = [33.506831306, 36.288165514]
  
  const{TripsId}=useParams()

const  token= contex.auth.tocken;
  const fetchaxios= async () => {
    try{
     const response= await axios.get('https://yaamen1.com/api/trips/'+TripsId,{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstat(response.data.data)
     setlnlat(response.data.data.transferPositions)
     console.log(response.data.data)
     setload(true);
     }catch(error){ console.log(error.response);
     
 
     }
  }
  
  const fetchstu= async () => {
    try{
     const response= await axios.get('https://yaamen1.com/api/student/trips/outerTrip/'+TripsId,{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstud(response.data.data?response.data.data:['notfound'])
    
     console.log(response.data.data[0])
     setload(true);
   
     }catch(error){ console.log(error.response);
     
 
     }
  }
  useEffect(() => {
    fetchaxios();
    fetchstu();
   
  },[])
  function handlestu(selected){

       
       
    
      setstuv(selected.map(option => option.value))
     
      console.log(stuvalue)
      
     
     }
     const handlesubmitstu = async (e)=>{
    
      e.preventDefault();
      try{
        const resp= await axios.post(`https://yaamen1.com/api/trips/${TripsId}/students`,{
          student_ids:stuvalue
  
        
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
        timer: 4000,
       
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate('/Trips');
       
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

  function handledelet(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      timer:4000,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.get(`https://yaamen1.com/api/trips/${TripsId}/students/`+id,{
      
    headers:{
      Authorization:"Bearer" +token,

    }})
    .then(res=>{
    
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )

    })
       
      }
      navigate('/Trips')
    })
  
  }
  return (
        <div className='item'>
    
     {loading? <div className='top'>
           <div className='top-right'>

           <MapContainer className='mc' center={position} zoom={10} scrollWheelZoom={true} style={{height:'550px'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {  lnlat && lnlat.map((M)=>( < Marker position={[M.lng,M.lat ]} key={M.id}>   <Popup>{M.name}</Popup>
      </Marker>))}
    
     
  </MapContainer >

           </div>
        
           <div className='top-left'>
           <ToastContainer />
           <div className='head'>
          <h3> الطلاب المسجلين في الرحلة</h3>
           </div>
               <table className='table'>
                <thead>
                  <tr>
                    <th>الرقم</th>
                    <th>الاسم الأول</th>
                    <th>الاسم الأخير</th>
                    <th>العمليات</th>
                  </tr>
                </thead>
                <tbody>
                  {sta && sta.users.map((d,i)=>( 
                    <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>  <Link onClick={e => handledelet(d.id)} style={{textDecoration:"none"}}><button className='bt'> حذف</button></Link></td>

                    </tr>
                  ))}
                </tbody>
               </table>
               
           </div>
           
           </div> : <Backdrop
        sx={{ backgroundColor:'inherit' , margin:'100px  40% 100px 0', width:'500px', color: '#111',
         zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>}  
    
           <div className='botum'>
           <div className='to-right'>
           <div className='rr'>
           <div className='boxinfo'>
           <h3 className='textt'> تاريخ الرحلة :</h3>
                 <span>{sta && sta.time.date}</span>
            </div>
            <div className='boxinfo'>
            <h3 className='textt'> توقيت الرحلة:</h3>
                 <span>{sta && sta.time.start}</span>
            </div>
            <div className='boxinfo'>
            <h3 className='textt'> اسم المشرف:</h3>
                 <span>{sta && sta.supervisor.firstName}</span>
            </div>
            <div className='boxinfo'>
            <h3 className='textt'>رقم المشرف:</h3>
                 <span>{sta && sta.supervisor.phoneNumber}</span>
            </div>
            <div className='boxinfo'>
            <h3 className='textt'>عدد المقاعد الفارغة:</h3>
                 <span>{sta && sta.availableSeats}</span>
            </div>
            <Link to="/Trips" style={{textDecoration:"none"}}>
            <div className='boxbotun'>
              <button className='btn'>back</button>
            </div></Link>
            </div>
             <div className='ll'>
            
            <div className='boxinfo'>
            <h3 className='textt'>اسم السائق:</h3>
                 <span>{sta && sta.busDriver.driver.firstname}</span>
            </div>
            <div className='boxinfo'>
            <h3 className='textt'>رقم السائق:</h3>
                 <span>{sta && sta.busDriver.driver.number}</span>
            </div>
            <div className='boxinfo'>
            <h3 className='textt'>خط النقل:</h3>
                 <span>{sta && sta.lines[0].name}</span>
            </div>
             </div>
             
             <div className='positionst'>
             <h3>المواقف:</h3>
             <div className='conpo'>
             { sta && sta.transferPositions.map((T)=>( <div className='pos' key={T.id}>{T.name}</div>))}
            
             </div>
              </div>
           </div>
           <div className='to-left'>

           <div className='selectstu'>
           <Select className='sel'
        
       value={stuvalue.map(id => ({
        value: id,
        label: student.find(option => option.id === id).firstName
      }))}
      onChange={handlestu}
        options={student.map(studen => ({
        value: studen.id,
        label: studen.firstName
      }))}
      
     
      isMulti
      />
           </div>
           <div className='botom'><button className='btne' onClick={handlesubmitstu}>إضافة</button></div>
           
           
           </div>

           
           </div>
    

    </div> 
  )
}

export default Singleformtrips