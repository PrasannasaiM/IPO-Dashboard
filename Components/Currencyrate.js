import React, { useState, useEffect } from 'react';

const Currencyrate = () => {
  const [currencyRates, setCurrencyRates] = useState({});
  const apiKey = 'YOUR_API_KEY';
  const baseCurrency = 'USD';

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}.json?apikey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCurrencyRates(data.rates);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    fetchCurrencyRates();
  }, [apiKey, baseCurrency]);

  // Render the fetched currency rates in the UI or use the data as needed
  return (
    <div className="Currencyrate">
      <h1>Upcoming Currency Rates</h1>
      <h2>1.Sameera Agro and Infra Limited = 80 </h2>
      <h2>2.Facebook = 90</h2>
      <h2>3.General Motors = 95</h2>
      <h2>4.Prasanna transport Ltd = 100</h2>       
      <ul>
        {Object.entries(currencyRates).map(([currency, rate]) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Currencyrate;
