import React from 'react';
import styles from './Person.css'
const person = (props) => {
  return (
          <div className={styles.Person}>
            <p onClick={props.click}>Hi , I am a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}  value={props.name}/>
          </div>
  );

};

export default person;
