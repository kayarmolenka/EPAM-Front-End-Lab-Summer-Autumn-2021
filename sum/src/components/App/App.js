import { Component } from 'react';
import Button from '../Button/Button';
import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    
  }

  onAddField(e) {
    console.log(e)
  }

  render() {
    return (
      <div className="App">
        <Button onAddField={this.onAddField}/>
      </div> 
    )
  }
}

