import React, { useContext, useEffect, useState } from 'react'
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

import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import Leafletgeocoder from '../leafletGeocoder/Leafletgeocoder'
import './gmapaddline.scss'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../../pages/context/Contextuser'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const GmapAddline = () => {
    
  const position = [33.506831306, 36.288165514]
  const [posti,setpos]=useState(null)
   const [ln,setln]=useState(null)
   const [lt,setlat]=useState(null)
   const[nameposen,setnameposen]=useState('')
   const[nameposar,setnamar]=useState('')
  
   const[sendline,setsendlinid]=useState();
 
   const navigate=useNavigate();
   const contex = useContext(User);
  
   const  token= contex.auth.tocken;


  
   useEffect(() => {
     
     
    
   },[])
   console.log(nameposen);
   const handlenameen =(e)=>{
    setnameposen(e.target.value)

  }
  const handlenamear =(e)=>{

    setnamar(e.target.value)
  }
  
  const HandleClickmap=()=>{
    const map =useMapEvent({
      click(e){
       
        setpos(e.latlng)
        map.flyTo(e.latlng)
        setln(e.latlng.lng)
        setlat(e.latlng.lat)

      }
      
    });
    return posti === null ? null : (
      <Marker position={posti}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  const handlesubmitepos = async (e)=>{
    
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/transportationLines',{
      
        name_ar:nameposar,
        name_en:nameposen,
       
       
        

      
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
        Swal.fire('Saved!',resp.data.message,'success',navigate("/admin/listlines"))
     
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
 
  return  (
<div className='addline'>
<ToastContainer/>
<div className='ightpart'>
    <MapContainer center={position} zoom={10} scrollWheelZoom={true} style={{width:'1200px',height:'800px'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <HandleClickmap/>
  <Leafletgeocoder/>
  </MapContainer>
  </div>
  <div className='leftpart'>
     
  <form >
             <div className='all'>
              
              
                <div className='inputbo'>
                    <lable for="firstname" >اسم الخط بالعربي</lable>
                    <input type="text" name='first'value={nameposar} onChange={handlenamear}  />

                </div>
                <div className='inputbo'>
                    <lable for="lastname" >اسم الخط بالانكليزي</lable>
                    <input type="text" name='last'value={nameposen} onChange={handlenameen}  />

                </div>
              
               
                
                
                
                <div className=' botons'>
               
                <div className='bott'>
                    <button onClick={handlesubmitepos}>Confirm</button>
                </div>
                <Link to="/admin/listlines" style={{textDecoration:"none"}}>
                <div className='bott'>
                    <button>back</button>
                </div></Link>
                </div>
             
</div> 
           </form>

</div>
  </div>
) 
}
let Defaulticon =L.icon({
iconUrl:"/marker-icon.png",
});
L.Marker.prototype.options.icon = Defaulticon;

export default GmapAddline