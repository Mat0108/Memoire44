import { CaseGenerique } from "../Generique";

export class SandBag extends CaseGenerique {
    constructor(orientation){
        super(`images/base/${orientation ?"o_sand1":"o_sand2"}.png`,{soldat:-1,tank:-1},false,true,false,false,"images/cards/base/sandbags-fr.png")
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