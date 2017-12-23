import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';


export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(player => player.fullName),
        });
    }

    onSelect = (value) => {
        console.log('onSelect', value);
        this.props.handleSelectPlayer(value);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Please enter player name"

            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
