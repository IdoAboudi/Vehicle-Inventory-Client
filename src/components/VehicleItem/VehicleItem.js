import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Vehicle from '../../apis/vehicle';

import './VehicleItem.css';

class VehicleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: [],
            lastConnection: []
        };

        this.deleteVehicle = this.deleteVehicle.bind(this);
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        
        await Vehicle.get('' + id)
            .then(response => {
                this.setState({ vehicle: response.data.data });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
            console.log(this.state.vehicle.time_created);
        var lastConDate = new Date(this.state.vehicle.last_successful_connection);
        this.setState({ lastConnection: lastConDate.getTime() });
    }

    async deleteVehicle() {
        await Vehicle.delete('' + this.state.vehicle._id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
        this.props.history.push('/');
    }

    render() {
        var createdDate = new Date(this.state.vehicle.time_created);
        var date = createdDate.getDate();
        var month = (createdDate.getMonth() + 1 );
        var year = createdDate.getFullYear();
        
        return (
            <div className="item-content">
                <h1 className="name">Vehicle Name: {this.state.vehicle.name}</h1>
                <h2 className="car-type">Car Type: {this.state.vehicle.car_type}</h2>
                <h5 className="time">Time Created: {date}/{month}/{year}</h5>
                <h5 className="time">Last Successful Connection (Epoch timestamp): {this.state.lastConnection}</h5>
                <Link to={"/update-vehicle/" + this.state.vehicle._id}><Button className="btn" variant="outline-success">Update</Button></Link>
                <Button className="btn" onClick={this.deleteVehicle} variant="outline-danger" >Delete</Button>
            </div>
        );
    }
}

export default VehicleItem;