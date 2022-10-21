import React from 'react'; 
import { Link } from 'react-router-dom'; 

import './Color.css'; 


const Color = ({ color }) => {
    return <div className='Color' style={{backgroundColor:`${color.color}`}}>
        <h1 className="Color-title">{color.name.toUpperCase()}</h1>
        <Link to="/colors">Back</Link>
    </div>
}


export default Color; 