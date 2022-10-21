import React from 'react'; 
import { useParams } from 'react-router-dom'; 
import DogDetails from './DogDetails';


const DogFilter = (props) => {
    const {name} = useParams(); 

    const dog = props.dogs.find(
        dog => dog.name.toLowerCase() === name
    ); 

    return <DogDetails dog={dog} />
}


export default DogFilter; 