// PRACTICAL TASKS.
// YAUHENY KOVALCHUK.

// // #1 
// // Функция проверки палиндрома?
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome('uwu'));
// // true








// // #2 
// // Функция поиска самого короткого слова?
// function findShort(string) {
//     return string.split(' ').sort((a, b) => a.length - b.length)[0];
// }

// console.log(findShort('Blaim some sheet of bee or tea'));
// // of











// // #3 
// // Функция создания инициалов?
// function toInitials(name) {
//     return name
//         .split(' ')
//         .map((el) => `${el.slice(0,1).toUpperCase()}.`)
//         .join('');
// }

// console.log(toInitials('United Fight Club'));
// // U.F.C.











// // #4 
// // Функция суммирования всех цифр числа? 
// function sumDigits(number) {
//     return Math.abs(number)
//         .toString()
//         .split('')
//         .reduce(
//             function(sum, curr) {
//                 return +sum + +curr
//             }, 0
//         );
// }

// console.log(sumDigits(33));
// // 6









// // #5 
// // Функция поиска минимальных и максимальных значений в массиве?
// // advanced
// function minMax(arr) {
//     return [
//         Math.min.apply(null, arr),
//         Math.max.apply(null, arr)
//     ];
// }

// // es6
// const minMax = (arr) => [
//     Math.min(...arr), Math.max(...arr)
// ];
// console.log(minMax([2, 9, 10, 25, 47, 4, 1]));
// // [ 1, 47 ]








// // #6
// // Функция поиска гласных букв в строке?
// const findVowels = (str) => {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

// console.log(findVowels('Hello'));
// // 2






// // #7 
// // Функция возврата индексов заглавных букв строки?
// // advanced.
// function capitals(word) {
//     let res = [];
//     word
//         .split('')
//         .forEach(function(letter, index) {
//             if (letter === letter.toUpperCase()) {
//                 res.push(index);
//             }
//         });
//     return res;
// }

// console.log(capitals('United fight')); // [0, 6]


// // es6.
// const capitals2 = (word) =>
//     word.split('').reduce((result, letter, index) => {
//         if (letter === letter.toUpperCase()) {
//             result.push(index);
//         }
//         return result;
//     }, []);

// console.log(capitals2('United fight'));











// // #8
// // Функция возврата уникальных значений из нескольких массивов?
// // base
// function uniteUnique() {
//     const arr = [...arguments];
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(...arr[i]);
//     }
//     newArr = new Set(newArr);
//     return [...newArr];
// }

// // advanced
// function uniteUnique() {
//     return [...new Set([...arguments].flat())];
// }

// // updated advanced
// function uniteUnique() {
//     const result = [...new Set([...arguments].flat())];
//     return result.sort((a, b) => a - b);
// }


// console.log(uniteUnique([1, 2, 9, 3], [4, 10, 1, 5], [6, 7, 8, 5]));
// // [ 1, 2, 3, 4, 5, 6, 7, 8 ]










// // #9
// // Функция создания набора дубликатов символов строки?
// function accum(str) {
//     return str.toUpperCase().split('').map(
//         function(el, i) {
//             return el += el.repeat(i).toLowerCase();
//         }
//     ).join('-');
// }

// console.log(accum('abcdef'));
// // A-Bb-Ccc-Dddd-Eeeee-Ffffff









// // #10
// // Функция форматирования цифр в телефонный номер?
// function createPhoneNumber(number) {
//     let numArr = number.toString().split('');
//     numArr.splice(0, 0, '(');
//     numArr.splice(4, 0, ')');
//     numArr.splice(5, 0, ' ');
//     numArr.splice(9, 0, '-');
//     return numArr.join('');
// }

// console.log(createPhoneNumber(9035265754));
// // (903) 526-5754



// // -----------------------------------------------------------------------------------------




// // ULBI interview.
// // 01 - Реализовать функию, которая будет суммирвоать числа и выводить в логи.
// function sum(n) {
//     console.log(n);
//     return function(a) {
//         return sum(a + n);
//     };
// }

// sum(5);
// console.log('-----');
// sum(5)(4)(11);
// // 5
// // -----
// // 5
// // 9
// // 20







// // 02 - Функция принимает два объекта с разными ключами некоторые из которых могут пересекаться.
// // Необходимо вернуть первый объект с обновленными значениями из второго объекта (только те которые совпадают).
// const margeSameKeysOfObject = (obj1, obj2) => {
//     for (const key in obj1) {
//         if (obj2.hasOwnProperty(key)) {
//             obj1[key] = obj2[key];
//         }
//     }
//     console.log(obj1);
// }

