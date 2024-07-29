

import React, { useContext } from 'react'

import { useState,useEffect } from 'react';
import axios from 'axios';

import { DataGrid  } from '@mui/x-data-grid';

import {Link} from 'react-router-dom';
import { User } from '../../pages/context/Contextuser';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './datalistemployee.scss'
import DataTable from 'react-data-table-component';



const DatalistEmployee = () => {
  const[page,setpage]=useState(1)
  const[totalRows,setTotalRows]=useState(0)
  const[perpage,setperpage]=useState(10)
    const [state,setstate]= useState([]);
    const [loading,setload]= useState(false);
  
    const contex = useContext(User);
  
    const  token= contex.auth.tocken;

  /*const actioncolumn =[ 
    {field:'id',headerName:"Id",width:100},
    
    
    {field:"firstName",headerName:"Firstname",width:120,renderCell:(params)=>{
  
      return(params.row.firstName)}},
  
      {field:"lastName",headerName:"Lastname",width:120,renderCell:(params)=>{
  
        return(params.row.lastName)}},
    
        {field:"phoneNumber",headerName:"Number",width:120,renderCell:(params)=>{
  
          return(params.row.phoneNumber)}},

          {field:"email",headerName:"Email",width:120,renderCell:(params)=>{
  
            return(params.row.email)}},
   
  
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
    
  ]*/
  
  const actioncolumn =[

    {name :"Id",

  selector:row =>row.id

},
{  name :"firstName",

selector:row =>row.firstName

  },
  { name :"lastName",

selector:row =>row.lastName

  },
  { 
    name:"phoneNumber",

selector:row =>row.phoneNumber

  },
  { 
    name:"email",

selector:row =>row.email

  },
 {

  name:'action',
  cell:row =>(
    <div className='cellaction'>
 
        <Link to={`/admin/listsopervisor/${row.id} `}style={{textDecoration:"none"}}>
          <div className='viewButton'>view</div>
          </Link>
          
          <div className='DelletBotton'>Delete</div>
    </div>
  )


  },
  ]
  const customstyle={
    table: {style:{
      backgroundColor: '#f2f2f2',
    }
    },
    pagination:{
      style:{
     
       background:'#f2f2f2',
       color:'black',
       fontsize:'30px',
       fontWeight:'bold'
       
       
      }  
        
        
       
     
       },
    headCells:{
      style:{
        fontWeight:'bold',
        fontsize:'40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
  
  
      }},
    headRow:{
      
        style:{
          
      background:' linear-gradient(200deg,#71b5fc,#71b5fc)',
      borderRadius: '20px',
      
        
      },
     
    
    }, 
    rows:{
      style:{
        backgroundColor:'#71b5fc',
        borderRadius: '20px',
       
      },
      
    },
    cells:{
      style:{
        borderbottom:'0.2px solid gray',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'50px',
      }
    },
    
  }
  
    const fetchaxios= async (page) => {
     try{
      const response= await axios.get(`https://yaamen1.com/api/employees?page=${page}&per_page=${perpage}`,{
        
      headers:{
        Authorization:"Bearer" +token,
  
      }})
      setstate(response.data.data)
      console.log(response.data.data.data)
      setTotalRows(response.data.total)
      setload(true);
    
      }catch(error){ console.log(error.response);
      
  
      }
   }

 
   
    useEffect(() => {
      fetchaxios();
      
     
    },[])
  
    const handleperrowchange=(newperpage)=>{
 
      setperpage(newperpage)
    }
    const handlepagechange=(page)=>{
    
      
      setpage(page);
      fetchaxios(page)
    }
    const [searchTerm, setSearchTerm] = useState('');
    return (
      
      <div className='datatasoemp'>
                <input className='inputs'
      type="text"
      placeholder="Search by  name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className='actionbots'>
    <Link to={`/admin/listeemployee/addemployee`}style={{textDecoration:"none"}}>
          <button className='addbot'>add</button>
          </Link>
          </div>  
               {loading ? <DataTable className='grids'  
              columns={ actioncolumn}
             data={state.filter((row) =>
    row.firstName.toLowerCase().includes(searchTerm.toLowerCase()))}
            customStyles={customstyle}
            highlightOnHover
           striped
           pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handleperrowchange}
            onChangePage={handlepagechange}
            fixedHeader

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

export default DatalistEmployee