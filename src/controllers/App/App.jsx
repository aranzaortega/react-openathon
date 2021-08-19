import React, { Component } from 'react';
import { Footer, Header } from '../../components'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="Main">
            Main content
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
