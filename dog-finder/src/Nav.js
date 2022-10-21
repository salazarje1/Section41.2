import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

const Nav = (props) => {
    const { dogs } = props;
    return (
        <nav>
            <NavLink exact to="/dogs">Home</NavLink>
            {dogs.map(dog => (<NavLink to={`/dogs/${dog.name.toLowerCase()}`} >{dog.name}</NavLink>))}
        </nav>
    )
}


export default Nav; 