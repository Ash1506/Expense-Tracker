import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) =>{
    const dataPointValues= props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); //To make all elements of the array as the arguments for max method.

    return (
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        ))}
    </div>
    );
};

export default Chart;