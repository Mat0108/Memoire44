import { useState,useMemo } from "react";
import { Assaultsurvassieuxenvercours } from "./batailleduvercors/assaultsurvassieuxenvercours";
import { Batailledesaintnizier } from "./batailleduvercors/batailledesaintnizier";
import { Marquisdemalleval } from "./batailleduvercors/marquisdemalleval";
import { Scenariovide } from "./scenariovide";

import { Link } from 'react-router-dom';
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
    {name:"Merci de choisir un scenario ",value:"Scenariovide"},
    {name:"Bataille du Ver Cours",value:"Scenariovide"},
    {name:"Bataille de Saint-nizier",value:"Batailledesaintnizier"},
    {name:"Marquis de Malleval",value:"Marquisdemalleval"},
    {name:"Assault sur Vassieux en Ver Cours",value:"Assaultsurvassieuxenvercours"},
    {name:"Bataille du débarquement",value:"Scenariovide"},

]
export const SelecteurScenario = ()=>{
    const [image,setImage] = useState("Scenariovide");
    const LoadImage = useMemo(()=>{
        return<div className="w-[800px]"><img src={`images/scenario/${image}.png`} alt={"imagescenario"} className="w-[800px] h-[566px]"/></div>
    },[image])
    return (
    <div className="h-screen w-screen flex flex-row bg-gray">
        <div className="w-[500px] h-full  bg-gray border-r-4 border-black">{listScenario.map((e,pos)=>{
        return <div key={pos} onMouseEnter={()=>{setImage(e.value)}}  className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl ${e.value == "Scenariovide" ? "text-center":"bg-lightgrey px-8"}`}>{e.name}</div>})}</div>
        <div className="w-[1200px] h-full bg-gray px-4  flex flex-col center space-2">
            {LoadImage}  
            {image == "Scenariovide" ? <div className="w-[180px] h-[60px] mt-[30px]"></div>: <div className="w-[180px] h-[60px] mt-[30px] rounded-3xl text-white bg-green text-2xl text-center"><p className="p-2"><Link  to={`/scenario/${image}`}>Play</Link></p></div>}
          
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
        default:
            return Scenariovide;
    }
}