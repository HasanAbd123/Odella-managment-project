import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';
import "./home.scss";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {

    toast.success("welcome in employee panel",{position:"top-center",theme:'colored'});
   
   
  },[])
  return (
    <div className='home'>
       <Sidebar/>
       <div className='homecontainer'>
       <Navbar/>
       <div className='widgets'>
      <ToastContainer/>
        <Widgets/>
        <Widgets/>
        <Widgets/>
        <Widgets/>
       </div>
       </div>
      
   </div>
   
  )

}


export default Home