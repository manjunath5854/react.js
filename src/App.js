import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import  React, {Component } from 'react';
import Welcome from './component/welcome';
import Hello from './component/hello'


class App extends Component{
  render(){
    return(
      <div className="App" >
        <Greet  name="manju"  rel="my">
          <p>this is children props</p>
          
        </Greet>
        <Greet  name="lokesh" rel="friend" >
          <button>action</button>
        </Greet>
        <Greet  name="maruti" rel="bestfriend"/>
        <Welcome name="manju "rel="my" />
        <Welcome name="maruti "rel="best friend" />
        <Welcome name="lokesh"rel="friend" ></Welcome>
        <Hello />
      </div>
    );
  }
}


export default App;
