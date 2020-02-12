import React, { Component }  from 'react';
import { Slider } from 'antd';

class SliderContainer extends Component{

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    state = {
        value: 50
    };

    onChange(value) {
        this.setState({
            value
        });
    }

    render() {

        const { value } = this.state;
        let style= {
          top: ( 100 - value ) + '%'
        };

        return(
            <div className="slider">
                <div className="slider-label __top">100</div>
                <Slider
                    vertical
                    defaultValue={value}
                    tooltipVisible={false}
                    max={100}
                    min={0}
                    step={0.1}
                    onChange={this.onChange}
                />
                <div className="slider-tooltip" style={style}>{value}</div>
                <div className="slider-label __bottom">0</div>
            </div>
        )

    }

}

export default SliderContainer;