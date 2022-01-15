import React, { useEffect, useState } from 'react';
import './App.css';


import BarChart from './components/Barchart.component';

const App = () => {

  const [chartData, setChartData] = useState({});

  useEffect(() => {

    const url = 'https://api.coincap.io/v2/assets';

    const dataFetching = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setChartData({
        labels: data.data.map(crypto => crypto.name),
        datasets: [
          {
            label: 'Price in USD',
            data: data.data.map(crypto => crypto.priceUsd),
            backgroundColor: [
              '#ffbb11',
              '#ecf0f1',
              '#50AF95',
              '#f3ba2f',
              '#2a71d0'
            ],
            borderWidth: 1
          }
        ]
      });
    };

    dataFetching();

  }, []);



  return (
    <div className="App">
      <div className='App-header'>
        <h1>Data visualization ChartJS</h1>
      </div>
      <div className='App-content'>
        <BarChart chartData={chartData} />
      </div>
    </div>
  );
}

export default App;
