import React, { useContext } from 'react'
import "./datatable.scss";
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

/*const actioncolumn =[ 
  {field:'id',headerName:"Id",width:100},
  {field:"firstName",headerName:"FirstName",width:120},
  {field:"lastName",headerName:"LastName",width:120},
  {field:"email",headerName:"Email",width:230},
  {field:"phoneNumber",headerName:"PhoneNumbe",width:150},

  {field:"expiredSubscriptionDate",headerName:"ExpiredSubscriptionDate",width:200},
 
 

  {field:"action",headerName:"Action",width:220,renderCell:(params)=>{
    return(
      <div className='cellaction'>
      <Link to={`/students/${params.row.id} `}style={{textDecoration:"none"}}>
        <div className='viewButton'>view</div>
        </Link>
        <div className='DelletBotton'>Delete</div>
      </div>
    )
  }},
  
]*/
const actioncolumn=[

  {name :"Id",

  selector:row =>row.id

},
{  name :"firstname",

selector:row =>row.firstName

  },
  { name :"lastname",

selector:row =>row.lastName

  },
  { 
    name:"email",

selector:row =>row.email

  },
  {  
    name:"email",

selector:row =>row.phoneNumber

  },
  { 
    name:'expiredSubscriptionDate',

selector:row =>row.expiredSubscriptionDate

  },{

  name:'action',
  cell:row =>(
    <div className='cellaction'>
    <Link to={`/students/${row.id} `}style={{textDecoration:"none"}}>
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
    const response= await axios.get(`https://yaamen1.com/api/student/active?page=${page}&per_page=${perpage}`,{
      
    headers:{
      Authorization:"Bearer" +token,

    }})
    setstate(response.data.data.data)
    console.log(response.data.data.data)
    setTotalRows(response.data.data.meta.total)
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
    
    <div className='datatabs'>
             
             <input className='inputs'
      type="text"
      placeholder="Search by  name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
             {loading ?

             
             
             <DataTable  className='grids'
              columns={ actioncolumn}
             data={state.filter((row) =>
    row.firstName.toLowerCase().includes(searchTerm.toLowerCase()))}
            customStyles={customstyle}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handleperrowchange}
            onChangePage={handlepagechange}
            striped
            highlightOnHover
        
      
          fixedHeader

             />
            
       

           
             
             
              /* <DataGrid className={clasess.root}
        rows={state}
        columns={ actioncolumn}
       pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        cellClassName={clasess.cell}
       
      />*/ : <Backdrop
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