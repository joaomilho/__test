const test = require('tape')
const foo = require('./foo')

test('foo()', function (t) {
  t.equal(foo(), 'foo!')
  t.equal(foo(), 'foo!oof')

  t.end()
})
