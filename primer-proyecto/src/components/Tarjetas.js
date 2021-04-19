import React, {Component} from 'react';

class Tarjeta extends Component{
   constructor(props){
       super(props);
       this.state = {

       }
   }
    render(){
        return (
            <div >                 
                 <div class="card h-100">         
                 <div class="card-body">
                     <img src={this.props.info.picture.large} alt=""/>
                     <br/>
                     <br/>
                     <li class="list-group-item">Nombre: {this.props.info.name.first}</li>
                     <li class="list-group-item">Apellido: {this.props.info.name.last}</li>
                     <li class="list-group-item">Email:  {this.props.info.email}</li>
                     <li class="list-group-item">Fecha de nacimiento:  {this.props.info.dob.date} ({this.props.info.dob.age} años)</li>
                 </div>
                 <div class="card-footer">
                     <small class="text-muted">...</small>
                 </div>
                 </div>
             </div>
         )
     };
    }
    

export default Tarjeta


