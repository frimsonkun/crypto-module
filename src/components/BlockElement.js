import React, { useState, useEffect } from 'react';


const BlockElement = ({ number, currency }) => {
 const [intPart, setIntPart] = React.useState(0);
 const [floatPart, setFloatPart] = React.useState(0);
 const [selectedCurrencies, setSelectedCurrencies] = useState([]);

 React.useEffect(() => {
    setIntPart(Math.floor(Math.random() * 200) + 1);
    setFloatPart(Math.floor(Math.random() * 9999999) + 1);
 }, [number]);

const currenciesArray = [
	['BTC', '../img/images.png'],
	['ETH', '../img/images.png'],
	['DIG', '../img/images.png'],
	['DICK', '../img/images.png'],
]

React.useEffect(() => {
	const selectedCount = Math.floor(Math.random() * currenciesArray.length) + 1;
	const selectedItems = new Set();

	while (selectedItems.size < 2) {
	  const randomIndex = Math.floor(Math.random() * currenciesArray.length);
	  selectedItems.add(currenciesArray[randomIndex]);
	}

	setSelectedCurrencies(Array.from(selectedItems));
}, []);

 return (
    <div className="block-element">
      <h3>n hours ago</h3>
      <div className="element-value">
        {intPart}.{floatPart.toString().padStart(7, '0')}
        <div className="currency-list">
        {selectedCurrencies.map(([currency, imageUrl], index) => (
          <div key={index}>
			 	<img src={imageUrl} alt={currency} />
            {currency}
          </div>
        ))}
      </div>
      </div>
    </div>
 );
};

export default BlockElement;