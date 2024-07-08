import { Country } from "../haxagone/base";
import { ArtillerieAllies, CharAllies, SoldatAllies } from "./allies";
import { ArtillerieAxis, CharAxis, SoldatAxis } from "./axis"


export function HitUnit(unit, nb) {
    if (nb) {
        if (unit instanceof SoldatAxis) {
            return new SoldatAxis(nb);
        } else if (unit instanceof CharAxis) {
            return new CharAxis(nb);
        } else if (unit instanceof ArtillerieAxis) {
            return new ArtillerieAxis(nb);
        } else if (unit instanceof SoldatAllies) {
            return new SoldatAllies(nb);
        } else if (unit instanceof CharAllies) {
            return new CharAllies(nb);
        } else if (unit instanceof ArtillerieAllies) {
            return new ArtillerieAllies(nb);
        } else {
            return new SoldatAxis(nb); // default case
        }
    } else {
        return null;
    }
}

export function AddDice(unit, nb, portée, deplacement) {
    if (unit instanceof SoldatAxis) {
        return new SoldatAxis(nb, portée, deplacement);
    } else if (unit instanceof CharAxis) {
        return new CharAxis(nb, portée, deplacement);
    } else if (unit instanceof ArtillerieAxis) {
        return new ArtillerieAxis(nb, portée, deplacement);
    } else if (unit instanceof SoldatAllies) {
        return new SoldatAllies(nb, portée, deplacement);
    } else if (unit instanceof CharAllies) {
        return new CharAllies(nb, portée, deplacement);
    } else if (unit instanceof ArtillerieAllies) {
        return new ArtillerieAllies(nb, portée, deplacement);
    } else {
        return new SoldatAxis(nb, portée, deplacement); // default case
    }
}


export function ReturnArmy(unit, nb) {
    if (unit instanceof SoldatAxis) {
        return { hexagone: new SoldatAxis(nb), orientation: 4, max: 4 };
    } else if (unit instanceof CharAxis) {
        return { hexagone: new CharAxis(nb), orientation: 3, max: 4 };
    } else if (unit instanceof ArtillerieAxis) {
        return { hexagone: new ArtillerieAxis(nb), orientation: 2, max: 2 };
    } else if (unit instanceof SoldatAllies) {
        return { hexagone: new SoldatAllies(nb), orientation: 4, max: 4 };
    } else if (unit instanceof CharAllies) {
        return { hexagone: new CharAllies(nb), orientation: 3, max: 4 };
    } else if (unit instanceof ArtillerieAllies) {
        return { hexagone: new ArtillerieAllies(nb), orientation: 2, max: 4 };
    } else {
        return { hexagone: new Country(), orientation: 0, max: 0 }; // default case
    }
}
