import React from 'react';
import classes from './Bead.module.css';

const Bead = (props) => {
    return <div className={classes.Bead } style={{
        top: props.position.top,
        left: props.position.left,
        display: props.displayed ? 'inline' : 'none'
    }}></div>
}

export default Bead;