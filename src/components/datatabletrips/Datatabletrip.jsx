
import React, { useContext } from 'react'
import "./datatabletrip.scss";

import { useState,useEffect } from 'react';
import axios from 'axios';


import { DataGrid  } from '@mui/x-data-grid';

import {Link} from 'react-router-dom';

import { User } from '../../pages/context/Contextuser';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import DataTable from 'react-data-table-component';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';
const Datatable = () => {
  const { t } = useTranslation();
  const[page,setpage]=useState(1)
  const[totalRows,setTotalRows]=useState(0)
  const[perpage,setperpage]=useState(10)
  const [state,setstate]= useState([]);
  const [loading,setload]= useState(false);

  const contex = useContext(User);

  const  token= contex.auth.tocken;

  const[currentpage,setcurentpage]=useState(1);
  const[totalrows,settotalrows]=useState(20);
  const per_page=10;


/*const actioncolumn =[ 
  {field:'id',headerName:"Id",width:100},
  {field: "time" ,headerName:"Starttime",width:100,renderCell:(params)=>{
            return(params.row.time.start)
  }},


  {field:"supervisor",headerName:"Supervisor",width:230,renderCell:(params)=>{

    return(params.row.supervisor.firstName)}},

  

    {field:"supervisor",headerName:"LastName",width:230,renderCell:(params)=>{

      return(params.row.supervisor.lastName)}},
 
 

  {field:"action",headerName:"Action",width:220,renderCell:(params)=>{
    return(
      <div className='cellaction'>
      <Link to={`/Trips/${params.row.id}`} style={{textDecoration:"none"}}>
        <div className='viewButton'>view</div>
        </Link>
        
      </div>
    )
  }},
  
]*/
const actioncolumn =[ 
  {name :"Id",

  selector:row =>row.id

},
{  name :"availableSeats",

selector:row =>row.availableSeats

  },
  { name :"time",

selector:row =>row.time.start

  },
  { 
    name:"supervisor",

selector:row => row.supervisor.firstName

  },
  { 
    name:"lines",

selector:row => row.lines[0].name

  },

 {

  name:'action',
  cell:row =>(
    <div className='cellaction'>
 
 <Link to={`/Trips/${row.id}`} style={{textDecoration:"none"}}>
        <div className='viewButton'><VisibilityIcon/></div>
        </Link>
        
        
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
    const response= await axios.get(`https://yaamen1.com/api/trips?page=${page}&per_page=${perpage}`,{
      
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
    
   
  },[currentpage])

  const handleperrowchange=(newperpage)=>{
 
    setperpage(newperpage)
  }
  const handlepagechange=(page)=>{
  
    
    setpage(page);
    fetchaxios(page)
  }
  const [searchTerm, setSearchTerm] = useState('');

  return (
    
    <div className='datatables'>
         <input className='inputs'
      type="text"
      placeholder="Search by start time"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
             
             {loading ?  <DataTable className='grids'  
              columns={ actioncolumn}
             data={state.filter((row) =>
    row.time.start.toLowerCase().includes(searchTerm.toLowerCase()))}
            customStyles={customstyle}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handleperrowchange}
            onChangePage={handlepagechange}
            striped
            highlightOnHover
        
      
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

export default Datatable