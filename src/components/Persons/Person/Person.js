import React,{Component} from 'react';
import styles from './Person.css'
import Aux from '../../../hoc/Aux'

class Person extends Component{

  render(){
    console.log('[Person.js] | Rendering..');
    return (
      <Aux>
        <p onClick={this.props.click}>Hi , I am a {this.props.name} and 
        I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change}  value={this.props.name}/>
      </Aux>
    );
  }

};

export default Person;
