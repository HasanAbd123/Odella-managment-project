import React from 'react'
import "./dropdownprof.scss";
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Dropdownpro = () => {
  const { t } = useTranslation();
  return (
    
    <div className='flex flex-col dropdown'>
       <ui className="flex flex-col gap:4">

        <li>{t('profile')}</li>
        <hr/>
        <li>{t('Setting')}</li>
        <hr/>
        <Link to="/login" style={{textDecoration:"none"}}>
        <li className='log'>{t('Logout')}</li></Link>
       </ui>

    </div>
    
    
  )
}

export default Dropdownpro