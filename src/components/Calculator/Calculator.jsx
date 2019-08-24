import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

function Calculator(props) {
  const {
    selectedCoin,
    selectCurrencyWarning,
    enteredValue,
    handleChange,
    currencyStyle,
    handleClick,
    showSum,
  } = props;

  return (
    <div className="calculator">
      <span className="calculator__item selected-crypto">{selectedCoin}</span>
      <span className="calculator__item selected-crypto">{selectCurrencyWarning}</span>
      <div className="calculator__item calculator__form">
        <span>Volume: </span>
        <input type="number" value={enteredValue} onChange={handleChange} />
      </div>
      <div className="calculator__item currencies">
        <span className={currencyStyle('USD')} onClick={() => handleClick('USD')}>USD</span>
        <span className={currencyStyle('EUR')} onClick={() => handleClick('EUR')}>EUR</span>
        <span className={currencyStyle('RUB')} onClick={() => handleClick('RUB')}>RUB</span>
      </div>
      {showSum}
    </div>
  );
}

Calculator.propTypes = {
  selectedCoin: PropTypes.string.isRequired,
  selectCurrencyWarning: PropTypes.string.isRequired,
  enteredValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  currencyStyle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  showSum: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Calculator;
