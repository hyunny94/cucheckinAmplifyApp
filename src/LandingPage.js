import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import LocationView from './LocationView';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { API, graphqlOperation } from "aws-amplify";
import * as queries from './graphql/queries';
  
class LandingPage extends React.Component {

    state = {
        currMenu: 'mail',
        locations: [],
    };

    componentDidMount() {
        API.graphql(graphqlOperation(queries.listLocations))
        .then(result => this.setState({
            locations: result.data.listLocations.items
        }))
        .catch(err => console.log(err))
    };

    handleClick = e => {
        this.setState({ currMenu: e.key });
    };
    
    render() {
        const { currMenu, locations } = this.state;
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[currMenu]} mode="horizontal">
                    <Menu.Item key="central" >
                        Central
                    </Menu.Item>
                    <Menu.Item key="west">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            West
                        </a>
                    </Menu.Item>
                </Menu>
                <h1>CUCheckIn Logged In</h1>
                {locations.map((value, index) => {
                    const { name, abbName, area, cap, currOccupancy, id, isOpen } = value;
                    return <LocationView key={index} name={name} abbName={abbName} area={area} cap={cap} currOccupancy={currOccupancy} id={id} isOpen={isOpen} checkInHandler={this.checkIn} />
                })}
                <AmplifySignOut />
            </div>
        );
    }
}

export default LandingPage;