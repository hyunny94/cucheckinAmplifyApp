import React from 'react';

class LoggedOutLanding extends React.Component {
    
    render() {
        return (
            <div>
                <h1>CUCheckIn</h1>
                <button onClick={this.props.logInClickHandler}>
                    Log in / Sign up
                </button>
            </div>
        );
    }
}

export default LoggedOutLanding;