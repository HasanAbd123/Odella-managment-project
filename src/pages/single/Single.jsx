import React from 'react'
import "./single.scss"
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import Singleformstudent from '../../components/singleformstudent/Singleformstudent';
import { useTranslation } from 'react-i18next';
const Single = () => {
  const { t } = useTranslation();
  return (
    <div className='single'>
     <Sidebar/>
     <div className='singlecontainer'>
     <Navbar/>
    <div className='iteme'>

    
    <Singleformstudent/>

     
     </div>

     


      </div>
     </div>
   
  )
}

export default Single