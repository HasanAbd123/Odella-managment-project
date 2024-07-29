
import './listdriver.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';
import Datalistdriver from '../../../componentadmin/datalistdriver/Datalistdriver';

const Listdrivers = () => {
  return (
    <div className='Listdriver'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h3>driver</h3>
      <div className='dr'> 
   <Datalistdriver className='d'/></div> 
 
    </div>
   
</div>
  )
}

export default Listdrivers