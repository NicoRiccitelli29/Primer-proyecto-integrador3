import React from 'react';

import Main from './components/Main'
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


    <h1>Usuarios</h1>



    <div>
        
    
        <Main/>
        

        
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    
    

    <footer >
       {/*<ul>
           <li><a href="https://www.instagram.com" >Instagram </a></li>
            <li><a href="https://www.facebook.com"> Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
       </ul> */}
        <ul>
            <li> <a href="https://www.instagram.com/nico.riccitelli/?hl=es-la"> Nicolás Riccitelli </a></li>
            <li> <a href ="https://www.instagram.com/toto_bongarra/?hl=es-la">Tomas Bongarra </a></li>
            <li><a href = "https://www.instagram.com/demianlazarte/?hl=es-la"> Demián Lazarte </a></li>
        </ul>
  
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  </div>
</React.Fragment>  
  );
}

export default App;
