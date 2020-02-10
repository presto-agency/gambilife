import React  from 'react';
import ReactSlider from 'react-slider'

export const Slider = () => {

    return(
        <div className="slider">
            <ReactSlider
                className="vertical-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[0, 50, 100]}
                ariaLabel={['Lowest thumb', 'Middle thumb', 'Top thumb']}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                orientation="vertical"
                invert
                pearling
                minDistance={0}
            />
        </div>
    )

};