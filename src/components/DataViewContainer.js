import React from 'react';
import {ShotChart} from "./ShortChar";
import {CountSlider} from "./CountSlider"


export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
    }

    onSliderChange = (value) => {
        this.setState({minCount: value});
    }

    render() {
        return(
            <div className="data-view">
                <ShotChart minCount={this.state.minCount} playerId={this.props.playerId}/>
                <div className="filters">
                    <CountSlider
                        onSliderChange={this.onSliderChange}
                        minCount={this.state.minCount}/>
                </div>
            </div>
        );
    }
}