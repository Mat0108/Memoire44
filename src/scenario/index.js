import { useState,useMemo } from "react";
import { Scenariovide } from "./scenariovide";
import { Scenariotest } from './scenariotest';

import {Assaultsurvassieuxenvercours,Batailledesaintnizier,Marquisdemalleval,SacrificeaValchevrière,Défensedespas} from "./batailleduvercors/index"
import {PegasusBridge,PointeDuHoc,SainteMereEglise,SwordBearch,OmahaBeach,MontMouchet } from "./batailledebarquement/index"

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
    {name:"Merci de choisir un scénario ",url:"Scenariovide",image:"Scenariovide"},
    {name:"Bataille du Vercors",url:"Scenariovide",image:"Scenariovide"},
    {name:"Bataille de Saint-Nizier",url:"Batailledesaintnizier",image:"/batailleduvercors/batailledesaintnizier"},
    {name:"Marquis de Malleval",url:"Marquisdemalleval",image:"batailleduvercors/marquisdemalleval"},
    {name:"Assault sur Vassieux en Vercors",url:"Assaultsurvassieuxenvercours",image:"batailleduvercors/assaultsurvassieuxenvercours"},
    {name:"Sacrifice à Valchevrière",url:"SacrificeaValchevrière",image:"batailleduvercors/sacrificeavalchevrière"},
    {name:"Défense des pas",url:"Défensedespas",image:"batailleduvercors/Défensedespas"},
    {name:"Bataille du débarquement",url:"Scenariovide",image:"Scenariovide"},
    {name:"Pegasus Bridge",url:"PegasusBridge",image:"batailledebarquement/pegasusBridge"},
    {name:"Sainte Mère Eglise",url:"SainteMereEglise",image:"batailledebarquement/sainteMereEglise"},
    {name:"Sword Beach",url:"Swordbeach",image:"batailledebarquement/swordbeach"},
    {name:"Pointe du hoc",url:"Pointeduhoc",image:"batailledebarquement/Pointeduhoc"},
    {name:"Omaha Beach",url:"OmahaBeach",image:"batailledebarquement/omahabeach"},
    {name:"Mount Mouchet",url:"MontMouchet",image:"batailledebarquement/montmouchet"},
    {name:"Scenario test",url:"Scenariotest",image:"Scenariovide"}

]
export const SelecteurScenario = ()=>{
    const [image,setImage] = useState("Scenariovide");
    const [url,setUrl] = useState("Scenariovide");
    const LoadImage = useMemo(()=>{
        return<div className="w-[900px] p-[50px] bg-black rounded-[4rem] shadow"><div className="w-[800px]"><img src={`images/scenario/${image}.png`} alt={"imagescenario"} className="w-[800px] h-[566px]"/></div></div>
    },[image])
    return (
    <div className="h-screen w-screen flex flex-row bg-gray">
        <div className="w-[500px] h-full  bg-gray border-r-4 border-black">{listScenario.map((e,pos)=>{
        return <div key={pos} onMouseEnter={()=>{setImage(e.image);setUrl(e.url)}}  className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl ${e.image == "Scenariovide" ? "text-center":"bg-lightgrey px-8"}`}>{e.name}</div>})}
        <div onMouseEnter={()=>{setImage("Scenariovide")}} className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl text-center`}>Createur de scenario</div>
        <div onMouseEnter={()=>{setImage("Scenariovide")}} className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl bg-lightgrey px-8 text-center`}><Link to={"/create"}>Go</Link></div>
        </div>
        <div className="w-[1200px] h-full bg-gray px-4  flex flex-col center space-2">
            {LoadImage}  
            {image == "Scenariovide" ? <div className="w-[180px] h-[60px] mt-[30px]"></div>: <Link  to={`/scenario/${url}`} className="w-[180px] h-[60px] mt-[30px] p-2 rounded-3xl text-white bg-green text-2xl text-center">Play</Link>}
          
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
            return SacrificeaValchevrière;
        case "Défensedespas":
            return Défensedespas;
        case "PegasusBridge":
            return PegasusBridge;
        case "Scenariotest":
            return Scenariotest;
        case "SainteMereEglise":
            return SainteMereEglise;
        case "Swordbeach":
            return SwordBearch;
        case "Pointeduhoc":
            return PointeDuHoc;
        case "OmahaBeach":
            return OmahaBeach;
        case "MontMouchet":
            return MontMouchet;
        default:
            return Scenariovide;
    }
}