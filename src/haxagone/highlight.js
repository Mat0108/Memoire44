import { CaseGenerique, test3, test4 } from "../divers/Generique";

export class SelectHexa extends CaseGenerique {
    constructor(){
        super("images/divers/activated.png")
    }
}
export class Move extends CaseGenerique {
    constructor(item){
        super(`images/divers/move_${item ? item : 1}.png`,false,null,false,false,false,false,false,false,false,"opacity-60")
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
        super(nb ? test4("divers","target-",nb):"images/divers/target.png",nb)
    }
}
export class Retreat extends CaseGenerique{
    constructor(nb,nb2){
        super(nb == 0 ? "images/divers/retreat_0.png" : test3("divers","retreat_",nb),nb)
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
export class Medal extends CaseGenerique{
    constructor(cond){
        super(cond ? "images/divers/medalaxis.png" : "images/divers/medalallies.png",cond)
    }
    render(){
      return <div className="relative w-full h-full flex ">
        <div className="absolute top-2 left-0 ml-[70px] w-[45%]  ">{super.render()}</div>
        
      </div>  
    }
}