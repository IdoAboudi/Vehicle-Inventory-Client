import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VehicleList from './components/VehicleList/VehiclesList';
import VehicleItem from './components/VehicleItem/VehicleItem';
import UpdateVehicle from './components/UpdateVehicle/UpdateVehicle';
import CreateVehicle from './components/CreateVehicle/CreateVehicle';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={VehicleList}/>
            <Route exact path="/vehicle-item/:id" component={VehicleItem} />
            <Route exact path="/update-vehicle/:id" component={UpdateVehicle} />
            <Route exact path="/create-vehicle" component={CreateVehicle} />
        </Switch>
    );
}

export default Router;