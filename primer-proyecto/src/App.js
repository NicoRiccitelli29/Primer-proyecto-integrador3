import React from 'react';
import Tarjeta from './components/Tarjetas'



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

        <Tarjeta /> {/*Tarjeta Nro1 debemos hacer varias */}

        <Tarjeta />

        <Tarjeta/>

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
