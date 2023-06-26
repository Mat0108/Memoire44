import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Terrain,CaseGenerique,SoldatGenerique} from './Generique'
import { SoldatAllies, CharAllies, ArtillerieAllies } from './army/allies';
import { Forest, Hills, SandBag, SelectHexa, Village } from './haxagone/divers';
import { RiversCurve, RiversRight } from './haxagone/rivers';
import { ArtillerieAxis, SoldatAxis, TankAxis } from './army/axis';
function App() {
  const [card, setCard] = useState({card:"",showing:false});
  const showingCard = useMemo(() => {
    return card.showing ? <div className=''><img src={card.card} alt={"card"}/></div>:""}, [card])

  let x = 13;
  let y = 9;
  let grille = new Array(y).fill(0).map(() => new Array(x).fill({case:null,defense:null,unité:null,action:null,highlight:null}));   
  grille[1][3] = {case: new Forest(),defense:null,unité:null,action:null,highlight:null}
  grille[1][4] = {case: new Forest(),defense:null,unité:null,action:null,highlight:null}
  grille[2][4] = {case: new Hills(),defense:null,unité:null,action:null,highlight:null}
  grille[5][10] = {case: new Hills(),defense:null,unité: new SoldatAllies(true),action:null}
  grille[7][8] = {case: new Forest(),defense:new SandBag(false),unité: new CharAllies(false),action:null,highlight:null}
  grille[2][8] = {case: new RiversRight(),defense:new SandBag(false),unité: new ArtillerieAllies(false),action:null,highlight:new SelectHexa()}
  grille[2][9] = {case: new RiversRight() ,defense:new SandBag(true),unité: new ArtillerieAllies(true),action:null,highlight:new SelectHexa()}
  grille[2][10] = {case: new RiversCurve(5), defense:null,unité:null,action:null,highlight:null}
  grille[3][10] = {case: new RiversRight(3), defense:null,unité:null,action:null,highlight:null}
  grille[5][5] = {case: new Village(), defense:null,unité:null,action:null,highlight:null}
  grille[5][6] = {case: new Village(), defense:null,unité:null,action:null,highlight:null}


  grille[4][6] = {case: new Village(setCard), defense:null,unité:null,action:null,highlight:null}
  grille[5][6] = {case: new Village(), defense:null,unité:null,action:null,highlight:null}
  grille[5][6] = {case: new Village(), defense:null,unité:null,action:null,highlight:null}
  
  grille[7][1] = {case: new Village(),defense:null,unité: new SoldatAxis(),action:null,highlight:null}
  grille[7][4] = {case: new Hills(),defense:null,unité:new TankAxis(),action:null,highlight:null}
  grille[7][5] = {case: new Hills(),defense:null,unité:new ArtillerieAxis(),action:null,highlight:null}
  
  const global = useMemo(()=>{
    {
      console.log(grille)
      return (
      <div className="relative w-fit h-fit">
        <div className=""><img src={"images/terrain0.png"} alt={"terrain"} className='w-full h-full'/></div>
        <div className="absolute flex flex-col z-[2000] top-[58px] left-[10px]">
          {grille.map((e,pos)=>{
            return <div className={`${pos % 2 == 1 ? "ml-[45px]":""} w-full flex flex-row`}>{
              e.map((f,pos2)=>{

                  if(pos2 != (pos % 2 == 1 ? x-1 : x)){
                      
                      return <div className={`relative w-[91px] h-[78px] border-0 border-white relative`} >
                        <div className='absolute z-10 w-full h-full'>{f.case ? f.case.render(): ""}</div>
                        <div className='absolute z-20 w-full h-full'>{f.highlight ? f.highlight.render(): ""}</div>
                        <div className='absolute z-30 w-full h-full'>{f.defense ? f.defense.render(): ""}</div>
                        <div className='absolute z-40 w-full h-full'>{f.unité ? f.unité.render(): ""}</div>
                        
                        </div>
                  
              }})
          }</div>
        })}
        </div>
      </div>)
      }
     },[grille])

     
       
  return (
    <div className="App w-full h-full relative bg-[#EEE8E4] flex flex-col ">
        {global} 
        {showingCard}
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
