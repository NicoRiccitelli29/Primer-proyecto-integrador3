import React from 'react';
function App() {
  return (
<React.Fragment>
  <div className="App">
    <header>
      <section class=" uk-container uk-container-large">
        <div class="">
            <nav class="" uk-navbar>
                <div class="uk-navbar-left">
                    <h1>DNT App</h1>
                </div>
              </nav>  
        </div>
      </section> 
    </header> 
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <h1>Tarjetas</h1>

    <main>
    
    </main>

    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">

        <div class="col">
            <div class="card h-100">
            <img src="../public/img/book.jpeg" class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Tarjeta 1</h5>
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

        <div class="col">
            <div class="card h-100">
            <img src="../public/img/book.jpeg" class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Tarjeta 2</h5>
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

        <div class="col">
            <div class="card h-100">
            <img src="../public/img/book.jpeg" class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Tarjeta 3</h5>
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

        </div>
</div>

    

    <footer >
       {/*<ul>
           <li><a href="https://www.instagram.com"> Instagram</a></li>
            <li><a href="https://www.facebook.com"> Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
       </ul> */}
        <ul>
            <li>Nicolás Riccitelli</li>
            <li>Tomas Bongarra</li>
            <li>Demián Lazarte</li>
        </ul>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    </footer>
  </div>
</React.Fragment>  
  );
}

export default App;
