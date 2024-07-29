
import './listbuses.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';

import Datalistbuses from '../../../componentadmin/datalistbuses/Datalistbuses';
const Listbuses = () => {
  return (
    <div className='Listbuses'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
        <h3>Buses</h3>
       <div className='bb'><Datalistbuses className='b'/></div>
  
    </div>
   
</div>
  )
}

export default Listbuses