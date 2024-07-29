import React from 'react';
import "./list.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatable from '../../components/datatable/Datatable';
import { useTranslation } from 'react-i18next';
const List = () => {
  const { t } = useTranslation();
  return (
    <div className='Lists'>
    <Sidebar/>
    <div className='Listcontainer'>
    <Navbar/>
    <h2>{t('student')}</h2>
   <div className='con'>

   <Datatable className='cc'/>
   

     </div> 
    </div>
    </div>
   

  )
}

export default List