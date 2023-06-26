<<<<<<< HEAD

export class Terrain{
    constructor(x,y){
        this._x = x;
        this._y = y;
    }
=======
import React from "react";

export class Terrain extends React.Component{
    constructor(props){
        super(props)
        this._x = props.x;
        this._y = props.y;
        this._grille = new Array(props.y).fill(0).map(() => new Array(props.x).fill({case:null,defense:null,unité:null,action:null}));   
        this._grille[3][4] = {case:new Position(3,4),defense:null,unité:null};
        this._terrain = props.terrain
        this._list = []
    }

    componentDidUpdate(props){
        if(props._list != this._list){
            this._list = props._list;
        }
    }
    render(){
        return <div className="relative">
        <div className="absolute z-[0]"><img src={this._terrain} alt={"terrain"}/></div>
        <div className="absolute flex flex-col z-[2000] top-[65px] left-[10px]">
        {this._grille.map((e,pos)=>{
          
            
            return <div className={`${pos % 2 == 1 ? "ml-[45px]":""} w-full h-[79px] flex flex-row`}>{
                e.map((f,pos2)=>{

                    if(pos2 != (pos % 2 == 1 ? this._x-1 : this._x)){
                        
                        return <div className={`w-[91px] h-[79px] border-2 border-black ${this._list.map(e=>{if(e.x == pos && e.y == pos2){return "bg-red"}})} ${(pos == 3 && pos2 == 4 )?"bg-green":""}`} onClick={()=>{if(pos == 3 && pos2 == 4){this._list = f.case.CaseProche()}}}>{}</div>
                    
                    }})
            }</div>
            
        })}
    </div></div>
    }

>>>>>>> 2331620 (commit)
    getTerrainX(){
        return this._x;
    }
    getTerrainY(){
        return this._y;
    }
}
export class Position{
<<<<<<< HEAD
    constructor(posx,posy,x,y){
=======
    constructor(posx,posy){
>>>>>>> 2331620 (commit)
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
        if(portée >=4){
            list.push({x:this._posx-4,y:this._posy,dés:dés[3]}); //partie gauche du cercle
            list.push({x:this._posx-4,y:this._posy-1,dés:dés[3]});
            list.push({x:this._posx-4,y:this._posy+1,dés:dés[3]});
            list.push({x:this._posx-3,y:this._posy-2,dés:dés[3]});
            list.push({x:this._posx-3,y:this._posy+2,dés:dés[3]});
            list.push({x:this._posx-3,y:this._posy-3,dés:dés[3]});
            list.push({x:this._posx-3,y:this._posy+3,dés:dés[3]});

            list.push({x:this._posx+4,y:this._posy,dés:dés[3]}); //partie droite du cercle
            list.push({x:this._posx+3,y:this._posy-1,dés:dés[3]});
            list.push({x:this._posx+3,y:this._posy+1,dés:dés[3]});
            list.push({x:this._posx+3,y:this._posy-2,dés:dés[3]});
            list.push({x:this._posx+3,y:this._posy+2,dés:dés[3]});
            list.push({x:this._posx+2,y:this._posy-3,dés:dés[3]});
            list.push({x:this._posx+2,y:this._posy+3,dés:dés[3]});

            list.push({x:this._posx-2,y:this._posy+4,dés:dés[3]}); //partie haute du cercle
            list.push({x:this._posx-1,y:this._posy+4,dés:dés[3]});
            list.push({x:this._posx,y:this._posy+4,dés:dés[3]});
            list.push({x:this._posx+1,y:this._posy+4,dés:dés[3]});
            list.push({x:this._posx+2,y:this._posy+4,dés:dés[3]});

            list.push({x:this._posx-2,y:this._posy-4,dés:dés[3]}); //partie basse du cercle
            list.push({x:this._posx-1,y:this._posy-4,dés:dés[3]});
            list.push({x:this._posx,y:this._posy-4,dés:dés[3]});
            list.push({x:this._posx+1,y:this._posy-4,dés:dés[3]});
            list.push({x:this._posx+2,y:this._posy-4,dés:dés[3]});
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
export class SoldatGenerique  {
    // constructor(nombre,vie,portée,deplacementavectir,deplacementsanstir,image,posx,posy,clan){
    //     this._nombre = nombre;
    //     this._vie = vie;
    //     this._portée = portée;
    //     this._deplacementavectir = deplacementavectir;
    //     this._deplacementsanstir = deplacementsanstir;
    //     this.image = image;
    //     this._pos = Position(posx,posy);
    //     this._clan = clan; 

    // }
    constructor(image,nombre,vie){
        
        this._image = image;
        this._nombre = nombre;
        this._vie = vie;
    }
    render(){
        if(this._nombre == 4){
            let elem = <img src={this._image} alt={"Soldat"} className="w-1/2"/>
                        
            return (
            <div className="flex  w-full">
                <div className="absolute top-2 w-full">
                    <div className="flex flex-row ">
                        {this._vie > 0 ? elem:""}
                        {this._vie > 1 ? elem:""}
                    </div>
                </div>
                <div className="absolute top-12 z-[40]">
                    <div className="flex flex-row">                    
                        {this._vie > 2 ? elem:""}
                        {this._vie > 3 ? elem:""}
                    </div>
                </div>
            </div>)
        }
        if(this._nombre == 3){
            let elem = <img src={this._image} alt={"Soldat"} className="w-1/2"/>
                        
            return (
            <div className="flex  w-full">
                <div className="absolute top-2 w-full">
                    <div className="flex flex-row center ">
                        {this._vie > 0 ? elem:""}
                    </div>
                </div>
                <div className="absolute top-12 z-[40]">
                    <div className="flex flex-row">                    
                        {this._vie > 1 ? elem:""}
                        {this._vie > 2 ? elem:""}
                    </div>
                </div>
            </div>)
        }
        if(this._nombre == 2){
            let elem = <img src={this._image} alt={"Soldat"} className="w-1/2"/>
                        
            return (
            <div className="flex w-full">
                <div className="absolute top-6 z-[40]">
                    <div className="flex flex-row">                    
                        {this._vie > 0 ? elem:""}
                        {this._vie > 1 ? elem:""}
                    </div>
                </div>
            </div>)
        }
        return <div></div>
    }
    AfficherDeplacementAvecTir(){ 
        return this._deplacementavectir ? this._pos.CaseProche(this._deplacementavectir) : [];       
    }
    AfficherDeplacementSansTir(){ 
        return this._deplacementsanstir ? this._pos.CaseProche(this._deplacementsanstir) : [];       
    }

}

export class CaseGenerique {
    constructor(image ) {
        this._image = image;
        this._malus = 0;
    }
    render(){
        return <div><img src={this._image} alt={"Case"}/></div>
    }
}


