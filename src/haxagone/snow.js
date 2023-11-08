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


//how edit snow image
// saturation -16 87 0
// baguette magique tolerance 31