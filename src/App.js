import Home from "./pages/home/Home";

import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import Singlerequest from "./pages/singlerequest/Singlerequest"
import Singletrips  from "./pages/singletrips/Singletrips"
import { useTranslation } from 'react-i18next';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Listrequest from "./pages/listrequest/Listrequest";
import Listtrips from "./pages/listtrips/Listtrips";
import Userprofile from "./pages/userprofile/Userprofile";
import RequireAuth, { RequireAuthA } from "./pages/login/RequireAuth";
import Listline from "./pages/listline/Listline";

import Listclaim from "./pages/listclaim/Listclaim";
import Listsupervisor from "./pages/listsupervisor/Listsupervisor";

import Listcliam from "./admin/claim/listclaim/Listcliam";


import Persistlogin from "./pages/login/Persistlogin";
import Positionline from "./admin/positionline/Positionline";
import Homeadmin from "./admin/homeadmin/Homeadmin";
import Listposition from "./admin/Listposition/Listposition";
import Singleposlin from "./admin/singleposline/Singleposlin";
import Listslines from "./admin/lineslist/Listslines";
import Suplist from "./admin/supsecreption/supsecreptionlist/Suplist";
import Listlocation from "./admin/Location/listlocation/Listlocation";
import Listbuses from "./admin/buses/listbuses/Listbuses";

import Listdrivers from "./admin/drivers/listdrivers/Listdrivers";
import Listsopervisor from "./admin/sopervisor/listsopervisor/Listsopervisor";
import Liststudent from "./admin/student/liststudent/Liststudent";
import Listrequestad from "./admin/request/listrequest/Listrequestad";
import Listrtripsad from "./admin/Trips/listtrips/Listrtripsad";
import { Addtrip } from "./admin/Trips/addtrip/Addtrip";
import Singleclaims from "./pages/singleclaimes/Singleclaims";
import Addline from "./admin/linesadd/Addline";
import Addsup from "./admin/supsecreption/supsecreptionadd/Addsup";
import Formbus from "./componentadmin/formbus/Formbus";
import Addbus from "./admin/buses/addbuses/Addbus";
import Adddriver from "./admin/drivers/addldriver/Adddriver";
import Singlebus from "./admin/buses/singlebuses/Singlebus";
import Singledriver from "./admin/drivers/singledriver/Singledriver";
import Singlesupsec from "./admin/supsecreption/supsecreptionsingle/Singlesupsec";
import Addsopervisor from "./admin/sopervisor/addlsoper/Addsopervisor";
import Singlesopervisor from "./admin/sopervisor/singlelsopervisor/Singlesopervisor";
import {messaging } from './firebase'
import {getToken} from "firebase/messaging"

