import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();

this.state ={
dogNames: [ "Bruno", "Lilo ", "Theo", "Lily Rose", "Willow"]
  };
}

render(){
  let namesDisplay = this.state.dogNames.map((element, index) => {
    return <h2 key={index}> {element}</h2>;
  });

  return  <div className="App"> {namesDisplay}</div>;
  }
}

export default App;
