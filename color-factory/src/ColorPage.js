import React, { useState } from 'react'; 
import { Link } from "react-router-dom"; 

import ColorList from './ColorList';


const ColorPage = ({ colors }) => {
    return (
        <div>
            <div>
                <h1>Welcome To The Color Factory</h1>
                <Link to="/colors/form">Add A Color</Link>
            </div>
            <ColorList colors={colors}/>
        </div>
    )
}


export default ColorPage; 