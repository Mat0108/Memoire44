import { SoldatGenerique } from "../divers/Generique"

export class SoldatAxis extends SoldatGenerique {
    constructor(nb,portée,deplacement){  //orientation: true => bas, false => haut 
        let orientation = true;
        super(`images/base/${orientation ? "u_gerinf_top":"u_gerinf_bottom"}.png`,nb ? nb : 4,portée ? portée : [3,2,1],deplacement ? deplacement:[1,2],"w-[38%]","Soldat","Axis")
    }
}

export class CharAxis extends SoldatGenerique {
    constructor(nb,portée,deplacement){
        let orientation = true;
        super(`images/base/${orientation ? "u_gertank_top":"u_gertank_bottom"}.png`,nb ? nb : 3,portée ? portée : [3,3,3],deplacement ? deplacement:[1,1,1],"w-[40%]","Char","Axis")
    }
}

export class ArtillerieAxis extends SoldatGenerique {
    constructor(nb,portée,deplacement){
        let orientation = true;
        super(`images/base/${orientation ? "u_gergun_top":"u_gergun_bottom"}.png`,nb ? nb : 2,portée ? portée : [3,3,2,2,1,1],deplacement ? deplacement:[2],null,"Artillerie","Axis")
    }
}

