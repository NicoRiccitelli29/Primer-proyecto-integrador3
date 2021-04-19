import React, {Component} from 'react';

class Tarjeta extends Component{
   constructor(props){
       super(props);
       this.state = {

       }
   }
   borrarItem(){
    this.props.borrar(this.props.info.id)

}
       
   
    render(){
        return (
            <div >                 
                 <div class="card h-100">      
                 <div class="card-body">
                     <img src={this.props.info.picture.large} alt=""/>
                     <button type="button" className="btn btn-danger" onClick={this.borrarItem.bind(this, this.props.id)}> <b>X</b>  </button>
                     <br/>
                     <br/>
                     <li class="list-group-item">Nombre: {this.props.info.name.first}</li>
                     <li class="list-group-item">Apellido: {this.props.info.name.last}</li>
                     <li class="list-group-item">Email:  {this.props.info.email}</li>
                     <li class="list-group-item">Fecha de nacimiento:  {this.props.info.dob.date} ({this.props.info.dob.age} años)</li>
                     <br></br>
                     
                    
                        <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Ver detalle </button>
                             <ul class="dropdown-menu">
                                <li class="dropdown-item" > <b>Calle y numero: </b> {this.props.info.location.street.name}, {this.props.info.location.street.number}</li>
                                <li class="dropdown-item" > <b>Ciudad / Estado: </b> {this.props.info.location.city} / {this.props.info.location.state} </li>
                                <li class="dropdown-item" > <b>País: </b> {this.props.info.location.country}</li>
                                <li class="dropdown-item">  <b>Codigo Postal: </b>{this.props.info.location.postcode}</li>
                                <li class="dropdown-item" > <b>Fecha de Registro: </b>{this.props.info.registered.date}</li>
                                <li class="dropdown-item" > <b>Telefono: </b>{this.props.info.phone}</li>  
                            </ul>
                    </div>

                 </div>
                 
                 </div>
                 
            
         )
     };
    }
    

export default Tarjeta


