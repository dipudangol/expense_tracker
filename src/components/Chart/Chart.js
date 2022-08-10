import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const datapointValues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMax = Math.max(...datapointValues);


    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                />)}

        </div>
    )

}

export default Chart;
