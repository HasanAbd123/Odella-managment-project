

import React, { useContext } from 'react'

import { useState,useEffect } from 'react';
import axios from 'axios';

import { DataGrid  } from '@mui/x-data-grid';

import {Link} from 'react-router-dom';
import { User } from '../../pages/context/Contextuser';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './datalistlocation.scss'

const Datalistlocation = () => {
    const [state,setstate]= useState([]);
    const [loading,setload]= useState(false);
  
    const contex = useContext(User);
  
    const  token= contex.auth.tocken;

  const actioncolumn =[ 
    {field:'id',headerName:"Id",width:100},
    {field:"city",headerName:"City",width:120,renderCell:(params)=>{
  
        return(params.row.city.id) }},
    
    {field:"area",headerName:"Area",width:120,renderCell:(params)=>{
  
      return(params.row.area.name)}},
  
      {field:"street",headerName:"Street",width:120,renderCell:(params)=>{
  
        return(params.row.street)}},
    
   
   
  
    {field:"action",headerName:"Action",width:220,renderCell:(params)=>{
      return(
        <div className='cellaction'>
        <Link to={`/admin/listposition/singlePosition/${params.row.id} `}style={{textDecoration:"none"}}>
          <div className='viewButton'>view</div>
          </Link>
          
          <div className='DelletBotton'>Delete</div>
        </div>
      )
    }},
    
  ]
  
  
    const fetchaxios= async () => {
     try{
      const response= await axios.get('https://yaamen1.com/api/locations',{
        
      headers:{
        Authorization:"Bearer" +token,
  
      }})
      setstate(response.data.data.data)
      console.log(response.data.data.data)
      setload(true);
    
      }catch(error){ console.log(error.response);
      
  
      }
   }
   
    useEffect(() => {
      fetchaxios();
      
     
    },[])
  
  
  
    return (
      
      <div className='datatabllocation'>
               
               {loading ? <DataGrid className='grid'
          rows={state}
          columns={ actioncolumn}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
         
        
                 /> : <Backdrop
          sx={{ backgroundColor:'inherit' , margin:'100px  40% 100px 0', width:'500px', color: '#111',
           zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
          
        >
          <CircularProgress color="inherit" />
        </Backdrop>}  
         
        
          </div>
        
    )
}

export default Datalistlocation