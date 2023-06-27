import { CaseGenerique } from "../Generique";

export class Mountain extends CaseGenerique{
    constructor(orientation){
        super(`images/terrain/h_mountain.png`,false,false,false,false,false,false,false,"Mountain")
    }
}