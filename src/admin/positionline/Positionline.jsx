import React from 'react'
import "./positionlin.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'
import Gmap from '../../componentadmin/gmap/Gmap'
const Positionline = () => {
  return (
    <div className='positions'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <Gmap/>
  
    
    </div>
   
</div>
  )
}

export default Positionline