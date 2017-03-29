import cheerio from 'cheerio'
import request from 'request'
export class Client {
  _GOOGLE_FINANCE_API_PATH = `https://www.google.com/finance/converter?a=1&from=`
  constructor() {}
  async makeRequest(path) {
    return new Promise((resolve, reject) => {
      request(path, (error, resp, body) => {
        return error ? reject(error) : resolve(body ? body : resp);
      })
    })
  }

  async getRate(baseCurrency, destCurrency) {
    const path = `${this._GOOGLE_FINANCE_API_PATH}${baseCurrency}&to=${destCurrency}`
    return await this.makeRequest(path)
      .then(function (body) {
        const $ = cheerio.load(body)
        const html = $('#currency_converter_result .bld').html();
        if (html.indexOf(' ') ) {
          return parseFloat(html.split(' ')[0]);
        }
        throw new Error('InvalidDataReceived')
    })
  }
}

export default () => {
  return new Client({})
}
