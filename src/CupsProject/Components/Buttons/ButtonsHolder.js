import React from 'react';
import ChooseButton from './ChooseButton/ChooseButton';
import ShuffleButton from  './ShuffleButton/ShuffleButton';
import ToggleButton from './ToggleButton/ToggleButton';
import classes from './ButtonsHolder.module.css';

const ButtonsHolder = (props) => {
    return (
        <div className={classes.ButtonsHolder}>   
            <ChooseButton clicked={props.choose} toggle={props.toggle} shuffle={props.shuffle} change={props.changeBead}/>
            <ShuffleButton clicked={props.shuffle} />
            <ToggleButton clicked={props.toggle} />
        </div>
    )
}

export default ButtonsHolder;