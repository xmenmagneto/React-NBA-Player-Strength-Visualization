import React from 'react';
import {ShotChart} from "./ShortChar";
import nba from 'nba';

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,  //render ShotChart
        playerInfo: {}, //render Profile
    }

    ComponentDidMount() {
        nba.stats.playerInfo({ PlayerID: this.state.playerId }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]); //merge 两个object
            console.log(playerInfo);
            this.setState({
                playerInfo: playerInfo,
            });
        });
    }
    render() {
        return (
            <div className="main">
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}