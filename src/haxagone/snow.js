import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";

export class SnowTrainRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrail",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowTrainCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailcurve",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowTrainBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFL",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}

export class SnowTrainBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFR",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowStation extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowstation",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}

export class SnowForest extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_wforest.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false," ")
    }
}
export class SnowHill extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_whill.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false," ")
    }
}
export class SnowVillage extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_wvillage.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false," ")
    }
}

export class SnowRiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowriver",orientation),orientation,false,false,false,false,false,false,false,"")   
    }
}
export class SnowRiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowcurved",orientation),orientation,false,false,false,false,false,false,false," ")
           }
}
export class SnowRiverBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFL",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowRiverBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFR",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowFactory extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_wfactory.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false," ")
    }
}

export class SnowAirField extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfield",orientation),orientation,false,false,false,false,false,false,false,"")   
    }
}
export class SnowAirFieldX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfieldX",orientation),orientation,false,false,false,false,false,false,false,"")   
    }
}
export class SnowRoadRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroad",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowRoadCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadcurve",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowRiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("snow","h_snowriverY",orientation),orientation,false,false,false,false,false,false,false,"  ")
    }
}
export class SnowTrainX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailX",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}
export class SnowTrainXRoad extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailroad",orientation),orientation,false,false,false,false,false,false,false," ")
    }
}

export class SnowRoadX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroadX",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}
export class SnowRoadY extends CaseGenerique{
    constructor(orientation){
        super(test2("snow","h_snowroadY",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}
export class SnowRoadBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFL",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}

export class SnowRoadBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFR",orientation),orientation,false,false,false,false,false,false,false,"")
    }
}

//how edit snow image
// saturation -16 87 0
// baguette magique tolerance 31