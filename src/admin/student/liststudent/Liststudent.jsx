
import './liststudent.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';

import Dataliststudent from '../../../componentadmin/dataliststudent/Dataliststudent';

const Liststudent = () => {
  return (
    <div className='Liststudent'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h3>student</h3>
      <div className='ss'>
   <Dataliststudent className='s'/></div>  
 
    </div>
   
</div>
  )
}

export default Liststudent