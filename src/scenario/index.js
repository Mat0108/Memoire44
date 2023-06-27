import { Assaultsurvassieuxenvercours } from "./batailleduvercors/assaultsurvassieuxenvercours";
import { Batailledesaintnizier } from "./batailleduvercors/batailledesaintnizier";
import { Marquisdemalleval } from "./batailleduvercors/marquisdemalleval";
import { Scenariovide } from "./scenariovide";

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

function ReturnScenario(pos){
    switch(pos){
        case 0:
            return Batailledesaintnizier;
        case 1:
            return Marquisdemalleval;
    }
}
const listScenario = [
    {name:"Merci de choisir un scenario ",value:Scenariovide},
    {name:"-----------Bataille du Ver Cours------------",value:Scenariovide},
    {name:"Bataille de Saint-nizier",value:Batailledesaintnizier},
    {name:"Marquis de Malleval",value:Marquisdemalleval},
    {name:"Assault sur Vassieux en Ver Cours",value:Assaultsurvassieuxenvercours},
    {name:"-------Bataille du débarquement----------",value:Scenariovide},
    {name:"test",value:Scenariovide}
]
export function SelecteurScenario(grille,setGrille){
    return <div>
        <select
        onChange={(e)=>{setGrille(listScenario[e.target.value].value)}}
        className="w-[300px]"
        >
            {listScenario.map((e,pos)=>{

                return <option value={pos} >{e.name}</option>})}
        </select>
    </div>
}