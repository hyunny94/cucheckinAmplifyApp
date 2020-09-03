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

        openLocations: [],
        categoryToLocations: {},
    };

    componentDidMount() {
        // query locations and pre-process the list into the following data structures
        // 1. openLocations: list of open locations
        // 2. categoryToLocations: object where key is the category of the location and value is a list of locations with the specific category
        API.graphql(graphqlOperation(queries.listLocations))
        .then(result => {
            let categoryToLocations = {}
            let openLocations = []
            for (const loc of result.data.listLocations.items) {
                // add to [categoryToLocations]
                if (loc.area in categoryToLocations) {
                    categoryToLocations[loc.area].push(loc);
                } else {
                    categoryToLocations[loc.area] = [loc];
                }
                // add to [openLocations]
                if (loc.isOpen) openLocations.push(loc);
            }
            this.setState({
                openLocations, categoryToLocations
            })
        })
        .catch(err => console.log(err)) //TODO: Remove console logs for production
    };

    handleClick = e => {
        this.setState({ currMenu: e.key });
    };
    
    render() {
        const { currMenu, categoryToLocations } = this.state;
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
                
                {Object.keys(categoryToLocations).map((category, index) => {
                    return (
                        <div>
                            <h1 key={index}>{category}</h1>
                            {categoryToLocations[category].map((loc, index) => {
                                const { name, abbName, area, cap, currOccupancy, id, isOpen } = loc;
                                return <LocationView key={index} name={name} abbName={abbName} area={area} cap={cap} currOccupancy={currOccupancy} id={id} isOpen={isOpen} checkInHandler={this.checkIn} />
                            })}
                        </div>
                    )
                })}
                <AmplifySignOut />
            </div>
        );
    }
}

export default LandingPage;