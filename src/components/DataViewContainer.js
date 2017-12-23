import React from 'react';
import {ShotChart} from "./ShortChar"

export class DataViewContainer extends React.Component {
    render() {
        return(
            <ShotChart playerId={this.props.playerId}/>
        );
    }
}