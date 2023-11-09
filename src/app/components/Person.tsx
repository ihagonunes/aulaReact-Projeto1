type Dados = {
    imagem?: string;
    nome?: string;
    funcao?: string;
    empresa?: string;
}

export const Person = ({imagem="https://thumbs.dreamstime.com/b/perfil-de-usu%C3%A1rio-do-vetor-avatar-padr%C3%A3o-179376714.jpg", 
                        nome="nome", funcao="função", empresa="empresa"}: Dados) => {

    return (
        <div className="flex w-1/2 h-64 p-6 m-auto text-black bg-white rounded-md">
            
            <img className="rounded-full w-50 h-50 mr-1"
                src={imagem}
                alt={nome}
            />
            
            <div className="m-auto text-center">
                <h1 className="text-x1 font-bold">{nome}</h1>
                <h2 className="text-sm">{funcao}</h2>
                <h3 className="font-bold">{empresa}</h3>
            </div>
        </div>
    )
}