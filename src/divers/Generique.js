import React from "react";
import { jkstraPathFinding } from "../PathFinding/jkstraPathFinding";
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
            
        if(this._nombre === 4){ 
            return (
            <div className="flex  w-full">
                <div className={`absolute ${this._type === "Tank"?"top-2":"top-0"} w-full`}>
                    <div className="flex flex-row center">
                        {elem}
                        {elem}
                    </div>
                </div>
                <div className={`absolute ${this._type === "Tank"?"top-11":"top-9"}  z-[40]`}>
                    <div className="flex flex-row center">                    
                        {elem}
                        {elem}
                    </div>
                </div>
            </div>)
        }
        if(this._nombre === 3){
                        
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
        if(this._nombre === 2){
                        
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
        if(this._nombre === 1){
                        
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
    constructor(image,orientation,malus,deplacmentmax,ignoreflag,lineofsight,byentering,imageexplicatif,hover,className,isUpperCase ) {
        this._orientation = orientation;
        this._image = image;
        this._malus = malus ? malus :null;
        this._deplacmentmax = deplacmentmax ? deplacmentmax : null;
        this._ignoreflag = ignoreflag ? ignoreflag : null;
        this._lineofsight = lineofsight ? lineofsight : false;
        this._byentering = byentering ? byentering : null;
        this._imageexplicatif = imageexplicatif ? imageexplicatif : null;
        this._hover = hover ? hover : null;
        this._className = className ? className : null; 
        this._isUpperCase = isUpperCase ? isUpperCase : false;

    }

    render(){
        return <div onMouseEnter={()=>this._hover ? this._hover({card:this._imageexplicatif,showing:true}):""} onMouseLeave={()=>this._hover ? this._hover({card:"",showing:false}):""} ><img src={this._image} alt={"Case"} className={this._className}/></div>
    }
}

export class CardGenerique {
    // {card:"",img:"",nbunit:1,zone:2,type:"ALL",showing:false}
    constructor(titre,image,nbunit,zone,type,type2,ignoreterrain,countstar,extradice){
        this._titre = titre;
        this._image = image;
        this._nbunit = nbunit ? nbunit : "ALL";
        this._zone = zone ? zone : "ALL";
        this._type = type ? type : "ALL";
        this._type = type2 ? type2 : type ? type:"ALL";
        this._ignoreterrain = ignoreterrain ? ignoreterrain : false;
        this._countstar = countstar ? countstar : false;
        this._extradice = extradice ? extradice : false; 
        
    }

} 
export function test6(path,name,orientation){
    return `images/${path}/${orientation === 6 ? `${name}6`:orientation === 5 ? `${name}5` : orientation === 4 ?
    `${name}4`:orientation === 3 ? `${name}3`:orientation === 2 ? `${name}2`:`${name}1`}.png`
}
export function test4(path,name,orientation){
    return `images/${path}/${orientation === 4 ? `${name}4`:orientation === 3 ? `${name}3`:orientation === 2 ? `${name}2` : `${name}1`}.png`
}
export function test3(path,name,orientation){
    return `images/${path}/${orientation === 3 ? `${name}3`:orientation === 2 ? `${name}2` : `${name}1`}.png`
}
export function test2(path,name,orientation){
    return `images/${path}/${orientation === 2 ? `${name}2` : `${name}1`}.png`
}
export function calculDistance(x,y,x2,y2){
    return Math.abs(Math.sqrt(Math.pow(x-x2,2)+Math.pow(y-y2,2)))
}
export function pointproche(x,y){
    return VerList([
        {x:x-1,y: x %2  === 1 ? y : y-1},
        {x:x+1,y: x %2  === 1 ? y : y-1},
        {x:x,y:y-1},
        {x:x,y:y+1},
        {x:x-1,y:x %2  === 1 ? y+1:y},
        {x:x+1,y:x %2  === 1 ? y+1:y}
    ])
}
export function isCombatRapproche(x,y,x2,y2){
    let list = pointproche(x,y);
    let cond = false;
    list.forEach(item=>{
        if(item.x === x2 && item.y === y2){
            cond = true;
        }
    })
    return cond;
}

export function showPortee(grille,portée,posx,posy,dés,deplacement,pathFinding){
    
    let list = [
        {x:posx-1,y: posx %2  === 1 ? posy : posy-1,dés: dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie haut gauche
        {x:posx-1,y:posx %2  === 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie haute droite
        {x:posx,y:posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie gauche
        {x:posx,y:posy+1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie droite 
        {x:posx+1,y: posx %2  === 1 ? posy : posy-1,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie bas gauche
        {x:posx+1,y:posx %2  === 1 ? posy+1:posy,dés:dés ? dés[0] : 0,deplacement:deplacement ? deplacement[0]:null}, //partie bas droite
    ]
    function betterPush(x,y,nb,local){
        let locallist = local ? local : list;
        locallist.push({x:x,y:y,dés:dés ? dés[nb]:null,deplacement:deplacement ? deplacement[nb]:null})
    }
    if(portée >= 2){        
        betterPush(posx-2,posy,1);
        betterPush(posx-2,posy-1,1);
        betterPush(posx-2,posy+1,1); //partie gauche du cercle

        betterPush(posx-1,posx %2  === 1 ? posy-1:posy-2,1); //partie haute et bas du cercle
        betterPush(posx+1,posx %2  === 1 ? posy-1:posy-2,1);
        betterPush(posx,posy-2,1);
        betterPush(posx,posy+2,1);
        betterPush(posx-1,posx %2  === 1 ? posy+2:posy+1,1);
        betterPush(posx+1,posx %2  === 1 ? posy+2:posy+1,1);
        
        betterPush(posx+2,posy,1); //partie droite du cercle
        betterPush(posx+2,posy-1,1);
        betterPush(posx+2,posy+1,1);

    }
    if(portée >= 3){
        list.push({x:posx-3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie gauche du cercle
        list.push({x:posx-3,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-3,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-3,y:posx %2  === 1 ? posy+2 : posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});


        list.push({x:posx-2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx-2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+2,y:posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+2,y:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        list.push({x:posx+3,y:posy,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null}); //partie droite du cercle
        list.push({x:posx+3,y:posy-1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+3,y:posy+1,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+3,y:posx %2  === 1 ? posy+2 :posy-2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        

        list.push({x:posx-1,y:posx %2  === 1 ? posy+3:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx,y:posy+3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+1,y:posx %2  === 1 ? posy+3:posy+2,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});

        list.push({x:posx-1,y:posx %2  === 1 ? posy-2:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx,y:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        list.push({x:posx+1,y:posx %2  === 1 ? posy-2:posy-3,dés:dés ? dés[2] : 0,deplacement:deplacement ? deplacement[2]:null});
        
        
        // list3.forEach(item=>{
        //     if(deplacement && Object.keys(deplacement).length){
        //         pointproche(item.x,item.y).forEach(ptproche=>{
        //             if(ptproche.x >= 0 && ptproche.x <= 8 && ptproche.y >= 0 && ptproche.y <= 12){
        //                 if(!grille.grille[ptproche.x][ptproche.y].case){
        //                     if(calculDistance(ptproche.x,ptproche.y,posx,posy) <= (deplacement === 3 ? 2.4 : 2) && VerificationLineOfSight(ptproche.x,ptproche.y,posx,posy,grille)){
        //                         list.push(item)
        //                     }
        //             }
        //             }
                    
        //         })
        //     }else{
        //         list.push(item)
        //     }
            
        
        // })
    
    }
    if(portée >=4){
        betterPush(posx-4,posy,3);//partie gauche du cercle
        betterPush(posx-4,posy-1,3);
        betterPush(posx-4,posy+1,3);
        betterPush(posx-4,posy-2,3);
        betterPush(posx-4,posy+2,3);

        betterPush(posx-3,posx%2===1 ?posy-2:posy-3,3);
        betterPush(posx-3,posx%2===1 ?posy+3:posy+2,3);

        betterPush(posx+4,posy,3); //partie droite du cercle
        betterPush(posx+4,posy-1,3);
        betterPush(posx+4,posy+1,3);
        betterPush(posx+4,posy-2,3);
        betterPush(posx+4,posy+2,3);

        betterPush(posx+3,posx%2===1 ?posy-2:posy-3,3);
        betterPush(posx+3,posx%2===1 ?posy+3:posy+2,3);

        betterPush(posx-2,posy+3,3); //partie haute du cercle
        betterPush(posx-1,posx%2===1 ?posy+4:posy+3,3);
        betterPush(posx,posy+4,3);
        betterPush(posx+1,posx%2===1 ?posy+4:posy+3,3);
        betterPush(posx+2,posy+3,3);

        betterPush(posx-2,posy-3,3); //partie basse du cercle
        betterPush(posx-1,posx%2===1 ?posy-3:posy-4,3);
        betterPush(posx,posy-4,3);
        betterPush(posx+1,posx%2===1 ?posy-3:posy-4,3);
        betterPush(posx+2,posy-3,3);
    }
    if(portée >=5){
        betterPush(posx-4,posy,4);   
        betterPush(posx-4,posy-1,4); 
        betterPush(posx-4,posy+1,4); 
        betterPush(posx-4,posy-2,4);
        betterPush(posx-4,posy+2,4); 
        betterPush(posx-4,posy-3,4); 
        betterPush(posx-4,posy+3,4);

        betterPush(posx+4,posy,4);  
        betterPush(posx+4,posy-1,4); 
        betterPush(posx+4,posy+1,4); 
        betterPush(posx+4,posy-2,4);
        betterPush(posx+4,posy+2,4); 
        betterPush(posx+4,posy-3,4); 
        betterPush(posx+4,posy+3,4);

        betterPush(posx,posy-5,4);
        betterPush(posx-1,posx%2===1 ?posy-4:posy-5,4);
        betterPush(posx+1,posx%2===1 ?posy-4:posy-5,4);
        betterPush(posx-2,posy-4,4);
        betterPush(posx+2,posy-4,4);
        betterPush(posx-3,posx%2===1 ?posy-3:posy-4,4);
        betterPush(posx+3,posx%2===1 ?posy-3:posy-4,4);
        
        betterPush(posx,posy+5,4);
        betterPush(posx-1,posx%2===1 ?posy+5:posy+4,4);
        betterPush(posx+1,posx%2===1 ?posy+5:posy+4,4);
        betterPush(posx-2,posy+4,4);
        betterPush(posx+2,posy+4,4);
        betterPush(posx-3,posx%2===1 ?posy+4:posy+3,4);
        betterPush(posx+3,posx%2===1 ?posy+4:posy+3,4);
    }
    if(portée >=6){
        betterPush(posx-5,posy,5);   
        betterPush(posx-5,posy-1,5); 
        betterPush(posx-5,posy+1,5); 
        betterPush(posx-5,posy-2,5);
        betterPush(posx-5,posy+2,5); 
        betterPush(posx-5,posy-3,5); 
        betterPush(posx-5,posy+3,5); 
        betterPush(posx-5,posx%2===1 ?posy+4:posy-4,5); 
        
        betterPush(posx+5,posy,5);   
        betterPush(posx+5,posy-1,5); 
        betterPush(posx+5,posy+1,5); 
        betterPush(posx+5,posy-2,5);
        betterPush(posx+5,posy+2,5); 
        betterPush(posx+5,posy-3,5); 
        betterPush(posx+5,posy+3,5); 
        betterPush(posx+5,posx%2===1 ?posy+4:posy-4,5); 

        betterPush(posx,posy-6,5);
        betterPush(posx-1,posx%2===1 ?posy-5:posy-6,5);
        betterPush(posx+1,posx%2===1 ?posy-5:posy-6,5);
        betterPush(posx-2,posy-5,5);
        betterPush(posx+2,posy-5,5);
        betterPush(posx-3,posx%2===1 ?posy-4:posy-5,5);
        betterPush(posx+3,posx%2===1 ?posy-4:posy-5,5);
        betterPush(posx-4,posy-4,5);
        betterPush(posx+4,posy-4,5);

        betterPush(posx,posy+6,5);
        betterPush(posx-1,posx%2===1 ?posy+6:posy+5,5);
        betterPush(posx+1,posx%2===1 ?posy+6:posy+5,5);
        betterPush(posx-2,posy+5,5);
        betterPush(posx+2,posy+5,5);
        betterPush(posx-3,posx%2===1 ?posy+5:posy+4,5);
        betterPush(posx+3,posx%2===1 ?posy+5:posy+4,5);
        betterPush(posx-4,posy+4,5);
        betterPush(posx+4,posy+4,5);
    }
    if(!pathFinding){return VerList(list)}
    
    let list2 = []
    VerList(list).forEach(item=>{
        
        let path = jkstraPathFinding(grille.grille,{x:posx,y:posy},item)
        if(path !== null && path.length <= portée){
            list2.push(item)
        }
    }) 
    return VerList(list2);
}


export function VerList(list){
    let newlist = [];
    list.forEach(e=>{
        if(e.x >= 0 && e.x <= 8 && e.y >= 0 && e.y <=(e.x % 2 === 1 ?  11 : 12)){
            newlist.push(e)
        }     
    })
    return newlist;
}
export function VerificationLineOfSight(x,y,x2,y2,grille){
    let angle0 = [{x:x,y:y-1},{x:x,y:y-2},{x:x,y:y-3},{x:x,y:y-4},{x:x,y:y-5},{x:x,y:y-6}]
    let angle60 = [{x:x-1,y:x%2 === 1 ? y : y-1},{x:x-2,y:y-1},{x:x-3,y:x%2 === 1 ? y-1:y-2},{x:x-4,y:y-2},{x:x-5,y:x%2 === 1 ? y-2:y-3},{x:x-6,y:y-3}]
    let angle120 = [{x:x-1,y:x%2 === 1 ? y+1 : y},{x:x-2,y:y+1},{x:x-3,y:x%2 === 1 ? y+2:y+1},{x:x-4,y:y+2},{x:x-5,y:x%2 === 1 ? y+3:y+2},{x:x-6,y:y+3}]
    let angle180 = [{x:x,y:y+1},{x:x,y:y+2},{x:x,y:y+3},{x:x,y:y+4},{x:x,y:y+5},{x:x,y:y+6}]
    let angle240 = [{x:x+1,y:x%2 === 1 ? y+1 : y},{x:x+2,y:y+1},{x:x+3,y:x%2 === 1 ? y+2:y+1},{x:x+4,y:y+2},{x:x+5,y:x%2 === 1 ? y+3:y+2},{x:x+6,y:y+3}]
    let angle300 = [{x:x+1,y:x%2 === 1 ? y : y-1},{x:x+2,y:y-1},{x:x+3,y:x%2 === 1 ? y-1:y-2},{x:x+4,y:y-2},{x:x+5,y:x%2 === 1 ? y-2:y-3},{x:x+6,y:y-3}]
    let allangle = [angle0,angle60,angle120,angle180,angle240,angle300]
    
    let cond = false
    pointproche(x,y).forEach(item=>{
        if(item.x === x2 && item.y === y2){
            cond = true;
        }
    })
    if(cond){return true}
    let cond1 = []
    let cond2 = [];
    allangle.forEach(beta=>{
        beta.forEach((alpha,pos)=>{
            if(alpha.x === x2 && alpha.y === y2){
                cond1 = beta.slice(0,pos);
        }
        }) 
    })
    
    if(Object.keys(cond1).length>0){
        let cond = true;
        cond1.forEach(item=>{
            if((grille.grille[item.x][item.y].case && grille.grille[item.x][item.y].case._lineofsight) || grille.grille[item.x][item.y].unité){
                cond = false
            } 
        })
        return cond;
    }else{
        
        if(x-x2>=0 && y-y2>=0){
            if(x2%2 === 1){
                cond2 = [{x:x2+1,y:y2+1},{x:x2+1,y:y2}]
            }else{
                cond2 = [{x:x2+1,y:y2},{x:x2,y:y2+1}]
            }  
        }else if(x-x2<=0 && y-y2>=0){
            if(x2%2 === 1){
                cond2 = [{x:x2-1,y:y2+1},{x:x2,y:y2+1}]
            }else{
                cond2 = [{x:x2-1,y:y2},{x:x2,y:y2+1}]
            }  
        }else if(x-x2 >= 0 && y-y2<=0){
            if(x2%2 === 1){
                cond2 = [{x:x2,y:y2-1},{x:x2+1,y:y2}]
            }else{
                cond2 = [{x:x2,y:y2-1},{x:x2+1,y:y2-1}]
            }  
        }else if(x-x2<=0 && y-y2<=0){
            if(x2%2 === 1){
                cond2 = [{x:x2-1,y:y2},{x:x2,y:y2-1}]
            }else{
                cond2 = [{x:x2-1,y:y2-1},{x:x2,y:y2-1}]
            } 
        }
        if(x-x2>0 && y === y2){
            if(x2%2 === 1){
                cond2 = [{x:x2+1,y:y2},{x:x2+1,y:y2+1}]
            }else{
                cond2 = [{x:x2+1,y:y2-1},{x:x2+1,y:y2}]
            } 
        }
        if(x-x2<0 && y === y2){
            if(x2%2 === 1){
                cond2 = [{x:x2-1,y:y2},{x:x2-1,y:y2+1}]
            }else{
                cond2 = [{x:x2-1,y:y2-1},{x:x2-1,y:y2}]
            } 
        }
        
        let case1 = grille.grille[cond2[0].x][cond2[0].y]
        let blockedbycase1 = (case1 && case1.case && case1.case._lineofsight ) || (case1 && !!case1.unité);
        let case2 = grille.grille[cond2[1].x][cond2[1].y]
        let blockedbycase2 = (case2 && case2.case && case2.case._lineofsight ) || (case2 && !!case2.unité);

        if(blockedbycase1 && blockedbycase2){
            return false
        }else{
            return true
        }

    

    }
    
}

export function switchResult(unité,Star,Grenade){
    let ran = Math.floor(Math.random() * 6) + 1
    switch(ran){
        case 1:
            return {result:"Soldat",dice:unité._type === "Soldat"};
        case 2:
            return {result:"Grenade",dice:Grenade};  
        case 3:
            return {result:"Soldat",dice:unité._type === "Soldat"};
        case 4:
            return {result:"Tank",dice:unité._type === "Tank"};
        case 5:
            return {result:"Flag",dice:false}
        case 6:
            return {result:"Star",dice:Star};
        default:
            return {result:"Soldat",dice:unité._type === "Soldat"};    
    }
}
export function Dice(nb,unité,setAnimation,Star,Grenade){
    let animation = new Array(6)
    let LoseLife = 0;
    let nbflag = 0
    for (let index = 0; index < nb; index++) {
        let dice = switchResult(unité,Star,Grenade);
        if(dice.dice){LoseLife += 1}
        if(dice.result === "Flag"){nbflag += 1}
        animation[index]=dice.result;
        
    }
    setAnimation(animation)
    return {LoseLife:LoseLife,nbflag:nbflag};
}

export function Flag(x,y,nbflag,camp){ 
    //1 pos toucé 2 pos tiré
    let list = []
    if(camp === "Axis"){
        if(nbflag >= 1){
            list.push({x:x-1,y:x%2===1 ?y+1:y,flag:1});
            list.push({x:x-1,y:x%2===1 ?y:y-1,flag:1});
        }
        if(nbflag >= 2){
            list.push({x:x-2,y:y-1,flag:2});
            list.push({x:x-2,y:y,flag:2});
            list.push({x:x-2,y:y+1,flag:2});
        }
        if(nbflag >= 3){
            list.push({x:x-3,y:x%2===1 ?y-1:y-2,flag:3});
            list.push({x:x-3,y:x%2===1 ?y:y-1,flag:3});
            list.push({x:x-3,y:x%2===1 ?y+1:y,flag:3});
            list.push({x:x-3,y:x%2===1 ?y+2:y+1,flag:3});
        }
    }else{
        if(nbflag >= 1){
            list.push({x:x+1,y:x%2===1 ?y+1:y,flag:1});
            list.push({x:x+1,y:x%2===1 ?y:y-1,flag:1});
        }
        if(nbflag >= 2){
            list.push({x:x+2,y:y-1,flag:2});
            list.push({x:x+2,y:y,flag:2});
            list.push({x:x+2,y:y+1,flag:2});
        }
        if(nbflag >= 3){
            list.push({x:x+3,y:x%2===1 ?y-1:y-2,flag:3});
            list.push({x:x+3,y:x%2===1 ?y:y-1,flag:3});
            list.push({x:x+3,y:x%2===1 ?y+1:y,flag:3});
            list.push({x:x+3,y:x%2===1 ?y+2:y+1,flag:3});
        }
    }
    return VerList(list)
}

// list.push({x:x,y:y})

export function LogList(list){
    let list2 = [...list]
    list2.sort((a, b) => {
        if (a.x === b.x) {
            return a.y - b.y;
        }
        return a.x - b.x;
    });
    console.log(list2)
}