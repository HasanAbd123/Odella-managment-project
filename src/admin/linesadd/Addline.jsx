import React from 'react'
import "./addline.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'
import Gmap from '../../componentadmin/gmap/Gmap'
import GmapAddline from '../../componentadmin/addlinegmap/GmapAddline'

const Addline = () => {
  return (
    <div className='addline'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    
  <GmapAddline/>
    
    </div>
   
</div>
  )
}

export default  Addline