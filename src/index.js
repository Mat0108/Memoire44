import React from 'react';
import ReactDOM from 'react-dom/client';
import { SelecteurScenario } from './scenario';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';
import "./index.css"
import { Play } from './play/play';
import { CreateScenario } from './scenario/createScenario';
import Home from './Home';
import About from './About';
import Progress from './Progress'
import Tuto from './scenario/tuto';

const App = ()=>{
    return (
    <div className="App w-screen h-screen bg-gray-dark " key="main">
      {/* <div className='flex'>{SelecteurScenario(selectedScenerio,setSelectedScenario)}</div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/play" element={<SelecteurScenario/>}></Route>
          <Route path="/play/:debug" element={<SelecteurScenario/>}></Route> 
          <Route path="/scenario/:name/" element={<Play />}></Route>
          <Route path="/scenario/:name/:debug" element={<Play />}></Route>
          <Route path="/create" element={<CreateScenario/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/progress" element={<Progress/>}></Route>
          <Route path="/tuto" element={<Tuto/>}></Route>
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

