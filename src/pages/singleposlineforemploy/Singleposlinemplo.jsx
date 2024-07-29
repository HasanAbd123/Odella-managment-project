import React from 'react'
import "./singleposlinem.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Gmapforsinglineemploy from '../../components/gmapforsinglelineemploy/Gmapforsinglineemploy'
import { useTranslation } from 'react-i18next'
const Singleposlinemplo = () => {
  const { t } = useTranslation();
  return (
    <div className='singlepositions'>
    <Sidebar />
    <div className='homecontainer'>
    <Navbar/>
    
  <Gmapforsinglineemploy/>
    
    </div>
   
</div>
  )
}

export default Singleposlinemplo