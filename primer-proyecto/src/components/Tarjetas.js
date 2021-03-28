
function Tarjeta(props){
    return (
        <div class="col">
            <div class="card h-100">
            <img src="../public/img/book.jpeg" class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">{props.numTarjeta.Tarjeta}</h5>
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