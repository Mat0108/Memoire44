import { Link } from "react-router-dom";
import { getW } from "./tailwindUtils";

const Progress = () => {
    const progress = [
        {
            type:"gestion simple du jeu",
            name:'gestion de la map',
            description:"generation de la grille, gestion des hexagones basiques, placement des unités basiques ",
            progress:"100",
        },
        {
            type:"gestion simple du jeu",
            name:"gestion basique d'une unité",
            description:"gestion du deplacement ainsi que l'attaque d'une unité",
            progress:"100",
        },
        {
            type:"gestion simple du jeu",
            name:'gestion des differents cartes de commandements basique',
            description:"gestion du nombre d'unité selectionnée, gestion secteur",
            progress:"100",
        },
        {
            type:"gestion simple du jeu",
            name:'gestion des differents cartes de commandements complexe',
            description:"gestion des cas spéciaux",
            progress:"80",
        },
        {
            type:"gestion des hexagones",
            name:'gestion des hexagones complexes',
            description:"gestion des hexagones complexes, regles speciale de deplacment et de combat",
            progress:"75",
        },
        {
            type:"gestion des hexagones",
            name:"ajout de l'environnement hiver",
            description:"ajout des hexagones ",
            progress:"60",
        },
        {
            type:"gestion des hexagones",
            name:"ajout de l'environnement desert",
            description:"ajout des hexagones ",
            progress:"25",
        },
        {
            type:"gestion des hexagones",
            name:"ajout de l'environnement pacifique",
            description:"ajout des hexagones ",
            progress:"0",
        },
        {
            type:"gestion des hexagones",
            name:"ajout de l'environnement océan",
            description:"ajout des hexagones ",
            progress:"0",
        },
        {
            type:"gestion des unités",
            name:"ajout des unités spéciales ",
            description:"ajout des unités d'elite de chaque camp ",
            progress:"50",
        },
        {
            type:"gestion des unités",
            name:"gestion des unités de l'equipement pack",
            description:"",
            progress:"0",
        },
        {
            type:"Ajout des scénarios",
            name:"ajout des scénarios classique",
            description:"",
            progress:"20",
        },
        {
            type:"Ajout des scénarios",
            name:"ajout des scénarios hiver",
            description:"",
            progress:"0",
        },
        {
            type:"Ajout des scénarios",
            name:"ajout des scénarios desert",
            description:"",
            progress:"0",
        },
        {
            type:"Ajout des scénarios",
            name:"ajout des scénarios pacifique",
            description:"",
            progress:"0",
        },
        {
            type:"Ajout des scénarios",
            name:"ajout des scénarios océan",
            description:"",
            progress:"0",
        },
        {
            type:"divers",
            name:"meilleur gestion de sauvegarde d'un scenario ",
            description:"",
            progress:"0",
        },
        {
            type:"divers",
            name:"modification temporaire d'un scenario ",
            description:"",
            progress:"0",
        },
        {
            type:"divers",
            name:"gestion d'une campagne ",
            description:"",
            progress:"0",
        }
    ]

    return (
        <div className="w-screen h-screen flex flex-col bg-gray-dark relative  pt-2 ">
            <div className="absolute top-2 left-1"><Link to={`/play`} className="w-fit h-fit  py-1 px-3 rounded-full text-white bg-green text-3xl text-center">{"←"}</Link> </div>
            
            <div className="h-fit mt-[10px] py-1 px-5 rounded-xl text-white text-2xl text-center  pt-10 ">Progression du dévellopement</div>
            <div className="w-full flex flex-col justify-center bg-gray-dark pb-4">
                {progress.map((item,pos)=>{
                    return <div className={`w-[80%] flex flex-col pl-[10%]`} key={`progress-${pos}`}>
                        {pos === 0 ? <div className="text-white mt-5 font-bold">{item.type}</div>:progress[pos-1].type === progress[pos].type ? "":<div className="font-bold text-white mt-5">{item.type}</div> }
                        <div className={"ml-[5%] text-white mt-2"}>{item.name}</div>
                        {item.description !== "" ? <div className={"ml-[5%] text-white mt-1 "}>description : {item.description}</div>:""}
                        <div className={"h-6 ml-[5%] mt-2 bg-gray-silver rounded-full relative"}>
                            {item.progress !== "0"?<div className={`h-6 bg-green rounded-xl ${getW(parseInt(item.progress),true)}`} ></div> :""}
                            <div className={`absolute text-white text-lg px-2 ${item.progress !== "0" ? "mt-[-24px]" :"mt-[-4px]" }`}>{item.progress}%</div>
                        </div>
                        
                    </div>
                })}
            </div>
        </div>
    )

}

export default Progress;