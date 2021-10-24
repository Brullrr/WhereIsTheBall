import React from 'react';
import classes from './ChooseButton.module.css';

//Chooses a cup for the bead to go into

const ChooseButton = (props) => {
    
    const positionCenter = {
    top: '70%',
    left: 'calc(50% - 25px)',
    where: 2
    }
    const positionLeft = {
    top: '70%',
    left: 'calc(17% - 25px)',
    where: 1
    }
    const positionRight = {
    top: '70%',
    left: 'calc(82.5% - 25px)',
    where: 3
    }

    const randomNum = Math.floor(Math.random()*3)  
    const position = randomNum === 0 ? positionCenter : randomNum === 1 ? positionLeft : positionRight
        

    return ( 
            <div>
                <button className={classes.Button} onClick={() => props.clicked(position)}>Choose</button>
            </div>
            )
};

export default ChooseButton;