
import './listlocation.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';
import Datalistlocation from '../../../componentadmin/datalistlocation/Datalistlocation';
const Listlocation = () => {
  return (
    <div className='Listlocat'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
        
       <Datalistlocation/>
  <div className='actionbot'>
  <Link to={`/admin/listposition/addPosition `}style={{textDecoration:"none"}}>
          <button className='addbot'>addPostion</button>
          </Link>
          </div>
    </div>
   
</div>
  )
}

export default Listlocation