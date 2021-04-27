import Tarjeta from './Tarjetas';
import React, {Component} from "react";



class Main extends Component{
    constructor(){
        super();
        this.state={
            items: [],
            itemsNuevos:0,
            contador:0,
        }
    }

    componentDidMount(){
        this.resetDefault();
     }

     resetDefault(){
         fetch('https://randomuser.me/api/?page=1&results=10') //PREGUNTAR lo de las paginas
        .then(result=>result.json())
        .then(data=>{
            this.setState({items: data.results, contador : 0});
            console.log(data.results);
        })
     }
     Borrar(idTarjeta){
        let resultado = this.state.items.filter((item)=>{
             return item.login.uuid !== idTarjeta
         })
         this.setState({contador: this.state.contador +1 ,items: resultado})
         console.log("Tarjeta a borrar: "+ idTarjeta);
         //Al poner uuid se borran todas. PREGUNTAR
         
 }
   agregarTarjetas(){
       console.log(this.state.cantidadItemsNuevos)
      fetch('https://randomuser.me/api/?results=' + this.state.cantidadItemsNuevos)
       .then(result=>result.json())
       .then(data=>{
               data.results.map((resultado)=>{
                return  this.state.items.push(resultado)
            })
            this.setState({items: this.state.items});
               console.log(data.results);
        })
    }
    filtrarTarjetas(nombreBuscado){
        let filtroTarjetas = document.querySelector(".filtro").value.toUpperCase()
        console.log(filtroTarjetas);
        let buscar = this.state.items.filter((search)=>{
           let nombre = search.name.first.toUpperCase()
           let apellido = search.name.last.toUpperCase()
           let edad = search.dob.age.toString() 
           return nombre.includes(filtroTarjetas) || apellido.includes(filtroTarjetas) || edad.includes(filtroTarjetas)
        })
        this.setState({
            items : buscar
        }
        )

      //  console.log(this.state.nombreBuscado);
        //let busquedaNombre = this.state.items.filter((item)=>{
          //  return item.name.first === nombreBuscado
        //})
        //this.setState({items: busquedaNombre})
    }

    render(){
        return(
            <div>
             <div class="input-group mb-3">
            <input onChange={(event) => this.setState({cantidadItemsNuevos: event.target.value})}  class="form-control" placeholder="Agregar resultados..." aria-label="Resultados a buscar..." aria-describedby="button-addon2"></input>
            <button  onClick={this.agregarTarjetas.bind(this)} class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>
            <div class="input-group mb-3">
            <input onChange={this.filtrarTarjetas.bind(this)}  className="filtro" placeholder="Buscar..." aria-label="Nombre a buscar..." aria-describedby="button-addon3"></input>
            <button  onClick={this.filtrarTarjetas.bind(this)} class="btn btn-outline-secondary" type="button" id="button-addon3">Buscar</button>
            </div>
            <div>
                <button className="botonReset" onClick={this.resetDefault.bind(this)}> <b>Reset</b></button>
            </div>
           
            <div className= "contador">
                Tajetas eliminadas : {this.state.contador}
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

