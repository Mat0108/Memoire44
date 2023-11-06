import React,{useState} from "react";
import { saveAs } from 'file-saver';
export const SaveScenario = (props)=>{
    let modal = [4,5,6,7,8,9,10,11,12];
    let card = [3,4,5,6,7,8];
    const [text,setText] = useState("test");
    
//{x:0,y:0,contenu:{case:new Hills(),defense:null,unité:null,action:null,highlight:null,select:null}},


function save(){
      let data=[`export const ${text}= {\n`,`name:${text},\n`,`terrain:${document.getElementById("terrain").value},\n`,`medalAllies:${document.getElementById("medal").value},\n`,`medalAxe:${document.getElementById("medalAxe").value},\n`,`camp:${document.getElementById("camp").value},\n`,`cardAxis:${document.getElementById("allies").value},\n`,`cardAllies:${document.getElementById("axe").value},\n`,"hexa:[\n"]
      props.grille.map((e,pos)=>{
        e.map((f,pos2)=>{
          data.push(`{x:${pos},y:${pos2},contenu:{case: ${f.case ? `new ${f.case.constructor.name}(${f.case._orientation?f.case._orientation:""})`:null},bunker: ${f.bunker ? `new ${f.bunker.constructor.name}(${f.bunker._orientation ? f.bunker._orientation : "" })`:null},defense: ${f.defense ? `new ${f.defense.constructor.name}(${f.defense._orientation?f.defense._orientation:""})`:null}, unité:${f.unité ? `new ${f.unité.constructor.name}(${f.unité._nombre?f.unité._nombre:""})`:null},action:null,highlight:null,select:null}} \n`)
        })
        data.push('\n')
      })
      data.push("   ]\n}\n")
      const file = new Blob(data, { type: 'text/plain;charset=utf-8' });
      saveAs(file, 'data.txt');
    }
    return (
        <div className='relative w-screen h-screen flex center z-[350] '>
        <div className='absolute w-[400px] h-fit rounded-3xl flex flex-col bg-gray z-[350] p-4'>
          <div className='text-center w-full h-1/2 p-4'>Voulez vous sauvegarder ? </div>
          <div className="w-full relative flex flex-row">
          <div className="w-4/5 flex flex-col">
            <div className="text-[18px] mr-[30px]">médaille Alliés: </div>
            <div className="text-[18px] mr-[30px]">médaille Axe: </div> 
            <div className="text-[17px] mr-[30px]">Camp qui commence en premier : </div> 
            <div className="text-[17px] mr-[30px]">Quelle type de terrain : </div>
            <div className="text-[17px] mr-[30px]">Nombre de cartes Allies : </div>
            <div className="text-[17px] mr-[30px]">Nombre de cartes Axe: </div>
            
          </div>
            <div className="w-fit flex flex-col" >
              <select id={"medal"} className="h-[27px]">
                {modal.map(item=>{return item == 6 ? <option value={item} selected >{item}</option> : <option value={item} >{item}</option>})}
              </select>
              <select id={"medalAxe"} className="h-[27px]">
                {modal.map(item=>{return item == 6 ? <option value={item} selected >{item}</option> : <option value={item} >{item}</option>})}
              </select>

              <select id={"camp"} className="h-[27px]">
                <option value={"Allies"} selected >{"Allies"}</option>
                <option value={"Axis"}  >{"Axe"}</option>
              </select>
              <select id={"terrain"} className="h-[27px]">
                <option value={"terrain0"} >{"Plaines"}</option>
                <option value={"terrain1"} >{"Plage"}</option>
                <option value={"terrain2"} >{"Desert"}</option>
                <option value={"terrain3"} >{"Toundra"}</option>
              </select>
              <select id={"allies"} className="h-[27px]">
                {card.map(item=>{return item == 6 ? <option value={item} selected >{item}</option> : <option value={item} >{item}</option>})}
              </select>
              <select id={"axe"} className="h-[27px]">
                {card.map(item=>{return item == 6 ? <option value={item} selected >{item}</option> : <option value={item} >{item}</option>})}
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>Nom du scenario :</label>
            <input className=""  onChange={(e)=>{setText(e.target.value)}} />
          </div>
          
          <div className='w-full h-1/2 mt-[20px] flex justify-around'>
            <div className='w-[80px] h-10 p-2 bg-red text-white rounded-2xl text-center hover:cursor-pointer' onClick={props.close}>Annuler</div>  
            <div className='w-[80px] h-10 p-2 bg-green text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{save()}} >Valider</div>  
          
          </div>
        </div>
      </div>
    )
}