export function capitalise(string) {
  return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function truncate(string, length) {
  return string.length > length
    ? string.slice(0, length) + '...'
    : string;
}

export function camelCase(string) {
  const words = string.toLowerCase().split(' ');

  return words[0] + words
    .slice(1)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function reverse(string) {
  return string.split('').reverse().join('');
}

export function isPalindrome(string) {
  return string === reverse(string);
}