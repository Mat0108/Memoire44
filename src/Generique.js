import React from "react";
import './App.css';

export class Terrain extends React.Component{
    constructor(props){
        super(props)
        this._x = props.x;
        this._y = props.y;
        this._grille = new Array(props.y).fill(0).map(() => new Array(props.x).fill({case:null,defense:null,unité:null,action:null}));   
        this._grille[3][4] = {case:new Position(3,4,0),defense:null,unité:null};
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

    getTerrainX(){
        return this._x;
    }
    getTerrainY(){
        return this._y;
    }
}
export class Position{
    constructor(posx,posy){
        this._posx = posx;
        this._posy = posy;
        // this._portéetir = portéetir;
        // this._portéedeplacementavectir = portéedeplacementavectir;
        // this._portéedeplacementsanstir = portéedeplacementsanstir;
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

}
export class SoldatGenerique  {
    constructor(image,nombre,vie,portée,deplacementavectir,deplacementsanstir,taille,type,camp){
        this._nombre = nombre;
        this._vie = vie;
        this._portée = portée;
        this._deplacementavectir = deplacementavectir;
        this._deplacementsanstir = deplacementsanstir;
        this._image = image;
        this._taille = taille ? taille : "w-1/2"
        this._type = type ? type : "1"
        this._camp = camp ? camp : "Axis"
    }
    // constructor(image,nombre,vie){
        
    //     this._image = image;
    //     this._nombre = nombre;
    //     this._vie = vie;
    // }
    render(){
        let elem = <img src={this._image} alt={"Soldat"} className={this._taille}/>
            
        if(this._nombre == 4){
                        
            return (
            <div className="flex  w-full">
                <div className="absolute top-0 w-full">
                    <div className="flex flex-row center">
                        {this._vie > 0 ? elem:""}
                        {this._vie > 1 ? elem:""}
                    </div>
                </div>
                <div className="absolute top-9 z-[40]">
                    <div className="flex flex-row center">                    
                        {this._vie > 2 ? elem:""}
                        {this._vie > 3 ? elem:""}
                    </div>
                </div>
            </div>)
        }
        if(this._nombre == 3){
                        
            return (
            <div className="flex  w-full">
                <div className="absolute top-2 w-full">
                    <div className="flex flex-row center ">
                        {this._vie > 0 ? elem:""}
                    </div>
                </div>
                <div className="absolute top-12 z-[40]">
                    <div className="flex flex-row center">                    
                        {this._vie > 1 ? elem:""}
                        {this._vie > 2 ? elem:""}
                    </div>
                </div>
            </div>)
        }
        if(this._nombre == 2){
                        
            return (
            <div className="flex w-full">
                <div className="absolute top-7 z-[40]">
                    <div className="flex flex-row center">                    
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
    constructor(image,malus,deplacmentmax,ignorereflag,lineofsight,byentering,imageexplicatif,hover,className ) {
        this._image = image;
        this._malus = malus ? malus :null;
        this._deplacmentmax = deplacmentmax ? deplacmentmax : null;
        this._ignorereflag = ignorereflag ? ignorereflag : null;
        this._lineofsight = lineofsight ? lineofsight : null;
        this._byentering = byentering ? byentering : null;
        this._imageexplicatif = imageexplicatif ? imageexplicatif : null;
        this._hover = hover ? hover : null;
        this._className = className ? className : null; 

    }
    render(){
        return <div onMouseEnter={()=>this._hover ? this._hover({card:this._imageexplicatif,showing:true}):""} onMouseLeave={()=>this._hover ? this._hover({card:"",showing:false}):""} ><img src={this._image} alt={"Case"} className={this._className}/></div>
    }
}

export function test6(path,name,orientation){
    return `images/${path}/${orientation == 6 ? `${name}6`:orientation == 5 ? `${name}5` : orientation == 4 ?
    `${name}4`:orientation == 3 ? `${name}3`:orientation == 2 ? `${name}2`:`${name}1`}.png`
}
export function test3(path,name,orientation){
    return `images/${path}/${orientation == 3 ? `${name}3`:orientation == 2 ? `${name}2` : `${name}1`}.png`
}
export function test2(path,name,orientation){
    return `images/${path}/${orientation == 2 ? `${name}2` : `${name}1`}.png`
}

export function showPortee(portée,posx,posy,dés,deplacement){
    console.log("posy : ",posy)
    let list = [
        {x:posx-1,y: posx %2  == 1 ? posy : posy-1,dés: dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx+1,y: posx %2  == 1 ? posy : posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx,y:posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx,y:posy+1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx-1,y:posx %2  == 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx+1,y:posx %2  == 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}
    ]
    if(portée >= 2){
        list.push({x:posx-2,y:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx-2,y:posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx-2,y:posy+1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[1]:null}); //partie gauche du cercle

        list.push({x:posx-1,y:posx %2  == 1 ? posy-1:posy-2,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null}); //partie haute et bas du cercle
        list.push({x:posx+1,y:posx %2  == 1 ? posy-1:posy-2,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx,y:posy-2,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx,y:posy+2,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx-1,y:posx %2  == 1 ? posy+2:posy+1,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx+1,y:posx %2  == 1 ? posy+2:posy+1,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        
        list.push({x:posx+2,y:posy,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null}); //partie droite du cercle
        list.push({x:posx+2,y:posy-1,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx+2,y:posy+1,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
    }
    if(portée >= 3){
        list.push({x:posx-3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie gauche du cercle
        list.push({x:posx-3,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-3,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});


        list.push({x:posx+3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie droite du cercle
        list.push({x:posx+2,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+2,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        
        list.push({x:posx-2,y:posy+3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie haute du cercle
        list.push({x:posx-1,y:posy+3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx,y:posy+3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+1,y:posy+3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        list.push({x:posx-2,y:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie basse du cercle
        list.push({x:posx-1,y:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx,y:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+1,y:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
    }
    if(portée >=4){
        list.push({x:posx-4,y:posy,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null}); //partie gauche du cercle
        list.push({x:posx-4,y:posy-1,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx-4,y:posy+1,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx-3,y:posy-2,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx-3,y:posy+2,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx-3,y:posy-3,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx-3,y:posy+3,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});

        list.push({x:posx+4,y:posy,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null}); //partie droite du cercle
        list.push({x:posx+3,y:posy-1,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+3,y:posy+1,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+3,y:posy-2,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+3,y:posy+2,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+2,y:posy-3,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+2,y:posy+3,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});

        list.push({x:posx-2,y:posy+4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null}); //partie haute du cercle
        list.push({x:posx-1,y:posy+4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx,y:posy+4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+1,y:posy+4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+2,y:posy+4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});

        list.push({x:posx-2,y:posy-4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null}); //partie basse du cercle
        list.push({x:posx-1,y:posy-4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx,y:posy-4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+1,y:posy-4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
        list.push({x:posx+2,y:posy-4,dés:dés ? dés[3] : 0,deplacement:deplacement ? deplacement[3]:null});
    }
    let updatelist = []
    list.map(e=>{
        if(e.x >= 0 && e.x <= 13 && e.y >= 0 && e.y <= 9){
            updatelist.push(e)
        }     
    })
    return updatelist;
}


