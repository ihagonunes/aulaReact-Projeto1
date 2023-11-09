import { Children } from './components/Children';
import {Person} from './components/Person';
import {Card} from './components/Card';

export default function Home(){
  return (

    <>
    <div>
      <Children>
        <h3 className='text-3x1 font-bold italic'>
          Frase de efeito
        </h3>
        <p className='text-right text-sm'>-Autor desconhecido</p>
      
      </Children>
    </div>

    <div className="h-screen flex gap-4 p-10" >
      <Card
        fotoGato="https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg"
        nome="Stalone"
        status="Desaparecido"
      />

      <Card
        fotoGato="https://webtudo.net/wp-content/uploads/2016/05/gatos-engracados4-1.jpg"
        nome="Fuska"
        status="Desaparecido"
        recompensa={200}
      />
    </div>
    </>
    

  )
}