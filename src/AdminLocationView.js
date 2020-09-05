import React from 'react';
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';


class AdminLocationView extends React.Component {

    constructor(props) {
        super(props);    
        const { cap, currOccupancy, isOpen, updatedAt } = props;
        this.state = { 
            cap, currOccupancy, isOpen, updatedAt
        };
        this.openOrClose = this.openOrClose.bind(this);
      }

    async openOrClose() {
        const { id, isOpen } = this.props;
        await API.graphql(graphqlOperation(mutations.updateLocation, {input: { id, IsOpen: !isOpen }}));
        const updatedLoc = await API.graphql(graphqlOperation(queries.getLocation, { id }));
        this.setState({
            cap: updatedLoc.data.getLocation.Cap,
            currOccupancy: updatedLoc.data.getLocation.CurrOccupancy,
            isOpen: updatedLoc.data.getLocation.IsOpen,
            updatedAt: updatedLoc.data.getLocation.updatedAt
        });
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.state.currOccupancy}/{this.state.cap}</h2>
                <h2>{this.state.isOpen ? "Open" : "Closed"}</h2>
                <button onClick={this.openOrClose}>Open Or Close</button>
            </div>
        )
    } 
}


export default AdminLocationView;