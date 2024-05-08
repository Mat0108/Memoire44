import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SelecteurScenario } from './scenario';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';
import "./index.css"
import { Play } from './play/play';
import { CreateScenario } from './scenario/createScenario';
const App = ()=>{
    return (
    <div className="App w-screen h-screen bg-gray-dark " key="main">
      {/* <div className='flex'>{SelecteurScenario(selectedScenerio,setSelectedScenario)}</div> */}
      <Router>
        <Routes>
          <Route path="/" element={<SelecteurScenario/>}></Route>
          <Route path="/scenario/:name/" element={<Play />}></Route>
          <Route path="/scenario/:name/:debug" element={<Play />}></Route>
          <Route path="/create" element={<CreateScenario/>}></Route>
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

