import React from 'react';
import Cup from './Cup/Cup';
import classes from './Cups.module.css';

const Cups = (props) => {
    console.log('Cups.js  :  '  + props.position)

    let positions = []

    switch (props.position) {
        case 0:
            positions = [1,2,3]    
        break;
        case 1:
            positions = [2,1,3]    
        break;
        case 2:
            positions = [3,2,1]    
        break;

        default:
            break;
    }

    return (
        <div className={classes.CupsHolder} >
            <Cup displayed={props.displayed} originalPosition={1} position={positions[0]} Activate={props.Activate} doorImage={props.doorImage}/>
            <Cup displayed={props.displayed} originalPosition={2} position={positions[1]} Activate={props.Activate} doorImage={props.doorImage}/>
            <Cup displayed={props.displayed} originalPosition={3} position={positions[2]} Activate={props.Activate} doorImage={props.doorImage}/>
        </div>
    )
}

export default Cups;