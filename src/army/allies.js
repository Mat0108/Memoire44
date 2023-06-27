import { SoldatGenerique } from "../Generique";

export class SoldatAllies extends SoldatGenerique {
    constructor(nb){  //orientation: true => bas, false => haut 
        let orientation = false;
        super(`images/base/${orientation ? "u_usinf_top":"u_usinf_bottom"}.png`,nb ? nb : 4,nb ? nb : 4,[3,2,1],2,1,"w-[38%]")
    }
}

export class CharAllies extends SoldatGenerique {
    constructor(){
        let orientation = false;
        super(`images/base/${orientation ? "u_ustank_top":"u_ustank_bottom"}.png`,3,3,[3,3,3],2,1,"w-[40%]")
    }
}

export class ArtillerieAllies extends SoldatGenerique {
    constructor(){
        let orientation = false;
        super(`images/base/${orientation ? "u_usgun_top":"u_usgun_bottom"}.png`,2,2,[3,3,2,2,1,1],2,1)
    }
}

