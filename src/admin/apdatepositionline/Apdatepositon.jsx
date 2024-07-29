import React from 'react'
import "./apdateposition.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'
import Formapdateposition from '../../componentadmin/formapdateposition/Formapdateposition'


const Apdatepositon = () => {
  return (
    <div className='apdatepositions'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
   
   
<Formapdateposition/>
    
    </div>
   
</div>
  )
}

export default Apdatepositon