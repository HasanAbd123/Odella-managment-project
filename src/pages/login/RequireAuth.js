import { useContext } from "react";
import { User } from "../context/Contextuser";
import { Navigate, Outlet, useLocation } from "react-router-dom";



export default function RequireAuth(){
    const user=useContext(User);
    const location =useLocation();
   
   

   if(user.auth.userdetails.roles[0].name==='Employee'){
    return <Outlet/>
   }else{
    return <Navigate to="/"/>
}
}

export  function RequireAuthA(){
    const user=useContext(User);
    
   
   

   if(user.auth.userdetails.roles[0].name==='Admin'){
    return <Outlet/> 
   }else  {
    return  <Navigate to="/"/>
}
}