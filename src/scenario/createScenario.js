import { Scenariovide } from "./scenariovide";
import { loadScenario } from './index';
import { useMemo, useState } from "react";

export const CreateScenario = () =>{

    const [selectedScenerio,setSelectedScenario] = useState(Scenariovide);
    const [status,setStatus ] = useState(1)
    const [grille, setGrille ] = useState(loadScenario(Scenariovide));
  
    const debug = false;
    let x = 13;
    let y = 9;
    const showingCard = useMemo(() => {
      return <div className='h-[430px] ml-8 flex flex-row'>
        <div className='flex flex-col w-[276px] '>
          {<CardSelect onChange={setCard}/> }
          {<CampAffichage camp={camp}/>}
          {StateButton("Selection",status == 1 ? "Commencer":"Valider",status == 2 ? true:false,status == 1 ? ()=>{setStatus(2);selectCard();}:()=>{setStatus(3);ValiderCard();},status < 3 ? true:false)}
          {StateButton("Deplacement",status == 3 ? "Continuer":"Valider",status == 3 ? true:false,status == 4 ? ()=>{setStatus(4)}:()=>{setStatus(5);selectedAttackUnit();},status == 3 ? true:false)}
          {StateButton("Combat",status == 5 ? "Continuer":"Valider",status == 5 ? true:false,status == 4 ? ()=>{setStatus(6)}:()=>{setStatus(1);resetActionCard();},status == 5 ? true:false)}
          <div className='mt-[20px] w-[276px] h-[50px] relative p-2 flex bg-gray rounded-lg text-[20px] text-white flex center border-2 border-black hover:bg-lightgrey ' onClick={()=>Embuscade()}>
            <div>Embuscade</div>
          </div>
        </div>
        <div className="w-fit h-fit m-[20px]"> <img src={`images/cards/commandement/${card._image}-large.png`} alt={card._titre} className="w-[278px] h-[432px] ml-[20px] "/></div>
      
      </div>
  
    }
      
      , [card,status])
  
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
    </div>
      
  </div>
}