import React from 'react';
import {ShotChart} from "./ShortChar";
import nba from 'nba';

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId
    }
    ComponentDidMount() {

    }
    render() {
        return (
            <div className="main">
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}