import React from 'react'
import "./dropfromfire.scss";
import {Link, useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User } from '../../pages/context/Contextuser';
import NotificationsIcon from '@mui/icons-material/Notifications';
import  { useContext, useEffect, useState } from 'react'
import {messaging } from '../../firebase'
import {getToken,onMessage} from "firebase/messaging"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/compat/app'
import 'firebase/firestore'

import axios from 'axios';



let tk = ""
const Dropfromfirebase = () => {
 
  const { t } = useTranslation();
  const [sta,setstat]= useState([]);

  const contex = useContext(User);
  const  token= contex.auth.tocken;
  const navigate=useNavigate();
  const [open,setopen]=useState(false)
const[nooon,setnoon]=useState('')
const [notificationCount, setNotificationCount] = useState(0);
const [notifications, setNotifications] = useState([]);
  const togglopen=()=>setopen(prevopen =>!prevopen)
  async function requestPermession(){

    
    const permession=await Notification.requestPermission()
    if(permession==='granted'){
  const tocken= getToken(messaging,
    {vapidkey:'BADr7YzusqYC1b26yOkBypW0SmC91ck1XHdUr9eF__m5cCZKsrejGTUJ6aU1t8jS7PfgFQouhOtuzIUwX7e-RY4'})
    tocken.then((data) => {
      let len = JSON.stringify(data).length
      tk = JSON.stringify(data).slice(1 , len - 1).toString()
      console.log("after ", tk)
    })
    }else if(permession==='denied'){
      alert('youdenued notificatio')
    }
    
  }


  const fetchaxios= async ( ) => {
    
  
    try{
     const response= await axios.get('https://yaamen1.com/api/user/notification',{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstat(response.data.data)
     console.log(response.data.data[0].title)
     if(response.data.data!=null){
      
     }
  
     }catch(error){ console.log(error.response);
     
 
     }
  }
  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
    if (storedNotifications) {
      setNotifications(storedNotifications);
      setNotificationCount(storedNotifications.filter(notification => !notification.isRead).length);
    }
    requestPermession();
    onMessage(messaging, message => {
      console.log("cu messag", message);
      toast(message.notification.title);
      const newNotifications = [message.notification, ...notifications];
      setNotifications(newNotifications);
      localStorage.setItem('notifications', JSON.stringify(newNotifications)); // Save updated notifications to localStorage
      setNotificationCount(prevCount => prevCount + 1);
    });
  }, []);
  const handleNotificationsClick = () => {
    setNotificationCount(0);
    setopen(true);
  };
  const handleMarkAsRead = (index) => {
    setNotifications((prevNotifications) => {
      const newNotifications = [...prevNotifications];
      newNotifications[index].isRead = true;
      localStorage.setItem('notifications', JSON.stringify(newNotifications));
      return newNotifications;
    });
    setNotificationCount((prevCount) => prevCount - 1);
    navigate('/Requests')
  };

  return (
    <>
     <ToastContainer />
    <span className='noo'>  {notificationCount}</span>
     <NotificationsIcon onClick={togglopen} className='nic'/>
  {open &&  <div className='flex flex-col dropdownotfirebas'>
  <h2>Notifications</h2>
  {notifications.map((notification, index) => (
          <div key={index} style={{ background: notification.isRead ? "#eee" : "#fff" }}>
            <p>{notification.title}</p>
            <p>{notification.body}</p>
            <button disabled={notification.isRead} onClick={() => handleMarkAsRead(index)}>
              Mark as Read
            </button>
          </div>
        ))}

    </div>}
    </>
    
  )
}

export default Dropfromfirebase
