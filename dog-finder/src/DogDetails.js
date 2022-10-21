import React from 'react'; 


const DogDetails = (props) => {
    const { dog } = props;  
    return (
        <div>
            <h2>Dog Details</h2>
            <img src={dog.src} alt={dog.name}/>
            <h3>{dog.name}</h3>
            <p>Age: {dog.age}</p>
            <h3>Fun Facts</h3>
            <ul>
                {dog.facts.map(fact => (
                    <li>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails; 