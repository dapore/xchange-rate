import { Client } from '../src/xchange-service';
import { expect } from 'chai';

describe('Client', () => {

  const xchangeService = new Client();

  it('should return right path', async () => {
    const pathConverter = xchangeService.getUri('converter')
    const pathChart = xchangeService.getUri('chart')

    expect(pathConverter).equal(`https://www.google.com/finance/converter?a=1&from=`)
    expect(pathChart).equal(`https://www.google.com/finance/getchart?x=CURRENCY&p=1Y&i=86400&q=`)
  })

  it('should make request', async (done) => {
    const rightPath = `https://www.google.com`
    const wrongPath = `https://a.b.c:-1`

    xchangeService.makeGetRequest(rightPath)
      .then(res => {
        expect(res.length > 0).equal(true)
        done()
      })
      .catch(error => {
        done(new Error('RequestShouldNotFail'))
      })

    xchangeService.makeGetRequest(wrongPath)
        .then(res => {
          done(new Error('RequestShouldFail'))
        })
        .catch(error => {
          expect( Object.keys(error).length > 0 ).equal(true)
          done()
        })
  })

  it('should get exhange rate', async (done) => {
    xchangeService.getRate('ghs', 'usd')
      .then(rate => {
        expect(isNaN(rate)).equal(false)
        done()
      })
      .catch(error => {
        done(new Error('CouldNotGetRateException'))
      })
  })

  it('should get list of currencies', async () => {
    const list = await xchangeService.getCurrencies()
    expect(list.length > 0).equal(true)
  })

  it('should get one currcy information', async () => {
    const info = await xchangeService.getCurrencyInfo('GHS')
    expect(Object.keys(info).length > 0).equal(true)
  })

  it('should get uri for chart', async () => {
    const uri = await xchangeService.getChartUri('GHS', 'USD')
    expect(uri.length > 0).equal(true)
  })
});
