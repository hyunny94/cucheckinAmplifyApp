import React from 'react';

class LoggedInLanding extends React.Component {
    
    render() {
        return (
            <div>
                <h1>CUCheckIn</h1>
                <button onClick={this.props.logOutClickHandler}>
                    Log Out
                </button>
            </div>
        );
    }
}

export default LoggedInLanding;