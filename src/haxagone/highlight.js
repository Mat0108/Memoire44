import { CaseGenerique, test3 } from "../divers/Generique";

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
export class retreat extends CaseGenerique{
    constructor(nb){
        this._nb = nb;
        super(nb == 0 ? "images/divers/retreat_0.png" : test3("divers","retreat_",nb))
    }
    render(){
      return <div className="relative w-fit h-fit">
        <div className="absolute bottom-2 right-2">
            {this._nb}
        </div>
        {super.render()}
      </div>  
    }
}