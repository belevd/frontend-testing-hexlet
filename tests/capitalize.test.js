import capitalize from "../src/capitalize";

if (capitalize('hello') !== 'Hello') {
  throw new Error('Error');
}

if (capitalize('') !== '') {
  throw new Error('Error');
}

console.log('Все тесты успешны');