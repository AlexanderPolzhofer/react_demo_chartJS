import { BarController, CategoryScale, LinearScale } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.register(
    BarController,
    CategoryScale,
    LinearScale
);

const BarChart = ({ chartData }) => {

    return (
        <div>
            <Bar
                style={{ width: '40vw', height: '50vw' }}
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Cryptocurrency prices"
                        },
                        legend: {
                            display: true,
                            position: "top"
                        }
                    }
                }}
            />
        </div>
    );
};

export default BarChart;
