import test from 'ava'
import nock from 'nock'
import { Client, default as getXchangeService } from '../src/xchange-service'

test.beforeEach(async t => {
  t.context.conversionPath = `https://www.google.com/finance/converter?a=1&from=`
  t.context.chartPath = `https://www.google.com/finance/getchart?x=CURRENCY&p=1Y&i=86400&q=`
  t.context.api = `https://www.example.com`
  t.context.currentRate = 4.45
  t.context.currencies = [{
    'symbol': 'AED',
    'name': 'United Arab Emirates Dirham',
    'symbol_native': 'د.إ.\u200f',
    'decimal_digits': 2,
    'rounding': 0,
    'code': 'AED',
    'name_plural': 'UAE dirhams'
  }]
})

test('Should return an instance of xchangeService', async t => {
  const xchangeService = getXchangeService()
  t.truthy(typeof xchangeService === 'object', `Must return an instance of xchangeService`)
})

test('Should return the right path', async t => {
  const xchangeService = new Client()
  const conversionPath = xchangeService.getUri('converter')
  const chartPath = xchangeService.getUri('chart')
  t.is(conversionPath, t.context.conversionPath, `Must return the right conversionPath`)
  t.is(chartPath, t.context.chartPath, `Must return the right chartPath`)
})

test('Should throw on the wrong path', async t => {
  const xchangeService = new Client()
  try {
    xchangeService.getUri('wrongPath')
  } catch (error) {
    t.pass(`Must throw an error`)
  }
})

test('Can make request', async t => {
  nock(t.context.api)
    .get(`/api/currencies/rate`)
    .reply(200, t.context.currentRate)
  const xchangeService = new Client()
  const rate = await xchangeService.makeGetRequest(`${t.context.api}/api/currencies/rate`)
  t.is(parseFloat(rate), t.context.currentRate, `Rate must be ${t.context.currentRate}`)
})

test('MakeRequest can throw', async t => {
  nock(t.context.api)
    .get(`/api/error`)
    .replyWithError({msg: `there was an error`})
  const xchangeService = new Client()
  try {
    await xchangeService.makeGetRequest(`${t.context.api}/api/error`)
  } catch (error) {
    t.pass(`makeRequest must be able to throw`)
  }
  nock(t.context.api)
    .get(`/api/error`)
    .reply(200, null)
  try {
    await xchangeService.makeGetRequest(`${t.context.api}/api/error`)
  } catch (error) {
    t.pass(`makeRequest must be able to throw`)
  }
})

test('Get rateMetaData', async t => {
  const meta = `meta`
  nock(`https://www.google.com/finance`)
    .get(`/converter?a=1&from=usd&to=ghs`)
    .reply(200, `<html><body><input name=meta value="${meta}" /></body</html>`)
  const xchangeService = new Client()
  const res = await xchangeService.getRateMeta('usd', 'ghs')
  t.is(res, meta, `Must return rate meta`)
})

test('Get rateMetaData throws', async t => {
  nock(`https://www.google.com/finance`)
    .get(`/converter?a=1&from=usd&to=ghs`)
    .reply(200, `<html></html>`)
  const xchangeService = new Client()
  try {
    await xchangeService.getRateMeta('usd', 'ghs')
  } catch (error) {
    t.pass(`Must throw on bad data`)
  }
})

test('Get rate rate', async t => {
  const meta = `meta`
  nock(`https://www.google.com/finance`)
    .get(`/converter?a=1&from=usd&to=ghs`)
    .reply(200, `<html><body><input name=meta value="${meta}" /></body></html>`)

  nock(`https://www.google.com/finance`)
      .get(`/converter?a=1&from=usd&to=ghs&meta=${meta}`)
      .reply(200, `<html>
                    <body>
                      <div id="currency_converter_result">
                        <span class="bld">${t.context.currentRate} GHS</span>
                      </div>
                    </body
                  </html>`)

  const xchangeService = new Client()
  const res = await xchangeService.getRate('usd', 'ghs')
  t.is(res, t.context.currentRate, `Must return rate`)
})

test('Get rate can throw', async t => {
  const meta = `meta`
  nock(`https://www.google.com/finance`)
    .get(`/converter?a=1&from=usd&to=ghs`)
    .reply(200, `<html><body><input name=meta value="${meta}" /></body></html>`)

  nock(`https://www.google.com/finance`)
      .get(`/converter?a=1&from=usd&to=ghs&meta=${meta}`)
      .reply(200, `<html></html>`)

  const xchangeService = new Client()
  try {
    await xchangeService.getRate('usd', 'ghs')
  } catch (error) {
    t.pass(`Must throw on bad data`)
  }
})

test('Should get list of currencies', async t => {
  const xchangeService = new Client()
  const currencies = await xchangeService.getCurrencies()
  t.truthy(currencies, `Must return currencies`)
  t.truthy(currencies.length, `Must return a non-empty list`)
  const currencyAttributesExist =
    currencies[0].symbol &&
    currencies[0].name &&
    currencies[0].symbol_native &&
    currencies[0].decimal_digits &&
    currencies[0].code &&
    currencies[0].name_plural
  t.truthy(currencyAttributesExist, `Must have a full currency object`)
})

test('Should get currency information', async t => {
  const xchangeService = new Client()
  const currency = await xchangeService.getCurrencyInfo('usd')
  t.truthy(currency, `Must return currency`)
  t.truthy(Object.keys(currency).length, `Must return an object with keys`)
  const currencyAttributesExist =
    currency.symbol &&
    currency.name &&
    currency.symbol_native &&
    currency.decimal_digits &&
    currency.code &&
    currency.name_plural
  t.truthy(currencyAttributesExist, `Must have a full currency object`)
})

test('Return image url', async t => {
  const xchangeService = new Client()
  const uri = await xchangeService.getChartUri('usd', 'ghs')
  t.truthy(uri, `Must return an image uri`)
})
