import React from "react";

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
    constructor(image,nombre,portée,deplacement,taille,type,camp){
        this._nombre = nombre;
        this._portée = portée;
        this._deplacement = deplacement;
        this._image = image;
        this._taille = taille ? taille : "w-1/2"
        this._type = type ? type : "1"
        this._camp = camp ? camp : "Axis"
    }

    render(){
        let elem = <img src={this._image} alt={"Soldat"} className={this._taille}/>
            
        if(this._nombre == 4){
                        
            return (
            <div className="flex  w-full">
                <div className="absolute top-0 w-full">
                    <div className="flex flex-row center">
                        {elem}
                        {elem}
                    </div>
                </div>
                <div className="absolute top-9 z-[40]">
                    <div className="flex flex-row center">                    
                        {elem}
                        {elem}
                    </div>
                </div>
            </div>)
        }
        if(this._nombre == 3){
                        
            return (
            <div className="flex  w-full">
                <div className="absolute top-2 w-full">
                    <div className="flex flex-row center ">
                        {elem}
                    </div>
                </div>
                <div className="absolute top-12 z-[40]">
                    <div className="flex flex-row center">                    
                        {elem}
                        {elem}
                    </div>
                </div>
            </div>)
        }
        if(this._nombre == 2){
                        
            return (
            <div className="flex w-full">
                <div className="absolute top-7 z-[40]">
                    <div className="flex flex-row center">                    
                        {elem}
                        {elem}
                    </div>
                </div>
            </div>)
        
       }
        if(this._nombre == 1){
                        
        return (
        <div className="flex w-full">
            <div className="absolute top-7 z-[40]">
                <div className="flex flex-row center">                    
                    {elem}
                </div>
            </div>
        </div>)
    
}
        return <div></div>
    }
    

}

export class CaseGenerique {
    constructor(image,malus,deplacmentmax,ignoreflag,lineofsight,byentering,imageexplicatif,hover,className ) {
        this._image = image;
        this._malus = malus ? malus :null;
        this._deplacmentmax = deplacmentmax ? deplacmentmax : null;
        this._ignoreflag = ignoreflag ? ignoreflag : null;
        this._lineofsight = lineofsight ? lineofsight : false;
        this._byentering = byentering ? byentering : null;
        this._imageexplicatif = imageexplicatif ? imageexplicatif : null;
        this._hover = hover ? hover : null;
        this._className = className ? className : null; 

    }

    render(){
        return <div onMouseEnter={()=>this._hover ? this._hover({card:this._imageexplicatif,showing:true}):""} onMouseLeave={()=>this._hover ? this._hover({card:"",showing:false}):""} ><img src={this._image} alt={"Case"} className={this._className}/></div>
    }
}

