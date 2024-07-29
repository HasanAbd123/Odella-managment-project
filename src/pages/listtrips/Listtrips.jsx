import React from 'react'
import "./listtrips.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatabletrip from '../../components/datatabletrips/Datatabletrip';
import { useTranslation } from 'react-i18next';
const Listtrips = () => {
  const { t } = useTranslation();
  return (
    <div className='listtrips'>
    <Sidebar/>
    <div className='tripscontainer'>
    <Navbar/>
    <h2>Trip</h2>
    <div className='tt'>
    <Datatabletrip className='v'/>
    </div>
    </div>
   
</div>
  )
}

export default Listtrips