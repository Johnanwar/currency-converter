import React from 'react';

function CurrencyConverter({
  amount, onAmountChange, onCurrencyChange, currency, currencies, disabled,
}) {
  return (
    <div className="currency-converter-container">
      <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map(((currency) => (
          <option value={currency}>{currency}</option>
        )))}
      </select>
      <input disabled={disabled} type="number" value={amount} onChange={(e) => onAmountChange(e.target.value)} />

    </div>
  );
}

export default CurrencyConverter;
