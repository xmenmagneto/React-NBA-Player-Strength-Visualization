import React from 'react';
import {ShotChart} from "./ShortChar";
import {CountSlider} from "./CountSlider";
import _ from "lodash";


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
                        onSliderChange={_.debounce(this.onSliderChange, 500)}
                        minCount={this.state.minCount}/>
                </div>
            </div>
        );
    }
}