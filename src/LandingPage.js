import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import LocationView from './LocationView';
import AdminLocationView from './AdminLocationView';
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
                if (loc.Category in categoryToLocations) {
                    categoryToLocations[loc.Category].push(loc);
                } else {
                    categoryToLocations[loc.Category] = [loc];
                }
                // add to [openLocations]
                if (loc.IsOpen) openLocations.push(loc);
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
                        <a href="#Central">
                            Central
                        </a>
                    </Menu.Item>
                    <Menu.Item key="west">
                        <a href="#West">
                            West
                        </a>
                    </Menu.Item>
                </Menu>
                
                {Object.keys(categoryToLocations).map((category, index) => {
                    return (
                        <div key={index} id={category}>
                            <h1>{category}</h1>
                            {categoryToLocations[category].map((loc, index) => {
                                const { id, AKA, Address, Cap, Category, 
                                    CurrOccupancy, ImageURL, IsOpen, 
                                    Latitude, Longitude, Name, Notes, updatedAt } = loc;
                                if (this.props.isAdmin) {
                                    return <AdminLocationView 
                                        key={index} id={id} aka={AKA} address={Address} cap={Cap} 
                                        category={Category} currOccupancy={CurrOccupancy} 
                                        imageURL={ImageURL} isOpen={IsOpen} latitude={Latitude} 
                                        longitude={Longitude} name={Name} notes={Notes} 
                                        updatedAt={updatedAt} checkInHandler={this.checkIn} />
                                } else {
                                    return <LocationView 
                                        key={index} id={id} aka={AKA} address={Address} cap={Cap} 
                                        category={Category} currOccupancy={CurrOccupancy} 
                                        imageURL={ImageURL} isOpen={IsOpen} latitude={Latitude} 
                                        longitude={Longitude} name={Name} notes={Notes} 
                                        updatedAt={updatedAt} checkInHandler={this.checkIn} />
                                }
                                
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