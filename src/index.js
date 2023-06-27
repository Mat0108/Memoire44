import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Terrain,CaseGenerique,SoldatGenerique, showPortee} from './Generique'
import { SoldatAllies, CharAllies, ArtillerieAllies } from './army/allies';
import { Forest, Hills, SandBag, Village,RiversCurve, RiversRight  } from './haxagone/base';
import { ArtillerieAxis, CharAxis, SoldatAxis, TankAxis } from './army/axis';
import { SelecteurScenario, loadScenario } from './scenario';
import { Scenariovide } from './scenario/scenariovide';
import { Assaultsurvassieuxenvercours } from './scenario/batailleduvercors/assaultsurvassieuxenvercours';
import { Move, SelectHexa } from './haxagone/highlight';



function App() {
  const [card, setCard] = useState({card:"",img:"",nbunit:1,zone:2,type:"Soldat",showing:false}); //zone:1 gauche, zone:2 centre zone:3 droite zone:4 all type:1 soldat, type:2 tank type:3 artilleries type:4 all
  const [selectedScenerio,setSelectedScenario] = useState(Assaultsurvassieuxenvercours);
  const [status,setStatus ] = useState(1)
  const [grille,setGrille] = useState(loadScenario(selectedScenerio))
  const camp = "Allies" // false alliés true axis
  function StateButton(text,status,action){
    return <div className='mt-[20px] w-[250px] h-[50px] relative p-2 flex flex-row bg-gray rounded-lg'><div className={`w-5 h-5 rounded-full bg-white mr-[10px] border-[5px] ${status ? "border-green":"border-red"}`}></div><div className='text-white'>{text}</div><div className="absolute right-2 top-1 text-white ml-[30px] border-2 border-black rounded-lg p-1"  onClick={action}>Valider</div></div>
  }
  function ShowPortéeUnit(posx,posy){
    let list = showPortee(2,posx,posy,null,[1,2])
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        list.map(item=>{
          if(item.x == pos && item.y == pos2 && !f.unité ){
            localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:new Move(item.deplacement)}
          }
          if(posx == pos && posy == pos){
            localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:null}
          }
        })
      })})
    console.log(grille)
    console.log('localgrille : ', localgrille.grille)
    setGrille(localgrille)
    
    
  }
  function selectedUnit(){
    let filtrecol = {min:0,max:12}
    switch(card.zone){
      case 1:
        filtrecol = {min:0,max:3}
        break;
      case 2:
        filtrecol = {min:3,max:8}
        break;
      case 3:
        filtrecol = {min:8,max:12}
        break;
      case 4:
        break; 
    }
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        if(pos2 >= filtrecol.min && pos2 <=filtrecol.max){
          if(f.unité && f.unité._type == card.type && f.unité._camp == camp){
            localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{ShowPortéeUnit(pos,pos2)},highlight:new SelectHexa()}
          }
          

        }
      })})
    setGrille(localgrille)
  }
  
  const showingCard = useMemo(() => {
    return <div className='w-[500px] h-[600px] ml-8 flex flex-col'>
      {StateButton("Selection",status == 1 ? true:false,()=>{setStatus(2);selectedUnit();})}
      {StateButton("Deplacement",status == 2 ? true:false)}
      {StateButton("Combat",status == 3 ? true:false)}
      {card.showing ? <div className=''><img src={card.card} alt={"card"}/></div>:""}
    </div>

  }
    
    , [card,status])

  let x = 13;
  let y = 9;
  
  useEffect(() => {
    setGrille(loadScenario(selectedScenerio));
  }, [selectedScenerio])
  
  const global = useMemo(()=>{
    {
      console.log("update grille")
      return (
      <div className="relative w-fit h-fit">
        <div className=""><img src={`images/${grille.terrain}.png`} alt={"terrain"} className='w-full h-full'/></div>
        <div className="absolute flex flex-col z-[2000] top-[58px] left-[10px]">
          {grille.grille.map((e,pos)=>{
            return <div className={`${pos % 2 == 1 ? "ml-[45px]":""} w-full flex flex-row`}>{
              e.map((f,pos2)=>{

                  if(pos2 != (pos % 2 == 1 ? x-1 : x)){
                      
                      return <div className={`relative w-[91px] h-[78px] border-0 border-white ${f.action ? "hover:cursor-pointer":""}`} onClick={f.action} >
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
    <div className="App w-full h-full relative bg-[#EEE8E4]  ">
      <div className='flex'>{SelecteurScenario(selectedScenerio,setSelectedScenario)}</div>
      <div className='flex flex-row'>
        {global} 
        {showingCard}
      </div>
        
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
