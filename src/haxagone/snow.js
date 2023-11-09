import { CaseGenerique, test3, test6 } from "../divers/Generique";

export class SnowTrainRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrail",orientation),orientation,false,false,false,false,false,false,false,"abrightness-[0.7] ")
    }
}
export class SnowTrainCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailcurve",orientation),orientation,false,false,false,false,false,false,false,"abrightness-[0.7] ")
    }
}
export class SnowTrainBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFL",orientation),orientation,false,false,false,false,false,false,false,"abrightness-[0.7] ")
    }
}

export class SnowTrainBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFR",orientation),orientation,false,false,false,false,false,false,false,"abrightness-[0.7] ")
    }
}
export class SnowStation extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowstation",orientation),orientation,false,false,false,false,false,false,false,"abrightness-[0.7] ")
    }
}

export class SnowForest extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_wforest.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false,"abrightness-[0.60] ")
    }
}
export class SnowHill extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_whill.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false,"abrightness-[0.60] ")
    }
}
export class SnowVillage extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_wvillage.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false,"abrightness-[0.60] ")
    }
}

export class SnowRiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wriver",orientation),orientation,false,false,false,false,false,false,false,"")   
    }
}
export class SnowRiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_wcurved",orientation),orientation,false,false,false,false,false,false,false," ")
           }
}
export class SnowFactory extends CaseGenerique{
    constructor(orientation){
        super(`images/snow/h_wfactory.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false,"abrightness-[0.60] ")
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

//how edit snow image
// saturation -16 87 0
// baguette magique tolerance 31