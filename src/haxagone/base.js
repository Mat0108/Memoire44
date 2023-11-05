import { CaseGenerique, test3, test6 } from "../divers/Generique";

export class SandBag extends CaseGenerique {
    constructor(orientation){
        super(`images/base/${orientation ?"o_sand1":"o_sand2"}.png`,{soldat:-1,tank:-1},false,true,false,false,"images/cards/base/sandbags-fr.png")
    }
}
export class Wire extends CaseGenerique{
    constructor (){
        super("images/base/o_wire.png",{soldat:-1},false,false,false,false,)
    }
}
export class Hedgehow extends CaseGenerique{
    constructor (){
        super("images/base/o_hedgehog.png",false,true,false,false,false)
    }
}
export class Bunker extends CaseGenerique{
    constructor (){
        super("images/base/o_bunker.png",{soldat:-1,tank:-2},true,true,true)
    }
}

export class Hills extends CaseGenerique {
    constructor (){
        super("images/base/h_hills.png",{soldat:-1,tank:-1},false,false,true,true,"images/cards/base/hill-fr.png")
    }
}

export class Forest extends CaseGenerique {
    constructor (hover){
        super("images/base/h_forest.png",{soldat:-1,tank:-2},true,false,true,false,"images/cards/base/forest-fr.png")
    }
}

export class Village extends CaseGenerique{
    constructor(hover) {
        super("images/base/h_village.png",{soldat:-1,tank:-2},true,false,true,true,"images/cards/base/village-fr.png",hover)
    }
}

export class Bridge extends CaseGenerique{
    constructor(orientation){
        super(test6("base","o_bridge",orientation))
    }
}

export class RiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("base","h_river",orientation))   
    }
}
export class RiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("base","h_curve",orientation))
           }
}
export function returnHexagone(text){
    switch(text){
        case "Hills":
            return new Hills();
        case "Forest":
            return new Forest();
        case "Village":
            return new Village();
    }
}