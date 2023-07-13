import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SelecteurScenario } from './scenario';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';
import "./index.css"
import { Play } from './play/play';
const App = ()=>{
    return (
    <div className="App w-full h-full relative bg-[#EEE8E4]  " key="main">
      {/* <div className='flex'>{SelecteurScenario(selectedScenerio,setSelectedScenario)}</div> */}
      <Router>
        <Routes>
          <Route path="/" element={<SelecteurScenario/>}></Route>
          <Route path="/scenario/:name" element={<Play />}></Route>
        </Routes>
 
      </Router>   
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

