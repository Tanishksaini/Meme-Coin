import React from 'react';

const DexChart = () => {
  return (
    <div className="dex-chart">
      <iframe
        title="Dex Chart"
        src="https://www.dextools.io/app/solana/pair-explorer/your-pair-address"
        width="100%"
        height="400px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DexChart;
