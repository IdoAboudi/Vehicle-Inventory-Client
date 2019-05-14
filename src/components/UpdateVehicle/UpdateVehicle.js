import React from 'react';
import { Redirect } from 'react-router-dom';

import Vehicle from '../../apis/vehicle';

import Input from '../formFields/Input/Input';
import Select from '../formFields/Select/Select';
import Btn from '../formFields/Btn/Btn';

class UpdateVehicle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicle: {
                id: this.props.match.params.id,
                name: '',
                type: '',
                lastConnection: ''
            },
            typeOptions: ['SUV', 'Truck', 'Hybrid']
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                vehicle: {
                    ...prevState.vehicle, [name]: value
                }
            }
        }, () => console.log(this.state.vehicle)
        )
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        await Vehicle.put('' + this.state.vehicle.id, {
                name: this.state.vehicle.name,
                car_type: this.state.vehicle.type,
                last_successful_connection: this.state.vehicle.lastConnection
            })
            .then(response => {
                        console.log(response);
                        return <Redirect to="/" />
                    })
                    .catch(error => {
                        console.log('Error fetching and parsing data', error);
                    });
        this.props.history.push('/');
    }

    render() {
        const { name, type, lastConnection } = this.state.vehicle;
        const isEnabled = (name.length > 0) && (type.length > 0) && (lastConnection.length > 0);
        return (
            <div className="item-content">
             <label className="title">Update vehicle</label>
                <Input
                    title={'Name: '}
                    name={'name'}
                    value={this.state.vehicle.name}
                    placeholder={'Enter vehicle name'}
                    handleChange={this.handleInput}
                    type={'text'}
                />
                <Select
                    title={'Car Type: '}
                    name={'type'}
                    options={this.state.typeOptions}
                    value={this.state.vehicle.type}
                    placeholder={'Select Car Type '}
                    handleChange={this.handleInput}
                />
                <Input
                    title={'Last Successful Connection: '}
                    name={'lastConnection'}
                    value={this.state.vehicle.lastConnection}
                    placeholder={'Enter last connection date '}
                    handleChange={this.handleInput}
                    type={'date'}
                />
                <Btn
                    title={'Submit'}
                    action={this.handleFormSubmit}
                    disabled={isEnabled}
                />
            </div>
        );
    }

}
export default UpdateVehicle;