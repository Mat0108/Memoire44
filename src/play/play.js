import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';

import {CardGenerique, Dice, Flag, VerificationLineOfSight, isCombatRapproche, pointproche, showPortee} from '../divers/Generique'
import { ReturnScenario, SelecteurScenario, loadScenario } from '../scenario';
import { Scenariovide } from '../scenario/scenariovide';
import { Assaultsurvassieuxenvercours } from '../scenario/batailleduvercors/assaultsurvassieuxenvercours';
import { Attacking, Move, Retreat, SelectHexa, Target } from '../haxagone/highlight';
import { AddDice, HitUnit } from '../army/army';
import { AirPower, Barrage, CampAffichage, CardSelect, RandomListCard } from '../divers/Card';


import { useParams } from 'react-router';
import { SandBag } from '../haxagone/base';


export const Play =()=> {
  const [card, setCard] = useState(new CardGenerique("Fusillade","firefight-fr",4,"ALL","ALL",false,false,false,true))
    // new CardGenerique("Attaque centre","attack-center-fr",3,2,"ALL"),);
  const {name} = useParams();

  const [selectedScenerio,setSelectedScenario] = useState(ReturnScenario(name));
  const [status,setStatus ] = useState(1)
  const [grille, setGrille ] = useState(loadScenario(ReturnScenario(name)));
  const [animation,setAnimation] = useState(new Array(6))
  const [animationShow,setAnimationShow] = useState(false)
  const [camp, setCamp ]  = useState(selectedScenerio.camp) // false alliés true axis
  const [camp2, setCamp2 ]  = useState(selectedScenerio.camp == "Allies" ? "Axis" : "Allies")
  const [medalAlliésList,setMedalAlliésList] = useState(new Array())
  const [medalAlliés,setMedalAlliés] = useState(0)
  const [medalAxisList,setMedalAxisList] = useState(new Array())
  const [medalAxis,setMedalAxis] = useState(0)
  const [modal, setModal] = useState(<></>)
  
  const debug = false;
  let x = 13;
  let y = 9;
  useEffect(() => {
    setGrille(loadScenario(selectedScenerio));
}, [selectedScenerio])


  function StateButton(text,textvalider,status,action,showvalider){
    return <div className='mt-[20px] w-[276px] h-[50px] relative p-2 flex flex-row bg-gray rounded-lg'><div className={`w-5 h-5 rounded-full  mr-[10px] border-[5px] ${status ? "border-green":"border-red"}`}></div><div className='text-white'>{text}</div>{showvalider ? <div className="absolute right-2 top-1 text-white ml-[30px] border-2 border-black rounded-lg p-1"  onClick={action}>{textvalider}</div>:""}</div>
  } 
  //fonction pour retirer les highlight 
  function RemoveHighlight(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        if(f.highlight && (f.highlight.constructor.name == "Move" || f.highlight.constructor.name == "Target" || f.highlight.constructor.name == "Retreat")){
          localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:null,select:f.select}
        }
      })})
    setGrille(localgrille2)

  }
  function switchCamp(){
    let localcamp = camp;
    setCamp(camp2);
    setCamp2(localcamp);
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        if(f.highlight && (f.highlight.constructor.name == "Move" || f.highlight.constructor.name == "Target" || f.highlight.constructor.name == "Retreat")){
          localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:null,select:null}
        }
      })})
    setGrille(localgrille2)

  }
  function UpdateMedal(f,nb){
    if(nb < 1){
      if(camp == "Allies"){
        // let medal = {...medalAlliésList}
        medalAlliésList.push(HitUnit(f.unité.constructor.name,1));
        // setMedalAlliésList(medal);
      }else{
        medalAxisList.push(HitUnit(f.unité.constructor.name,1));
        // setMedalAxis(medalAxis+1);
      }
    }
  }
  function updateAttackUnit(x,y,x2,y2,unité,dicenb,star,refire){
    let localgrille = {...grille};
    let dice = Dice(dicenb,unité,setAnimation,star ? true:false)
    let result = dice.LoseLife
    setAnimationShow(true)
    setTimeout(() => {
      setAnimationShow(false)
    }, 2100);

    setTimeout(() => {
      setAnimation(new Array())
    }, 6000);
    setTimeout(() => {
      RemoveHighlight()
      let f = localgrille.grille[x][y];
      if(f.unité._nombre - result <= 0){
        if(camp == "Allies"){
          // let medal = {...medalAlliésList}
          medalAlliésList.push(HitUnit(f.unité.constructor.name,1));
          // setMedalAlliésList(medal);
        }else{
          medalAxisList.push(HitUnit(f.unité.constructor.name,1));
          // setMedalAxis(medalAxis+1);
        }
        localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:null,action:null,highlight:null,select:null}
        
      }else if(dice.nbflag > 0 && localgrille.grille[x][y]._ignoreflag ? dice.nbflag > 1 : true){
        let flaglist = Flag(x,y,dice.nbflag,camp2);
        if(!Object.keys(flaglist).length ){
          localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité._nombre - result > 0 ? HitUnit(f.unité.constructor.name,f.unité._nombre - result ):null,action:null,highlight:null,select:null}
        }else{
          let chooseflag = 0
          flaglist.map(item=>{
            if(localgrille.grille[item.x][item.y].unité){
              chooseflag += 1;
            }
          })
          if(chooseflag == Object.keys(flaglist).length  ){
            localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité._nombre - result-dice.nbflag > 0 ? HitUnit(f.unité.constructor.name,f.unité._nombre - result - dice.nbflag ):null,action:null,highlight:null,select:null}
          }else if(chooseflag == Object.keys(flaglist).length-1  ){
            flaglist.map(item=>{
              if(!localgrille.grille[item.x][item.y].unité){
                let g = localgrille.grille[item.x][item.y];
                localgrille.grille[item.x][item.y] = {case:g.case,defense:g.defense,unité:f.unité._nombre - result > 0 ? HitUnit(f.unité.constructor.name,f.unité._nombre - result):null,action:null,highlight:null,select:null}
                localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:null,action:null,highlight:null,select:null}
      
              }
            })
          
          }else{
            localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{moveUnit(x,y,x,y,f.unité._nombre - result -dice.nbflag,x2,y2);UpdateMedal(f,f.unité._nombre - result -dice.nbflag)},highlight:new Retreat(0,-1*dice.nbflag),select:null}
            flaglist.map(item=>{
              if(!localgrille.grille[item.x][item.y].unité){
                let g = localgrille.grille[item.x][item.y];
                localgrille.grille[item.x][item.y] = {case:g.case,defense:g.defense,unité:g.unité,action:()=>{moveUnit(x,y,item.x,item.y,f.unité._nombre - result+(item.flag-dice.nbflag),x2,y2);UpdateMedal(f,f.unité._nombre - result+(item.flag-dice.nbflag))},highlight:new Retreat(item.flag,item.flag-dice.nbflag),select:null}
              }  
            })
          }
        }
        
      }
      if(x2 >= 0){
        let f2 = localgrille.grille[x2][y2];
        if(card._image == "artillery-bombard-fr" && refire ){
          localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f2.unité,action:()=>{calculDés(x2,y2,null,null,f2.unité,false)},highlight:null,select:new Attacking()}
        }else if(card._image == "behind-enemy-lines-fr"){
          localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:AddDice(f2.unité.constructor.name,f2.unité._nombre,[4,3,2],[2,2,2]),action:()=>{ShowPortéeUnit(x2,y2,AddDice(f2.unité.constructor.name,f2.unité._nombre,[4,3,2],[2,2,2]))},highlight:null,select:new SelectHexa()}
        
        }else{
          localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f2.unité,action:null,highlight:null,select:null}
        }  
      }
      
      
      setGrille(localgrille)
    }, 2200);
    
  }


  function calculDés(x,y,unité,refire){
    RemoveHighlight()
    let localgrille = {...grille};
    let localgrille2 = {...grille};

    let list = showPortee(grille,Object.keys(unité._portée).length,x,y,unité._portée,null)
    
    list.map(item=>{
      if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2 ){
        let malus = 0;
        if(localgrille.grille[item.x][item.y].case && localgrille.grille[item.x][item.y].case._malus){
          if(unité._type == "Soldat"){malus = localgrille.grille[item.x][item.y].case._malus.soldat}
          else if(unité._type == "Char"){malus = localgrille.grille[item.x][item.y].case._malus.tank}
        }
        if(localgrille.grille[item.x][item.y].defense && localgrille.grille[item.x][item.y].defense._malus){
          if(unité._type == "Soldat"){malus = localgrille.grille[item.x][item.y].case._malus.soldat+malus}
          else if(unité._type == "Char"){malus = localgrille.grille[item.x][item.y].case._malus.tank+malus}
        }
        if(item.dés + malus > 0){
          let f = localgrille2.grille[item.x][item.y];
          let cond = false;
          if(card._image == "armor-assault-fr"){
            let ptproche = pointproche(x,y)
            ptproche.map(pt=>{
              if(item.x == pt.x && item.y == pt.y){cond = true}
            })
          } 
          let dice = cond ? item.dés+malus+1 : item.dés+malus
          localgrille2.grille[item.x][item.y] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{updateAttackUnit(item.x,item.y,x,y,f.unité,dice,false,refire)},highlight:new Target(dice),select:null}
       
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
            if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2 && f.unité._type == "Artillerie" ? localgrille.grille[item.x][item.y].unité  : VerificationLineOfSight(pos,pos2,item.x,item.y,grille)){
              
              cond = true;
            }
          })
        
          localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{calculDés(pos,pos2,f.unité,card._image == "artillery-bombard-fr" ? true:false)},highlight:f.highlight,select:cond ? new Attacking():null}
       
        
        }    
      })})
      setGrille(localgrille2)
  }


  function persée(x,y,x2,y2,Refire){
    let localgrille = {...grille};
    let f = localgrille.grille[x][y];
    let f2 = localgrille.grille[x2][y2];
    let list = showPortee(grille,Object.keys(f.unité._portée).length,x2,y2,f.unité._portée,null)
    let cond = false;
    if(Refire){
      list.map(item=>{
        if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2 && VerificationLineOfSight(x2,y2,item.x,item.y,grille)){
          cond = true;
        }
      })  
    }
    if(Refire && cond){
      localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f.unité,action:()=>{calculDés(x2,y2,f.unité,false)},highlight:null,select:new Attacking()}
    }else{
      localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f.unité,action:null,highlight:null,select:null}
    }
    localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:null,action:null,highlight:null,select:null}
    setGrille(localgrille);
    setModal(<></>)
  }
  //Move functions 
  function moveUnit(x,y,x2,y2,nbunit,originx,originy){
    
    RemoveHighlight();
    let localgrille = {...grille};
    let f = localgrille.grille[x][y];
    let f2 = localgrille.grille[x2][y2];
    localgrille.grille[x][y] = {case:f.case,defense:f.defense,unité:null,action:null,highlight:null,select:null}
    localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:HitUnit(f.unité.constructor.name,nbunit),action:null,highlight:null,select:null}
    if(x != x2 || y != y2){
      if(localgrille.grille[originx][originy].unité && isCombatRapproche(x,y,originx,originy) ){
        if(localgrille.grille[originx][originy].unité._type == "Soldat"){
          setModal(
            <div className='relative w-screen h-screen flex center z-[350] '>
            <div className='absolute w-[400px] h-[100px] rounded-3xl flex flex-col bg-gray z-[350]'>
              <div className='text-center w-full h-1/2 p-4'>Voulez vous faire une prise de terrain ? </div>
              <div className='w-full h-1/2 flex justify-around'>
                <div className='w-[80px] h-10 p-2 bg-red text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{setModal(<></>)}}>Annuler</div>  
                <div className='w-[80px] h-10 p-2 bg-green text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{persée(originx,originy,x,y,false)}}>Valider</div>  
              
              </div>
            </div>
          </div>
          )
        }else if(localgrille.grille[originx][originy].unité._type == "Char"){
          setModal(
            <div className='relative w-screen h-screen flex center z-[350] '>
            <div className='absolute w-[400px] h-[100px] rounded-3xl flex flex-col bg-gray z-[350]'>
              <div className='text-center w-full h-1/2 p-4'>Voulez vous faire une persée de blindés ? </div>
              <div className='w-full h-1/2 flex justify-around'>
                <div className='w-[80px] h-10 p-2 bg-red text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{setModal(<></>)}}>Annuler</div>  
                <div className='w-[80px] h-10 p-2 bg-green text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{persée(originx,originy,x,y,true)}}>Valider</div>  
              
              </div>
            </div>
          </div>
          )
        }
      }
    }
    
    setGrille(localgrille)
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
          
        })
      })})

    setGrille(localgrille2)
  }

  function updateSelectedUnit(x,y,isSelected,selectOther){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let f = localgrille.grille[x][y];
    let nb = 0;
    let cond = true;
    if(isSelected){
      localgrille.grille.map((e,pos)=>{
        e.map((f,pos2)=>{
          if(f.select && f.select.constructor.name == "SelectHexa"){
            nb += 1;
          }
        });
      });
      if(card._image == "firefight-fr"){
        let pts = pointproche(x,y);
        pts.map(item=>{
          if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2){
            cond = false
          }
        })
      }
      if(selectOther ? nb < 1 : nb < card._nbunit && cond){
        
        localgrille2.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(x,y,false)},highlight:f.highlight,select:new SelectHexa()}   
      } 
    }else{
      localgrille2.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(x,y,true)},highlight:f.highlight,select:null}      
    }
    
    setGrille(localgrille2);
  }

  //function pour selectionner les unités 
  function selectedUnit(selectOther){
    let filtrecol = {min:0,max:12}
    switch(card._zone){
      case 1:
        filtrecol = {min:0,max:3,min2:0,max2:3}
        break;
      case 2:
        filtrecol = {min:3,max:8,min2:3,max2:8}
        break;
      case 3:
        filtrecol = {min:8,max:12,min2:8,max2:12}
        break;
      case 4:
        filtrecol = {min:0,max:3,min2:8,max2:12}
        break;
      case "ALL":
        break; 
    }
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let cond = true
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
            
        if((pos2 >= filtrecol.min2 && pos2 <=filtrecol.max2 )||(pos2 >= filtrecol.min && pos2 <=filtrecol.max)){
          if(card._nbunit == "ALL"){
            if(f.unité && (card._type == "ALL" || f.unité._type == card._type) && f.unité._camp == camp){
              localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:null,highlight:f.highlight,select:new SelectHexa()}
              cond = false;
            }
          }else{
            if(f.unité && (card._type == "ALL" || f.unité._type == card._type) && f.unité._camp == camp){
              localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(pos,pos2,true,false)},highlight:f.highlight,select:null}
              cond = false
            }

          }
        }
      })})
    if(cond && selectOther){
      localgrille.grille.map((e,pos)=>{
        e.map((f,pos2)=>{
              
          if((pos2 >= filtrecol.min2 && pos2 <=filtrecol.max2 )||(pos2 >= filtrecol.min && pos2 <=filtrecol.max)){ 
            if(f.unité && f.unité._camp == camp){
              localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(pos,pos2,true,selectOther)},highlight:f.highlight,select:null}
              cond = false
            }
          }
        })})
    }
    setGrille(localgrille2);
  }
  function showPortéeALL(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    
    localgrille.grille.map((e,pos)=>{
      e.map((f,pos2)=>{
        if(f.select && f.select.constructor.name == "SelectHexa"){
          localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{ShowPortéeUnit(pos,pos2,f.unité)},highlight:f.highlight,select:f.select}
        }
      })
    })
    setGrille(localgrille2);
  }

  function selectCard(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let cond = true;
    switch(card._image){
      case "air-power-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
                if(f.unité && f.unité._camp == camp2){
                  localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{AirPower(grille,setGrille,pos,pos2,()=>updateAttackUnit(pos,pos2,null,null,f.unité,f.unité._camp == "Allies" ? 1 : 2,true))},highlight:null,select:null}
              }
          })})
        setGrille(localgrille2);
        break;
      case "artillery-bombard-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
                if(f.unité && f.unité._camp == camp && f.unité._type == "Artillerie"){
                  localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:AddDice(f.unité.constructor.name,f.unité._nombre,null,[2,2,2]),action:null,highlight:null,select:null}
                  cond = false;
                }
          })})
        
        setGrille(localgrille2);
        selectedUnit(true);
        break;
      case "barrage-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
                if(f.unité && f.unité._camp == camp2){
                  localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:f.unité,action:()=>{Barrage(grille,setGrille,pos,pos2,()=>{updateAttackUnit(pos,pos2,null,null,f.unité,4);setStatus(5)})},highlight:null,select:null}
              }
          })})
        setGrille(localgrille2);
      
        break;
      case "behind-enemy-lines-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
                if(f.unité && f.unité._camp == camp && f.unité._type == "Soldat"){
                  localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:AddDice(f.unité.constructor.name,f.unité._nombre,[4,3,2],[1,1,1]),action:null,highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
        selectedUnit(true);
        break;
      case "close-assault-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
                if(f.unité && f.unité._camp == camp){
                  let ptproches = pointproche(pos,pos2);
                  let cond = false
                  ptproches.map(pt=>{
                    if(localgrille.grille[pt.x][pt.y].unité && localgrille.grille[pt.x][pt.y].unité._camp == camp2){
                      cond = true
                    }
                  })
                  if(cond){
                    if(f.unité._type == "Soldat"){
                      localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:AddDice(f.unité.constructor.name,f.unité._nombre,[4,3,2],[]),action:null,highlight:null,select:new Attacking()}
                    }else if(f.unité._type == "Char"){
                      localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:AddDice(f.unité.constructor.name,f.unité._nombre,[4,4,4],[]),action:null,highlight:null,select:new Attacking()}
                    
                    }

                  }
                }
          })})
        setGrille(localgrille2);
        setTimeout(() => {
          selectedAttackUnit();
          setStatus(5);
        }, 1500);
        break;
      case "firefight-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
            if(f.unité && f.unité._camp == camp){
              let cond = true;
              let pts = pointproche(pos,pos2);
              pts.map(item=>{
                if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp == camp2){
                  cond = false
                }
              })   
              if(cond){
                localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:AddDice(f.unité.constructor.name,f.unité._nombre,f.unité._portée.map(item=>{return item+1}),[1,1,1]),action:null,highlight:null,select:null}
              }
            }
          })})
        setGrille(localgrille2);
        
      default:
        selectedUnit()
    }
  }
  function ValiderCard(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    switch(card._image){
      case "dig-in-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
            if(f.select && f.select.constructor.name == "SelectHexa"){
              localgrille2.grille[pos][pos2] = {case:f.case,defense:new SandBag(camp != "Allies"),unité:f.unité,action:null,highlight:null,select:null}
            }
          })})
        setGrille(localgrille2);
        switchCamp();
        setStatus(1);
        break;
      
    case "firefight-fr":
      selectedAttackUnit();
      setStatus(5);
      break;
    default:
        showPortéeALL()
    }
  }
  function resetActionCard(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    switch(card._image){
      case "armor-assault-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
                if(f.unité && f.unité._camp == camp && f.unité._type == "Char"){
                  localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:AddDice(f.unité.constructor.name,f.unité._nombre,[3,3,3]),action:null,highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
      case "behind-enemy-lines-fr":
        localgrille.grille.map((e,pos)=>{
          e.map((f,pos2)=>{
                if(f.unité && f.unité._camp == camp && f.unité._type == "Soldat"){
                  localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:AddDice(f.unité.constructor.name,f.unité._nombre,[3,2,1],[1,2]),action:null,highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
      case "close-assault-fr":
          localgrille.grille.map((e,pos)=>{
            e.map((f,pos2)=>{
                  if(f.unité && f.unité._camp == camp && (f.unité._portée == [4,3,2] || f.unité.portée == [4,4,4])){
                    localgrille2.grille[pos][pos2] = {case:f.case,defense:f.defense,unité:HitUnit(f.unité.constructor.name,f.unité._nombre),action:null,highlight:null,select:null}
                  }
            })})
          setGrille(localgrille2);
          
      default:
        switchCamp()
    }
  }
  const showingCard = useMemo(() => {
    return <div className='h-[350px] ml-8 flex flex-row'>
      <div className='flex flex-col w-[276px] '>
        {<CardSelect onChange={setCard}/> }
        {<CampAffichage camp={camp}/>}
        {StateButton("Selection",status == 1 ? "Commencer":"Valider",status == 2 ? true:false,status == 1 ? ()=>{setStatus(2);selectCard();}:()=>{setStatus(3);ValiderCard();},status < 3 ? true:false)}
        {StateButton("Deplacement",status == 3 ? "Continuer":"Valider",status == 3 ? true:false,status == 4 ? ()=>{setStatus(4)}:()=>{setStatus(5);selectedAttackUnit();},status == 3 ? true:false)}
        {StateButton("Combat",status == 5 ? "Continuer":"Valider",status == 5 ? true:false,status == 4 ? ()=>{setStatus(6)}:()=>{setStatus(1);resetActionCard();},status == 5 ? true:false)}      
      </div>
      <div className="w-fit h-fit m-[20px]"> <img src={`images/cards/commandement/${card._image}-large.png`} alt={card._titre} className="w-[278px] h-[432px] ml-[20px] "/></div>
    
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
  

  
  const global = useMemo(()=>{
    {
      
      return (
      <div className="relative w-fit h-fit">
        <div className='absolute -top-2 mr-[50px] right-0 z-[10] w-[550px] h-[54px] flex flex-row'>
          {medalAxisList.map((medal,pos)=>{
            return <div className='w-1/6 h-full flex center' key={`axis-${pos}`}>{medal.render()}</div>
          })}
        </div>
        <div className='absolute mb-[38px]  ml-[50px] bottom-0 left-0 z-[10] w-[550px] h-[54px] flex flex-row'>
        {medalAlliésList.map((medal,pos)=>{
            return <div className='w-1/6 h-full flex center' key={`allies-${pos}`}>{medal.render()}</div>
          })}
        </div>
        {debug ? <div className='absolute z-[4100] top-0 left-8 text-vivid_tangerine text-[20px] font-av-bold'><span className='text-white text-[20px] font-av-bold'>posx</span> posy</div>:""}
        <div key={"terrain"}><img src={`images/${grille.terrain}.png`} alt={"terrain"} className='w-full h-full'/></div>
        <div className="absolute flex flex-col z-[200] top-[58px] left-[10px]">
          {grille.grille.map((e,pos)=>{
            return <div className={`${pos % 2 == 1 ? "ml-[45px]":""} w-full flex flex-row`} key={`ligne-${pos}`}>{
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

     const Modal = useMemo(() => <div className='absolute top-0 '>{modal}</div>, [modal])
     return (
      <div className="w-full h-full relative " >
        <div className='absolute top-0 flex flex-row'>
          {global} 
          <div className='flex flex-col'>
            {showingCard}
            {DiceAnimation}
          </div>
        </div>
        {Modal}
          
      </div>)
  }