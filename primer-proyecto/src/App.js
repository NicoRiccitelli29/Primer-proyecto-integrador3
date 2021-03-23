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
      <div className='tarjeta'>
        <h2>Foto:</h2>
        <ul>
          <li>Nombre:</li>
          <li>Apellido:</li>
          <li>Email:</li>
          <li>Fecha de nacimiento (edad):</li>
          
        </ul>
      </div>
      <div className='tarjeta'>
        <h2>Foto:</h2>
        <ul>
          <li>Nombre:</li>
          <li>Apellido:</li>
          <li>Email:</li>
          <li>Fecha de nacimiento (edad):</li>
          
        </ul>
      </div>
      <div className='tarjeta'>
        
        <h2>Foto:</h2>
        <ul>
          <li>Nombre:</li>
          <li>Apellido:</li>
          <li>Email:</li>
          <li>Fecha de nacimiento (edad):</li>
          
        </ul>
        
      </div>
    </main>

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
