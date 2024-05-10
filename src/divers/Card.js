import { Target } from "../haxagone/highlight";
import { CardGenerique } from "./Generique";

export const ListCard = [
    // titre,imageurl,nbunit,zone,type
    new CardGenerique("Choisir une carte","back-fr"),
    new CardGenerique("Attaque aérienne","air-power-fr",0,0,0,0,true,true,false),
    new CardGenerique("Assault de blindés","armor-assault-fr",4,"ALL","Char",false,false,false,true),
    new CardGenerique("Tir d'artillerie","artillery-bombard-fr","ALL","ALL","Artillerie"),
    new CardGenerique("Assaut gauche","assault-left-fr","ALL",1,"ALL"),
    new CardGenerique("Assaut centre","assault-center-fr","ALL",2,"ALL"),
    new CardGenerique("Assaut droite","assault-right-fr","ALL",3,"ALL"),
    new CardGenerique("Attaque gauche","attack-left-fr",3,1,"ALL"),
    new CardGenerique("Attaque centre","attack-center-fr",3,2,"ALL"),
    new CardGenerique("Attaque droite","attack-right-fr",3,3,"ALL"),
    new CardGenerique("Tir de barrage","barrage-fr",1,"ALL","ALL",false,true,false,false),
    new CardGenerique("Infiltration","behind-enemy-lines-fr",1,"ALL","Soldat",false),
    new CardGenerique("Combat rapproché","close-assault-fr",0,0,0,0,false,false,true),
    new CardGenerique("Consolidation de position","dig-in-fr",4),
    new CardGenerique("Ordre du QG","direct-hq-fr",4,"ALL","Char","Soldat"),
    new CardGenerique("Fusillade","firefight-fr",4,"ALL","ALL",false,false,false,true),
    new CardGenerique("Attaque frontale","general-advance-fr",2,"ALL","ALL"),
    new CardGenerique("Assault d'infanterie","infantry-assault-fr","ALL","ALL","Soldat"),
    new CardGenerique("Médecins & Mécaniciens","medics-fr"),
    new CardGenerique("A l'assault","move-out-fr",4,"ALL","Soldat"),
    new CardGenerique("Encerclement","pincer-move-fr",2,4,"ALL"),
    new CardGenerique("Accrochage gauche","probe-left-fr",2,1,"ALL"),
    new CardGenerique("Accrochage centrer","probe-center-fr",2,2,"ALL"),
    new CardGenerique("Accrochage droite","probe-right-fr",2,3,"ALL"),
    new CardGenerique("reconnaissance gauche","recon-left-fr",1,1,"ALL"),
    new CardGenerique("reconnaissance centre","recon-center-fr",1,2,"ALL"),
    new CardGenerique("reconnaissance droite","recon-right-fr",1,3,"ALL"),
    new CardGenerique("reconnaissance en force","recon-center-fr",1,"ALL","ALL"),
    new CardGenerique("Action héroïque","their-finest-hour-fr",0,0,0,0,false,false,true)
]

export function RandomListCard(){
    return ListCard.sort((a,b)=>0.5-Math.random())
}

export const CardSelect = ({onChange}) =>{
    let list = ListCard;
    return <select onChange={(e)=>{onChange(ListCard[e.target.value])}} className="w-[276px] mt-[10px] h-[50px] bg-gray text-[20px] font-av-bold text-white rounded-lg" >
        {list.map((item,pos)=>{
            return <option value={pos} key={pos} className="">{item._titre}</option>
        })}
    </select>
        
}
export const CampAffichage = ({camp}) =>{
    return <div className='mt-[20px] w-[276px] h-[50px] relative p-2 flex flex-row bg-gray rounded-lg flex flex-row center justify-around'>
        <div className="flex flex-row center">
            <div className={`w-5 h-5 rounded-full  mr-[10px] border-[5px] ${camp === "Allies" ? "border-green":"border-red"}`}></div>
            <div><img src={"images/divers/medalallies.png"} alt={"medalallies"} className="w-10 h-10"/></div>
        </div>
        <div className="flex flex-row center">
            <div className={`w-5 h-5 rounded-full  mr-[10px] border-[5px] ${camp !== "Allies" ? "border-green":"border-red"}`}></div>
            <div><img src={"images/divers/medalaxis.png"} alt={"medalaxis"} className="w-10 h-10"/></div>
        </div>
    </div>
}

export function AirPower(grille,setGrille,x,y,action){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let f = localgrille.grille[x][y];   
    localgrille2.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité,action:action,highlight:null,select:f.unité._camp === "Allies" ? new Target(2) : new Target(1)}
    setGrille(localgrille2);
}
export function Barrage(grille,setGrille,x,y,action){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let f = localgrille.grille[x][y];
    let nb = 0;
    localgrille.grille.forEach((e,pos)=>{
        e.forEach((f,pos2)=>{
          if(f.select){
            nb += 1;
          }
        });
      });   
    if(nb === 0){
        localgrille2.grille[x][y] = {case:f.case,defense:f.defense,unité:f.unité,action:action,highlight:null,select:new Target(4)}
    }
    setGrille(localgrille2);
}