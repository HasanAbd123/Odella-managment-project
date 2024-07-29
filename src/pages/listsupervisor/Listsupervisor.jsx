import React from 'react'
import "./listsupervisor.scss"
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datasupervisor from '../../components/datatablesupervisor/Datasupervisor';
import { useTranslation } from 'react-i18next';
const Listsupervisor = () => {
  const { t } = useTranslation();
  return (
    <div className='listsuper'>
    <Sidebar/>
    <div className='tripscontainer'>
    <Navbar/>
    <h2>Soupervisor</h2>
    <div className='ss'>
   <Datasupervisor className='s'/></div>
    </div>
    </div>
  )
}

export default Listsupervisor