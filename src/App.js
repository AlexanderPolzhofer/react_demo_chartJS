import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {

  const [assets, setAssets] = useState([]);

  useEffect(() => {

    const url = 'https://api.coincap.io/v2/assets';

    const dataFetching = async () => {
      const coincapData = await fetch(url);
      const response = await coincapData.json();

      setAssets(response.data);
    }

    dataFetching();

  }, []);

  return (
    <div className="App">
      <div className='App-header'>
        <h1>Data visualization ChartJS</h1>
      </div>
      <div className='App-content'>
        {
          assets.map(asset => <pre key={asset.id}>{asset.id}</pre>)
        }
      </div>
    </div>
  );
}

export default App;
