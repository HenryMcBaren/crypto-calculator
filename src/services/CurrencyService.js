import Axios from 'axios';

class CurrencyService {
  url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR,RUB';

  getCurrency = async () => {
    const res = await Axios.get(this.url);
    if (res.statusText !== 'OK') {
      throw new Error(`Could not fetch ${this.url}`
      + `, received ${res.status}`);
    }
    return res.data;
  }
}

export default CurrencyService;
