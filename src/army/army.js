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

export function ReturnArmy(unit,nb){

    switch(unit){
        case "Country":
            return {hexagone:new Country(),orientation:0,max:0}
        case "SoldatAxis":
            return {hexagone:new SoldatAxis(nb),orientation:4,max:4}
        case "CharAxis":
            return {hexagone:new CharAxis(nb),orientation:3,max:4}    
        case "ArtillerieAxis":
            return {hexagone:new ArtillerieAxis(nb),orientation:2,max:2}  
        case "SoldatAllies":
            return {hexagone:new SoldatAllies(nb),orientation:4,max:4}    
        case "CharAllies":
            return {hexagone:new CharAllies(nb),orientation:3,max:4}
        case "ArtillerieAllies":
            return {hexagone:new ArtillerieAllies(nb),orientation:2,max:4}                                        
    }
}