import { CaseGenerique, test3, test6 } from "../divers/Generique";
import { SelectHexa } from "./highlight";
import { AirField, Church, Mountain, RiverBranch, RiverY, RoadBranch, RoadCurve, RoadHillCurve, RoadHillRight, RoadRight, RoadX, RoadY } from "./terrain";

export class Country extends CaseGenerique {
    constructor(){
        super(`images/base/h_country-1-1.png`,null,{soldat:-1,tank:-1},false,true,false,false)
    }
}
export class SandBag extends CaseGenerique {
    constructor(orientation){
        super(`images/base/${orientation ?"o_sand1":"o_sand2"}.png`,orientation,{soldat:-1,tank:-1},false,true,false,false,"images/cards/base/sandbags-fr.png")
    }
}
export class Wire extends CaseGenerique{
    constructor (){
        super("images/base/o_wire.png",null,{soldat:-1},false,false,false,false,)
    }
}
export class Hedgehow extends CaseGenerique{
    constructor (){
        super("images/base/o_hedgehog.png",false,true,false,false,false)
    }
}
export class Bunker extends CaseGenerique{
    constructor (){
        super("images/base/o_bunker.png",null,{soldat:-1,tank:-2},true,true,true)
    }
}

export class Hills extends CaseGenerique {
    constructor (){
        super("images/base/h_hills.png",null,{soldat:-1,tank:-1},false,false,true,true,"images/cards/base/hill-fr.png")
    }
}

export class Forest extends CaseGenerique {
    constructor (hover){
        super("images/base/h_forest.png",null,{soldat:-1,tank:-2},true,false,true,false,"images/cards/base/forest-fr.png")
    }
}

export class Village extends CaseGenerique{
    constructor(hover) {
        super("images/base/h_village.png",null,{soldat:-1,tank:-2},true,false,true,true,"images/cards/base/village-fr.png",hover)
    }
}

export class Bridge extends CaseGenerique{
    constructor(orientation){
        super(test6("base","o_bridge",orientation),orientation)
    }
}

export class RiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("base","h_river",orientation),orientation,false,false,false,false,false,false,false,"brightness-[1.40] saturate-[0.4]")   
    }
}
export class RiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("base","h_curve",orientation),orientation,false,false,false,false,false,false,false,"brightness-[1.40] saturate-[0.4] ")
           }
}
export class Mine extends CaseGenerique{
    constructor() {
        super("images/terrain/mine.png",false,true,false,true,true,"")
    }
}
export function returnHexagone(text,orientation){
    switch(text){
        case "Country":
            return {hexagone:new Country(),orientation:0}
        case "Hills":
            return {hexagone: new Hills(),orientation:0}
        case "Forest":
            return {hexagone: new Forest(),orientation:0}
        case "Village":
            return {hexagone: new Village(),orientation:0}
        case "RiversRight":
            return {hexagone: new RiversRight(orientation),orientation:3}
        case "RiversCurve":
            return {hexagone: new RiversCurve(orientation),orientation:6}
        case "Bridge":
            return {hexagone: new Bridge(orientation),orientation:6}
        case "Bunker":
            return {hexagone: new Bunker(orientation),orientation:6}
        case "SandBag":
            return {hexagone: new SandBag(orientation),orientation:2}
        case "Hedgehow":
            return {hexagone: new Hedgehow(),orientation:0}
        case "Wire":
            return {hexagone: new Wire(),orientation:0}
        case "RoadRight":
            return {hexagone: new RoadRight(orientation),orientation:3}
        case "RoadCurve":
            return {hexagone: new RoadCurve(orientation),orientation:6}
        case "RoadHillRight":
            return {hexagone: new RoadHillRight(orientation),orientation:3}
        case "RoadHillCurve":
            return {hexagone: new RoadHillCurve(orientation),orientation:6}
        case "RoadBranch":
            return {hexagone: new RoadBranch(orientation),orientation:6}
        case "RoadX":
            return {hexagone: new RoadX(orientation),orientation:6}
        case "RoadY":
            return {hexagone: new RoadY(orientation),orientation:2}
        case "RiverBranch":
            return {hexagone: new RiverBranch(orientation),orientation:6}
        case "RiverY":
            return {hexagone: new RiverY(orientation),orientation:2}
        case "AirField":
            return {hexagone: new AirField(orientation),orientation:3}
        case "Church":
            return {hexagone: new Church(),orientation:0}      
        case "Mine":
            return {hexagone: new Mine(),orientation:0} 
        case "Mountain":
            return {hexagone: new Mountain(),orientation:0} 
        default:
            return null;
    }
}