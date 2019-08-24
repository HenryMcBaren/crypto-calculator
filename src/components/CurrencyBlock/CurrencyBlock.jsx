import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyBlock.css';

function CurrencyBlock({ values, handleClick }) {
  const cryptoName = values[0];
  const currency = Object.entries(values[1]);

  function cryptoImg() {
    let imgLink = '';
    switch (cryptoName) {
      case 'BTC': imgLink = 'https://endotech.io/img/coinicon/BTC.png';
        break;
      case 'ETH': imgLink = 'https://endotech.io/img/coinicon/ETH.png';
        break;
      case 'XRP': imgLink = 'https://endotech.io/img/coinicon/XRP.png';
        break;
      default:
    }
    return imgLink;
  }

  return (
    <div className="currency-block" onClick={() => handleClick(values)}>
      <div className="currency-block__header">
        <img src={cryptoImg()} alt="crypto" />
        <h2>{cryptoName}</h2>
      </div>
      <div className="currency-block_currencies">
        {currency.map((body) => <p key={body[0]}>{`${body[0]}: ${body[1]}`}</p>)}
      </div>
    </div>
  );
}

CurrencyBlock.propTypes = {
  values: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CurrencyBlock;
