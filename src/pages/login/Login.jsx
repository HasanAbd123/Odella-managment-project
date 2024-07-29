import React, { useContext, useEffect, useState } from 'react'
import "./login.scss";
import avatar from "../../images/avatar/nawar-logo.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User } from '../context/Contextuser';
import Cookies from  'universal-cookie';
import {messaging } from '../../firebase'
import {getToken,onMessage} from "firebase/messaging"
import DehazeIcon from '@mui/icons-material/Dehaze';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { noConflict } from 'leaflet';
let tk = ""
const Login = () => {

  let[tocentoti,settockennotif]=useState('')
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
  useEffect(() =>{
    requestPermession()
   
   
  
  },[])

      const navigate=useNavigate();
  
      const [email,setemail] = useState('');
      const [password,setpassword] = useState('');
      const usernow=useContext(User);
      const cook= new Cookies()
      
      console.log(usernow)

      const handleemail =(e)=>{
        setemail(e.target.value)

      }
      const handlepassword =(e)=>{

        setpassword(e.target.value)
      }

     
  const handlesubmit = async (e)=>{
    console.log(email,password);
    e.preventDefault();
    try{
      const resp= await axios.post('https://yaamen1.com/api/auth/login',{
        email:email,
        password : password,
        fcm_token: "f3blYFjIc9TbMNmILvfYh2:APA91bHU9WqR7RHiLtwKU9oDeQXgk42TEkfW1_bA2MZGfxIAqzWTHWncCEum4aDGg5KkFsbpdB5sLh2OKWGhneS-ccgAXvXZiL5xPyG6l6RVI-RNfa-a7HcMT57Uc1Scl1bKvQv0W3kv",
    });
    const tocken = resp.data.data.access_token;
    cook.set('Bearer',tocken)
    const userdetails = resp.data.data.user;
    alert(resp.data.message);
  
  
    
    console.log(userdetails.roles[0].name)
   
    usernow.setauth({tocken,userdetails})
    if(userdetails.roles[0].name==='Employee'){
      
   navigate('/home');
    }else if(userdetails.roles[0].name==='Admin'){
      navigate('/admin');
     
    }



  }catch(error){
      console.log(error.response);
      if(error.response.status==422){
        
        toast.error(error.response.data.message,{position:"top-center",theme:'colored'});
        
      }

    }
  }
  return (
   /* <div className='Login'>
     <div className='lo'>
     <div className='image'>
     <img src={avatar} alt="" className='avatar'/>
     </div>
     <form onSubmit={handlesubmit}>

        <input  value={ email} type="email" onChange={handleemail} placeholder='  email'/>
        <input   value={password} type="password" onChange ={handlepassword} placeholder =' password'/>
        <button   >login</button>
         <span> Wrong email or password!</span>

     </form>
     </div>
    </div>*/
    <div className='bod'>
      <ToastContainer />
<div className='containers'>
  <div className='design'>
<div className='pill-1 rotate-45'></div>
<div className='pill-2 rotate-45'></div>
<div className='pill-3 rotate-45'></div>
<div className='pill-4 rotate-45'></div>
  </div>
  <div className='login'>
  <div className='image'>
     <img src={avatar} alt="" className='avatar'/>
     </div> 
  <h3 className='title'>Odella</h3>
 <div className='email-input'>
<EmailOutlinedIcon className='i'/>
<input type="email" onChange={handleemail} placeholder='email'/>

 </div>
 <div className='email-input'>
<VisibilityOutlinedIcon className='i'/>
<input type="password" onChange ={handlepassword} placeholder='pasword'/>

 </div>
 <button onClick={handlesubmit} className='log-btn'>Login</button>
 </div>
 
</div>
</div>
    
  )
}

export default Login