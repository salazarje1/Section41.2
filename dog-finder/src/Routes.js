import React from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'; 

import DogList from './DogList'; 
import DogFilter from './DogFilter';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList dogs={props.dogs} />
            </Route>
            <Route path="/dogs/:name">
                <DogFilter dogs={props.dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}


export default Routes; 