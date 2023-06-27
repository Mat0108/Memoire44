import { Batailledesaintnizier } from "./batailledesaintnizier";
import { Marquisdemalleval } from "./marquisdemalleval";

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
export function SelecteurScenario(grille,setGrille){
    return <div>
        <select
        value={grille}
        onChange={(e)=>{console.log(e.target.value)}}
    >
            <option value={0}>Batailledesaintnizier</option>
            <option value={1}>Marquisdemalleval</option>
        </select>
    </div>
}