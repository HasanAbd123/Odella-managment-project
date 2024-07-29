import React, { useContext } from 'react'
import "./singleformstudent.scss"
import {Link} from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { User } from '../../pages/context/Contextuser';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Singleformstudent = () => {
  const { t } = useTranslation();
    const [stat,setstate]= useState();
    const contex = useContext(User);
    const  token= contex.auth.tocken;
    const [loading,setload]= useState(false);
    const[dateend,setdatend]=useState('')
    const[idsub,setidsub]=useState('')
    const{userId}=useParams();

    const [statsup,setstatesup]= useState([]);
    const [amountadd, setamountadd]=useState('')
    const[dateadd,setdateadd]=useState('')

    const navigate=useNavigate();

  const fetchaxios= async () => {
    try{
     const response= await axios.get('https://yaamen1.com/api/students/'+userId,{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstate(response.data.data)
     console.log(response.data.data)
     setload(true);
     }catch(error){ console.log(error.response);
     
 
     }
  }

  const fetchsup= async () => {
    try{
     const response= await axios.get('https://yaamen1.com/api/subscriptions',{
  
     headers:{
       Authorization:"Bearer" +token,
 
     }})
     setstatesup(response.data.data)
     console.log(response.data.data)
     setload(true);
     }catch(error){ console.log(error.response);
     
 
     }
  }
  
  
   useEffect(() => {
     fetchaxios();
     fetchsup();
    
   },[])
   const handdatend =(e)=>{ setdatend(e.target.value);}

   const handlesub=(event)=>{

       
       
    setidsub(event.target.value)
     
    

    }
    const  handleamountadd =(event)=>{

       
       
      setamountadd(event.target.value)
       
      
  
      }
      const  handledateadd =(event)=>{

       
       
        setdateadd(event.target.value)
         
        
    
        }
   const handleapdatesub = async (e)=>{
    
    e.preventDefault();
    try{
      const resp= await axios.post(`https://yaamen1.com/api/employees/subscriptions/${userId}?_method=PUT`,{
      
      subscription_id:idsub,
      expiredSubscriptionDate:dateend ,
      
    },{
      
        headers:{
          Authorization:"Bearer" +token,
    
        }});
    
    console.log(resp.data)
    
   
  
  
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: resp.data.message,
      showConfirmButton: true,
      timer: 3000,
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         navigate('/students')
     
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
     
    })
  

   
}catch(error){
    console.log(error.response);
    if(error.response.status==422){
  
      toast.error(error.response.data.message,{position:"top-center",theme:'colored'});
      
    }

    }
  }
  const handleaaddamount = async (e)=>{
    
    e.preventDefault();
    try{
      const resp= await axios.post(`https://yaamen1.com/api/employees/payments/${userId}?`,{
      
      amount:amountadd,
      date:dateadd ,
      
    },{
      
        headers:{
          Authorization:"Bearer" +token,
    
        }});
    
    console.log(resp.data)
  
   
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: resp.data.message,
      showConfirmButton: true,
      timer: 3000,
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         navigate('/students')
     
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
     
    })
  

   
}catch(error){
    console.log(error.response);
    if(error.response.status==422){
  
      toast.error(error.response.data.message,{position:"top-center",theme:'colored'});
      
    }

    }
  }
  return (
    <div className='itemss'>
    <ToastContainer />
    {loading?  <div className='failde'>

          <form >
              <div className='content'>
              <div className='all'>
              <div className='left'>
                <div className='inputbox'>
                    <lable for="firstname">{t('position')}</lable>
                    <input type="text" name='first' value={ stat && stat.position.name} />

                </div>
                <div className='inputbox'>
                    <lable for="lastname">{t('city')}</lable>
                    <input type="text" name='last' value={stat && stat.location.city.name}/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">{t('area')}</lable>
                    <input type="text" name='first' value={stat && stat.location.area.name}/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">الشارع</lable>
                    <input type="text" name='first' value={stat && stat.location.street}/>

                </div>
                <div className='apdate'>
                <h3>تحديث الاشتراك</h3>
                <div className='inputbox'>
                    <lable for="firstname">الاشتراك</lable>
                    <select  className='sel' name='country'  onChange={(e)=>handlesub(e)}>
                    <option className='option'>--sub--</option>
                    {statsup.map((p)=>( <option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
               

                </div>
                <div className='inputbox'>
                    <lable for="firstname" >تحديث تاريخ الانتهاء</lable>
                    <input type="date" name='first' onChange={handdatend}/>

                </div>
                <div className='bot'>
                    <button onClick={handleapdatesub}>apdate</button>
                </div>
                </div>
                </div>
                <div className='right'>
                <div className='inputbox'>
                    <lable for="number">{t('University')}</lable>
                    <input type="text" name='number' value={stat && stat.university.name} />

                </div>
                <div className='inputbox'>
                    <lable for="email">{t('number day')}</lable>
                    <input type="text" name='email' value={stat && stat.subscription.daysNumber}/>

                </div>   
                <div className='inputbox'>
                    <lable for="firstname">{t('cost')}</lable>
                    <input type="text" name='first' value={stat && stat.subscription.price}/>

                </div>
                <div className='inputbox'>
                    <lable for="firstname">{t('type supsecreption')}</lable>
                    <input type="text" name='first' value={stat && stat.subscription.name}/>

                </div>
                <div className='apdate'>
                <h3>دفع قسط</h3>
                <div className='inputbox'>
                    <lable for="firstname">المبلغ</lable>
                    <input type="text" name='first' onChange={handleamountadd}/>

                </div>
               
                <div className='inputbox'>
                    <lable for="firstname">تاريخ الدفع</lable>
                    <input type="date" name='first' onChange={handledateadd}/>

                </div>
                <div className='bot'>
                    <button onClick={handleaaddamount}>add</button>
                </div>
                </div>
                </div>
                </div>
                <div className=' botons'>
                <Link to="/students" style={{textDecoration:"none"}}>
                <div className='bot'>
                    <button>back</button>
                </div></Link>
               
                </div>
              </div>

           </form>


     </div>
     : <Backdrop
        sx={{ backgroundColor:'inherit' , margin:'100px  40% 100px 0', width:'500px', color: '#111',
         zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>}

     <div className='image'>
       
          <div className='photo'>
          <img src={`https://yaamen1.com/storage/${stat && stat.image} `} className='persphoto' alt='phto'/>
           
          </div>
          
          <h3> <span>{stat && stat.firstName}</span> {t('name')}</h3> 
          <h3><span>{stat && stat.email}</span> {t('email')}</h3> 
          <h3><span> {stat && stat.phoneNumber}</span> {t('number')}</h3> 
           <h3> <span>{stat && stat.line.name}</span> {t('line')}</h3>
          
         

     </div>
    

    </div>
  )
}

export default Singleformstudent