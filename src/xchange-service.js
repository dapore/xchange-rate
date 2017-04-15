import cheerio from 'cheerio'
import request from 'request'
import data from './data.json'

export class Client {
  constructor() {
    this._GOOGLE_FINANCE_API_PATH = `https://www.google.com/finance/converter?a=1&from=`
  }
  async makeGetRequest(path) {
    return new Promise((resolve, reject) => {
      request(path, (error, resp, body) => {
        return error ? reject(error) : resolve(body ? body : resp);
      })
    })
  }

  async getRate(baseCurrency, destCurrency) {
    const path = `${this._GOOGLE_FINANCE_API_PATH}${baseCurrency}&to=${destCurrency}`
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
}

export default () => {
  return new Client()
}
