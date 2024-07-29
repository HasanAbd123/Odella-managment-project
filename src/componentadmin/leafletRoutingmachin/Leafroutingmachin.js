import React, { useEffect } from 'react'
import L from "leaflet"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useMap } from 'react-leaflet'
import "leaflet-routing-machine"
const Leafroutingmachin = () => {
    const map=useMap()
    useEffect(()=>{
        L.Routing.control({
            waypoints: [
              L.latLng(57.74, 11.94),
              L.latLng(57.6792, 11.949)
            ],
            lineOptions:{
                styles:[
                    {color:"blue"
                }
                ]
            },
            routeWhileDragging:false,
            geocoder: L.Control.Geocoder.nominatim(),
            addWaypoints:true
          }).addTo(map);

    },[])
  return null
   
  
}

export default Leafroutingmachin