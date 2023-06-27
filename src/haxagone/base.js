import { CaseGenerique } from "../Generique";

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
export class SelectHexa extends CaseGenerique {
    constructor(){
        super("images/divers/activated.png")
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
        super(`images/base/${orientation == 6 ? "o_bridge6":orientation == 5 ? "o_bridge5" : orientation == 4 ?
        "o_bridge4":orientation == 3 ? "o_bridge3":orientation == 2 ? "o_bridge2":"o_bridge1"}.png`)
    }
}

export class RiversRight extends CaseGenerique{
    constructor(orientation){
        super(`images/base/${orientation == 3 ? "h_river3":orientation == 2 ? "h_river2" : "h_river1"}.png`)
    }
}
export class RiversCurve extends CaseGenerique{
    constructor(orientation){
        super(`images/base/${orientation == 6 ? "h_curve6":orientation == 5 ? "h_curve5" : orientation == 4 ?
        "h_curve4":orientation == 3 ? "h_curve3":orientation == 2 ? "h_curve2":"h_curve1"}.png`)
    }
}
