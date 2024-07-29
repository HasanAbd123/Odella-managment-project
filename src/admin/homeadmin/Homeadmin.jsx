import React, { useEffect } from 'react'
import "./homeadmin.scss"
import Sidbaradmin from '../../componentadmin/sidbaradmin/Sidbaradmin'
import Navbaradmin from '../../componentadmin/navbaradmin/Navbaradmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homeadmin = () => {
  useEffect(() => {

    toast.success("welcome in Admin panel",{position:"top-center",theme:'colored'});
   
   
  },[])
  return (
    <div className='homeadmin'>
  
    <Sidbaradmin/>
    
    <div className='homecontainer'>
    <Navbaradmin/>
    <div className='widgets'>
    <ToastContainer/>
   
    </div>
    </div>
   
</div>
  )
}

export default Homeadmin