// margeSameKeysOfObject({ foo: 'foo', bar: 'bar' }, { bar: 'press', some: 'some' });
// // { foo: 'foo', bar: 'press' }








// // 03 - Реализовать функцию которая принимает 2 параметра:
// // - массив значений ;
// // - коллбэк по результату которого будут группироваться значения ;

// // Функция должна возвращать составной совокупный объект
// // где ключи это название групп, а значения сами группы.
// const groupBy = (arr, callbackFunction) => {
//     const result = {};
//     arr.forEach(item => {
//         let resultAfterCallback = callbackFunction(item);
//         result[resultAfterCallback] ?
//             result[resultAfterCallback].push(item) :
//             result[resultAfterCallback] = [item]
//     })
//     console.log(result);
// };

// groupBy([6.1, 4.2, 6.3], Math.floor);
// // { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }







// // -----------------------------------------------------------------------------------------









// // FCC iw basics.

// //! ---------
// // #1
// function convertCtoF(celsius) {
//     let fahrenheit = celsius * 9 / 5 + 32;
//     return fahrenheit;
// }
// console.log(convertCtoF(30));
// // 86




// //! ---------
// // #2
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
// // olleh





// //! ---------
// // #3
// function factorialize(num) {
//     let total = 1;

//     for (let i = 0; i < num; i++) {
//         // total *= i + 1;
//         total = total * (i + 1);
//     }
//     return total;
// }

// console.log(factorialize(5));
// // 120




// //! ---------
// // #4 
// function findLongestWordLength(str) {
//     let arr = str.split(" "); // 3
//     let biggest = arr[0].length; // 5 *это самое первое слово из массива*

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > biggest) {
//             biggest = arr[i].length;
//         }
//     }
//     return biggest;
// }

// console.log(findLongestWordLength("Piece of sheet"));
// // 5




// //! ---------
// // #5
// function largestOfFour(arr) {
//     let answer = [];

//     for (let i = 0; i < arr.length; i++) {

//         let highest = arr[i][0];

//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > highest) {
//                 highest = arr[i][j];
//             }
//         }
//         answer.push(highest);
//     }
//     return answer;
// }

// console.log(largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
// ]));
// // [ 5, 27, 39, 1001 ]





// //! ---------
// // #6
// function confirmEnding(str, target) {
//     let ending = str.split("").splice(str.length - target.length).join("");
//     console.log(ending);

//     return ending == target;
// }

// confirmEnding("Bastian", "xxxx");
// // tian





// //! ---------
// // #7
// function repeatStringNumTimes(str, num) {
//     let answer = "";

//     if (num <= 0) {
//         return "";
//     }

//     for (let i = 0; i < num; i++) {
//         answer += str;
//     }

//     return answer;
// }

// console.log(repeatStringNumTimes("abc", 30));
// // abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc




// //! ---------
// // #8
// function truncateString(str, num) {

//     if (str.length <= num) {
//         return str;
//     }

//     let ourStr = str.split("").splice(0, num).join("");

//     return ourStr + "...";
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 1897));
// // A-tisket a-tasket A green and yellow basket




// //! ---------
// // #9
// function findElement(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return arr[i];
//         }
//     }
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// // 2




// //! ---------
// // #10
// function booWho(bool) {
//     if (typeof bool == 'boolean') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(booWho(true));
// // true


























// Функция поиска гласных букв в строке?

// console.log(findVowels('Hello'));




// Функция возврата индексов заглавных букв строки?

// console.log(findCapitals('Bonjour!'));




// Функция создания инициалов?

// console.log(toInitials('United Fight Club'));




// Функция поиска самого короткого слова?

// console.log(findShort('Улыбайся чаще !'));




// Функция возврата уникальных значений из нескольких массивов?

// console.log(uniteUnique([12, 34, 5, [5, 6, 6, [9042, 39435820, 493]]])); // [ 5, 6, 12, 34, 493, 9042, 39435820 ]






// Функция поиска минимальных и максимальных значений в массиве?

// console.log(minMax([2434, 5243, 531, 0, [1, 4, 7, 1463, 50904, 33]])); // [ 0, 5243 ]





// Функция суммирования всех цифр числа? 

// console.log(sumDigits(33));




// Функция проверки палиндрома?

// console.log(isPalindrome('Toretto'));
























































































































































































































// --------------------------------------------------------------------------------------------------------------------
//                                                  П Л Ю Ш К И
// // подсказка с sort, вёрнет числа в массива по порядку.
// let arr = [1, 6, 7, 2, 5, 8, 3, 4, 10, 9];
// let res = arr.sort(
//     function(a, b) {
//         return a - b;
//     }
// );

// console.log(res); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]