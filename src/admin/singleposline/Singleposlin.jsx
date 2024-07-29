import React from 'react'
import "./singleposlin.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'

import Gmapforsinglepos from '../../componentadmin/gmapforsinglepos/Gmapforsinglepos'
const Singleposlin = () => {
  return (
    <div className='singlepositions'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <Gmapforsinglepos/>
  
    
    </div>
   
</div>
  )
}

export default Singleposlin