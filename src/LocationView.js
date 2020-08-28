import React from 'react';
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from './graphql/mutations';


class LocationView extends React.Component {

    constructor(props) {
        super(props);    
        this.state = { 
            currOccupancy: this.props.currOccupancy,
            checkedIn: false,
        };
        this.checkInOrOut = this.checkInOrOut.bind(this);
      }

    async checkInOrOut() {
        const { id } = this.props;
        const { currOccupancy, checkedIn } = this.state;
        let newOccupancy;
        if (checkedIn) {
            newOccupancy = currOccupancy - 1;
        } else {
            newOccupancy = currOccupancy + 1;
        }
        const locationDetails = { id, currOccupancy: newOccupancy };
        await API.graphql(graphqlOperation(mutations.updateLocation, {input: locationDetails}));
        this.setState({ 
            currOccupancy: newOccupancy,
            checkedIn: !checkedIn
        })
    }
    
    render() {
        if (this.props.isOpen) {
            return (
                <div>
                    <h1>{this.props.name}</h1>
                    <h2>{this.state.currOccupancy}/{this.props.cap}</h2>
                    <button onClick={this.checkInOrOut}>
                        {this.state.checkedIn ? "Check Out" : "Check In"}
                    </button>
                </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default LocationView;