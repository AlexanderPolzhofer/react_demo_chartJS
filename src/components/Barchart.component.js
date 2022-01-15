import { BarController } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.register(BarController);

const BarChart = ({ chartData }) => {

    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Cryptocurrency prices"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </div>
    );
};

export default BarChart;
