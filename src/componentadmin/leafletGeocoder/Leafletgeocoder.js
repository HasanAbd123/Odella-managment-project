import React, { useEffect } from 'react'
import L from "leaflet"
import { useMap } from 'react-leaflet'

const Leafletgeocoder = () => {
const map= useMap();
    useEffect(()=>{
         L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) { 
                var latlng=e.geocode.center;
                console.log(latlng)
                L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
                map.fitBounds(e.geocode.bbox);
              
            })
            .addTo(map);

    },[])
  return null
}

export default Leafletgeocoder