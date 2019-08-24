import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyRequested, setCryptocurrency } from '../../actions';
import LoadingBoundary from '../LoadingBoundary';
import './App.css';
import CurrencyBlock from '../CurrencyBlock/CurrencyBlock';
import CalculatorContainer from '../../containers/CalculatorContainer';
import ErrorIndicator from '../ErrorIndicator';

function App(props) {
  const {
    currencyRequest, selectCryptocurrency, currencies, error,
  } = props;

  useEffect(() => {
    currencyRequest();
  }, [currencyRequest]);

  function selectedItem(item) {
    selectCryptocurrency(item);
  }
  if (error) return <span className="error-message"><ErrorIndicator /></span>;
  return (
    <LoadingBoundary>
      <div className="app">
        <div className="currency-blocks">
          {
            Object.entries(currencies).map((val) => {
              return <CurrencyBlock key={val[0]} values={val} handleClick={selectedItem} />;
            })
          }
        </div>
        <CalculatorContainer />
      </div>
    </LoadingBoundary>
  );
}

App.propTypes = {
  currencyRequest: PropTypes.func.isRequired,
  selectCryptocurrency: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const { fetching: { error, currencies } } = state;
  return {
    error, currencies,
  };
}
const mapDispatchToProps = {
  currencyRequest: currencyRequested,
  selectCryptocurrency: setCryptocurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
