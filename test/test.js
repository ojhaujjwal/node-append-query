var test = require('tape')
  , appendQuery = require('..')

test('should append querystring to queryless url', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/foo', 'bar=baz&beep=boop')
    , expected = 'http://example.com/foo?bar=baz&beep=boop'
  t.equal(result, expected, 'should be equal')
})

test('should append querystring to url that already has a query', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/?foo=bar', 'hello=world')
    , expected = 'http://example.com/?foo=bar&hello=world'
  t.equal(result, expected, 'should be equal')
})

test('should append query object to url', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/', { beep: 'boop' })
    , expected = 'http://example.com/?beep=boop'
  t.equal(result, expected, 'should be equal')
})
