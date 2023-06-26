import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Terrain,CaseGenerique,SoldatGenerique} from './Generique'
function App() {
  let x = 13;
  let y = 9;
  let grille = new Array(y).fill(0).map(() => new Array(x).fill({case:null,defense:null,unité:null,action:null}));   
  grille[1][3] = {case: new CaseGenerique("images/base/h_hills.png"),defense:null,unité:null,action:null}
  grille[1][4] = {case: new CaseGenerique("images/base/h_hills.png"),defense:null,unité:null,action:null}
  grille[5][3] = {case: new CaseGenerique("images/base/h_hills.png"),defense:null,unité: new SoldatGenerique("images/base/u_gerinf_bottom.png",4,4),action:null}
  grille[7][8] = {case: new CaseGenerique("images/base/h_forest.png"),defense:new CaseGenerique("images/base/o_sand2.png"),unité: new SoldatGenerique("images/base/u_ustank_bottom.png",3,3),action:null}
  grille[2][10] = {case: new CaseGenerique("images/base/h_river1.png"),defense:new CaseGenerique("images/base/o_sand2.png"),unité: new SoldatGenerique("images/base/u_usgun_bottom.png",2,2),action:null}
  
  const global = useMemo(()=>{
    {
      return (
      <div className="relative">
        <div className="absolute z-[0]"><img src={"images/terrain0.png"} alt={"terrain"}/></div>
        <div className="absolute flex flex-col z-[2000] top-[58px] left-[10px]">
          {grille.map((e,pos)=>{
            return <div className={`${pos % 2 == 1 ? "ml-[45px]":""} w-full flex flex-row`}>{
              e.map((f,pos2)=>{

                  if(pos2 != (pos % 2 == 1 ? x-1 : x)){
                      
                      return <div className={`relative w-[91px] h-[78px] border-0 border-white relative`} >
                        <div className='absolute z-10 w-full h-full'>{f.case ? f.case.render(): ""}</div>
                        <div className='absolute z-20 w-full h-full'>{f.defense ? f.defense.render(): ""}</div>
                        <div className='absolute z-30 w-full h-full'>{f.unité ? f.unité.render(): ""}</div>
                        
                        </div>
                  
              }})
          }</div>
        })}
        </div>
      </div>)
      }
     },[grille])
  return (
    <div className="App w-full h-full relative bg-[#EEE8E4]">
        {global}
      </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
