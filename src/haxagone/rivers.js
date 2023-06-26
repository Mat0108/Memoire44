import { CaseGenerique } from "../Generique"

export class RiversRight extends CaseGenerique{
    constructor(orientation){
        super(`images/base/${orientation == 3 ? "h_river3":orientation == 2 ? "h_river2" : "h_river1"}.png`)
    }
}
export class RiversCurve extends CaseGenerique{
    constructor(orientation){
        super(`images/base/${orientation == 6 ? "h_curve6":orientation == 5 ? "h_curve5" : orientation == 4 ?
        "h_curve4":orientation == 4 ? "h_curve4":orientation == 3 ? "h_curve3":orientation == 2 ? "h_curve2":"h_curve1"}.png`)
    }
}