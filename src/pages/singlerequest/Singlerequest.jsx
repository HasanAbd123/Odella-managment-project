import React from 'react'
import "./singlerequest.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';


import Singlerequestform from '../../components/singlerequestform/Singlerequestform';
import { useTranslation } from 'react-i18next';
const Singlerequest = () => {
  const { t } = useTranslation();
  return (
    <div className='single'>
    <Sidebar/>
    <div className='singlecontainer'>
    <Navbar/>
     
     <div className='item'>

    <Singlerequestform/>
         </div>
    </div>
   
   </div>)
}

export default Singlerequest