
import './listsopervisor.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';
import Datalistdriver from '../../../componentadmin/datalistdriver/Datalistdriver';
import Datalistsopervisor from '../../../componentadmin/datalissopervisor/Datalistsopervisor';

const Listsopervisor = () => {
  return (
    <div className='Listsopervisor'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h3>sopervisor</h3>
   <div className='ss'>    
   <Datalistsopervisor className='s'/></div> 
  
    </div>
   
</div>
  )
}

export default Listsopervisor