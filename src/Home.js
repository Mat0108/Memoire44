import { Link } from "react-router-dom";

const Home = () => {
    return <div className="w-full h-full flex flex-row">
        <div className="w-1/2 flex flex-col gap-2 center text-[18px] text-white">
            <p>Matthieu Barnabé</p>
            <p>matthieubarnab@gmail.com</p>
        </div>
        <div className="w-1/2 flex flex-col gap-2 center text-[18px] text-white">    
            <p> Mes projets :</p>
            <Link to={"/play"} className="p-2 bg-blue2 rounded-full">{"Mon jeu mémoire 44"}</Link>
        </div>
    </div>
}
export default Home;