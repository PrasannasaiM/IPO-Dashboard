// IPOComponent.js
import React, { useState, useEffect } from 'react';

const IPOComponent = () => {
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    // Fetch IPO data from API
    fetch('https://api.example.com/ipo-data')
      .then(response => response.json())
      .then(data => setIpoData(data))
      .catch(error => console.error('Error fetching IPO data:', error));
  }, []);

  return (
    <div>
      <h2>Upcoming IPOs</h2>
      {/* Display IPO data */}
      {ipoData.map(ipo => (
        <div key={ipo.id}>
          <p>Company: {ipo.companyName}</p>
          <p>Date: {ipo.date}</p>
          {/* Other IPO details */}
        </div>
      ))}
    </div>
  );
};

export default IPOComponent;
