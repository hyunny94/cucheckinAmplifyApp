import React from 'react';
import Storage from 'aws-amplify';

class Location extends React.Component {
    constructor(props) {
        super(props);
        // props
        // name
        // capacity (optional)

        // state
        // current occupancy
        // open/close status
        this.state = {
            currentOccupancy: 0,
            isOpen: true
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Location;