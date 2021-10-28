import React, { useState } from "react";
import Bead from './Components/Bead/Bead';
import ButtonsHolder from "./Components/Buttons/ButtonsHolder";
import Cups from './Components/Cups/Cups';
import classes from './CupsProject.module.css';
import cupImage from '../Images/Cup.png';
import theDoorImage from '../Images/door.jpg';
import boxImage from '../Images/box.png';
import bisonImage from '../Images/bison.png';
import hatImage from '../Images/Hat.png';
import pokeballImage from '../Images/Pokeball.png';
import pumpkin from '../Images/Pumpkin.png';
import Jack from '../Images/Jack.jpg';
import Vampire from '../Images/Vampire.png';
import Ghost from '../Images/Ghost.png';
import bead from '../Images/bead.png';
import Abu from '../Images/Abu.gif';
import Crush from '../Images/Crush.png';
import terk from '../Images/terk.jpg';
import Oogie from '../Images/pen.gif';
import panda from '../Images/panda.jpg';
import Jagariko from '../Images/Jagariko.jpg';
import twice from '../Images/twice.gif';
import doot from '../Images/doot.gif';
import richard  from '../Images/richard.png';




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


        const randomNum = Math.floor(Math.random()*6) 
        console.log('Random number is   :'  + randomNum )
        switch (randomNum) {
            case 0:
                if(doorImage === cupImage) {
                    setDoorImage(boxImage)
                } else {
                    setDoorImage(cupImage)
                }
            break;
            case 1:
                if(doorImage === boxImage) {
                    setDoorImage(theDoorImage)
                } else {
                    setDoorImage(boxImage)
                }
            break;
            case 2:
                if(doorImage === theDoorImage) {
                    setDoorImage(bisonImage)
                } else {
                    setDoorImage(theDoorImage)
                }
            break;
            case 3:
                if(doorImage === bisonImage) {
                    setDoorImage(hatImage)
                } else {
                    setDoorImage(bisonImage)
                }
            break;
            case 4:
                if(doorImage === hatImage) {
                    setDoorImage(pokeballImage)
                } else {
                    setDoorImage(hatImage)
                }
            break;
            case 5:
                if(doorImage === pokeballImage) {
                    setDoorImage(cupImage)
                } else {
                    setDoorImage(pokeballImage)
                }
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
    const imageArray = [bead, pumpkin, Jack, Vampire, Ghost, terk, Oogie, panda, Jagariko, Abu, Crush, twice, doot, richard]
    const [beadImage, setBeadImage] = useState(imageArray[0])

    const changeBeadHandler = () => {
        
        if(beadImage === imageArray[imageArray.length - 1]) {setBeadImage(imageArray[0])}
        else {
            imageArray.forEach( (e, index) => {
                console.log(e)
                if(e === beadImage) { setBeadImage(imageArray[index + 1]) } 
                
            })
        }
    }


    return ( 
        <div className={classes.Body} >
            
            <Bead position={beadPosition} displayed={beadDisplayed} image={beadImage}/>
            <Cups   displayed={cupsDisplayed} 
                    position={beadPosition.where}  
                    Activate={activate}
                    doorImage={doorImage}
            />
            <ButtonsHolder 
                toggle={toggleCupsDisplayHandler}    
                choose={changeBeadPositionHandler}
                changeBead={changeBeadHandler }
                shuffle={shuffleCupsHandler}
            />
        </div>
        
    )
}


export default CupsProject;