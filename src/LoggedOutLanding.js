import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

class LoggedOutLanding extends React.Component {
    
    render() {
        return (
            <div>
                <h1>CUCheckIn</h1>
                <AmplifySignOut />
                {/* <button onClick={this.props.logInClickHandler}>
                    Log in / Sign up
                </button> */}
            </div>
        );
    }
}

export default withAuthenticator(LoggedOutLanding);