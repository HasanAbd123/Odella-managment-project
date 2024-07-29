
import './liststtrips.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';


import Datalisttrip from '../../../componentadmin/datalistrip/Datalisttrip';

const Listrtripsad = () => {
  return (
    <div className='Liststrip'>
    <Sidbaradmin />
    <div className='homecontainer'>
    
    <Navbaradmin />
    <h3>Trips</h3>
    <div className='tt'>
<Datalisttrip className='t'/>
 </div>
    </div>
   
</div>
  )
}

export default Listrtripsad