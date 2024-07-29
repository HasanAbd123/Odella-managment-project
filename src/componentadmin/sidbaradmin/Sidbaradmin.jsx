import React, { useEffect, useState } from 'react'
import "./sidebaradmin.scss"
import avatar from "../../images/avatar/nawar-logo.png";
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DehazeIcon from '@mui/icons-material/Dehaze';
import TransformRoundedIcon from '@mui/icons-material/TransformRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AirlineSeatLegroomReducedIcon from '@mui/icons-material/AirlineSeatLegroomReduced';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CommuteIcon from '@mui/icons-material/Commute';
import SchoolIcon from '@mui/icons-material/School';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import StarIcon from '@mui/icons-material/Star';
const Sidbaradmin = () => {
    const { t } = useTranslation();
    const[isopen,setisopen]=useState(true);
    const togle =()=>{setisopen(!isopen)}
    useEffect(() => {
   
      if(isopen===true){
        setisopen(true)
      }
    },[])
  return (
    <div  style={{width:isopen?'80px':'290px'}} className='sidebarad'>
    <div className='top'> 
    <div  style={{marginLeft:isopen?'250px':'20px'}}  className='bb'> <DehazeIcon className='bar' onClick={togle}/></div> 
     </div>
    <hr/>
    <hr/>
    <div className='center'>
    <ul>
        
    <Link to="/admin" style={{textDecoration:"none"}}>
        <li>
        
        <span> <HomeIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}> {t('home')}</h3></span>
        </li>
        </Link>
        <Link to="/admin/listposition" style={{textDecoration:"none"}}>
        <li>
        <span><LocationOnIcon className='icon'/> <h3 style={{display:isopen?"none":"block"}}>{t('positions')}</h3></span>
        </li>
        </Link>
        <Link to="/admin/listlines" style={{textDecoration:"none"}}>
        <li>
        <span><TransformRoundedIcon className='icon'/> <h3 style={{display:isopen?"none":"block"}}> {t('lines')}</h3></span>
        </li></Link>
        <Link to="/admin/listsupsecrption" style={{textDecoration:"none"}}>
        <li>
        <span><RequestQuoteIcon className='icon'/> <h3 style={{display:isopen?"none":"block"}}>   {t('supsecreptions')}</h3></span>
        </li></Link>
        
        <Link to="/admin/listbuses" style={{textDecoration:"none"}}>
        <li>
        <span><DirectionsBusFilledIcon className='icon'/> <h3 style={{display:isopen?"none":"block"}}> {t('buses')}</h3>    </span>
        </li>
        </Link>
        <Link to="/admin/listdriver" style={{textDecoration:"none"}}>
        <li>
        <span><AirlineSeatLegroomReducedIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('Drivers')}</h3></span>
        </li></Link>
        
        <Link to="/admin/listsopervisor" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><PersonIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('sopervisor')}</h3></span>
        </li></Link>

        <Link to="/admin/listeemployee" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><DirectionsBusFilledIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('employee')}</h3></span>
        </li></Link>
       
        <Link to="/admin/listsstudent" style={{textDecoration:"none"}}>
        <li>
        <span><GroupsIcon className='icon'/><h3 style={{display:isopen?"none":"block"}}>{t('student')}</h3></span>
        </li></Link>

        

        <Link to="/admin/listsrequestad" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><MarkunreadIcon className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('request')}</h3></span>
        </li></Link>
        
        <Link to="/admin/listtrips" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><CommuteIcon className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('trips')}</h3></span>
        </li></Link>

        <Link to="/admin/listtunivercity" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><SchoolIcon  className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('University')}</h3></span>
        </li></Link>

        <Link to="/admin/listtclaimad" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><SettingsPhoneIcon className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('claim')}</h3></span>
        </li></Link>

        <Link to="/admin/listlostandfound" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><HowToVoteIcon className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('losts')}</h3></span>
        </li></Link>

        <Link to="/admin/listevaluation" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><StarIcon  className='icon' />
        <h3 style={{display:isopen?"none":"block"}}>{t('evaluation')}</h3></span>
        </li></Link>

        
        <Link to="/" style={{textDecoration:"none"}}>
        <li>
        <span className='logout'><ArrowCircleLeftIcon className='icon' /><h3 style={{display:isopen?"none":"block"}}>{t('Logout')}</h3></span>
        </li></Link>

    </ul>
    
    
     </div>
    <div className='bottom'>
  
     </div>
    </div>
  )
}

export default Sidbaradmin