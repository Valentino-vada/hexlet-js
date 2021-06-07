import { strict as assert } from 'assert';

import { capitalize } from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello') 
  // throw new Error('Функция работает неверно!');


assert.equal(capitalize(''), '') 
  // throw new Error('Функция работает неверно!');

// console.log('Все тесты пройдены!');
