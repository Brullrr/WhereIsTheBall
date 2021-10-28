import React, { useState } from 'react';
import classes from './Cup.module.css'

const Cup = (props) => {

    const [leftDisplaced, setleftDisplaced] = useState(false)
    let cupClass = ''
    switch (props.position) {
            case 1:
                cupClass = props.Activate ? classes.CupOne + " " + classes.active : classes.CupOne
            break;
            case 2:
                cupClass = props.Activate ? classes.CupTwo + " " + classes.active : classes.CupTwo
            break;
            case 3:
                cupClass = props.Activate ? classes.CupThree + " " + classes.active : classes.CupThree
            break;
            default:
                break;
        }


        let originalLeft = ''
    
        switch (props.originalPosition) {
            case 1:
                originalLeft = '10%'
            break;
            case 2:
                originalLeft = '43%'
            break;
            case 3:
                originalLeft = '76%'
            break;
            default:
                break;
        }

        let border = ''
    
        switch (props.originalPosition) {
            case 1:
                border = '1px solid transparent'
            break;
            case 2:
             border = '1px solid transparent'

            break;
            case 3:
            border = '1px solid transparent'

            break;
            default:
            break;
        }



    setTimeout(()=> {
        switch (props.position) {
            case 1:
                setleftDisplaced('10%')
            break;
            case 2:
                setleftDisplaced('43%')
            break;
            case 3:
                setleftDisplaced('76%')
            break;
            default:
                break;
        }
    }, 3000)

    return <div className={cupClass}
     style={{
         left: leftDisplaced ? leftDisplaced : originalLeft,
         border: border
     }}>
        <img style={{
            display: props.displayed ? 'block' : 'none'
        }} src={props.doorImage} alt='A cup'/>
    </div>
}

export default Cup;