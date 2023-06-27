import { SoldatGenerique } from "../Generique"

export class SoldatAxis extends SoldatGenerique {
    constructor(nb){  //orientation: true => bas, false => haut 
        let orientation = true;
        super(`images/base/${orientation ? "u_gerinf_top":"u_gerinf_bottom"}.png`,nb ? nb : 4,nb ? nb : 4,[3,2,1],2,1,"w-[38%]","Axis")
    }
}

export class CharAxis extends SoldatGenerique {
    constructor(){
        let orientation = true;
        super(`images/base/${orientation ? "u_gertank_top":"u_gertank_bottom"}.png`,3,3,[3,3,3],2,1,"w-[40%]","Axis")
    }
}

export class ArtillerieAxis extends SoldatGenerique {
    constructor(){
        let orientation = true;
        super(`images/base/${orientation ? "u_gergun_top":"u_gergun_bottom"}.png`,2,2,[3,3,2,2,1,1],2,1,null,"Axis")
    }
}

