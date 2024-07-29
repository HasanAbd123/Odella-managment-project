import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { User } from "../context/Contextuser";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from "universal-cookie"
import axios from 'axios';


export default function Persistlogin(){
    const contex = useContext(User);
const  tokens= contex.auth.tocken;

const [loading,setload]= useState(true);
   
const cook= new Cookies();


const gettok=cook.get('Bearer')

console.log( "rrr",gettok); 
   const refresh= async () =>{
   
    try{
       const res= await axios.post("https://yaamen1.com/api/auth/refresh",{
            headers:{
                Authorization:"Bearer" +gettok,
            },
        })
       
            console.log( "rrr",res.data.data.access_token);
         cook.set('Bearer',res.data.data.access_token)
         const tock= res.data.data.access_token
         const use=res.data.data.user
         contex.setauth(
            { tock , use}
        )
        setload(false)
    }catch(error){
        console.log(error.res);

    }
 }
 
 useEffect(() => {
   
   
    !tokens? refresh():setload(false);
    
   
  },[])





    return  loading ? <Backdrop
    sx={{ backgroundColor:'inherit' , margin:'100px  40% 100px 0', width:'500px', color: '#111',
     zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open
    
  >
    <CircularProgress color="inherit" />
  </Backdrop> : <Outlet/>;
}
