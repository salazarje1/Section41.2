import React from 'react'; 
import { Link } from 'react-router-dom'; 

import './ColorList.css'; 


const ColorList = ({ colors }) => {
    return (
        <ul className='ColorList'>
            {colors.map(color => {
                return <li key={color.id} className="ColorList-li">
                        <Link to={`/colors/${color.name}`}>{color.name.toUpperCase()}</Link>
                    </li>
            })}
        </ul>
    )
}

export default ColorList; 