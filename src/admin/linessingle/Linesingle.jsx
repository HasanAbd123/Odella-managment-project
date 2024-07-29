import React from 'react'
import "./linesingle.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'
import Gmap from '../../componentadmin/gmap/Gmap'
import GmapAddline from '../../componentadmin/addlinegmap/GmapAddline'
import Gmapforsingline from '../../componentadmin/gmapforsingleline/Gmapforsingline'
const Linesingle = () => {
  return (
    <div className='singleline'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    
  <Gmapforsingline/>
    
    </div>
   
</div>
  )
}

export default  Linesingle