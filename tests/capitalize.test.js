import { strict as assert } from 'assert';

import capitalize from "../src/capitalize";

assert.equal(capitalize('hello'), 'Hello');

assert.equal(capitalize(''), '');

console.log('Все тесты успешны');