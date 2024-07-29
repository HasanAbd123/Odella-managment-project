
import './listevaluation.scss'

import React from 'react'

import Sidbaradmin from '../../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../../componentadmin/navbaradmin/Navbaradmin'

import {Link} from 'react-router-dom';

import Datalistbuses from '../../../componentadmin/datalistbuses/Datalistbuses';
import Dataevaluation from '../../../componentadmin/datatableevaluation/Dataevaluation';
const Listevaluation= () => {
  return (
    <div className='Listevaluations'>
    <Sidbaradmin />
    <div className='homecontainer'>
    <Navbaradmin/>
    <h3>evaluation</h3>
       <div className='ee'>
       <Dataevaluation className='e'/></div> 
 
    </div>
   
</div>
  )
}

export default Listevaluation