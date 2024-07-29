import React from 'react'
import "./listline.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Dataline from '../../components/dataline/Dataline';
import { useTranslation } from 'react-i18next';
const Listline = () => {
  const { t } = useTranslation();
  return (
    <div className='listline'>
    <Sidebar/>
    <div className='tripscontainer'>
    <Navbar/>
    <h2>Lines</h2>
    <div className='ll'>
    <Dataline className='ii'/></div>
    </div>
   
</div>
  )
}

export default Listline