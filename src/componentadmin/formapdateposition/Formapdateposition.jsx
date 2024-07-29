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
import './Apdatepositionform.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { User } from '../../pages/context/Contextuser'
import axios from 'axios';

const Formapdateposition= () => {
    
  const position = [33.506831306, 36.288165514]
  const [posti,setpos]=useState(null)
   const [ln,setln]=useState(null)
   const [lt,setlat]=useState(null)
   const[nameposen,setnameposen]=useState('')
   const[nameposar,setnamar]=useState('')
   const [statel,setline]= useState([]);
   const[sendline,setsendlinid]=useState();

   const[singlepos,setsingle]=useState([])
 
   const navigate=useNavigate();
   const contex = useContext(User);
  
   const  token= contex.auth.tocken;
   const{id}=useParams();
 
  console.log("lnnn",ln)
  console.log("ltttt",lt)
  const fetchsinglepos= async () => {
    try{
     const response= await axios.get(`https://yaamen1.com/api/transferPositions/${id}`,{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setsingle(response.data.data)
     console.log(response.data.data.lat)
        setnameposen(response.data.data.name)
          setln(response.data.data.lat)
          setlat(response.data.data.lng)
     }catch(error){ console.log(error.response);
     
 
     }
  }


 
   useEffect(() => {
     
     fetchsinglepos();
    
   },[])
   console.log(nameposen);
   const handlenameen =(e)=>{
    setnameposen(e.target.value)

  }
  const handlenamear =(e)=>{

    setnamar(e.target.value)
  }
  const handleline =(e)=>{

    setsendlinid(e.target.value)
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
    console.log(nameposen);
    e.preventDefault();
    try{
      const resp= await axios.put(`https://yaamen1.com/api/transferPositions/${id}`,{
        line_id:sendline,
        name_ar:nameposar,
        name_en:nameposen,
        lng:ln,
        lat:lt,
       
        

      
    },{
      
        headers:{
          Authorization:"Bearer" +token,
    
        }});
    
    console.log(resp.data)
   
    alert(resp.data.message);
    navigate('/admin/listposition')
     
  }catch(error){
      console.log(error.response);

    }
  }
  console.log(posti)
  return  (
<div className='apdateformpostionn'>

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
                    <lable for="firstname" >اسم الموقف بالعربي</lable>
                    <input type="text" name='first'value={nameposar} onChange={handlenamear}  />

                </div>
                <div className='inputbo'>
                    <lable for="lastname" >اسم الموقف بالانكليزي</lable>
                    <input type="text" name='last' value={nameposen} onChange={handlenameen}  />

                </div>
                <div className='inputbo'>
                    <lable for="firstname">خط الطول</lable>
                    <input type="text" name='first' value={ln} />

                </div>
                <div className='inputbo'>
                    <lable for="firstname">خط العرض</lable>
                    <input type="text" name='first' value={lt} />

                </div>
               
                
                
                <div className=' botons'>
               
                <div className='bott'>
                    <button onClick={handlesubmitepos}>save</button>
                </div>
                <Link to="/admin/listposition" style={{textDecoration:"none"}}>
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

export default Formapdateposition