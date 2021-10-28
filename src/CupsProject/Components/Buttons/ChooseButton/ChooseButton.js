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
    
    

            const keyPressed = (pressedKey) => {
                console.log('ChooseButton pressed key is:  '  + pressedKey.key)
                if(pressedKey.key === '1') {
                    props.clicked(position)
                }
                if(pressedKey.key === '2') {
                    props.shuffle()
                }
                if(pressedKey.key === '3') {
                    props.toggle()
                }
                if(pressedKey.key === '4') {
                    props.change()
                }
            }

                 

    return ( 
            <div >
                <button className={classes.Button}   onClick={() => props.clicked(position)} onKeyDown={keyPressed} >Choose</button>
            </div>
            )
};

export default ChooseButton;