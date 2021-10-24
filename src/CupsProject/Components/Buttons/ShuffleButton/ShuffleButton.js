import React from 'react';
import classes from './ShuffleButton.module.css';

//Shuffles cup placement

const ShuffleButton = (props) => {
    return ( 
            <div>
                <button className={classes.Button} onClick={props.clicked}>Shuffle</button>
            </div>
            )
};

export default ShuffleButton;