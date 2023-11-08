import { SoldatAllies } from "../../army/allies";
import { CharAxis, SoldatAxis } from "../../army/axis";
import { Forest, Hills, Village } from "../../haxagone/base";

export const MontMouchet= {
    name:"MontMouchet",
    terrain:"terrain0",
    medalAllies:4,
    medalAxe:4,
    camp:"Allies",
    cardAxis:5,
    cardAllies:4,
    hexa:[
       {x:0,y:0,contenu:{case: null,bunker: null,defense: null, unité:new CharAxis(4),medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:4,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:7,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAxis(4),medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:8,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAxis(4),medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:0,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:1,y:0,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:1,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:2,contenu:{case: null,bunker: null,defense: null, unité:new CharAxis(4),medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:3,contenu:{case: new Village(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:5,contenu:{case: new Village(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:6,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:10,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:11,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAxis(4),medal:null,action:null,highlight:null,select:null}}, 
       {x:1,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:2,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:1,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:2,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:10,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAxis(4),medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:2,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:3,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:2,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:4,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:5,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAxis(4),medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:6,contenu:{case: new Village(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:11,contenu:{case: new Village(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:3,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:4,y:0,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:1,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:3,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:5,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:8,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:9,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:10,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:4,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:5,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:1,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAllies(3),medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:7,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:8,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAllies(3),medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:9,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:5,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:6,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:2,contenu:{case: new Hills(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:3,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAllies(3),medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:4,contenu:{case: new Village(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:6,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:8,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAllies(3),medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:11,contenu:{case: new Forest(),bunker: null,defense: null, unité:new SoldatAllies(3),medal:null,action:null,highlight:null,select:null}}, 
       {x:6,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:7,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:1,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:3,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAllies(3),medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:4,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:5,contenu:{case: null,bunker: null,defense: null, unité:new SoldatAllies(3),medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:7,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:10,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:7,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       {x:8,y:0,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:1,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:2,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:3,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:4,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:5,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:6,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:7,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:8,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:9,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:10,contenu:{case: new Forest(),bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:11,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
       {x:8,y:12,contenu:{case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null}}, 
    
       ]
    }
    