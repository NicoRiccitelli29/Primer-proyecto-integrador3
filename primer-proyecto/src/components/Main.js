import Tarjeta from './Tarjetas';
import React, {Component} from "react";



class Main extends Component{
    constructor(){
        super();
        this.state={
            items: [],
        }
    }

    componentDidMount(){
        this.resetDefault();
     }

     resetDefault(){
         fetch('https://randomuser.me/api/?page=1&results=21&seed=abc') //PREGUNTAR lo de las paginas
        .then(result=>result.json())
        .then(data=>{
            this.setState({items: data.results});
            console.log(data.results);
        })
     }
     Borrar(idTarjeta){
        let resultado = this.state.items.filter((item)=>{
             return item.id !== idTarjeta
         })
         this.setState({items: resultado})
         console.log("Tarjeta a borrar: "+ idTarjeta);
         //Al poner uuid se borran todas. PREGUNTAR
         
 }
    //buscador(){
       // fetch('https://randomuser.me/api/?results=' + resultBuscador )
       // .then(result=>result.json())
       // .then(data=>{
      //          this.setState({items: data.results,});
      //          console.log(data.results);
      //  })
    //}
        

    render(){
        return(
            <div>
             <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Resultados a buscar..." aria-label="Resultados a buscar..." aria-describedby="button-addon2"></input>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>
    
            <div class="row row-cols-1 row-cols-md-3 g-4">

               
             {
                 this.state.items.map((persona, idx)=>{
                     return(
                       <Tarjeta key={idx} info={persona} borrar={this.Borrar.bind(this)}/>)
                     })
             }
                 
     
             </div> 
             </div>
         )
     };
}

export default Main

