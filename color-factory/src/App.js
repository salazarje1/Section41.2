import { BrowserRouter } from 'react-router-dom'; 
import React, {useState} from 'react'; 
import ColorRoutes from './ColorRoutes';
import { v4 as uuid } from 'uuid'; 
import './App.css';

function App() {
  const INITIALSTATE = [
    {
      id: uuid(), color: '#fa0000', name: 'red'
    }, 
    {
      id: uuid(), color: '#00fa00', name: 'green'
    }
  ]
  const [colors, setColors] = useState(INITIALSTATE); 
  const addColors = (newColor) => {
    setColors(colors => [...colors, { ...newColor }])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ColorRoutes colors={colors} addColors={addColors} />
      </BrowserRouter>
    </div>
  );
}

export default App;
