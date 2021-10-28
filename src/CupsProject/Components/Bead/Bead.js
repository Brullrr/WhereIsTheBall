import React, { Fragment, useState } from 'react';
import classes from './Bead.module.css';




const Bead = (props) => {


    

    return (
    <Fragment>
        <div className={classes.Bead}  style={{
        backgroundImage: 'url(' + props.image + ')',
        top: props.position.top,
        left: props.position.left,
        display: props.displayed ? 'inline-block' : 'none'
    }} ></div>
    </Fragment>)
    
}

export default Bead;