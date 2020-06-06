import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Styles from './App.css';
import WithClass from '../hoc/WithClass';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] | Constructor');
  }
  state = {
    person : [
      {id: 1,name: "George" , age : 13},
      {id: 2,name: "Micheal" , age : 20},
      {id: 3,name: "Ronny" , age : 24}
    ],
    otherState: 'Someother State',
    showPersonState : false,
    showCockpit: true
  };

  switchNameHandle = () =>{
    this.setState({person : [
      {name: "George" , age : 13},
      {name: "Micheal" , age : 20},
      {name: "Emma" , age : 29}
    ]})

    // console.log(this.state);
  }

  nameChangeHandler = (event,id) =>{
    // console.log(id);
    const personIndex = this.state.person.findIndex(person =>{
      return person.id === id;
    });
    const person = this.state.person.slice();
    // console.log(personIndex);
    person[personIndex].name = event.target.value;
    this.setState({
      person : person
    });
  }

  togglePersonHandler = ()=>{
    // console.log(this.state.showPersonState)
    let currState = this.state.showPersonState;
    this.setState(
      {showPersonState : !currState}
    );
    // console.log(this.state.showPersonState);
  }

  deletePersonHandler = (index) => {
    // console.log(index);
    // This would also work
    //const person = this.state.person.slice();
    const person = [...this.state.person];
    person.splice(index,1);
    this.setState({
      person : person
    });
  }


  static getDerivedStateFromProps(props,state){
    console.log('[App.js] | getDerivedStateFromProps',props);
    return state;
  }
  // componentWillMount(){
  //   console.log('[App.js] | componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] | componentDidMount');
  }

  render() {
    console.log('[App.js] | Rendering ...');
    let person = null;

    if(this.state.showPersonState)
    {
      person = <Persons 
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />

      
    }
    return(
      <WithClass classes={Styles.App}>
        <button onClick={()=>{this.setState({showCockpit:false});}}>Remove Cockpit</button>
        {this.state.showCockpit ?<Cockpit 
        person={this.state.person}
        showPersonState={this.state.showPersonState}
        click={this.togglePersonHandler}
        title={this.props.title}
         /> : null}
        {person}
      </WithClass>
    );
      // return  React.createElement('div',{className:'App'},React.createElement('h1',null,'Is it Working?'));
  }
}

export default App;