export class CardGenerique {
    // {card:"",img:"",nbunit:1,zone:2,type:"ALL",showing:false}
    constructor(titre,image,nbunit,zone,type){
        this._titre = titre;
        this._image = image;
        this._nbunit = nbunit ? nbunit : "ALL";
        this._zone = zone ? zone : "ALL";
        this._type = type ? type : "ALL";
        
    }
    render(){
        <div className="w-[261px] h-[403px] ml-[20px] bg-white"> <img src={`images/cards/commandement/${this._image}-large.png`} alt={this._titre} className="w-[261px] h-[403px] ml-[20px] bg-white"/></div>
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
function calculDistance(x,y,x2,y2){
    return Math.abs(Math.sqrt(Math.pow(x-x2,2)+Math.pow(y-y2,2)))
}
function pointproche(x,y){
    return [
        {x:x-1,y: x %2  == 1 ? y : y-1},
        {x:x+1,y: x %2  == 1 ? y : y-1},
        {x:x,y:y-1},
        {x:x,y:y+1},
        {x:x-1,y:x %2  == 1 ? y+1:y},
        {x:x+1,y:x %2  == 1 ? y+1:y}
    ]
}
export function showPortee(grille,portée,posx,posy,dés,deplacement){

    let list = [
        {x:posx-1,y: posx %2  == 1 ? posy : posy-1,dés: dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx+1,y: posx %2  == 1 ? posy : posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx,y:posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx,y:posy+1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx-1,y:posx %2  == 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null},
        {x:posx+1,y:posx %2  == 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}
    ]
    if(portée >= 2){
        list.push({x:posx-2,y:posy,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx-2,y:posy-1,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null});
        list.push({x:posx-2,y:posy+1,dés:dés ? dés[1] : 0,deplacement:deplacement ? deplacement[1]:null}); //partie gauche du cercle

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
        let list3 = [];
        list3.push({x:posx-3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie gauche du cercle
        list3.push({x:posx-3,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx-3,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx-3,y:posx %2  == 1 ? posy+2 : posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});


        list3.push({x:posx-2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx-2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx+2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx+2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        list3.push({x:posx+3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie droite du cercle
        list3.push({x:posx+3,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx+3,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx+3,y:posx %2  == 1 ? posy+2 :posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        

        list3.push({x:posx-1,y:posx %2  == 1 ? posy+3:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx,y:posy+3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx+1,y:posx %2  == 1 ? posy+3:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        list3.push({x:posx-1,y:posx %2  == 1 ? posy-2:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx,y:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list3.push({x:posx+1,y:posx %2  == 1 ? posy-2:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        
        list3.map(item=>{
            if(deplacement && Object.keys(deplacement).length){
                pointproche(item.x,item.y).map(ptproche=>{
                    if(ptproche.x >= 0 && ptproche.x <= 8 && ptproche.y >= 0 && ptproche.y <= 12){
                        if(!grille.grille[ptproche.x][ptproche.y].case){
                            if(calculDistance(ptproche.x,ptproche.y,posx,posy) <= 2.4){
                                list.push(item)
                            }
                    }
                    }
                    
                })
            }else{
                list.push(item)
            }
            
        
        })
    
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

    return VerList(list);
}


function VerList(list){
    let newlist = [];
    list.map(e=>{
        if(e.x >= 0 && e.x <= 8 && e.y >= 0 && e.y <= 12){
            newlist.push(e)
        }     
    })
    return newlist;
}
export function VerificationLineOfSight(x,y,x2,y2,grille){
    let angle0 = [{x:x,y:y-1},{x:x,y:y-2},{x:x,y:y-3},{x:x,y:y-4},{x:x,y:y-5},{x:x,y:y-6}]
    let angle60 = [{x:x-1,y:x%2 == 1 ? y : y-1},{x:x-2,y:y-1},{x:x-3,y:x%2 == 1 ? y-1:y-2},{x:x-4,y:y-2},{x:x-5,y:x%2 == 1 ? y-2:y-3},{x:x-6,y:y-3}]
    let angle120 = [{x:x-1,y:x%2 == 1 ? y+1 : y},{x:x-2,y:y+1},{x:x-3,y:x%2 == 1 ? y+2:y+1},{x:x-4,y:y+2},{x:x-5,y:x%2 == 1 ? y+3:y+2},{x:x-6,y:y+3}]
    let angle180 = [{x:x,y:y+1},{x:x,y:y+2},{x:x,y:y+3},{x:x,y:y+4},{x:x,y:y+5},{x:x,y:y+6}]
    let angle240 = [{x:x+1,y:x%2 == 1 ? y+1 : y},{x:x+2,y:y+1},{x:x+3,y:x%2 == 1 ? y+2:y+1},{x:x+4,y:y+2},{x:x+5,y:x%2 == 1 ? y+3:y+2},{x:x+6,y:y+3}]
    let angle300 = [{x:x+1,y:x%2 == 1 ? y : y-1},{x:x+2,y:y-1},{x:x+3,y:x%2 == 1 ? y-1:y-2},{x:x+4,y:y-2},{x:x+5,y:x%2 == 1 ? y-2:y-3},{x:x+6,y:y-3}]
    let allangle = [angle0,angle60,angle120,angle180,angle240,angle300]

    if(calculDistance(x,y,x2,y2)<2){
        return true;
    }else{
        let cond1 = []
        let cond2 = [];
        allangle.map(beta=>{
            beta.map((alpha,pos)=>{
                if(alpha.x == x2 && alpha.y== y2){
                    cond1 = beta.slice(0,pos);
            }
            }) 
        })

        
       
        if(Object.keys(cond1).length>0){
            let cond = true;
            cond1.map(item=>{
                if(grille.grille[item.x][item.y].case && grille.grille[item.x][item.y].case._lineofsight){
                    cond = false
                } 
                if(grille.grille[item.x][item.y].unité){cond = false}
            })
            return cond;
        }else{
            if(x-x2>=0 && y-y2>=0){
                if(x2%2 == 1){
                    cond2 = [{x:x2+1,y:y2+1},{x:x2,y:y2+1}]
                }else{
                    cond2 = [{x:x2+1,y:y2},{x:x2,y:y2+1}]
                }  
            }else if(x-x2<=0 && y-y2>=0){
                if(x2%2 == 1){
                    cond2 = [{x:x2-1,y:y2+1},{x:x2,y:y2+1}]
                }else{
                    cond2 = [{x:x2-1,y:y2},{x:x2,y:y2+1}]
                }  
            }else if(x-x2 >= 0 && y-y2<=0){
                if(x2%2 == 1){
                    cond2 = [{x:x2,y:y2-1},{x:x2,y:y2+1}]
                }else{
                    cond2 = [{x:x2,y:y2-1},{x:x2+1,y:y2-1}]
                }  
            }else if(x-x2<=0 && y-y2<=0){
                if(x2%2 == 1){
                    cond2 = [{x:x2-1,y:y2},{x:x2,y:y2-1}]
                }else{
                    cond2 = [{x:x2-1,y:y2-1},{x:x2,y:y2-1}]
                } 
            }
            if(x-x2>0 && y == y2){
                if(x2%2 == 1){
                    cond2 = [{x:x2+1,y:y2},{x:x2+1,y:y2+1}]
                }else{
                    cond2 = [{x:x2+1,y:y2-1},{x:x2+1,y:y2}]
                } 
            }
            if(x-x2<0 && y == y2){
                if(x2%2 == 1){
                    cond2 = [{x:x2-1,y:y2},{x:x2-1,y:y2+1}]
                }else{
                    cond2 = [{x:x2-1,y:y2-1},{x:x2-1,y:y2}]
                } 
            }
            if(grille.grille[cond2[0].x][cond2[0].y].unité && 
                grille.grille[cond2[1].x][cond2[1].y].unité  ){
                return false;
            }
            if(grille.grille[cond2[0].x][cond2[0].y].case && 
                grille.grille[cond2[1].x][cond2[1].y].case  ){
                return !((grille.grille[cond2[0].x][cond2[0].y].case._lineofsight && grille.grille[cond2[1].x][cond2[1].y].case._lineofsight)) 
            }
        }

    }
    return VerList(allangle);
}

export function switchResult(unité,Star){
    let ran = Math.floor(Math.random() * 6) + 1
    switch(ran){
        case 1:
            return {result:"Soldat",dice:unité._type == "Soldat"};
        case 2:
            return {result:"Grenade",dice:true};  
        case 3:
            return {result:"Soldat",dice:unité._type == "Soldat"};
        case 4:
            return {result:"Char",dice:unité._type == "Char"};
        case 5:
            return {result:"Flag",dice:false}
        case 6:
            return {result:"Star",dice:Star};
        }
}
export function Dice(nb,unité,setAnimation,Star){
    let animation = new Array(6)
    let LoseLife = 0;
    let nbflag = 0
    for (let index = 0; index < nb; index++) {
        let dice = switchResult(unité,Star);
        if(dice.dice){LoseLife += 1}
        if(dice.result == "Flag"){nbflag += 1}
        animation[index]=dice.result;
        
    }
    setAnimation(animation)
    return {LoseLife:LoseLife,nbflag:nbflag};
}

export function Flag(x,y,nbflag,camp){ 
    //1 pos toucé 2 pos tiré
    let list = []
    let list2 = []
    let list3 = []
    if(camp == "Axis"){
        if(nbflag >= 1){
            list.push({x:x-1,y:x%2==1?y+1:y});
            list.push({x:x-1,y:x%2==1?y:y-1});
        }
        if(nbflag >= 2){
            list2.push({x:x-2,y:y-1});
            list2.push({x:x-2,y:y});
            list2.push({x:x-2,y:y+1});
        }
        if(nbflag >= 3){
            list3.push({x:x-3,y:x%2==1?y-1:y-2});
            list3.push({x:x-3,y:x%2==1?y:y-1});
            list3.push({x:x-3,y:x%2==1?y+1:y});
            list3.push({x:x-3,y:x%2==1?y+2:y+1});
        }
    }else{
        if(nbflag >= 1){
            list.push({x:x+1,y:x%2==1?y+1:y});
            list.push({x:x+1,y:x%2==1?y:y-1});
        }
        if(nbflag >= 2){
            list2.push({x:x+2,y:y-1});
            list2.push({x:x+2,y:y});
            list2.push({x:x+2,y:y+1});
        }
        if(nbflag >= 3){
            list3.push({x:x+3,y:x%2==1?y-1:y-2});
            list3.push({x:x+3,y:x%2==1?y:y-1});
            list3.push({x:x+3,y:x%2==1?y+1:y});
            list3.push({x:x+3,y:x%2==1?y+2:y+1});
        }
    }
    let alllist = [...list,...list2,...list3]
    return {1:VerList(list),2:list2,3:list3,alllist:alllist};
}

// list.push({x:x,y:y})