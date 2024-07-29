import React, { useContext, useEffect, useState } from 'react'
import "./navbar.scss";
import Dropdownpro from '../dropdownpeofile/Dropdownpro';
import avatar from "../../images/avatar/nawar-logo.png";
import { useTranslation } from 'react-i18next';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dropdownnotification from '../dropdownnotificayion/Dropdownnotification';
import { User } from '../../pages/context/Contextuser';
import axios from 'axios';
import Dropfromfirebase from '../dropdonnotiffromfirebase/Dropfromfirebase';

const Navbar = () => {
  const [sta,setstat]= useState([]);
  const [not,setnot]= useState(false);
  const contex = useContext(User);
  const  token= contex.auth.tocken;
  const { t, i18n } = useTranslation();
  const[openprofile,setopenprofile] = useState(false);
  const[opennotify,setopopennotify] = useState(false);
  const fetchaxios= async () => {
    
    
    try{
     const response= await axios.get('https://yaamen1.com/api/user/notification',{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstat(response.data.data)
     console.log(response.data.data)
     if(response.data.data!=null){
      setnot(true)
     }
     }catch(error){ console.log(error.response);
     
 
     }
  }
  useEffect(() => {
    fetchaxios();
   
   
  },[])
  return (
    <div className='navbar'>
     
     <div className='wrapper'>
      <div className='search'>

        <input type="text" placeholder='  search...'/>
      </div>
      <div className='items'>
        <div className='iteme'>
          {t('title')}
        </div>
        <div className='iteme'>

         
        </div>
        <div className='iteme'>
          <Dropfromfirebase/>
        </div>
        <div className='iteme'>
          N
        </div>
        <div className='iteme'>
         { i18n.language === "ar" && <botton  onClick={() => {i18n.changeLanguage('en');}}> ar</botton>}
         { i18n.language === "en" && <botton onClick={() => {i18n.changeLanguage('ar');}}> en</botton>}
        </div>
        
        <div className='iteme'>
          <img src={avatar} alt="" className='avatar' onClick={() => setopenprofile((prev) =>!prev)}/>

          {
            openprofile && <Dropdownpro className="drop"/> 

          }
          
        </div>
        
      </div>
     
     </div>
    
    </div>
  )
}

export default Navbar