require('source-map-support').install();

'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

require('mochawait');

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _wd = require('wd');

var _wd2 = _interopRequireDefault(_wd);

var _sampleApps = require('sample-apps');

var _sampleApps2 = _interopRequireDefault(_sampleApps);

var should = _chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var local = {
  host: 'localhost',
  port: 4723
};

var sauce = {
  host: 'ondemand.saucelabs.com',
  port: 80,
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_ACCESS_KEY
};

var desiredටcapabilities = {
  "platformName": "iOS",
  "platformVersion": "8.3",
  "deviceName": "iPhone 5s",
  //"app": sampleApp('TestApp')
  "browserName": "Safari"
};

describe('example', function () {
  var _this = this;

  this.timeout(30000);

  var driver;

  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          driver = _wd2['default'].promiseChainRemote(local);
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.init(desiredටcapabilities));

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  it('should start an ios app', function callee$1$0() {
    var link, contexts, windowHandles;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.get('http://www.dtelepathy.com/blog/design/responsive-design-great-ux'));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.elementByXpath("/html/body/div[3]/div[2]/div/div[11]/div[2]/div[2]/p/a"));

        case 4:
          link = context$2$0.sent;
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(link.click());

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(driver.contexts());

        case 9:
          contexts = context$2$0.sent;

          console.log(contexts);
          context$2$0.next = 13;
          return _regeneratorRuntime.awrap(driver.windowHandles());

        case 13:
          windowHandles = context$2$0.sent;

          console.log(windowHandles);
          return context$2$0.abrupt('return');

        case 16:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });

  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.quit());

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi90ZXN0LmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFFaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7UUFDdEMsV0FBVzs7eUJBQ0ksV0FBVzs7OztzQkFDbkIsUUFBUTs7OztrQkFDUCxJQUFJOzs7OzBCQUNHLGFBQWE7Ozs7QUFFbkMsSUFBSSxNQUFNLEdBQUcsa0JBQUssTUFBTSxFQUFFLENBQUE7QUFDMUIsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQTs7QUFFeEIsSUFBSSxLQUFLLEdBQUc7QUFDVixNQUFJLEVBQUUsV0FBVztBQUNqQixNQUFJLEVBQUUsSUFBSTtDQUNYLENBQUE7O0FBRUQsSUFBSSxLQUFLLEdBQUc7QUFDVixNQUFJLEVBQUUsd0JBQXdCO0FBQzlCLE1BQUksRUFBRSxFQUFFO0FBQ1IsVUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztBQUNwQyxVQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7Q0FDdkMsQ0FBQTs7QUFFRCxJQUFJLG9CQUFvQixHQUFHO0FBQ3pCLGdCQUFjLEVBQUMsS0FBSztBQUNwQixtQkFBaUIsRUFBRSxLQUFLO0FBQ3hCLGNBQVksRUFBRSxXQUFXOztBQUV6QixlQUFhLEVBQUUsUUFBUTtDQUN4QixDQUFBOztBQUVELFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBVzs7O0FBQzdCLE1BQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7O0FBRW5CLE1BQUksTUFBTSxDQUFDOztBQUVYLFFBQU0sQ0FBRTs7OztBQUNOLGdCQUFNLEdBQUcsZ0JBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUE7OzJDQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDOzs7Ozs7O0dBQ3hDLENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMseUJBQXlCLEVBQUU7UUFFeEIsSUFBSSxFQUVKLFFBQVEsRUFFUixhQUFhOzs7OzsyQ0FMWCxNQUFNLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDOzs7OzJDQUNuRSxNQUFNLENBQUMsY0FBYyxDQUFDLHdEQUF3RCxDQUFDOzs7QUFBNUYsY0FBSTs7MkNBQ0YsSUFBSSxDQUFDLEtBQUssRUFBRTs7OzsyQ0FDRyxNQUFNLENBQUMsUUFBUSxFQUFFOzs7QUFBbEMsa0JBQVE7O0FBQ1osaUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7OzJDQUNLLE1BQU0sQ0FBQyxhQUFhLEVBQUU7OztBQUE1Qyx1QkFBYTs7QUFDakIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7Ozs7Ozs7O0dBRTNCLENBQUMsQ0FBQTs7QUFFRixPQUFLLENBQUU7Ozs7OzJDQUNDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7R0FDcEIsQ0FBQyxDQUFBO0NBRUgsQ0FBQyxDQUFBIiwiZmlsZSI6ImxpYi90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHJhbnNwaWxlOm1vY2hhXG5cbmltcG9ydCBjaGFpIGZyb20gJ2NoYWknXG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCdcbmltcG9ydCAnbW9jaGF3YWl0J1xuaW1wb3J0IGRlbm9kZWlmeSBmcm9tICdkZW5vZGVpZnknXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgd2QgZnJvbSAnd2QnXG5pbXBvcnQgc2FtcGxlQXBwIGZyb20gJ3NhbXBsZS1hcHBzJ1xuXG5sZXQgc2hvdWxkID0gY2hhaS5zaG91bGQoKVxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpXG5cbmxldCBsb2NhbCA9IHtcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIHBvcnQ6IDQ3MjNcbn1cblxubGV0IHNhdWNlID0ge1xuICBob3N0OiAnb25kZW1hbmQuc2F1Y2VsYWJzLmNvbScsXG4gIHBvcnQ6IDgwLFxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuU0FVQ0VfVVNFUk5BTUUsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TQVVDRV9BQ0NFU1NfS0VZXG59XG5cbmxldCBkZXNpcmVk4LanY2FwYWJpbGl0aWVzID0ge1xuICBcInBsYXRmb3JtTmFtZVwiOlwiaU9TXCIsXG4gIFwicGxhdGZvcm1WZXJzaW9uXCI6IFwiOC4zXCIsXG4gIFwiZGV2aWNlTmFtZVwiOiBcImlQaG9uZSA1c1wiLFxuICAvL1wiYXBwXCI6IHNhbXBsZUFwcCgnVGVzdEFwcCcpXG4gIFwiYnJvd3Nlck5hbWVcIjogXCJTYWZhcmlcIlxufVxuXG5kZXNjcmliZSgnZXhhbXBsZScsIGZ1bmN0aW9uKCkge1xuICB0aGlzLnRpbWVvdXQoMzAwMDApXG5cbiAgdmFyIGRyaXZlcjtcblxuICBiZWZvcmUoIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBkcml2ZXIgPSB3ZC5wcm9taXNlQ2hhaW5SZW1vdGUobG9jYWwpXG4gICAgYXdhaXQgZHJpdmVyLmluaXQoZGVzaXJlZOC2p2NhcGFiaWxpdGllcylcbiAgfSlcblxuICBpdCgnc2hvdWxkIHN0YXJ0IGFuIGlvcyBhcHAnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgYXdhaXQgZHJpdmVyLmdldCgnaHR0cDovL3d3dy5kdGVsZXBhdGh5LmNvbS9ibG9nL2Rlc2lnbi9yZXNwb25zaXZlLWRlc2lnbi1ncmVhdC11eCcpXG4gICAgbGV0IGxpbmsgPSBhd2FpdCBkcml2ZXIuZWxlbWVudEJ5WHBhdGgoXCIvaHRtbC9ib2R5L2RpdlszXS9kaXZbMl0vZGl2L2RpdlsxMV0vZGl2WzJdL2RpdlsyXS9wL2FcIilcbiAgICBhd2FpdCBsaW5rLmNsaWNrKClcbiAgICBsZXQgY29udGV4dHMgPSBhd2FpdCBkcml2ZXIuY29udGV4dHMoKVxuICAgIGNvbnNvbGUubG9nKGNvbnRleHRzKVxuICAgIGxldCB3aW5kb3dIYW5kbGVzID0gYXdhaXQgZHJpdmVyLndpbmRvd0hhbmRsZXMoKVxuICAgIGNvbnNvbGUubG9nKHdpbmRvd0hhbmRsZXMpXG4gICAgcmV0dXJuXG4gIH0pXG5cbiAgYWZ0ZXIoIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIucXVpdCgpXG4gIH0pXG5cbn0pXG4iXSwic291cmNlUm9vdCI6Ii4uLy4uIn0=
