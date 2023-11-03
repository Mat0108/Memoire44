import { CaseGenerique, test3, test4 } from "../divers/Generique";

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
export class Selected extends CaseGenerique {
    constructor(){
        super("images/divers/attacking_selected.png")
    }
}
export class Target extends CaseGenerique{
    constructor(nb){
        super(nb ? test4("divers","target-",nb):"images/divers/target.png")
    }
}
export class Retreat extends CaseGenerique{
    constructor(nb,nb2){
        super(nb == 0 ? "images/divers/retreat_0.png" : test3("divers","retreat_",nb))
        this._nb = nb2;
    }
    render(){
      return <div className="relative w-fit h-fit">
        <div className="absolute bottom-0 text-center text-white text-[20px] w-[80px]">
             {this._nb} vie
        </div>
        {super.render()}
      </div>  
    }
}