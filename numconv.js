let num1 = '150';
let flot = '1.50';

console.log("********Converting strings to integers********");
//Converting strings to integers
console.log(parseInt('100'));
console.log(parseInt('num1'));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); //Hexadecimal number

console.log("********Converting strings to flot********");
//Converting strings to flot
console.log(parseFloat('1.25abc'));
console.log(parseFloat('flo1'));
console.log(parseFloat('ABC'));

console.log("********More Conversion Examples********");
//More Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

//Using Template Literals
console.log(parseInt('${1 + 1}'));

console.log("**Converting numbers yo strings**");
//Converting numbers yo strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());