import { CaseGenerique, test2, test3, test6 } from "../Generique";



export class Mountain extends CaseGenerique{
    constructor(orientation){
        super(`images/terrain/h_mountain.png`,false,false,false,false,false,false,false,"darker")
    }
}

export class RoadRight extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_road",orientation),false,false,false,false,false,false,false,"darker")
    }
}
export class RoadCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadcurve",orientation),false,false,false,false,false,false,false,"darker")
    }
}
export class RoadHillRight extends CaseGenerique{
    constructor(orientation){
        super(test3("terrain","h_hillroad",orientation),false,false,false,false,false,false,false,"darker")
    }
}
export class RoadHillCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_hillcurve",orientation),false,false,false,false,false,false,false,"darker")
    }
}

export class RoadBranch extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadFL",orientation))
    }
}
export class RoadX extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_roadX",orientation))
    }
}
export class RoadY extends CaseGenerique{
    constructor(orientation){
        super(test2("terrain","h_roadY",orientation))
    }
}

export class RiverBranch extends CaseGenerique{
    constructor(orientation){
        super(test6("terrain","h_riverFL",orientation))
    }
}
export class RiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("terrain","h_riverY",orientation))
    }
}