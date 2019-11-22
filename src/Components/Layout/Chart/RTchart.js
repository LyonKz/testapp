import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"

export default class RTChart extends Component{
    render(){

          return(
              <div>
                    <ReactSpeedometer
                        maxValue={500}
                        value={473}
                        needleColor="black"
                        segments={4}
                        segmentColors={['red','yellow','green','blue']}
                        ringWidth={40}
                        />

                    <ReactSpeedometer
                    needleHeightRatio={0.7}
                    maxSegmentLabels={5}
                    segments={3}
                    customSegmentStops={[
                        0,
                        500,
                        750,
                        900,
                        1000
                    ]}
                    segmentColors={[
                        'firebrick',
                        'tomato',
                        'gold',
                        'limegreen'
                    ]}
                    value={333}
                    />
              </div>
          )
      }

}