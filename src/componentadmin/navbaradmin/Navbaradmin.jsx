import React, { useState } from 'react'
import "./navbaradmin.scss"

import avatar from "../../images/avatar/nawar-logo.png";
import { useTranslation } from 'react-i18next';

const Navbaradmin = () => {
    const { t, i18n } = useTranslation();
    const[openprofile,setopenprofile] = useState(false);
  return (
    <div className='navbarad'>
     
     <div className='wrapper'>
      <div className='search'>

        <input type="text" placeholder='  search...'/>
      </div>
      <div className='itemss'>
        <div className='iteme'>
          {t('title')}
        </div>
        <div className='iteme'>
          h
        </div>
        <div className='iteme'>
          E
        </div>
        <div className='iteme'>
          N
        </div>
        <div className='iteme'>
         { i18n.language === "ar" && <botton  onClick={() => {i18n.changeLanguage('en');}}> ar</botton>}
         { i18n.language === "en" && <botton onClick={() => {i18n.changeLanguage('ar');}}> en</botton>}
        </div>
        <div className='iteme'>

      
        </div>
        <div className='iteme'>
          <img src={avatar} alt="" className='avatar' onClick={() => setopenprofile((prev) =>!prev)}/>

          {
         
          }
          
        </div>
        
      </div>
     
     </div>
    
    </div>
  )
}

export default Navbaradmin