import { SoldatGenerique } from "../divers/Generique";

export class SoldatAllies extends SoldatGenerique {
    constructor(nb,portée,deplacement){  //orientation: true => bas, false => haut 
        let orientation = false;
        super(`images/base/${orientation ? "u_usinf_top":"u_usinf_bottom"}.png`,nb ? nb : 4,portée ? portée : [3,2,1],deplacement ? deplacement:[1,2],"w-[38%]","Soldat","Allies")
    }
}

export class CharAllies extends SoldatGenerique {
    constructor(nb,portée,deplacement){
        let orientation = false;
        super(`images/base/${orientation ? "u_ustank_top":"u_ustank_bottom"}.png`,nb ? nb : 3,portée ? portée:[3,3,3],deplacement ? deplacement:[1,1,1],"w-[40%]","Char","Allies")
    }
}

export class ArtillerieAllies extends SoldatGenerique {
    constructor(nb,portée,deplacement){
        let orientation = false;
        super(`images/base/${orientation ? "u_usgun_top":"u_usgun_bottom"}.png`,nb ? nb : 2,portée ? portée:[3,3,2,2,1,1],deplacement ? deplacement:[2],null,"Artillerie","Allies")
    }
}

