import React from 'react'
import "./listpostion.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'
import Datatablelistpos from '../../componentadmin/datatableforlistposition/Datatablelistpos'
import {Link} from 'react-router-dom';
const Listposition = () => {
  return (
    <div className='Listpositions'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h2>List position</h2>
    
  <div className='p'>  

  <Datatablelistpos className='pp'/>
  
</div>
  
    </div>
   
</div>
  )
}

export default Listposition