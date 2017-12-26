import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from '../constant';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        console.log(value);
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(player => ({
                playerId: player.playerId,
                fullName: player.fullName,
            })),
        });
    }

    onSelect = (value) => {
        console.log('onSelect', value);
        this.props.handleSelectPlayer(value);
    }

    render() {
        window.nba = nba;
        const { dataSource } = this.state;
        const options = dataSource.map(player => (
            <Option key={player.fullName} value={player.fullName} className="player-option">
                <img src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`} alt="Player" className="player-option-image"/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));
        console.log(dataSource);
        console.log(options)

        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={options}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Please enter player name"
                optionLabelProp="value"

            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
