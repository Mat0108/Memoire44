export function loadScenario(scenario){
    console.log('scenario : ', scenario)
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