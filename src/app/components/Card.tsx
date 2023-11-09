type Gato = {
    fotoGato? : string;
    nome? : string;
    status? : string;
    recompensa? : number;
}

export const Card = ({fotoGato, nome, status, recompensa} : Gato) => {
    
    if(recompensa){
        return(
            <div className="w-64 h-64 rounded-xl flex flex-col shadow-lg bg-white items-center justify-center text-xl text-black">
                <h1>Nome: {nome}</h1>
                <img className="w-24" src={fotoGato}/>
                <h2>Status: {status}</h2>
                <h2>Recompensa: {recompensa}</h2>
            </div>
        );
    }

    if(!recompensa){
        return(
            <div className="w-64 h-64 rounded-xl flex flex-col shadow-lg bg-white items-center justify-center text-xl text-black">
                <h1>Nome: {nome}</h1>
                <img className="w-24" src={fotoGato}/>
                <h2>Status: {status}</h2>
                <h2>Recompensa: Indefinida{recompensa}</h2>
            </div>
        );
    }
/* EXEMPLO COM CONDIÇÃO TERNÁRIA
        return(
            <div className="w-64 h-64 rounded-xl flex flex-col shadow-lg bg-white items-center justify-center text-xl">
                <h1>Nome: {nome}</h1>
                <img className="w-24" src={fotoGato}/>
                <h2>Status: {status}</h2>
                <h2>Recompensa:{recompensa? recompensa :"Indefinido"}</h2>
            </div>
        );    
*/
}