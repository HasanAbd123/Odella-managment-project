import React, { useEffect, useState } from 'react'
import "./sidebar.scss";
import avatar from "../../images/avatar/nawar-logo.png";
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CommuteIcon from '@mui/icons-material/Commute';
import TransformRoundedIcon from '@mui/icons-material/TransformRounded';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import PersonIcon from '@mui/icons-material/Person';
const Sidebar = () => {
  const { t } = useTranslation();
  const[isopen,setisopen]=useState(true);
  const togle =()=>{setisopen(!isopen)}
  useEffect(() => {
   
    if(isopen===true){
      setisopen(true)
    }
  },[])
  return (
    <div style={{width:isopen?'80px':'290px'}} className='sidebar'>
    <div className='top'>
   
    <div  style={{marginLeft:isopen?'250px':'20px'}}  className='bb'> <DehazeIcon className='bar' onClick={togle}/></div> 
     </div>
    <hr/>
    <div  className='center'>
    <ul>
        
    <Link to="/home" style={{textDecoration:"none"}}>
        <li>
        
        <span > <HomeIcon className='icon'/> <h3 style={{display:isopen?"none":"block"}}>{t('home')}</h3></span>
        </li>
        </Link>
        <Link to="/students" style={{textDecoration:"none"}}>
        <li>
        <span ><Diversity3Icon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('student')}</h3></span>
        </li>
        </Link>
        <Link to="/Requests" style={{textDecoration:"none"}}>
        <li>
        <span><AssignmentIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('request')}</h3></span>
        </li></Link>
        <Link to="/Trips" style={{textDecoration:"none"}}>
        <li>
        <span ><CommuteIcon className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('Trips')}</h3></span>
        </li></Link>
        <Link to="/lines" style={{textDecoration:"none"}}>
        <li>
        <span><TransformRoundedIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('Lines')}</h3></span>
        </li></Link>
        <Link to="/supervisor" style={{textDecoration:"none"}}>
        <li>
        <span><PersonIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('Supervisor')}</h3></span>
        </li>
        </Link>
        
        <Link to="/claim" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><SettingsPhoneIcon className='icon' /> <h3 style={{display:isopen?"none":"block"}}>{t('claim')}</h3></span>
        </li></Link>
       
        <Link to="/profile" style={{textDecoration:"none"}}>
        <li>
        <span><PersonIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('profile')}</h3></span>
        </li></Link>

        

        <Link to="/" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><ArrowCircleLeftIcon className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('Logout')}</h3></span>
        </li></Link>
        


    </ul>
    
    
     </div>
    <div className='bottom'>
      <div className='coloroption'> . </div>
      <div className='coloroption'>. </div>
      
    
     </div>
    </div>
  )
}

export default Sidebar