import { Country } from "../haxagone/base";
import { ArtillerieAllies, CharAllies, SoldatAllies } from "./allies";
import { ArtillerieAxis, CharAxis, SoldatAxis } from "./axis"


export function HitUnit(unit,nb){
    if(nb){
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
    }else{
        return null;
    }
    
}

export function AddDice(unit,nb,portée,deplacement){
    switch(unit){

        case "SoldatAxis":
            return new SoldatAxis(nb,portée,deplacement);
        case "CharAxis":
            return new CharAxis(nb,portée,deplacement);    
        case "ArtillerieAxis":
            return new ArtillerieAxis(nb,portée,deplacement);    
        case "SoldatAllies":
            return new SoldatAllies(nb,portée,deplacement);    
        case "CharAllies":
            return new CharAllies(nb,portée,deplacement);    
        case "ArtillerieAllies":
            return new ArtillerieAllies(nb,portée,deplacement);    
                                                
    }
}

export function ReturnArmy(unit){
    switch(unit){
        case "Country":
            return {hexagone:new Country(),orientation:0}
        case "SoldatAxis":
            return {hexagone:new SoldatAxis(),orientation:0}
        case "CharAxis":
            return {hexagone:new CharAxis(),orientation:0}    
        case "ArtillerieAxis":
            return {hexagone:new ArtillerieAxis(),orientation:0}  
        case "SoldatAllies":
            return {hexagone:new SoldatAllies(),orientation:0}    
        case "CharAllies":
            return {hexagone:new CharAllies(),orientation:0}
        case "ArtillerieAllies":
            return {hexagone:new ArtillerieAllies(),orientation:0}                                        
    }
}