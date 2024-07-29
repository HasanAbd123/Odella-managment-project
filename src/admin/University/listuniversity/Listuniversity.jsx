
import './listuniversity.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';

import Datalistbuses from '../../../componentadmin/datalistbuses/Datalistbuses';
import Datatableuniversity from '../../../componentadmin/datatableforuniversity/Datatableuniversity';
const Listuniversity= () => {
  return (
    <div className='Listuniver'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
        <h3>University</h3>
       <div className='uu'><Datatableuniversity className='u'/></div>
  
    </div>
   
</div>
  )
}

export default Listuniversity