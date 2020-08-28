import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

class LoggedInLanding extends React.Component {
    
    render() {
        return (
            <div>
                <h1>CUCheckIn</h1>
                <AmplifySignOut />
                {/* <button onClick={this.props.logOutClickHandler}>
                    Log Out
                </button> */}
            </div>
        );
    }
}

export default withAuthenticator(LoggedInLanding);