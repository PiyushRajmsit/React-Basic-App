import React,{Component} from 'react';
import Person from './Person/Person';
import { render } from 'react-dom';

class Persons extends Component{

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] | getDerivedStateFromProps');
    //     return state;
    // }
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] | shouldComponentUpdate');

        if(nextProps.person !== this.props.person ){
            return true;
        }
        return false;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] | getSnapshotBeforeUpdate');
        console.log('PrevProps',prevProps);
        return prevProps;
    }
    componentDidUpdate(){
        console.log('[Persons.js] | componentDidUpdate');
    }
    render(){
    console.log('[Persons.js] | Rendering...');
    return(
        this.props.person.map((person,index) =>{
            return <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            change={(event) => this.props.changed(event,person.id)}
            key={person.id}
            />
        })
    );

    }    
}
export default Persons;