import { CaseGenerique } from "../Generique";

export class SelectHexa extends CaseGenerique {
    constructor(){
        super("images/divers/activated.png")
    }
}
export class Move extends CaseGenerique {
    constructor(item){
        super(`images/divers/move_${item}.png`,false,false,false,false,false,false,false,"opacity-60")
    }
}