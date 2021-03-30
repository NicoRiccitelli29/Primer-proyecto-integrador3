import Tarjeta from './Tarjetas'

const numeros = [1, 2, 3]

function Main(props){
    return(
       <div class="row row-cols-1 row-cols-md-3 g-4">
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

