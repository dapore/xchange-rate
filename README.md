# Exchange Rate Extractor

[![David](https://img.shields.io/david/dev//xchange-rate.svg)](https://david-dm.org//xchange-rate#info=devDependencies)
[![Travis](https://img.shields.io/travis//xchange-rate.svg)](https://travis-ci.org//xchange-rate)

## Description

A simple wrapper around google finance API for retrieving the exchange rate between two currencies, use at your own risk.


### Usage

```js
import xChanger from '@swapbills/xchange-rate'

const xChangeService = xChanger()

const listAllCurrencies = xChangeService.getCurrencies()

const dollar = xChangeService.getCurrencyInfo('usd')
```


Development Quickstart

```
$ git clone https://github.com/swapbills/xchange-rate.git
$ cd xchange-rate
$ npm install
$ npm run start
```

## Development and Testing

### Source Code

The [xchange-rate source] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:swapbills/xchange-rate.git
```

[xchange-rate source]: https://github.com/swapbills/xchange-rate

### Requirements

You will need [Node.js].

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

and set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[nvm]: https://github.com/creationix/nvm

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run`.
View them with

```
$ npm run
```

#### Production Build

Lint, test, and transpile the production build to `lib` with

```
$ npm run build
```


## License

This npm package is Copyright (c) 2016-2017 SwapBills Global.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.

