import React from 'react';
import ReactDOM from 'react-dom/client';
import CenterElem from './components/Center';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <div className='full'>
      <CenterElem/>
    </div>
  </React.StrictMode>
);



