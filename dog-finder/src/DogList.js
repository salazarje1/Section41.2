import React from 'react'; 
import { Link } from 'react-router-dom'; 

const DogList = (props) => {
    const { dogs } = props; 
    console.log(props); 
    return (
        <div>
            <h1>Dog List</h1>
            <ul>
                {dogs.map((dog) => {
                    return <li key={dog.name}><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></li>
                })}
            </ul>
        </div>
    )
}


export default DogList; 