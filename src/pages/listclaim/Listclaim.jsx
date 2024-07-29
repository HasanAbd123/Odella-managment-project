import React from 'react'
import './listclaim.scss'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Dataclaim from '../../components/dataclaim/Dataclaim';
import { useTranslation } from 'react-i18next';
const Listclaim = () => {
  const { t } = useTranslation();
  return (
    <div className='listclaim'>
    <Sidebar/>
    <div className='tripscontainer'>
    <Navbar/>
    <h2>claim</h2>
    <div className='cc'>
      <Dataclaim className='ss'/>
      </div>
    </div>
   
</div>
  )
}

export default Listclaim