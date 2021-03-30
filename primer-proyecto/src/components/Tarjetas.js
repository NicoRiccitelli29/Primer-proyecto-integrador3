
function Tarjeta(props){
    return (
       <div >

       
            <div class="card h-100">         
            <div class="card-body">
                <h5 class="card-title">{props.numTarjeta}</h5>
                <li class="list-group-item">Nombre:</li>
                <li class="list-group-item">Apellido:</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">Fecha de nacimiento:</li>
            </div>
            <div class="card-footer">
                <small class="text-muted">...</small>
            </div>
            </div>
        </div>
    )
}

export default Tarjeta