import React, { useEffect } from "react";
import Listsemployee from "./admin/Employee/listsEmployee/Listsemployee";
import AddEmployee from "./admin/Employee/addlsoper/AddEmployee";
import Apdatepositon from "./admin/apdatepositionline/Apdatepositon";
import Listevaluation from "./admin/evaluation/listevaluation/Listevaluation";
import Listclost from "./admin/lostandfound/listlostandfound/Listclost";
import Listunversity from "./admin/University/listuniversity/Listuniversity"
import Linesingle from "./admin/linessingle/Linesingle";
import Singleposlinemplo from "./pages/singleposlineforemploy/Singleposlinemplo";
function App() {
async function requestPermession(){
  const permession=await Notification.requestPermission()
  if(permession==='granted'){
const tocken= getToken(messaging,
  {vapidkey:'BADr7YzusqYC1b26yOkBypW0SmC91ck1XHdUr9eF__m5cCZKsrejGTUJ6aU1t8jS7PfgFQouhOtuzIUwX7e-RY4'})
  console.log("tockenn",tocken)
  }else if(permession==='denied'){
    alert('youdenued notificatio')
  }
}


useEffect(() =>{
  requestPermession()

},[])


  const lang="ar";
  const lange="en";
  const {  i18n } = useTranslation();
     if(i18n.language === "ar"){
      document.body.dir='rtl';
      document.getElementsByTagName("html")[0].setAttribute("lang",lang);
      

     }

     else{
      document.body.dir='ltr';
      document.getElementsByTagName("html")[0].setAttribute("lang",lange);
     }

  return (
    <div className="App" >
     <BrowserRouter>
      <Routes>
        <Route  >
      

          <Route path="/"  >
          <Route index element={<Login/>}/>
          <Route element={<Persistlogin/>}>
          <Route element={<RequireAuth/>}>
            <Route path="home" element={<Home/>}/>
            
            <Route path="lines" >
            <Route index element={<Listline/>}/>
            
            <Route path=":singlelinforemploy" element={<Singleposlinemplo/>}/>
            </Route>
            <Route path="supervisor" element={<Listsupervisor/>}/>
            
            <Route path="students" >
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="claim">
              <Route index element={<Listclaim/>}/>
              <Route path=":singleclaim" element={<Singleclaims/>}/>
              
            </Route>

            <Route path="Requests">
              <Route index element={<Listrequest/>}/>
              <Route path=":RequestId" element={<Singlerequest/>}/>
              <Route path="new" element={<New/>}/>
            </Route>

            <Route path="Trips">
              <Route index element={<Listtrips/>}/>
              <Route path=":TripsId" element={<Singletrips/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            
            <Route path="profile" element={<Userprofile/>}/>
            </Route>
            </Route>
            
            <Route element={<RequireAuthA/>}>
            <Route path="admin" >
            <Route index element={<Homeadmin/>}/>
            <Route path="listposition" >
            <Route index element={<Listposition/>}/>
            <Route path="addPosition" element={<Positionline/>}/>
            <Route path=":singlePosition" element={<Singleposlin/>}/>
            <Route path="apdate/:id" element={<Apdatepositon/>}/>
            </Route>
            <Route path="listlines" >
            <Route index element={<Listslines/>}/>
            <Route path="addlines" element={<Addline/>}/>
            <Route path=":singlelines" element={<Linesingle/>}/>
            </Route>
            <Route path="listsupsecrption" >
            <Route index element={<Suplist/>}/>
            <Route path="addsup" element={<Addsup/>}/>
            <Route path=":singlesupsec" element={<Singlesupsec/>}/>
            </Route>
            <Route path="listslocation" >
            <Route index element={<Listlocation/>}/>
            <Route path="addlocation" element={<Positionline/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listbuses" >
            <Route index element={<Listbuses/>}/>
            <Route path="addbus" element={<Addbus/>}/>
            <Route path=":singlebus" element={<Singlebus/>}/>
            </Route>
            <Route path="listdriver" >
            <Route index element={<Listdrivers/>}/>
            <Route path="adddriver" element={<Adddriver/>}/>
            <Route path=":singledriver" element={<Singledriver/>}/>
            </Route>
            <Route path="listsopervisor" >
            <Route index element={<Listsopervisor/>}/>
            <Route path="addsopervisor" element={<Addsopervisor/>}/>
            <Route path=":singlesopervisor" element={<Singlesopervisor/>}/>
            </Route>
            <Route path="listsstudent" >
            <Route index element={<Liststudent/>}/>
            <Route path="addlocation" element={<Positionline/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listsrequestad" >
            <Route index element={<Listrequestad/>}/>
            <Route path="addlocation" element={<Positionline/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listtrips" >
            <Route index element={<Listrtripsad/>}/>
            <Route path="addtrip" element={<Addtrip/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listtunivercity" >
            <Route index element={<Listunversity/>}/>
            <Route path="addlocation" element={<Positionline/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listtclaimad" >
            <Route index element={<Listcliam/>}/>
            <Route path="addlocation" element={<Positionline/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listlostandfound" >
            <Route index element={<Listclost/>}/>
            <Route path="addlocation" element={<Positionline/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listevaluation" >
            <Route index element={<Listevaluation/>}/>
            <Route path="addlocation" element={<Positionline/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            <Route path="listeemployee" >
            <Route index element={<Listsemployee/>}/>
            <Route path="addemployee" element={<AddEmployee/>}/>
            <Route path="singlelocation" element={<Singleposlin/>}/>
            </Route>
            </Route>
            </Route>


          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
