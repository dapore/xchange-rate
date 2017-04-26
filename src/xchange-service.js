import cheerio from 'cheerio'
import request from 'request'
import data from './data.json'

export class Client {

  _API_BASE = `https://www.google.com/finance/`

  _paths = {
    converter: `converter?a=1&from=`,
    chart: `getchart?x=CURRENCY&p=1Y&i=86400&q=`
  }

  constructor() {}

  getUri(path) {
    if (!this._paths[path]) {
      throw new Error('PathDoesntExistException')
    }
    return `${this._API_BASE}${this._paths[path]}`
  }

  async makeGetRequest(path) {
    return new Promise((resolve, reject) => {
      request(path, (error, resp, body) => {
        return error ? reject(error) : resolve(body ? body : resp);
      })
    })
  }

  async getRate(baseCurrency, destCurrency) {
    const path = `${this.getUri('converter')}${baseCurrency}&to=${destCurrency}`
    return await this.makeGetRequest(path)
      .then(function (body) {
        const $ = cheerio.load(body)
        const html = $('#currency_converter_result .bld').html();
        if (html.indexOf(' ') ) {
          return parseFloat(html.split(' ')[0]);
        }
        throw new Error('InvalidDataReceived')
    })
  }

  async getCurrencies() {
    return data
  }

  async getCurrencyInfo(query) {
    query = query.toLowerCase()
    return data
      .find( currency =>
      currency.code.toLowerCase() === query ||
      currency.symbol.toLowerCase()  === query ||
      currency.symbol_native.toLowerCase()  === query ||
      currency.name_plural.toLowerCase()  === query ||
      currency.symbol_native.toLowerCase()  === query )
  }

  async getChartUri(baseCurrency, destCurrency) {
    return `${this.getUri('chart')}${baseCurrency.toUpperCase()}${destCurrency.toUpperCase()}`
  }
}

export default () => {
  return new Client()
}
