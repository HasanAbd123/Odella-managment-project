
import './listlost.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';

import Datalistbuses from '../../../componentadmin/datalistbuses/Datalistbuses';
import Datalostandfound from '../../../componentadmin/dataclostandfound/Datalostandfound';
const Listclost = () => {
  return (
    <div className='Listlost'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h2>Lost&found</h2>
        <div className='ll'>
       <Datalostandfound className='l'/>
       </div>
    </div>
   
</div>
  )
}

export default Listclost