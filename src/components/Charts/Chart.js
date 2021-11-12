import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const { dataPoints } = props;

  const values = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        const { id, label, value } = dataPoint;
        return (
          <ChartBar key={id} label={label} value={value} maxValue={maxValue} />
        );
      })}
    </div>
  );
}

export default Chart;
