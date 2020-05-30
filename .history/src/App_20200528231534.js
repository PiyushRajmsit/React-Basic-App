import React, { Component } from 'react';
import Person from './Person/Person.js';
import './App.css';

class App extends Component {
  state = {
    person : [
      {id: 1,name: "George" , age : 13},
      {id: 2,name: "Micheal" , age : 20},
      {id: 3,name: "Ronny" , age : 24}
    ],
    otherState: 'Someother State',
    showPersonState : true
  };

  switchNameHandle = () =>{
    // console.log("This was clicked");
    this.setState({person : [
      {name: "George" , age : 13},
      {name: "Micheal" , age : 20},
      {name: "Emma" , age : 29}
    ]})

    console.log(this.state);
  }

  nameChangeHandler = (event,id) =>{
    // console.log(id);
    const personIndex = this.state.person.findIndex(person =>{
      return person.id === id;
    });
    const person = this.state.person.slice();
    // console.log(personIndex);
    // console.log(person);
    person[personIndex].name = event.target.value;
    this.setState({
      person : person
    });
  }

  togglePersonHandler = ()=>{
    console.log(this.state.showPersonState)
    let currState = this.state.showPersonState;
    this.setState(
      {showPersonState : !currState}
    );
    console.log(this.state.showPersonState);
  }

  deletePersonHandler = (index) => {
    console.log(index);
    // This would also work
    //const person = this.state.person.slice();
    const person = [...this.state.person];
    person.splice(index,1);
    this.setState({
      person : person
    });
  }

  render() {
    const style = {
      backgroundColor : 'Green',
      border: '1px solid Blue',
      padding : '8px'

    };
    let person = null;

    if(this.state.showPersonState)
    {
      person = (
          <div>
            {this.state.person.map((person,index) =>{
                return <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={(event) => this.nameChangeHandler(event,person.id)}
                key={person.id}
                />
            }
            )}
          </div>
          );
      style.backgroundColor = 'red';
    }
    return(
      <div className="App">
        <h1> The React App</h1>
        <p> This is actually Working</p>
        <button style={style} onClick={this.togglePersonHandler}> Toggle Names </button>
        {person}
      </div>
    );
      // return  React.createElement('div',{className:'App'},React.createElement('h1',null,'Is it Working?'));
  }
}

export default App;
