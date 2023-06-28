import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {VerificationLineOfSight, showPortee} from './Generique'
import { SelecteurScenario, loadScenario } from './scenario';
import { Scenariovide } from './scenario/scenariovide';
import { Assaultsurvassieuxenvercours } from './scenario/batailleduvercors/assaultsurvassieuxenvercours';
import { Attacking, Move, SelectHexa } from './haxagone/highlight';



function App() {
  const [card, setCard] = useState({card:"",img:"",nbunit:1,zone:2,type:"ALL",showing:false}); //zone:1 gauche, zone:2 centre zone:3 droite zone:4 all type:1 soldat, type:2 tank type:3 artilleries type:4 all
  const [selectedScenerio,setSelectedScenario] = useState(Assaultsurvassieuxenvercours);
  const [status,setStatus ] = useState(1)
  const [grille, setGrille ] = useState(loadScenario(Assaultsurvassieuxenvercours))
  const camp = "Allies" // false alliés true axis
  const camp2 = "Axis"
  const UnitCanAttack = []
  const debug = false;
  let x = 13;
  let y = 9;
  function StateButton(text,textvalider,status,action,showvalider){
    return <div className='mt-[20px] w-[250px] h-[50px] relative p-2 flex flex-row bg-gray rounded-lg'><div className={`w-5 h-5 rounded-full bg-white mr-[10px] border-[5px] ${status ? "border-green":"border-red"}`}></div><div className='text-white'>{text}</div>{showvalider ? <div className="absolute right-2 top-1 text-white ml-[30px] border-2 border-black rounded-lg p-1"  onClick={action}>{textvalider}</div>:""}</div>
  } 
  function RemoveHighlight(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        if(f.highlight && f.highlight.constructor.name === "Move"){
          localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:null,select:f.select}
        }
      })})
    setGrille(localgrille2)

  }
  function MoveAction(oldposx,oldposy,posx,posy,action){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    RemoveHighlight()
    

    let f = localgrille.grille[oldposx][oldposy]
    console.log(f)
    let list = showPortee(grille,Object.keys(f.unité._deplacement).length,posx,posy,f.unité._portée,null)
    localgrille2.grille[oldposx][oldposy] = {case:f.case,defense:null,unité:null,action:null,highlight:null,select:null}
    UnitCanAttack.push({x:posx,y:posy})
   
    
    let cond = false;
    list.map(item=>{
      if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2 && VerificationLineOfSight(posx,posy,item.x,item.y,grille)){
        
        cond = true;
      }
    })
    localgrille2.grille[posx][posy] = {case:localgrille2.grille[posx][posy].case,defense:null,unité:f.unité,action:null,highlight: null,select:action == 1 ? (cond ? new Attacking():null ):null}
    setGrille(localgrille2)
  }
 
  function ShowPortéeUnit(posx,posy,unité){
    RemoveHighlight();
    
    let list = showPortee(grille,Object.keys(unité._deplacement).length,posx,posy,null,unité._deplacement)


    let localgrille = {...grille};
    let localgrille2 = {...grille};

   
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        list.map(item=>{
          if(item.x == pos && item.y == pos2 && !debug ? !f.unité :item.x == pos && item.y == pos2){  
            localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{MoveAction(posx,posy,pos,pos2,item.deplacement)},highlight: new Move(item.deplacement),select:f.select}
            
          }
          if(posx == pos && posy == pos){
            localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:null,select:null}
          }
        })
      })})

    setGrille(localgrille2)
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
          if(f.unité && (card.type == "ALL" || f.unité._type == card.type) && f.unité._camp == camp){
            localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{ShowPortéeUnit(pos,pos2,f.unité)},highlight:f.highlight,select:new SelectHexa()}
          }
          

        }
      })})

    setGrille(localgrille)
  }
  
  const showingCard = useMemo(() => {
    return <div className='w-[500px] h-[600px] ml-8 flex flex-col'>
      {StateButton("Selection",status == 1 ? "Commencer":"Valider",status == 2 ? true:false,status == 1 ? ()=>{setStatus(2);selectedUnit();}:()=>{setStatus(3)},status < 3 ? true:false)}
      {StateButton("Deplacement",status == 3 ? "Continuer":"Valider",status == 3 ? true:false,status < 5 ? true:false)}
      {StateButton("Combat",status == 5 ? "Continuer":"Valider",status == 5 ? true:false,status < 7 ? true:false)}
      {card.showing ? <div className=''><img src={card.card} alt={"card"}/></div>:""}
    </div>

  }
    
    , [card,status])


  
  useEffect(() => {
        setGrille(loadScenario(selectedScenerio));
  }, [selectedScenerio])
  
  const global = useMemo(()=>{
    {
      
      return (
      <div className="relative w-fit h-fit">
        {debug ? <div className='absolute z-[4100] top-0 left-8 text-vivid_tangerine text-[20px] font-av-bold'><span className='text-white text-[20px] font-av-bold'>posx</span> posy</div>:""}
        <div className=""><img src={`images/${grille.terrain}.png`} alt={"terrain"} className='w-full h-full'/></div>
        <div className="absolute flex flex-col z-[2000] top-[58px] left-[10px]">
          {grille.grille.map((e,pos)=>{
            return <div className={`${pos % 2 == 1 ? "ml-[45px]":""} w-full flex flex-row`}>{
              e.map((f,pos2)=>{

                  if(pos2 != (pos % 2 == 1 ? x-1 : x)){
                      
                      return <div className={`relative w-[91px] h-[78px] border-0 border-white ${f.action ? "hover:cursor-pointer":""}`} onClick={f.action} key={`${pos}${pos2}`}>
                        {debug ? <div className='absolute z-50 bottom-0 left-8 text-vivid_tangerine text-[24px] font-av-bold'><span className='text-white text-[24px] font-av-bold'>{pos}</span> {pos2}</div> :""}
                        <div className='absolute z-10 w-full h-full'>{f.case ? f.case.render(): ""}</div>
                        <div className='absolute z-20 w-full h-full'>{f.highlight ? f.highlight.render(): ""}</div>
                        <div className='absolute z-[25] w-full h-full'>{f.select ? f.select.render(): ""}</div>
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
      {/* <div className='flex'>{SelecteurScenario(selectedScenerio,setSelectedScenario)}</div> */}
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
