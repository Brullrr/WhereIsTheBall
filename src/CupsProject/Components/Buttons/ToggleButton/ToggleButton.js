import React from 'react';
import classes from './ToggleButton.module.css';

//Toggles visibility of cups and bead anlso changed cup piccure

const ToggleButton = (props) => {

    const keyPressed = (pressedKey) => {
        console.log('ChooseButton pressed key is:  '  + pressedKey.key)
        if(pressedKey.key === '3') {
            props.clicked()
        }
    }
    

    return ( 
            <div>
                <button onClick={props.clicked} className={classes.Button} onKeyDown={keyPressed}>Toggle</button>
            </div>
            )
};

export default ToggleButton;