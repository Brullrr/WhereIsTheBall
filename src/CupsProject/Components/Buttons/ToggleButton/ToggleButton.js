import React from 'react';
import classes from './ToggleButton.module.css';

//Toggles visibility of cups and bead anlso changed cup piccure

const ToggleButton = (props) => {
    return ( 
            <div>
                <button onClick={props.clicked} className={classes.Button}>Toggle</button>
            </div>
            )
};

export default ToggleButton;