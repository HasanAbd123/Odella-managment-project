import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import Userprovider from './pages/context/Contextuser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <Userprovider>
    <App />
    </Userprovider>
   </React.StrictMode>
 
);


