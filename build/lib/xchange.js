'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _dataJson = require('./data.json');

var _dataJson2 = _interopRequireDefault(_dataJson);

var Client = (function () {
  function Client() {
    _classCallCheck(this, Client);

    this._GOOGLE_FINANCE_API_PATH = 'https://www.google.com/finance/converter?a=1&from=';
  }

  _createClass(Client, [{
    key: 'makeGetRequest',
    value: function makeGetRequest(path) {
      return _regeneratorRuntime.async(function makeGetRequest$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', new _Promise(function (resolve, reject) {
              (0, _request2['default'])(path, function (error, resp, body) {
                return error ? reject(error) : resolve(body ? body : resp);
              });
            }));

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'getRate',
    value: function getRate(baseCurrency, destCurrency) {
      var path;
      return _regeneratorRuntime.async(function getRate$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            path = '' + this._GOOGLE_FINANCE_API_PATH + baseCurrency + '&to=' + destCurrency;
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(this.makeGetRequest(path).then(function (body) {
              var $ = _cheerio2['default'].load(body);
              var html = $('#currency_converter_result .bld').html();
              if (html.indexOf(' ')) {
                return parseFloat(html.split(' ')[0]);
              }
              throw new Error('InvalidDataReceived');
            }));

          case 3:
            return context$2$0.abrupt('return', context$2$0.sent);

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'getCurrencies',
    value: function getCurrencies() {
      return _regeneratorRuntime.async(function getCurrencies$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _dataJson2['default']);

          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }]);

  return Client;
})();

exports.Client = Client;

exports['default'] = function () {
  return new Client({});
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi94Y2hhbmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQW9CLFNBQVM7Ozs7dUJBQ1QsU0FBUzs7Ozt3QkFDWixhQUFhOzs7O0lBRWpCLE1BQU07QUFFTixXQUZBLE1BQU0sR0FFSDswQkFGSCxNQUFNOztTQUNqQix3QkFBd0I7R0FDUjs7ZUFGTCxNQUFNOztXQUdHLHdCQUFDLElBQUk7Ozs7Z0RBQ2hCLGFBQVksVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLHdDQUFRLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFLO0FBQ25DLHVCQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7ZUFDNUQsQ0FBQyxDQUFBO2FBQ0gsQ0FBQzs7Ozs7OztLQUNIOzs7V0FFWSxpQkFBQyxZQUFZLEVBQUUsWUFBWTtVQUNoQyxJQUFJOzs7O0FBQUosZ0JBQUksUUFBTSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsWUFBWSxZQUFPLFlBQVk7OzZDQUNsRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUNuQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7QUFDcEIsa0JBQU0sQ0FBQyxHQUFHLHFCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM1QixrQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekQsa0JBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRztBQUN0Qix1QkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQ3ZDO0FBQ0Qsb0JBQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTthQUN6QyxDQUFDOzs7Ozs7Ozs7O0tBQ0g7OztXQUVrQjs7Ozs7Ozs7Ozs7S0FFbEI7OztTQTFCVSxNQUFNOzs7OztxQkE2QkosWUFBTTtBQUNuQixTQUFPLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0NBQ3RCIiwiZmlsZSI6ImxpYi94Y2hhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbydcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEuanNvbidcblxuZXhwb3J0IGNsYXNzIENsaWVudCB7XG4gIF9HT09HTEVfRklOQU5DRV9BUElfUEFUSCA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL2ZpbmFuY2UvY29udmVydGVyP2E9MSZmcm9tPWBcbiAgY29uc3RydWN0b3IoKSB7fVxuICBhc3luYyBtYWtlR2V0UmVxdWVzdChwYXRoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcXVlc3QocGF0aCwgKGVycm9yLCByZXNwLCBib2R5KSA9PiB7XG4gICAgICAgIHJldHVybiBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKGJvZHkgPyBib2R5IDogcmVzcCk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBnZXRSYXRlKGJhc2VDdXJyZW5jeSwgZGVzdEN1cnJlbmN5KSB7XG4gICAgY29uc3QgcGF0aCA9IGAke3RoaXMuX0dPT0dMRV9GSU5BTkNFX0FQSV9QQVRIfSR7YmFzZUN1cnJlbmN5fSZ0bz0ke2Rlc3RDdXJyZW5jeX1gXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubWFrZUdldFJlcXVlc3QocGF0aClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoYm9keSlcbiAgICAgICAgY29uc3QgaHRtbCA9ICQoJyNjdXJyZW5jeV9jb252ZXJ0ZXJfcmVzdWx0IC5ibGQnKS5odG1sKCk7XG4gICAgICAgIGlmIChodG1sLmluZGV4T2YoJyAnKSApIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChodG1sLnNwbGl0KCcgJylbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZERhdGFSZWNlaXZlZCcpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGdldEN1cnJlbmNpZXMoKSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiBuZXcgQ2xpZW50KHt9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLi8uLiJ9
