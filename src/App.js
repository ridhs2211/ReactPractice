import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:18},
      {name:'Steve', age:20}
    ]
  }

  switchNameHandler = () =>{
    console.log('was clicked!');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age}>Hobbies : Racing</Person>
        <Person name={this.state.persons[2].age} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
