import { ArtillerieAllies, CharAllies, SoldatAllies } from "./allies";
import { ArtillerieAxis, CharAxis, SoldatAxis } from "./axis"


export function HitUnit(unit,nb){
    switch(unit){
        case "SoldatAxis":
            return new SoldatAxis(nb);
        case "CharAxis":
            return new CharAxis(nb);    
        case "ArtillerieAxis":
            return new ArtillerieAxis(nb);    
        case "SoldatAllies":
            return new SoldatAllies(nb);    
        case "CharAllies":
            return new CharAllies(nb);    
        case "ArtillerieAllies":
            return new ArtillerieAllies(nb);    
                                                
    }
}