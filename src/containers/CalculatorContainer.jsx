import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Calculator from '../components/Calculator';

function CalculatorContainer({ selectedCryptocurrency: value }) {
  const cryptoName = value[0];
  const currencies = value[1];

  const [sum, setSum] = useState();
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedCurrency, selectCurrency] = useState();

  const calculate = useCallback((num) => {
    if (cryptoName && selectedCurrency) {
      Object.entries(currencies).map((el) => {
        if (el[0] === selectedCurrency) {
          setSum((num * el[1]).toFixed(2));
        }
        return null;
      });
    }
  }, [selectedCurrency, cryptoName, currencies]);

  function handleClick(name) {
    selectCurrency(name);
  }

  function handleChange(ev) {
    const { target: { value: num } } = ev;
    setEnteredValue(num);
  }

  function currencyStyle(item) {
    if (selectedCurrency === item) {
      return 'currency selected';
    }
    return 'currency';
  }

  useEffect(() => {
    calculate(enteredValue);
  }, [selectedCurrency, enteredValue, value, calculate]);

  const selectedCoin = cryptoName ? `Selected coin: ${cryptoName}` : 'Select any coin';
  const currencyWarning = selectedCurrency ? '' : 'Choose any currency';
  const showSum = enteredValue && cryptoName && selectedCurrency
  && (
    <span className="calculator__item summary">
      {`${enteredValue} ${cryptoName || ''} will be ${sum} in ${selectedCurrency}`}
    </span>
  );

  return (
    <Calculator
      currencyStyle={currencyStyle}
      handleClick={handleClick}
      handleChange={handleChange}
      enteredValue={enteredValue}
      selectedCoin={selectedCoin}
      selectCurrencyWarning={currencyWarning}
      showSum={showSum}
    />
  );
}

CalculatorContainer.propTypes = {
  selectedCryptocurrency: PropTypes.oneOfType(
    [PropTypes.array, PropTypes.string, PropTypes.object],
  ).isRequired,
};


function mapStateToProps({ selectedCryptocurrency }) {
  return { selectedCryptocurrency };
}

export default connect(mapStateToProps)(CalculatorContainer);
