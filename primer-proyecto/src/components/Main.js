import Tarjeta from './Tarjetas'

const numeros = [1, 2, 3]

function Main(props){
    return(
       <div>
        {
            numeros.map((unNumero, idx)=>{
                return(
                  <Tarjeta key={idx} numTarjeta={unNumero}/>)
                })
        }
            

        </div> 
    )
}

export default Main
