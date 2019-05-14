import React from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Vehicle from '../../apis/vehicle';

import './VehiclesList.css';

class VehiclesList extends React.Component {
    state = { vehicles: [] };

    async componentDidMount() {
        await Vehicle.get('')
            .then(response => {
                this.setState({ vehicles: response.data.data });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        const renderedList = this.state.vehicles.map((vehicle) => {
            var createdDate = new Date(vehicle.time_created);
            var date = createdDate.getDate();
            var month = (createdDate.getMonth() + 1);
            var year = createdDate.getFullYear();
            return (
                <tr key={vehicle._id}>
                    <td>{vehicle.name}</td>
                    <td>{date}/{month}/{year}</td>
                    <td><Link to={"/vehicle-item/" + vehicle._id}><Button variant="link">Link</Button></Link></td>
                </tr>

            );
        });
        return (
            <div className="page">
                <Link to="/create-vehicle">
                    <Button className="create-btn" variant="dark">Create new vehicle</Button>
                </Link>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time Created</th>
                                <th>Details Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderedList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default VehiclesList;