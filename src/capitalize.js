export default (string) => {
  const [firstChar = '', ...restChars] = string;
  return `${firstChar.toUpperCase()}${restChars.join('')}`
}