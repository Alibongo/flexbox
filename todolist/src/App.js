import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './List.js';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    value: '',
    items: [{text: "", isCompleted: false}]
  }
}
// change state value
onChange = (event) =>{
  console.log('event', event.target.value);
  this.setState({value: event.target.value})
}
// set display of items
handleSubmit = (event) => {
  event.preventDefault()
  this.setState({items: [...this.state.items, this.state.value],
    value: ''
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.onChange}/>
          <button>Add item</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
