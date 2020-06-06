import React,{useEffect} from 'react';
import Styles from './Cockpit.css';

const cockpit = (props) =>{

    useEffect(()=>{
        console.log('[Cockpit.js] | useEffect');
        // Http Request Can be Send here
        const timer = setTimeout(()=>{alert('Saved Data to Cloud')},1000);
        return() =>{
            clearTimeout(timer);
            console.log('[Cockpit.js] | Cleanup work in UseEffect');
        } 
    },[]);


    let classes = [];
    let btnClass = [Styles.Button];
    if(props.person.length <= 3)
    {  
        classes.push(Styles.red);
    }
    if(props.person.length <= 2){
        classes.push(Styles.bold);
    }
    if(props.showPersonState)
    {
        btnClass.push(Styles.red);
    }
    return(
        <div classes={Styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}> This is actually Working</p>
            <button className={btnClass.join(' ')} onClick={props.click}> Toggle Names </button>
        </div>

    );
}
export default cockpit;