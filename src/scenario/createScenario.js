import { Scenariovide } from "./scenariovide";
import { loadScenario } from './index';
import { useEffect, useMemo, useState } from "react";

import { returnHexagone } from "../haxagone/base";
import { SelectHexa } from './../haxagone/highlight';
import { ReturnArmy } from "../army/army";
import Select from 'react-select'
import { SaveScenario } from './saveScenario';

export const CreateScenario = () =>{

  const [status,setStatus ] = useState(1);
  const [grille, setGrille ] = useState(loadScenario(Scenariovide));
  const [delta, setDelta] = useState(1)
  const [orientation, setOrientation ] = useState(1);
  const [mouse,setMouse] = useState({case:null,bunker:null,defense:null,unité:null});
  const [final,setFinal] = useState({case:null,bunker:null,defense:null,unité:null});
  const [actualx,setActualX]  = useState(0);
  const [actualy,setActualY] = useState(0);
  const debug = false;
  const [modal, setModal] = useState(<></>)

  let nbItemByLigne = 6;
  let listHexagone = [
    "Country",
    "Hills",
    "Forest",
    "Village",
    "RiversRight",
    "RiversCurve",
    "RiverBranch",
    "RiverY",
    "RoadRight",
    "RoadCurve",
    "RoadBranch",
    "RoadX",
    "RoadY",
    "RoadHillRight",
    "RoadHillCurve",
    "AirField",
    "Church"

  ]
  let listDivers = [
    "Country",
    "Bunker",
    "Bridge",
    "Mine"
  ]
  let listDefense = [
    "Country",
    "SandBag",
    "Hedgehow",
    "Wire"
  ]
  let listunité = [
    "Country",
    "SoldatAxis",
    "CharAxis",
    "ArtillerieAxis",
    "SoldatAllies",
    "CharAllies",
    "ArtillerieAllies"
  ]
  window.addEventListener("wheel", event => {
      let delta2 = Math.sign(event.deltaY);
      setDelta(delta2 >0? delta+1 : delta-1);
  });
  useEffect(() => {
    // console.log('orientation : ', orientation,delta,orientation <= 1)
    let localgrille = {...grille}
    if(mouse.case && mouse.case.orientation){
      if(delta > 0 ){
        if(orientation >= mouse.case.orientation){
          setOrientation(1);
        }else{
          setOrientation(orientation+1);
        }
      }else{
        if(orientation <= 1){
          setOrientation(mouse.case.orientation);
        }else{
          setOrientation(orientation+1);
        }
      }
      if(mouse.case.hexagone.constructor.name){
        localgrille.grille[actualx][actualy].case = returnHexagone(mouse.case.hexagone.constructor.name,orientation).hexagone;
        setGrille(localgrille)
      }
    }
    if(mouse.bunker && mouse.bunker.orientation){
      if(delta > 0 ){
        if(orientation >= mouse.bunker.orientation){
          setOrientation(1);
        }else{
          setOrientation(orientation+1);
        }
      }else{
        if(orientation <= 1){
          setOrientation(mouse.bunker.orientation);
        }else{
          setOrientation(orientation+1);
        }
      }
      if(mouse.bunker.hexagone.constructor.name){
        localgrille.grille[actualx][actualy].bunker = returnHexagone(mouse.bunker.hexagone.constructor.name,orientation).hexagone;
        setGrille(localgrille)
      }
    }
    if(mouse.defense && mouse.defense.orientation){
      if(delta > 0 ){
        if(orientation >= mouse.defense.orientation){
          setOrientation(1);
        }else{
          setOrientation(orientation+1);
        }
      }else{
        if(orientation <= 1){
          setOrientation(mouse.defense.orientation);
        }else{
          setOrientation(orientation+1);
        }
      }
      if(mouse.defense.hexagone.constructor.name){
        localgrille.grille[actualx][actualy].defense = returnHexagone(mouse.defense.hexagone.constructor.name,mouse.defense.hexagone.constructor.name ? orientation == 1 : orientation).hexagone;
        setGrille(localgrille)
      }
    }
    if(mouse.unité && mouse.unité.orientation){
      if(delta > 0 ){
        if(orientation >= mouse.unité.orientation){
          setOrientation(1);
        }else{
          setOrientation(orientation+1);
        }
      }else{
        if(orientation <= 1){
          setOrientation(mouse.unité.orientation);
        }else{
          setOrientation(orientation+1);
        }
      }
      if(mouse.defense.hexagone.constructor.name){
        localgrille.grille[actualx][actualy].unité = ReturnArmy(mouse.unité.hexagone.constructor.name,orientation).hexagone;
        setGrille(localgrille)
      }
    }
  }, [delta,mouse])


  function UpdateGrille(type,object){
    let localgrille = {...grille}
    if(object){
      switch(type){
        case "case":
          if(!final.case){
            setMouse({case:object,bunker:null,defense:null,unité:null});
            setOrientation(1);
            localgrille.grille[actualx][actualy].case = object.hexagone;
          }
          break;
        case "bunker":
          setMouse({case:null,bunker:object,defense:null,unité:null});
          setOrientation(1);
          localgrille.grille[actualx][actualy].bunker = object.hexagone;
          break;
        case "defense":
          setMouse({case:null,bunker:null,defense:object,unité:null});
          setOrientation(1);
          localgrille.grille[actualx][actualy].defense = object.hexagone;
          break;
        case "unité":
          setMouse({case:null,bunker:null,defense:null,unité:object});
          setOrientation(1);
          localgrille.grille[actualx][actualy].unité = object.hexagone;
          break;
      }
    }else{
      switch(type){
        case "case":
          if(!final.case){
            localgrille.grille[actualx][actualy].case = null
          }
          break;
        case "bunker":
          localgrille.grille[actualx][actualy].bunker = null
          break;
        case "defense":
          localgrille.grille[actualx][actualy].defense = null
          break;
        case "unité":
          localgrille.grille[actualx][actualy].unité = null
          break;
      }
      
    }
    
    setGrille(localgrille)
  }
  function Valider(cond){
    setFinal({case:null,bunker:null,defense:null,unité:null})
    setMouse({case:null,bunker:null,defense:null,unité:null})
    if((actualx % 2 == 1 ? actualy == 11 : actualy == 12) || cond){
      setActualX(actualx+1);
      setActualY(0);
    }else{
      setActualY(actualy+1);
    }
  }
  function Reculer(cond){
    setFinal({case:null,bunker:null,defense:null,unité:null})
    setMouse({case:null,bunker:null,defense:null,unité:null})
    if( actualy == 0 || cond){
      setActualX(actualx-1);
      setActualY(cond ? 0 : actualx % 2 == 1 ? 11 :12);
    }else{
      setActualY(actualy-1);
    }
  }
 
  useEffect(() => {
    console.log('final : ', final)
    console.log('mouse : ', mouse)
  }, [final,mouse])
  const showingCard = useMemo(() => {
    let listHexagoneFinal = [];
    for(let i = 0;i<=parseInt(Object.keys(listHexagone).length/nbItemByLigne);i++){
      let local = listHexagone.slice(i*nbItemByLigne,(i+1)*nbItemByLigne)
      listHexagoneFinal.push(
        <div className={`flex flew-row mb-[50px]`} key={`1-${i}`}>
        {local.map((item,pos)=>{return <div className={`w-[91px] h-[78px] relative`} key={item} onMouseEnter={()=>{UpdateGrille("case",item == "Country" ? null : returnHexagone(item,orientation))}}   onClick={()=>{setFinal({...final,case:final.case ? null : returnHexagone(item,0)})}} >{returnHexagone(item,0).hexagone.render()}</div>})}
      </div> 
      ) 
    }  
    return <div className='ml-8 mt-8 flex flex-row'>
      <div className='flex flex-col '>
        <h1 className="text-[24px] text-white mb-[10px] "> Choissiez l'hexagone : </h1>
        <div className="flex flex-col ">
          {listHexagoneFinal}
          {/* {listHexagone.map((item,pos)=>{return <div className={`w-[91px] h-[78px]`} key={item} onMouseEnter={()=>{UpdateGrille("case",item == "Country" ? null : returnHexagone(item,orientation))}} >{returnHexagone(item,0).hexagone.render()}</div>})} */}
        </div>
        <h1 className="text-[24px] text-white mb-[10px]"> Choissiez l'item : </h1>
        <div className="flex flex-row " >
          {listDivers.map(item=>{return <div className="w-[91px] h-[78px] relative" key={item} onMouseEnter={()=>{UpdateGrille("bunker",item == "Country" ? null :returnHexagone(item,orientation))}}  onClick={()=>{setFinal({...final,bunker:final.bunker ? null : returnHexagone(item,0)})}}>{returnHexagone(item,0).hexagone.render()}</div>})}
        </div>
        <h1 className="text-[24px] text-white mt-[30px] mb-[10px] "> Choissiez l'item de défense : </h1>
        <div className="flex flex-row ">
          {listDefense.map(item=>{return <div className="w-[91px] h-[78px] relative" key={item} onMouseEnter={()=>{UpdateGrille("defense",item == "Country" ? null :returnHexagone(item,orientation))}}  onClick={()=>{setFinal({...final,defense:final.defense ? null : returnHexagone(item,0)})}}>{returnHexagone(item,0).hexagone.render()}</div>})}
        </div>
        <h1 className="text-[24px] text-white mt-[30px] mb-[10px] " > Choissiez l'unité : </h1>
        <div className="flex flex-row ">
          {listunité.map(item=>{return <div className="w-[91px] h-[78px] relative" key={item} onMouseEnter={()=>{UpdateGrille("unité",item == "Country" ? null :ReturnArmy(item,orientation))}} onClick={()=>{setFinal({...final,unité:final.unité ? null : ReturnArmy(item,0)})}} >{ReturnArmy(item,0).hexagone.render()}</div>})}
        </div>

      </div>
    </div>

  }
  , [status,actualx,actualy,final,mouse])
  const Modal = useMemo(() => <div className='absolute top-0 '>{modal}</div>, [modal]);

  const global = useMemo(()=>{
      {
        
        return (
        <div className="relative w-fit h-fit">
          {debug ? <div className='absolute z-[4100] top-0 left-8 text-vivid_tangerine text-[20px] font-av-bold'><span className='text-white text-[20px] font-av-bold'>posx</span> posy</div>:""}
          <div key={"terrain"}><img src={`images/${grille.terrain}.png`} alt={"terrain"} className='w-full h-full'/></div>
          <div className="absolute flex flex-col z-[200] top-[58px] left-[10px]">
            {grille.grille.map((e,pos)=>{
              return <div className={`${pos % 2 == 1 ? "ml-[45px]":""} w-full flex flex-row`} key={`ligne-${pos}`}>{
                e.map((f,pos2)=>{
  
  
                    if(pos2 != (pos % 2 == 1 ? 12 : 13)){
                        
                        return <div className={`relative w-[91px] h-[78px] border-0 border-white ${f.action ? "hover:cursor-pointer":""}`} onClick={f.action}  key={`${pos}${pos2}`} id={`${pos}${pos2}`} >
                          {debug ? <div className='absolute z-50 bottom-0 left-8 text-vivid_tangerine text-[24px] font-av-bold'><span className='text-white text-[24px] font-av-bold'>{pos}</span> {pos2}</div> :""}
                          <div className='absolute z-10 w-full h-full'>{f.case ? f.case.render(): ""}</div>
                          <div className='absolute z-10 w-full h-full'>{f.bunker ? f.bunker.render(): ""}</div>
                          <div className='absolute z-20 w-full h-full'>{f.defense ? f.defense.render(): ""}</div>
                          <div className='absolute z-30 w-full h-full'>{f.unité ? f.unité.render(): ""}</div>
                          {pos == actualx && pos2 == actualy && <div className='absolute z-40 w-full h-full'>{new SelectHexa().render()}</div>}
                          {/* <div className='absolute z-40 w-full h-full'>{f.highlight ? f.highlight.render(): ""}</div>
                          <div className='absolute z-[50] w-full h-full'>{f.select ? f.select.render(): ""}</div> */}
  
                          </div>
                    
                }})
            }</div>
          })}
          </div>
          <div className="w-full mt-[20px] flex justify-around " id={"menu"}>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{setActualX(actualx+1);setFinal({case:null,bunker:null,defense:null,unité:null})}}>Ligne suivant</div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer"  onClick={()=>{Valider(false)}}>Avancer</div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{setFinal({case:null,bunker:null,defense:null,unité:null})}}>Reset Selection</div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{Reculer(false)}}>Reculer</div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{setActualX(actualx-1);setFinal({case:null,bunker:null,defense:null,unité:null})}}>Ligne précédente </div>
          <div className="w-fit p-4 bg-white border-2 border-green rounded-full text-[18px] text-green hover:cursor-pointer" onClick={()=>{setModal(<SaveScenario close={()=>{setModal(<></>)}} grille={grille.grille}/>)}}>Sauvegarder </div>
          
        </div>
        </div>)
        }
        },[grille,actualx,actualy])
    return <div className="w-full h-full relative " >
    <div className='absolute top-0 flex flex-row'>
        {global} 
        {showingCard}
        
    </div>
    {Modal}
      
  </div>
}