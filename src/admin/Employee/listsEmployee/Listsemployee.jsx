
import './listsemployee.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';
import Datalistdriver from '../../../componentadmin/datalistdriver/Datalistdriver';
import Datalistsopervisor from '../../../componentadmin/datalissopervisor/Datalistsopervisor';
import DatalistEmployee from '../../../componentadmin/datalistemployee/DatalistEmployee';

const Listsemployee = () => {
  return (
    <div className='Listsemployee'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h3>Employee</h3>
      <div className='ee'>
   <DatalistEmployee className='e'/></div>  

    </div>
   
</div>
  )
}

export default Listsemployee