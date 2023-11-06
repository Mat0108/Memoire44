import { useState,useMemo } from "react";
import { Assaultsurvassieuxenvercours } from "./batailleduvercors/assaultsurvassieuxenvercours";
import { Batailledesaintnizier } from "./batailleduvercors/batailledesaintnizier";
import { Marquisdemalleval } from "./batailleduvercors/marquisdemalleval";
import { Scenariovide } from "./scenariovide";

import { Link } from 'react-router-dom';
import { Scenariotest } from './scenariotest';
import { SacrificeàValchevrière } from "./batailleduvercors/SacrificeaValchevrière";
import { Défensedespas } from "./batailleduvercors/Défensedespas";
export function loadScenario(scenario){
    let x = 13;
    let y = 9;
    let grille = new Array(y).fill(0).map(() => new Array(x).fill({case:null,defense:null,unité:null,action:null,highlight:null}));   
    if(scenario){
        scenario.hexa.map(hex=>{
        grille[hex.x][hex.y] = hex.contenu
    })
}
    return {terrain:scenario.terrain,grille:grille}
}

const listScenario = [
    {name:"Merci de choisir un scénario ",value:"Scenariovide"},
    {name:"Bataille du Vercors",value:"Scenariovide"},
    {name:"Bataille de Saint-Nizier",value:"Batailledesaintnizier"},
    {name:"Marquis de Malleval",value:"Marquisdemalleval"},
    {name:"Assault sur Vassieux en Vercors",value:"Assaultsurvassieuxenvercours"},
    {name:"Sacrifice à Valchevrière",value:"SacrificeaValchevrière"},
    {name:"Défense des pas",value:"Défensedespas"},
    {name:"Bataille du débarquement",value:"Scenariovide"},
    {name:"Scenario test",value:"Scenariotest"}

]
export const SelecteurScenario = ()=>{
    const [image,setImage] = useState("Scenariovide");
    const LoadImage = useMemo(()=>{
        return<div className="w-[800px]"><img src={`images/scenario/${image}.png`} alt={"imagescenario"} className="w-[800px] h-[566px]"/></div>
    },[image])
    return (
    <div className="h-screen w-screen flex flex-row bg-gray">
        <div className="w-[500px] h-full  bg-gray border-r-4 border-black">{listScenario.map((e,pos)=>{
        return <div key={pos} onMouseEnter={()=>{setImage(e.value)}}  className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl ${e.value == "Scenariovide" ? "text-center":"bg-lightgrey px-8"}`}>{e.name}</div>})}
        <div onMouseEnter={()=>{setImage("Scenariovide")}} className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl text-center`}>Createur de scenario</div>
        <div onMouseEnter={()=>{setImage("Scenariovide")}} className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl bg-lightgrey px-8 text-center`}><Link to={"/create"}>Go</Link></div>
        </div>
        <div className="w-[1200px] h-full bg-gray px-4  flex flex-col center space-2">
            {LoadImage}  
            {image == "Scenariovide" ? <div className="w-[180px] h-[60px] mt-[30px]"></div>: <Link  to={`/scenario/${image}`} className="w-[180px] h-[60px] mt-[30px] p-2 rounded-3xl text-white bg-green text-2xl text-center">Play</Link>}
          
        </div>  
        
    </div>)
}

export function ReturnScenario(scenarioname){
    switch(scenarioname){
        case "Assaultsurvassieuxenvercours":
            return Assaultsurvassieuxenvercours;
        case "Batailledesaintnizier":
            return Batailledesaintnizier;
        case "Marquisdemalleval":
            return Marquisdemalleval; 
        case "SacrificeaValchevrière":
            return SacrificeàValchevrière;
        case "Défensedespas":
            return Défensedespas;
        case "Scenariotest":
            return Scenariotest;
        default:
            return Scenariovide;
    }
}