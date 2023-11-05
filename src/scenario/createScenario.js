import { Scenariovide } from "./scenariovide";
import { loadScenario } from './index';
import { useMemo, useState } from "react";

import { returnHexagone } from "../haxagone/base";

export const CreateScenario = () =>{

    const [selectedScenerio,setSelectedScenario] = useState(Scenariovide);
    const [status,setStatus ] = useState(1)
    const [grille, setGrille ] = useState(loadScenario(Scenariovide));
  
    const debug = false;
    let x = 13;
    let y = 9;
    let listHexagone = [
      "Hills",
      "Forest",
      "Village"
    ]
    const showingCard = useMemo(() => {
      return <div className='h-[430px] ml-8 mt-8 flex flex-row'>
        <div className='flex flex-col '>
          <h1 className="text-[24px] text-white"> Choissiez l'hexagone : </h1>
          <div className="flex flex-row">
            {listHexagone.map(item=>{return <div>{returnHexagone(item).render()}</div>})}
          </div>
        </div>
      </div>
  
    }
      
      , [status])
  
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
    
    
                      if(pos2 != (pos % 2 == 1 ? x-1 : x)){
                          
                          return <div className={`relative w-[91px] h-[78px] border-0 border-white ${f.action ? "hover:cursor-pointer":""}`} onClick={f.action}  key={`${pos}${pos2}`} id={`${pos}${pos2}`} >
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
    return <div className="w-full h-full relative " >
    <div className='absolute top-0 flex flex-row'>
        {global} 
        {showingCard}
        
    </div>
      
  </div>
}