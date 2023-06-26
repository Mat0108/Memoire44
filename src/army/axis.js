import { SoldatGenerique } from "../Generique"

export class SoldatAxis extends SoldatGenerique {
    constructor(orientation){  //orientation: true => bas, false => haut 
        super(`images/base/${orientation ? "u_gerinf_top":"u_gerinf_bottom"}.png`,4,4,[3,2,1],2,1)
    }
}

export class TankAxis extends SoldatGenerique {
    constructor(orientation){
        super(`images/base/${orientation ? "u_gertank_top":"u_gertank_bottom"}.png`,3,3,[3,3,3],2,1)
    }
}

export class ArtillerieAxis extends SoldatGenerique {
    constructor(orientation){
        super(`images/base/${orientation ? "u_gergun_top":"u_gergun_bottom"}.png`,2,2,[3,3,2,2,1,1],2,1)
    }
}

