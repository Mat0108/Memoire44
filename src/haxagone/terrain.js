import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";



export class Mountain extends CaseGenerique{
    constructor(orientation){
        super(`images/terrain/h_mountain.png`,null,{soldat:-2,tank:-2},true,false,true,false,false,false,"darker")
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

export class RoadBranch extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadFL",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}
export class RoadX extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadX",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}
export class RoadY extends CaseGenerique{
    constructor(orientation){
        super(test2("terrain","h_roadY",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}

export class RiverBranch extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_riverFL",orientation),orientation,false,false,false,false,false,false,false,"darker")
    }
}
export class RiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("terrain","h_riverY",orientation),orientation,false,false,false,false,false,false,false,"darker ")
    }
}

export class AirField extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_airfield",orientation),orientation,false,false,false,false,false,false,false,"darker ")
    }
}

export class Church extends CaseGenerique {
    constructor(){
        super(`images/terrain/h_church.png`,null,false,false,false,false,false,false,false,"darker ")
    }
}
