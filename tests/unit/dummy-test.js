import { add } from 'js-cli';

QUnit.module('Dummy Test');

test("adds numbers", function(assert) {
  assert.equal(add(1,2), 3, '1 + 2 = 3');
});
