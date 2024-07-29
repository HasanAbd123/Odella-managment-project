import React from 'react'
import "./listlines.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'

import Datatablelines from '../../componentadmin/datatableforlines/Datatablelines'
import {Link} from 'react-router-dom';
const Listslines = () => {
  return (
    <div className='Listlines'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h2>Lines</h2>
    <div className='dd'>

   
  <Datatablelines className='d'/> </div>

  
    </div>
   
</div>
  )
}

export default Listslines