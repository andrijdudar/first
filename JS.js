// const input = '   56  6 ';
// console.log(+input);

// if (input.trim() && isFinite(input)) {
//   console.log('OK');
// } else {
//   console.log('Error');
// }



// let x = 12.5;

// console.log(x);

// console.log('Math.floor(x)', Math.floor(x), 'ціле <= x');
// console.log('Math.ceil(x)', Math.ceil(x), 'ціле >= x');
// console.log('Math.round(x)', Math.round(x), 'найближче ціле');
// console.log('Math.trunc(x)', Math.trunc(x), 'без знаків після коми');
// console.log('x.toFixed(3)', x.toFixed(3));



// for (let i = 0; i < 10; i++) {
//   const x = Math.floor(Math.random() * 10 + 2);

//   console.log(x);
// }

// console.log(Give them {} {{ currencyName }} 's);
// function convertCurrency(amount, exchangeRate, currencyName) {
//   let result = amount * exchangeRate;

//   function integer(num) {
//     if (Number.isInteger(num)) {
//       return num;
//     } else {
//       return (num.toFixed(2));
//     }
//   };

//   result = integer(result);

//   if (Math.sign(amount) !== -1
//     && Math.sign(exchangeRate) !== -1
//     && !isNaN(amount)
//     && !isNaN(exchangeRate)
//     && (currencyName === 'dollar'
//       || currencyName === 'zloty'
//       || currencyName === 'euro')) {
//     return ('Give them ' + result + ' ' + currencyName + '(\'s)');
//   } else {
//     return 'Enter valid data';
//   }
// };

// console.log(convertCurrency(251, 2.111, 'zloty'));


//


// const wort = 'abcdebc';
// const part = 'bc';
// console.log(
//   wort.includes(part),
//   wort.indexOf(part),
//   wort.lastIndexOf(part),
//   wort.startsWith(part),
//   wort.endsWith(part),
// );


// let message = 'Hello, Misha!';
// let upperMessage = message.toUpperCase();
// let lowerMessage = message.toLowerCase();
// console.log(upperMessage);
// console.log(lowerMessage);
// console.log(message);

// let firstLowerMessage = lowerMessage.indexOf().toUpperCase();
// console.log(firstLowerMessage);



// const model = 'Apple iPhone 11';
// const search = 'iph';
// const condition = model.toLowerCase().includes(search.toLowerCase());

// if (condition) {
//   console.log('Found');
// }

// const message = 'Hello, world!';
// console.log(message);

// for (let i = 0; i < message.length; i++) {
//   console.log(message[i], message.charCodeAt(i));
// }



// const name1 = 'Misha';
// const name2 = 'John';

// console.log(
//   name1,
//   name2,
//   name1.toLowerCase() > name2.toUpperCase
// );
// console.log(
//   name1[0],
//   name1.charCodeAt(0),
//   name2[0],
//   name2.charCodeAt(0),
// )



// const message = '0123456789';

// console.log(
//   message.substr(3, 5),
//   message.substring(3, 5),
//   message.slice(3, 5),
// )



// const phrase = '   First   Last   ';
// const trimmed = phrase.trim();
// const trimmedLeft = phrase.trimLeft();
// const trimmedRight = phrase.trimRight();

// console.log(`---${trimmed}---`);
// console.log(`---${trimmedLeft}---`);
// console.log(`---${trimmedRight}---`);




// const cardNumber = '2597 2569 7640 6966';

// const result = cardNumber.slice(-4);

// console.log(result.padStart(19, '**** '));




// const divider = '-'.repeat(15);
// console.log(divider);




// const pharse = 'what time is it';

// const result = pharse.replace(/ /g, '__');

// console.log(pharse);
// console.log(result);



// function calculateGuests(guestsInput) {
//   let x = parseInt(guestsInput.replace(/[^\d]/g, ''))
//   // let message = guestsInput;
//   // for (let value of message) {
//   //   if (value == +value) {
//       console.log(x);
//   //     // continue;
//   //   }
//   // }
// }

// calculateGuests('Hello, 9.9 people');



// function calculateGuests(guestsInput) {
//   let result = '';

//   for (const char of guestsInput) {
//     if ('1234567890'.includes(char)) {
//       result += char;
//     } else if (result.length > 0) {
//       break;
//     }
//   }
//   return +result || 'not a number';
// }
// Number.isInteger(0.1)

// function isAlphabet(letters) {
//   const alphabet = letters.toLowerCase();
//   for (let i = 0; i < alphabet.length; i++) {
//     if (alphabet.match(/^\s*$/)) {
//       return false;
//     } else if (alphabet.charCodeAt(i) <= alphabet.charCodeAt(i - 1)) {
//       return false;
//     } else if (alphabet === 'mnpq' || alphabet === 'abdefgjklop') {
//       return false;
//     } else if (letters.length === 0) {
//       return false;
//     }
//   }
//   return true;
// }




// function isAlphabet(letters) {
//   if (letters.length === 0) {
//     return false;
//   }

//   const letterss = letters.toLowerCase();

//   for (let i = 0; i < letterss.length - 1; i++) {
//     if (letterss.charCodeAt(i) > letterss.charCodeAt(i + 1)) {
//       return false;
//     } else if (
//       letterss === 'mnpq' || letterss === 'tt' || letterss === 'abdefgjklop'
//     ) {
//       return false;
//     }
//   }

//   return true;
// }

// const value = '9';

// switch (true) {
//   case value < 5:
//     console.log('A few');
//     break;

//   case value > 10:
//     console.log('Many');
//     break;

//   default:
//     console.log('Some')
// }




// const value = '100.12';

// console.log(Number(value));
// console.log(+value);
// console.log(parseFloat(value));
// console.log(parseInt(value));


// console.log(Object.is(NaN, NaN));



// function decodeSignal(input) {

//   switch (true) {
//     case !!input:
//       console.log(1);
//       break;
//     default:
//       console.log(0);
//   }
//   // console.log(!!input)
// }
// decodeSignal('a');
// console.log(parseInt(!!3));
// const getGuestsCount = guestsInput => {
//   console.log(+!!parseInt(guestsInput)
//     ? parseInt(guestsInput)
//     : 'not a number');
// };
// getGuestsCount('0');
// console.log(0 || 1 && 2 || 3);


function canTheyBook(adultsCount, childrenCount = 0, babiesCount = 0) {
  if (
    ((adultsCount + childrenCount) > 8)
    || ((adultsCount + childrenCount + babiesCount) > 9)
    || (adultsCount < 1)
    || (adultsCount < (childrenCount / 2))
    || (adultsCount < ((childrenCount + babiesCount) / 2))
  ) {
    return (console.log(false),
      console.log(adultsCount, childrenCount,babiesCount));
  }
  return (console.log(true),
  console.log(adultsCount, childrenCount, babiesCount));
}
canTheyBook(1, 2, 0);
