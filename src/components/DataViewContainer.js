import React from 'react';
import {ShotChart} from "./ShortChar";
import {CountSlider} from "./CountSlider";
import _ from "lodash";
import { Radio, Row, Col } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
    }

    onSliderChange = (value) => {
        this.setState({minCount: value});
    }

    onCharTypeChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            chartType: e.target.value,
        });
    }

    render() {
        return(
            <div className="data-view">
                <ShotChart minCount={this.state.minCount} playerId={this.props.playerId} chartType={this.state.chartType}/>
                <div className="filters">
                    {this.state.chartType == 'hexbin' ? (<CountSlider
                            onSliderChange={_.debounce(this.onSliderChange, 500)}
                            minCount={this.state.minCount}/>
                    ) : null}

                    <Row className="chart-type-radio">
                        <Col span={12} offset={3}>
                            <RadioGroup onChange={this.onCharTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}