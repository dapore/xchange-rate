import { Client } from '../src/xchange-service';
import { expect } from 'chai';

describe('Client', () => {
  it('should return right result on speak', async () => {
    const xchangeService = new Client();
    const currencies = await xchangeService.getCurrencies()
    console.log('the curries , ', currencies)
    expect(currencies.length > 100).equal(true)

    const currency = await xchangeService.getCurrencyInfo('GHS')
    console.log('the currency , ', currency)
    expect(Object.keys(currencies).length > 0).equal(true)
      //.to.be. equal(`${name} makes a noise.`);
  });
});
