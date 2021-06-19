import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
  
  this.state ={
    filterNames: '',
    dogNames: [ "Bruno", "Lilo ", "Theo", "Lily Rose", "Willow"]
    };
  }

  handleChange(filter){
    this.setState({filterNames: filter});
  }
  
  render(){
    let namesDisplay = this.state.dogNames.filter((element, index) => {
      return element.includes(this.state.filterNames);
    })
    .map((element, index) => {
      return <h2 key ={ index}> {element}</h2>;
    });
  
    return  (
    <div className="App"> 
    <input onChange={ e=> this.handleChange(e.target.value)} type='text' />
    {namesDisplay}
    </div>
      );
    }
  }

export default App;
