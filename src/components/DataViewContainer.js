import React from 'react';
import {ShotChart} from "./ShortChar"

export class DataViewContainer extends React.Component {
    render() {
        return(
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}/>
                <div classname="filters">

                </div>
            </div>
        );
    }
}