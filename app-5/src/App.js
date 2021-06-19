import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707-1587661.jpg'} />
      </div>
    );
  }
}

export default App;