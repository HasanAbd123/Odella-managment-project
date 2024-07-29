import React from 'react'
import "./singletrips.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Singleformtrips from '../../components/singleformTrips/Singleformtrips';
import { useTranslation } from 'react-i18next';

const Singletrips = () => {
  const { t } = useTranslation();
  return (
    <div className='single'>
    <Sidebar/>
    <div className='singlecontainer'>
    <Navbar/>
  

   <div className='tr'>

<Singleformtrips className='ttrr'/>
</div>

    


    </div>
   </div>
  )
}

export default Singletrips