import cheerio from 'cheerio'
import request from 'request'
import data from './data.json'

export class Client {
  constructor () {
    this._API_BASE = `https://finance.google.com/finance/`
    this._paths = {
      converter: `converter`, // ?a=1&from`,
      chart: `getchart` // ?x=CURRENCY&p=1Y&i=86400&q=`
    }
  }

  getUri (path) {
    if (!this._paths[path]) {
      throw new Error('PathDoesntExistException')
    }
    return `${this._API_BASE}${this._paths[path]}`
  }

  async getFromRemote (options) {
    return new Promise((resolve, reject) => {
      request(options, (error, resp, body) => {
        return error ? reject(error) : resolve(body || resp)
      })
    })
  }

  async getRate (baseCurrency, destCurrency, proxyUrl = '') {
    const path = `${proxyUrl}${this.getUri('converter')}`// `${baseCurrency}&to=${destCurrency}`
    return this.getFromRemote({
      url: path,
      qs: { a: '1', from: baseCurrency, to: destCurrency },
      headers: {
        'swapBills-token': Date.now(),
        'postman-token': '2cdab2a1-a6ef-33ec-7509-0ab90de6f802',
        'cache-control': 'no-cache'
      }
    })
      .then(function (body) {
        const $ = cheerio.load(body)
        const html = $('#currency_converter_result .bld').html()
        if (html && html.indexOf(' ') > -1) {
          return parseFloat(html.split(' ')[0])
        }
        throw new Error('InvalidDataReceived')
      })
  }

  async getCurrencies () { return data }

  async getCurrencyInfo (query) {
    query = query.toLowerCase()
    return data
      .find(currency =>
      currency.code.toLowerCase() === query ||
      currency.symbol.toLowerCase() === query ||
      currency.symbol_native.toLowerCase() === query ||
      currency.name_plural.toLowerCase() === query ||
      currency.symbol_native.toLowerCase() === query)
  }

  async getChartUri (baseCurrency, destCurrency, proxyUrl = '') {
    return `${proxyUrl}${this.getUri('chart')}?x=CURRENCY&p=1Y&i=86400&q=${baseCurrency.toUpperCase()}${destCurrency.toUpperCase()}`
  }
}

export default () => new Client()
