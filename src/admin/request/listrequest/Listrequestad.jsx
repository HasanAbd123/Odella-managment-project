
import './liststrequest.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';


import Datalistrequest from '../../../componentadmin/datalistrequest/Datalistrequest';

const Listrequestad = () => {
  return (
    <div className='Liststrequest'>
    <Sidbaradmin />
    <div className='homecontainer'>
   
    <Navbaradmin/>
    <h3>Request</h3>
     <div className='rr'>  
 <Datalistrequest className='r'/>
 </div> 

    </div>
   
</div>
  )
}

export default Listrequestad