import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";



export class Mountain extends CaseGenerique{
    constructor(orientation){
        super(`images/terrain/h_mountain.png`,null,{Soldat:-2,Tank:-2},true,false,true,false,false,false,"darker brightness-[0.60] ")
    }
}

export class RoadRight extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_road",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}
export class RoadCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadcurve",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}
export class RoadHillRight extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_hillroad",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}
export class RoadHillCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_hillcurve",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}

export class RoadBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadFL",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}

export class RoadBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadFR",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}

export class RoadX extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_roadX",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}
export class RoadY extends CaseGenerique{
    constructor(orientation){
        super(test2("terrain","h_roadY",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}

export class RiverBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_riverFL",orientation),orientation,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}
export class RiverBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_riverFR",orientation),orientation,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}
export class RiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("terrain","h_riverY",orientation),orientation,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}

export class AirField extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_airfield",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class AirFieldX extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_airfieldX",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}


export class Church extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_church.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class Barracks extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_barracks.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class Camp extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_camp.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class Cemetery extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_cemetery.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class Dam extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_dam",orientation),null,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}

export class LakeA extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeA",orientation),null,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}
export class LakeB extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeB",orientation),null,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}
export class LakeC extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeC",orientation),null,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}
export class Pond extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_pond",orientation),null,false,false,false,false,false,false,false," brightness-[0.65] contrast-[1.7] saturate-[1.4] ")
    }
}

export class Depot extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_depot.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class Factory extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_factory.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class Fortress extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_fortress.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class LightHouse extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_lighthouse.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class Marshes extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_marshes.png`,null,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class TrainRight extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_rail",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class TrainCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_railcurve",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class TrainBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_railFL",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class TrainBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_railFR",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class TrainX extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_railX",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class TrainXRoad extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_railroad",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class Station extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_station",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}
export class Pontoon extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","o_pontoon",orientation),orientation,false,false,false,false,false,false,false,"brightness-[0.7] ")
    }
}

export class RailBridge extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","o_railbridge",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}
export class Loco extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","o_loco",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}
export class Wagon extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","o_wagon",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}
export class Ford extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","o_ford",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}
export class RoadBlock extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","o_roadblock",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}

export class Casemate extends CaseGenerique{
    constructor(){
        super(`images/terrain/o_casemate.png`,null,false,false,false,false,false,false,false,"")
    }
}
