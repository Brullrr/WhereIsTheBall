import React from 'react';
import classes from './ShuffleButton.module.css';

//Shuffles cup placement

const ShuffleButton = (props) => {
    
        const keyPressed = (pressedKey) => {
            if(pressedKey.key === '2') {
                props.clicked()
            }
            
        }
        
    return ( 
            <div>
                <button className={classes.Button} onClick={props.clicked} onKeyDown={keyPressed}>Shuffle</button>
            </div>
            )
};

export default ShuffleButton;