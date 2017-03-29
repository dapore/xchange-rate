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

var should = _chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('simple mocha test', function () {

  it('should do maths', function callee$1$0() {
    var a, b, c;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          a = 1, b = 2;
          c = a + b;

          c.should.equal(3);

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZXhhbXBsZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFFaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7UUFDdEMsV0FBVzs7eUJBQ0ksV0FBVzs7OztzQkFDbkIsUUFBUTs7OztBQUV0QixJQUFJLE1BQU0sR0FBRyxrQkFBSyxNQUFNLEVBQUUsQ0FBQTtBQUMxQixrQkFBSyxHQUFHLDZCQUFnQixDQUFBOztBQUV4QixRQUFRLENBQUMsbUJBQW1CLEVBQUUsWUFBTTs7QUFFbEMsSUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBRWhCLENBQUMsRUFBTSxDQUFDLEVBQ1IsQ0FBQzs7OztBQURELFdBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDWixXQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUM7O0FBQ1gsV0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Ozs7Ozs7R0FDbEIsQ0FBQyxDQUFBO0NBRUgsQ0FBQyxDQUFBIiwiZmlsZSI6InRlc3QvZXhhbXBsZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRyYW5zcGlsZTptb2NoYVxuXG5pbXBvcnQgY2hhaSBmcm9tICdjaGFpJ1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnXG5pbXBvcnQgJ21vY2hhd2FpdCdcbmltcG9ydCBkZW5vZGVpZnkgZnJvbSAnZGVub2RlaWZ5J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5sZXQgc2hvdWxkID0gY2hhaS5zaG91bGQoKVxuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpXG5cbmRlc2NyaWJlKCdzaW1wbGUgbW9jaGEgdGVzdCcsICgpID0+IHtcblxuICBpdCgnc2hvdWxkIGRvIG1hdGhzJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGEgPSAxLCBiID0gMlxuICAgIGxldCBjID0gYStiXG4gICAgYy5zaG91bGQuZXF1YWwoMylcbiAgfSlcblxufSlcbiJdLCJzb3VyY2VSb290IjoiLi4vLi4ifQ==
