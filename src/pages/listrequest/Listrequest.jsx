import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./listrequest.scss";
import Datatablerequest from '../../components/datatablerequests/Datatablerequest';
import { useTranslation } from 'react-i18next';
const Listrequest = () => {
  const { t } = useTranslation();
  return (
    <div className='listrequest'>
    <Sidebar/>
    <div className='requestcontainer'>
    <Navbar/>
    <h2>Request</h2>
    <div className='ddd'>
    
    <Datatablerequest className='d' />
    </div>
    </div>
   
</div>
  )
}

export default Listrequest