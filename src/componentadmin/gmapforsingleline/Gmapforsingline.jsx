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
import './gmapforsingleline.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { User } from '../../pages/context/Contextuser'
import axios from 'axios';

const Gmapforsingline = () => {
    
  const position = [33.506831306, 36.288165514]
  const [posti,setpos]=useState(null)
   const [ln,setln]=useState('')
   const [lt,setlat]=useState('')
   const [lnto,setlnto]=useState('')
   const [ltto,setlatto]=useState('')
   const[nameposen,setnameposen]=useState('')
   const[nameposar,setnamar]=useState('')
   const [statel,setline]= useState([]);
   const[sendline,setsendlinid]=useState();

   const[singlepos,setsingle]=useState([])
 
   const navigate=useNavigate();
   const contex = useContext(User);
  
   const  token= contex.auth.tocken;
   const{singlelines}=useParams();
 
  console.log("lnnn",ln)
  console.log("ltttt",lt)
  const fetchsinglepos= async () => {
    try{
     const response= await axios.get(`https://yaamen1.com/api/transportationLines/${singlelines}`,{
       
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setsingle(response.data.data)
     console.log(response.data.data.lat)

          setln(response.data.data.from.lng)
          setlat(response.data.data.from.lat)
          setlnto(response.data.data.to.lng)
          setlatto(response.data.data.to.lat)
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
      const resp= await axios.post('https://yaamen1.com/api/transportationLines',{
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
<div className='sigleline'>

<div className='ightpart'>
    <MapContainer center={position} zoom={10} scrollWheelZoom={true} style={{width:'1200px',height:'800px'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <Marker position={[ln, lt]}>
        <Popup>You are here</Popup>
      </Marker>
      <Marker position={[lnto, ltto]}>
        <Popup>You are here</Popup>
      </Marker>
  </MapContainer>
  </div>
  <div className='leftpart'>
     
  <form >
             <div className='all'>
              
              
                <div className='inputbo'>
                    <lable for="firstname" >اسم الخط بالعربي</lable>
                    <input type="text" name='first'value={singlepos&&singlepos.id} onChange={handlenamear}  />

                </div>
                <div className='inputbo'>
                    <lable for="lastname" >اسم الخط بالانكليزي</lable>
                    <input type="text" name='last' value={singlepos.name?singlepos.name:''} onChange={handlenameen}  />

                </div>
                <div className='inputbo'>
                    <lable for="firstname">نقطة البداية</lable>
                    <input type="text" name='first' value={singlepos.from?singlepos.from.name:''} />

                </div>
                <div className='inputbo'>
                    <lable for="firstname">نقطة النهاية</lable>
                    <input type="text" name='first' value={singlepos.to?singlepos.to.name:''} />

                </div>
               
                
                
                <div className=' botons'>
               
                <div className='bott'>
                    <button onClick={handlesubmitepos}>Edit</button>
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

export default Gmapforsingline