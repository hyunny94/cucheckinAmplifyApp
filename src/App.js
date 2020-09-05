import React from 'react';
import LandingPage from './LandingPage';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';

class App extends React.Component {

    state = {
        userName: null,
        isAdmin: null,
    }

    async componentDidMount() {
        let currUserInfo ;
        try {
            currUserInfo = await Auth.currentUserInfo();
            console.log(currUserInfo);
        } catch (err) {
            console.log(err);
        }
        if (Object.keys(currUserInfo).includes("attributes")) {
            const currUser = await API.graphql(graphqlOperation(queries.getUser, { id: currUserInfo.attributes.sub }));
            console.log(currUser);
            const { UserName, IsAdmin } = currUser.data.getUser;
            this.setState({
                userName: UserName,
                isAdmin: IsAdmin
            })
        }
    }

    render() {
        let adminStuff;
        if (this.state.isAdmin) {
            adminStuff = <h1>Add Admin Stuff Here</h1>;
        } 
        return (
            <div>
                {adminStuff}
                <LandingPage isAdmin={this.state.isAdmin} />
            </div>
        );
    }
}

export default withAuthenticator(App);