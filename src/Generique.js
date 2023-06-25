
export class Terrain{
    constructor(x,y){
        this._x = x;
        this._y = y;
    }
    getTerrainX(){
        return this._x;
    }
    getTerrainY(){
        return this._y;
    }
}
export class Position{
    constructor(posx,posy,x,y){
        this._posx = posx;
        this._posy = posy;
    }
    getX(){
        return this._posx;
    }
    getY(){
        return this._posy;
    }
    setX(){
        return this._posx;
    }
    setY(){
        return this._posy;
    }
    CaseProche(portée){ //x : 0-12 y : 0-8 portée : 1 - 2
        let list = [
            {x:this._posx-1,y:this._posy},
            {x:this._posx+1,y:this._posy},
            {x:this._posx,y:this._posy-1},
            {x:this._posx,y:this._posy+1},
            {x:this._posx+1,y:this._posy-1},
            {x:this._posx+1,y:this._posy+1}
        ]
        if(portée == 2){
            list.push({x:this._posx-2,y:this._posy});
            list.push({x:this._posx-1,y:this._posy-1});
            list.push({x:this._posx-1,y:this._posy+1}); //partie gauche du cercle

            list.push({x:this._posx-1,y:this._posy-2}); //partie haute et bas du cercle
            list.push({x:this._posx-1,y:this._posy+2});
            list.push({x:this._posx,y:this._posy-2});
            list.push({x:this._posx,y:this._posy+2});
            list.push({x:this._posx+1,y:this._posy-2});
            list.push({x:this._posx+1,y:this._posy+2});
            
            list.push({x:this._posx+2,y:this._posy}); //partie droite du cercle
            list.push({x:this._posx+2,y:this._posy-1});
            list.push({x:this._posx+2,y:this._posy+1});
        }
        let updatelist = []
        list.map(e=>{
            if(e.x >= 0 && e.x < 13 && e.y >= 0 && e.y < 9){
                updatelist.push(e)
            }     
        })
        return updatelist;
    }
    Portée(dés){  //dés[0] = 3 dés[1] = 2 dés[2] = 0
        let list = [
            {x:this._posx-1,y:this._posy,dés:dés[0]},
            {x:this._posx+1,y:this._posy,dés:dés[0]},
            {x:this._posx,y:this._posy-1,dés:dés[0]},
            {x:this._posx,y:this._posy+1,dés:dés[0]},
            {x:this._posx+1,y:this._posy-1,dés:dés[0]},
            {x:this._posx+1,y:this._posy+1,dés:dés[0]}
        ]
        if(portée >= 2){
            list.push({x:this._posx-2,y:this._posy,dés:dés[1]});
            list.push({x:this._posx-1,y:this._posy-1,dés:dés[1]});
            list.push({x:this._posx-1,y:this._posy+1,dés:dés[1]}); //partie gauche du cercle

            list.push({x:this._posx-1,y:this._posy-2,dés:dés[1]}); //partie haute et bas du cercle
            list.push({x:this._posx-1,y:this._posy+2,dés:dés[1]});
            list.push({x:this._posx,y:this._posy-2,dés:dés[1]});
            list.push({x:this._posx,y:this._posy+2,dés:dés[1]});
            list.push({x:this._posx+1,y:this._posy-2,dés:dés[1]});
            list.push({x:this._posx+1,y:this._posy+2,dés:dés[1]});
            
            list.push({x:this._posx+2,y:this._posy,dés:dés[1]}); //partie droite du cercle
            list.push({x:this._posx+2,y:this._posy-1,dés:dés[1]});
            list.push({x:this._posx+2,y:this._posy+1,dés:dés[1]});
        }
        if(portée >= 3){
            list.push({x:this._posx-3,y:this._posy,dés:dés[2]}); //partie gauche du cercle
            list.push({x:this._posx-3,y:this._posy-1,dés:dés[2]});
            list.push({x:this._posx-3,y:this._posy+1,dés:dés[2]});
            list.push({x:this._posx-2,y:this._posy-2,dés:dés[2]});
            list.push({x:this._posx-2,y:this._posy+2,dés:dés[2]});


            list.push({x:this._posx+3,y:this._posy,dés:dés[2]}); //partie droite du cercle
            list.push({x:this._posx+2,y:this._posy-1,dés:dés[2]});
            list.push({x:this._posx+2,y:this._posy+1,dés:dés[2]});
            list.push({x:this._posx+2,y:this._posy-2,dés:dés[2]});
            list.push({x:this._posx+2,y:this._posy+2,dés:dés[2]});

            
            list.push({x:this._posx-2,y:this._posy+3,dés:dés[2]}); //partie haute du cercle
            list.push({x:this._posx-1,y:this._posy+3,dés:dés[2]});
            list.push({x:this._posx,y:this._posy+3,dés:dés[2]});
            list.push({x:this._posx+1,y:this._posy+3,dés:dés[2]});

            list.push({x:this._posx-2,y:this._posy-3,dés:dés[2]}); //partie basse du cercle
            list.push({x:this._posx-1,y:this._posy-3,dés:dés[2]});
            list.push({x:this._posx,y:this._posy-3,dés:dés[2]});
            list.push({x:this._posx+1,y:this._posy-3,dés:dés[2]});
        }
        let updatelist = []
        list.map(e=>{
            if(e.x >= 0 && e.x < 13 && e.y >= 0 && e.y < 9){
                updatelist.push(e)
            }     
        })
        return updatelist;
    }

}
export class SoldatGenerique {
    constructor(nombre,vie,portée,deplacementavectir,deplacementsanstir,image,posx,posy){
        this._nombre = nombre;
        this._vie = vie;
        this._portée = portée;
        this._deplacementavectir = deplacementavectir;
        this._deplacementsanstir = deplacementsanstir;
        this.image = image;
        this._pos = Position(posx,posy);
        this._clan = clan; 

    }
    AfficherDeplacementAvecTir(){ 
        return this._deplacementavectir ? this._pos.CaseProche(this._deplacementavectir) : [];       
    }
    AfficherDeplacementSansTir(){ 
        return this._deplacementsanstir ? this._pos.CaseProche(this._deplacementsanstir) : [];       
    }

}

export class CaseGenerique {
    constructor(image, malus,pos ) {
        this._image = image;
        this._malus = malus;
        this._pos = pos;
    }
}


