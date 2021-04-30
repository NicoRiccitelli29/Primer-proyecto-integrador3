import React, {Component} from 'react';

class Tarjeta extends Component{
   constructor(props){
       super(props);
       this.state = {
        colorFondo: this.props.color
       }
   }
   borrarItem(){
    this.props.borrar(this.props.info.login.uuid)

}
    cambiarColor(color){
        this.setState({
            colorFondo: color,
        })
        console.log("Cambiamos el color por " + color);
    }
       
  // moverItem(){
    //   this.props.mover(this.props.info.uuid)
   //}
    render(){
        return (
            <div >                 
                 <div className="card h-100">      
                 <div className="card-body" style={{backgroundColor: this.state.colorFondo}}
                 onMouseEnter={() => this.cambiarColor("#D3D3D3")}
                 onMouseLeave={() => this.cambiarColor("white")}
                 //onFocus ={()=> this.moverItem.bind(this, this.props.info.login.uuid)}
                 >
                     <img src={this.props.info.picture.large} alt=""/>
                     <button type="button" className="btn btn-danger" onClick={this.borrarItem.bind(this, this.props.info.login.uuid)}> <b>X</b>  </button>
                     <br/>
                     <br/>
                     <li className="list-group-item" >Nombre: {this.props.info.name.first}</li>
                     <li className="list-group-item">Apellido: {this.props.info.name.last}</li>
                     <li className="list-group-item">Email:  {this.props.info.email}</li>
                     <li className="list-group-item">Fecha de nacimiento:  {this.props.info.dob.date} ({this.props.info.dob.age} años)</li>
                     <br></br>
                     
                    
                        <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Ver detalle </button>
                             <ul class="dropdown-menu">
                                <li className="dropdown-item" > <b>Calle y numero: </b> {this.props.info.location.street.name}, {this.props.info.location.street.number}</li>
                                <li className="dropdown-item" > <b>Ciudad / Estado: </b> {this.props.info.location.city} / {this.props.info.location.state} </li>
                                <li className="dropdown-item" > <b>País: </b> {this.props.info.location.country}</li>
                                <li className="dropdown-item">  <b>Codigo Postal: </b>{this.props.info.location.postcode}</li>
                                <li className="dropdown-item" > <b>Fecha de Registro: </b>{this.props.info.registered.date}</li>
                                <li className="dropdown-item" > <b>Telefono: </b>{this.props.info.phone}</li>  
                            </ul>
                    </div>

                 </div>
                 
                 </div>
                 
            
         )
     };
    }
    

export default Tarjeta


