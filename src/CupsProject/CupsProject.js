import React, { useState } from "react";
import Bead from './Components/Bead/Bead';
import ButtonsHolder from "./Components/Buttons/ButtonsHolder";
import Cups from './Components/Cups/Cups';
import classes from './CupsProject.module.css';
import cupImage from '../Images/Cup.png';
import theDoorImage from '../Images/box.png';
import boxImage from '../Images/door.jpg';
import bisonImage from '../Images/bison.png';



const CupsProject = () => {

    const [doorImage, setDoorImage] = useState(cupImage);
    const [cupsDisplayed, setCupsDisplayed] = useState(true);
    const [beadDisplayed, setBeadDisplayed] = useState(true);
    const [beadPosition, setBeadPosition] = useState({
        top: '25%',
        left: 'calc(50% - 25px)',
        originalPosition: 0,
        where: 0
    })
    const [activate, setActivate] = useState(false)

    const changeBeadPositionHandler = (position) => {

        setBeadPosition({
            ...beadPosition,
                top: position.top,
                left: position.left,
                originalPosition: position.where,
                where: position.where -1
        })


        const randomNum = Math.floor(Math.random()*4) 
        switch (randomNum) {
            case 0:
                setDoorImage(cupImage)
            break;
            case 1:
                setDoorImage(boxImage)
            break;
            case 2:
                setDoorImage(theDoorImage)
            break;
            case 3:
                setDoorImage(bisonImage)
            break;
        
            default:
                break;
        }


    }

    const toggleCupsDisplayHandler = () => {
        setCupsDisplayed(!cupsDisplayed);
    }

    const shuffleCupsHandler =() => {
        const randomNum = Math.floor(Math.random()*3) 
        let top = '';
        let left = '';

        if(randomNum === 2) {
            top = '70%';
            left = 'calc(82.5% - 25px)'
        }
        if(randomNum === 1) {
            top = '70%';
            left = 'calc(50% - 25px)'
        }
        if(randomNum === 0) {
            top = '70%';
            left = 'calc(17% - 25px)'
        }
        setBeadDisplayed(false)
        setTimeout(()=> {
            setBeadDisplayed(true)
            setActivate(false)
        }, 3000)
        setBeadPosition({
            ...beadPosition,
            top: top,
            left: left,
            originalPosition: randomNum,
            where: randomNum
        })
        setActivate(true)
    }


    // bead positions
    //original 
    //top: '25%',
    //left: 'calc(50% - 25px)'


    return (
        <div className={classes.Body}>
            <Bead position={beadPosition} displayed={beadDisplayed} />
            <Cups   displayed={cupsDisplayed} 
                    position={beadPosition.where}  
                    Activate={activate}
                    doorImage={doorImage}
            />
            <ButtonsHolder 
                toggle={toggleCupsDisplayHandler}    
                choose={changeBeadPositionHandler}
                shuffle={shuffleCupsHandler}
            />
        </div>
        
    )
}


export default CupsProject;