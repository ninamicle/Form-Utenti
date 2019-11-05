import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state= {
        data:[]
        

      }
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleSubmit(e){
      e.preventDefault();
      var name = this.refs.name.value;
      var age = this.refs.age.value;
      //console.log(`hai scritto ${name}`)
      this.refs.name.value = '';    
      this.refs.age.value = '';
      let list = this.state.data.slice();
      list.push({name: name, age:age});
      this.setState({data:list});
    }
  render(){
    let listaUtenti = this.state.data.map((utente, index) =>{
      return(
          <li key={index}>{utente.name} {utente.age}</li>
      )
    })
    // let listaEta = this.state.ages.map((age, index) =>{
    //   return(
    //   <li key={index}>{age}</li>
    //   )
    // })
    return(
      
      <div className="w3-section">
        <form className="w3-container" onSubmit={this.handleSubmit}>
          <label><b>Nome e Cognome</b></label>
          <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Inserici il tuo nome e cognome" ref='name' required/>
          <label><b>Anno e data di nascita</b></label>
          <input className="w3-input w3-border w3-margin-bottom" type="date" placeholder="aaaa/mm/gg" ref='age' required/>
          <button className="w3-button w3-block w3-pink w3-section w3-padding" type="submit">Invia</button>
        </form>
        <div className="w3-container">
          <h2>Utenti iscritti:</h2>
          <ul className="w3-ul w3-hoverable">
          <ol>{listaUtenti}</ol>
         </ul>
        </div>
      </div>
      
     
    );
  }
}

export default App;
