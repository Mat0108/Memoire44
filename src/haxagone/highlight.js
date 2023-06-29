import { CaseGenerique, test3 } from "../Generique";

export class SelectHexa extends CaseGenerique {
    constructor(){
        super("images/divers/activated.png")
    }
}
export class Move extends CaseGenerique {
    constructor(item){
        super(`images/divers/move_${item ? item : 1}.png`,false,false,false,false,false,false,false,"opacity-60")
    }
}
export class Attacking extends CaseGenerique {
    constructor(){
        super("images/divers/attacking.png")
    }
}
export class Target extends CaseGenerique{
    constructor(nb){
        super(nb ? test3("divers","target-",nb):"images/divers/target.png")
    }
}