import React from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'; 

import ColorPage from './ColorPage';
import ColorForm from './ColorForm';
import Color from './Color';

const ColorRoutes = ({ colors, addColors }) => {
    return (
        <Switch>
            <Route exact path="/colors"><ColorPage colors={colors} /></Route>
            <Route exact path="/colors/form"><ColorForm addColors={addColors} /></Route>
            {colors.map((color) => {
                return <Route key={color.id} exact path={`/colors/${color.name}`}><Color color={color} /></Route>
            })}
            <Redirect to="/colors" />
        </Switch>
    )
}

export default ColorRoutes; 