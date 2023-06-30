import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import {Dice, VerificationLineOfSight, showPortee} from './divers/Generique'
import { SelecteurScenario, loadScenario } from './scenario';
import { Scenariovide } from './scenario/scenariovide';
import { Assaultsurvassieuxenvercours } from './scenario/batailleduvercors/assaultsurvassieuxenvercours';
import { Attacking, Move, SelectHexa, Target } from './haxagone/highlight';
import { HitUnit } from './army/army';
import "./index.css"
import { RandomListCard } from './divers/Card';


function App() {
  const [card, setCard] = useState({card:"",img:"",nbunit:1,zone:2,type:"ALL",showing:false}); //zone:1 gauche, zone:2 centre zone:3 droite zone:4 all type:1 soldat, type:2 tank type:3 artilleries type:4 all
  const [selectedScenerio,setSelectedScenario] = useState(Assaultsurvassieuxenvercours);
  const [status,setStatus ] = useState(1)
  const [grille, setGrille ] = useState(loadScenario(Assaultsurvassieuxenvercours));
  const [animation,setAnimation] = useState(new Array(6))
  const [animationShow,setAnimationShow] = useState(false)
  const camp = "Allies" // false alliés true axis
  const camp2 = "Axis"
  const [medalAlliésList,setMedalAlliésList] = useState(new Array(selectedScenerio.medal))
  const [medalAlliés,setMedalAlliés] = useState(0)
  const [medalAxisList,setMedalAxisList] = useState(new Array(selectedScenerio.medal))
  const [medalAxis,setMedalAxis] = useState(0)
  const UnitCanAttack = []
  const debug = false;
  let x = 13;
  let y = 9;
  function StateButton(text,textvalider,status,action,showvalider){
    return <div className='mt-[20px] w-[276px] h-[50px] relative p-2 flex flex-row bg-gray rounded-lg'><div className={`w-5 h-5 rounded-full  mr-[10px] border-[5px] ${status ? "border-green":"border-red"}`}></div><div className='text-white'>{text}</div>{showvalider ? <div className="absolute right-2 top-1 text-white ml-[30px] border-2 border-black rounded-lg p-1"  onClick={action}>{textvalider}</div>:""}</div>
  } 
  //fonction pour retirer les highlight 
  function RemoveHighlight(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        if(f.highlight && (f.highlight.constructor.name == "Move" || f.highlight.constructor.name == "Target")){
          localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:null,select:f.select}
        }
      })})
    setGrille(localgrille2)

  }
  
  function updateAttackUnit(x,y,x2,y2,unité,dicenb){

    let localgrille = {...grille};
    let result = Dice(dicenb,unité,setAnimation,false)
    setAnimationShow(true)
    setTimeout(() => {
      setAnimationShow(false)
    }, 2100);
    setTimeout(() => {
      RemoveHighlight()
      let f = localgrille.grille[x][y];
      let f2 = localgrille.grille[x2][y2];
      if(f.unité._nombre - result <= 0){
        if(camp == "Allies"){
          console.log("test")
          // let medal = {...medalAlliésList}
          console.log('medalAlliésList : ', medalAlliésList)
          medalAlliésList[medalAlliés] = HitUnit(f.unité.constructor.name,1)
          console.log('medal : ', medalAlliésList)
          // setMedalAlliés(medalAlliés+1)
          // setMedalAlliésList(medal);
        }
      }
     
      
      localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité._nombre - result > 0 ? HitUnit(f.unité.constructor.name,f.unité._nombre - result):null,action:null,highlight:null,select:null}
      localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f2.unité,action:null,highlight:null,select:null}
      setGrille(localgrille)
    }, 2200);
    
  }

  function calculDés(x,y,unité){
    RemoveHighlight()
    let localgrille = {...grille};
    let localgrille2 = {...grille};

    let list = showPortee(grille,Object.keys(unité._portée).length,x,y,unité._portée,null)
    list.map(item=>{
      if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2  && VerificationLineOfSight(x,y,item.x,item.y,grille)){
        let malus = 0;
        if(localgrille.grille[item.x][item.y].case && localgrille.grille[item.x][item.y].case._malus){
          if(unité._type == "Soldat"){malus = localgrille.grille[item.x][item.y].case._malus.soldat}
          else if(unité._type == "Char"){malus = localgrille.grille[item.x][item.y].case._malus.tank}
        }
        if(item.dés + malus > 0){
          let f = localgrille2.grille[item.x][item.y];
          localgrille2.grille[item.x][item.y] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{updateAttackUnit(item.x,item.y,x,y,f.unité,item.dés+malus)},highlight:new Target(item.dés + malus),select:null}
       
        }

      }
    })
    setGrille(localgrille2)
  }

  //fonction pour montrer les unités pouvant attacker une untié adverse
  function selectedAttackUnit(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    RemoveHighlight()
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        if(f.select && (f.select.constructor.name == "SelectHexa" || f.select.constructor.name == "Attacking")){
          let list = showPortee(grille,Object.keys(f.unité._portée).length,pos,pos2,f.unité._portée,null)
          let cond = false;
          list.map(item=>{
            if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2 && VerificationLineOfSight(pos,pos2,item.x,item.y,grille)){
              
              cond = true;
            }
          })
        
          localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{calculDés(pos,pos2,f.unité)},highlight:f.highlight,select:cond ? new Attacking():null}
       
        
        }    
      })})
      setGrille(localgrille2)
  }



  //function pour deplacer une unité 
  function MoveAction(oldposx,oldposy,posx,posy,action){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    RemoveHighlight()
    

    let f = localgrille.grille[oldposx][oldposy]
    let list = showPortee(grille,Object.keys(f.unité._deplacement).length,posx,posy,f.unité._portée,null)
    localgrille2.grille[oldposx][oldposy] = {case:f.case,defense:null,unité:null,action:null,highlight:null,select:null}
    // UnitCanAttack.push({x:posx,y:posy})
   
    
    let cond = false;
    list.map(item=>{
      if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2 && VerificationLineOfSight(posx,posy,item.x,item.y,grille)){
        
        cond = true;
      }
    })
    localgrille2.grille[posx][posy] = {case:localgrille2.grille[posx][posy].case,defense:null,unité:f.unité,action:null,highlight: null,select:action == 1 ? (cond ? new Attacking():null ):null}
    setGrille(localgrille2)
  }
  
  //function pour montrée la portée de deplacmeent
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
  //function pour selectionner les unités 
  function selectedUnit(){
    console.log(RandomListCard())
    let filtrecol = {min:0,max:12}
    switch(card.zone){
      case 1:
        filtrecol = {min:0,max:3,min2:0,max2:12}
        break;
      case 2:
        filtrecol = {min:3,max:8,min2:0,max2:12}
        break;
      case 3:
        filtrecol = {min:8,max:12,min2:0,max2:12}
        break;
      case 3:
        filtrecol = {min:0,max:3,min2:8,max2:12}
        break;
      case "ALL":
        break; 
    }
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        
        if(pos2 >= filtrecol.min2 && pos2 <=filtrecol.max2 && pos2 >= filtrecol.min && pos2 <=filtrecol.max ){
          if(f.unité && (card.type == "ALL" || f.unité._type == card.type) && f.unité._camp == camp){
            localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{ShowPortéeUnit(pos,pos2,f.unité)},highlight:f.highlight,select:new SelectHexa()}
          }
          

        }
      })})
      

    setGrille(localgrille)
  }
  
  const showingCard = useMemo(() => {
    return <div className='w-[500px] h-[300px] ml-8 flex flex-col'>
      {StateButton("Selection",status == 1 ? "Commencer":"Valider",status == 2 ? true:false,status == 1 ? ()=>{setStatus(2);selectedUnit();}:()=>{setStatus(3);selectedAttackUnit()},status < 3 ? true:false)}
      {StateButton("Deplacement",status == 3 ? "Continuer":"Valider",status == 3 ? true:false,false,status == 3 ? true:false)}
      {StateButton("Combat",status == 5 ? "Continuer":"Valider",status == 5 ? true:false,status < 7 ? true:false)}
      {card.showing ? <div className=''><img src={card.card} alt={"card"}/></div>:""}
    </div>

  }
    
    , [card,status])



  
  const DiceAnimation = useMemo(()=>{
    return <div className='flex flex-col gap-4 w-[276px] h-[422px] p-2 bg-gray ml-8 rounded-xl'>
      {animationShow ? <>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[0]}`}`}></div>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[1]}`}`}></div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[2]}`}`}></div>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[3]}`}`}></div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[4]}`}`}></div>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[5]}`}`}></div>
        
      </div>
      </>:<>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px] `}>{animation[0] && <img src={`images/dice/die_${animation[0].toLowerCase()}.png`} className='w-[128px] h-[128px]'/>}</div>
        <div className={`w-[128px] h-[128px] `}>{animation[1] && <img src={`images/dice/die_${animation[1].toLowerCase()}.png`} className='w-[128px] h-[128px]'/>}</div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px] `}>{animation[2] && <img src={`images/dice/die_${animation[2].toLowerCase()}.png`} className='w-[128px] h-[128px]'/>}</div>
        <div className={`w-[128px] h-[128px] `}>{animation[3] && <img src={`images/dice/die_${animation[3].toLowerCase()}.png`} className='w-[128px] h-[128px]'/>}</div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px] `}>{animation[4] && <img src={`images/dice/die_${animation[4].toLowerCase()}.png`} className='w-[128px] h-[128px]'/>}</div>
        <div className={`w-[128px] h-[128px] `}>{animation[5] && <img src={`images/dice/die_${animation[5].toLowerCase()}.png`} className='w-[128px] h-[128px]'/>}</div>
        
      </div>
      
      </>}
     
    </div>
  },[animation,animationShow])
  
  useEffect(() => {
        setGrille(loadScenario(selectedScenerio));
  }, [selectedScenerio])
  
  const global = useMemo(()=>{
    {
      
      return (
      <div className="relative w-fit h-fit">
        <div className='absolute mt-[38px] mr-[50px] right-0 z-[10] w-[550px] h-[54px] flex flex-row'>*
          {medalAxisList.map(medal=>{
            return <div className='w-1/6 h-full flex center'>{medal.render()}</div>
          })}
        </div>
        <div className='absolute mb-[38px]  ml-[50px] bottom-0 left-0 z-[10] w-[550px] h-[54px] flex flex-row'>*
        {medalAlliésList.map(medal=>{
            return <div className='w-1/6 h-full flex center'>{medal.render()}</div>
          })}
        </div>
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
                        <div className='absolute z-20 w-full h-full'>{f.defense ? f.defense.render(): ""}</div>
                        <div className='absolute z-30 w-full h-full'>{f.unité ? f.unité.render(): ""}</div>
                        <div className='absolute z-40 w-full h-full'>{f.highlight ? f.highlight.render(): ""}</div>
                        <div className='absolute z-[50] w-full h-full'>{f.select ? f.select.render(): ""}</div>
                        
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
        <div className='flex flex-col'>
          {showingCard}
          {DiceAnimation}
        </div>
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
