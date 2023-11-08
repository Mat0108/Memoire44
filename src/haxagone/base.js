import { CaseGenerique, test3, test6 } from "../divers/Generique";
import { Medal, SelectHexa } from "./highlight";
import { SnowTrainCurve, SnowTrainRight } from "./snow";
import { AirField, AirFieldX, Barracks, Camp, Casemate, Cemetery, Church, Dam, Depot, Factory, Ford, Fortress, LakeA, LakeB, LakeC, LightHouse, Loco, Marshes, Mountain, Pond, Pontoon, RailBridge, RiverBranchLeft, RiverBranchRight, RiverY, RoadBlock, RoadBranchLeft, RoadBranchRight, RoadCurve, RoadHillCurve, RoadHillRight, RoadRight, RoadX, RoadY, Station, TrainBranchLeft, TrainBranchRight, TrainCurve, TrainRight, TrainX, TrainXRoad, Wagon } from "./terrain";

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
export class Hedgerow extends CaseGenerique{
    constructor (){
        super("images/base/h_hedgerow.png",false,true,false,false,false)
    }
}
export class Bunker extends CaseGenerique{
    constructor (){
        super("images/base/o_bunker.png",null,{soldat:-1,tank:-2},true,true,true)
    }
}

export class Hills extends CaseGenerique {
    constructor (){
        super("images/base/h_hills.png",null,{soldat:-1,tank:-1},false,false,true,true,"images/cards/base/hill-fr.png",false,"brightness-[1.20] saturate-[0.6] ")
    }
}

export class Forest extends CaseGenerique {
    constructor (hover){
        super("images/base/h_forest.png",null,{soldat:-1,tank:-2},true,false,true,false,"images/cards/base/forest-fr.png",false,"brightness-[1.40] saturate-[0.4]")
    }
}

export class Village extends CaseGenerique{
    constructor() {
        super("images/base/h_village.png",null,{soldat:-1,tank:-2},true,false,true,true,"images/cards/base/village-fr.png",false,"")
    }
}

export class Bridge extends CaseGenerique{
    constructor(orientation){
        super(test6("base","o_bridge",orientation),orientation)
    }
}

export class RiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("base","h_river",orientation),orientation,false,false,false,false,false,false,false,"")   
    }
}
export class RiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("base","h_curve",orientation),orientation,false,false,false,false,false,false,false," ")
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
        case "Hedgerow":
            return {hexagone: new Hedgerow(),orientation:0}
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
        case "RoadBranchLeft":
            return {hexagone: new RoadBranchLeft(orientation),orientation:6}
        case "RoadBranchRight":
            return {hexagone: new RoadBranchRight(orientation),orientation:6}
        case "RoadX":
            return {hexagone: new RoadX(orientation),orientation:6}
        case "RoadY":
            return {hexagone: new RoadY(orientation),orientation:2}
        case "RiverBranchLeft":
            return {hexagone: new RiverBranchLeft(orientation),orientation:6}
        case "RiverBranchRight":
            return {hexagone: new RiverBranchRight(orientation),orientation:6}
        case "RiverY":
            return {hexagone: new RiverY(orientation),orientation:2}
        case "AirField":
            return {hexagone: new AirField(orientation),orientation:3}
        case "AirFieldX":
            return {hexagone: new AirFieldX(orientation),orientation:3}
        case "Church":
            return {hexagone: new Church(),orientation:0}      
        case "Mine":
            return {hexagone: new Mine(),orientation:0} 
        case "Mountain":
            return {hexagone: new Mountain(),orientation:0} 
        case "MedalAxe":
            return {hexagone: new Medal(true),orientation:0} 
        case "MedalAllies":
            return {hexagone: new Medal(false),orientation:0} 
        case "Barracks":
            return {hexagone: new Barracks(),orientation:0}
        case "Camp":
            return {hexagone: new Camp(),orientation:0}
        case "Cemetery":
            return {hexagone: new Cemetery(),orientation:0}
        case "Dam":
            return {hexagone: new Dam(orientation),orientation:6}
        case "LakeA":
            return {hexagone: new LakeA(orientation),orientation:6}
        case "LakeB":
            return {hexagone: new LakeB(orientation),orientation:6}
        case "LakeC":
            return {hexagone: new LakeC(orientation),orientation:6}
        case "Pond":
            return {hexagone: new Pond(orientation),orientation:6}
        case "Depot":
            return {hexagone: new Depot(),orientation:0}
        case "Factory":
            return {hexagone: new Factory(),orientation:0}
        case "Fortress":
            return {hexagone: new Fortress(),orientation:0}
        case "LightHouse":
            return {hexagone: new LightHouse(),orientation:0}
        case "Marshes":
            return {hexagone: new Marshes(),orientation:0}
        case "TrainRight":
            return {hexagone: new TrainRight(orientation),orientation:3}
        case "TrainCurve":
            return {hexagone: new TrainCurve(orientation),orientation:6}
        case "TrainBranchLeft":
            return {hexagone: new TrainBranchLeft(orientation),orientation:6}
        case "TrainBranchRight":
            return {hexagone: new TrainBranchRight(orientation),orientation:6}
        case "TrainX":
            return {hexagone: new TrainX(orientation),orientation:3}
        case "TrainXRoad":
            return {hexagone: new TrainXRoad(orientation),orientation:3}
        case "Station":
            return {hexagone: new Station(orientation),orientation:3}
        case "Pontoon":
            return {hexagone: new Pontoon(orientation),orientation:6}
        case "RailBridge":
            return {hexagone: new RailBridge(orientation),orientation:6}
        case "Loco":
            return {hexagone: new Loco(orientation),orientation:6}
        case "Wagon":
            return {hexagone: new Wagon(orientation),orientation:6}
        case "Ford":
            return {hexagone: new Ford(orientation),orientation:6}
        case "RoadBlock":
            return {hexagone: new RoadBlock(orientation),orientation:6}
        case "Casemate":
            return {hexagone: new Casemate(),orientation:0}
        case "SnowTrainRight":
            return {hexagone:new SnowTrainRight(orientation),orientation:3}
        case "SnowTrainCurve":
            return {hexagone:new SnowTrainCurve(orientation),orientation:6}
        case "":
            return {hexagone: null,orientation:0}
        default:
            return null;
    }
}

//        case "":
// return {hexagone: null,orientation:0}

