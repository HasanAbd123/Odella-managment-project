import React from 'react'
import './suplist.scss'
import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin';
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin';

import {Link} from 'react-router-dom';
import Datasupserptions from '../../../componentadmin/datatableforsupsecrption/Datasupserptions';

const Suplist = () => {
  return (
    <div className='suplist'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h3>subsecreption</h3>
    <div className='ss'>
    <Datasupserptions className='s'/></div>

  
    </div>
   
</div>
  )
}

export default Suplist