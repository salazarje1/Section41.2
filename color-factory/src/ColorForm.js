import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom';

const ColorForm = ({ addColors }) => {
    const history = useHistory(); 
    const INITIALSTATE = { 
        color: '#000000',
        name: ''
    }
    const [formData, setFormData] = useState(INITIALSTATE)
    const handleChange = (e) => {
        const { name, value } = e.target; 

        setFormData((formData) => ({ ... formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColors({ ...formData }); 
        history.push('/colors'); 
    }
    return <form onSubmit={handleSubmit}>
        <h1>Color Form</h1>
        <label htmlFor='color'>Whats your color?</label>
        <input type="color" id='color' name="color" value={formData.color} onChange={handleChange} />
        <label htmlFor='name'>Name Of Your Color?</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
        <button>Add Color</button>
    </form>
}

export default ColorForm; 