import Tarjeta from './Tarjetas';
import React, {Component} from "react";



class Main extends Component{
    constructor(){
        super();
        this.state={
            items: [],
        }
    }

    componentDidMount(){
        this.resetDefault();
     }

     resetDefault(){
         fetch('https://randomuser.me/api/?results=21')
        .then(result=>result.json())
        .then(data=>{
            this.setState({items: data.results});
            console.log(data.results);
        })
     }

    render(){
        return(
            <div class="row row-cols-1 row-cols-md-3 g-4">
             {
                 this.state.items.map((persona, idx)=>{
                     return(
                       <Tarjeta key={idx} info={persona}/>)
                     })
             }
                 
     
             </div> 
         )
     };
}

export default Main

