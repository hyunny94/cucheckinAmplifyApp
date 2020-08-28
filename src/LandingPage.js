import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Location from './Location';

class LandingPage extends React.Component {
    
    render() {
        return (
            <div>
                <h1>CUCheckIn Logged In</h1>
                <Location name="Noyes" />
                <AmplifySignOut />
            </div>
        );
    }
}

export default LandingPage;