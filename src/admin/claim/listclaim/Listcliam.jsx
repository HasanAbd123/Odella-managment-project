
import './listclaim.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';

import Datalistbuses from '../../../componentadmin/datalistbuses/Datalistbuses';
import DataclaimAd from '../../../componentadmin/dataclaimadmin/DataclaimAd';
const Listcliam = () => {
  return (
    <div className='Listclaim'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h3>cliams</h3>
      <div className='cc'>
       <DataclaimAd className='c'/>
       </div>  
    </div>
   
</div>
  )
}

export default Listcliam