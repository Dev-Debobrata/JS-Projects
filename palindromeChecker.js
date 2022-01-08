function palindrome(str) {
    const x = /[^A-Za-z0-9]/g;
    const y = str.toLowerCase().replace(x, '');
    const reversestring = y.split('').reverse('').join('');
    return reversestring === y;
}

const a = prompt('Enter a string: ');
const b = palindrome(a);
console.log(b);