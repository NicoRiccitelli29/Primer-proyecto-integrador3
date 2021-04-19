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
    
        

    render(){
        return(
            <div class="row row-cols-1 row-cols-md-3 g-4">
               
             {
                 this.state.items.map((persona, idx)=>{
                     return(
                       <Tarjeta key={idx} info={persona} borrar={this.Borrar.bind(this)}/>)
                     })
             }
                 
     
             </div> 
         )
     };
}

export default Main

