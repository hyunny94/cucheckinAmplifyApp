import React from 'react';
import LandingPage from './LandingPage';
import { withAuthenticator } from '@aws-amplify/ui-react';

class App extends React.Component {
    render() {
        return (
            <LandingPage />
        );
    }
}

export default withAuthenticator(App);