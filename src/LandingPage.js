import React from 'react';
import LoggedInLanding from './LoggedInLanding';
import LoggedOutLanding from './LoggedOutLanding';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogInClick = this.handleLogInClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
        this.state = {
            loggedIn: false
        }
    }

    handleLogInClick() {
        this.setState({loggedIn: true});
    }

    handleLogOutClick() {
        this.setState({loggedIn: false});
    }

    render() {
        if (this.state.loggedIn) {
            return <LoggedInLanding logOutClickHandler={this.handleLogOutClick} />
        } else {
            return <LoggedOutLanding logInClickHandler={this.handleLogInClick} />
        }
    }
}

export default LandingPage;