// PRACTICAL TASKS.
// #1 
// Функция проверки палиндрома?
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}





// #2 
// Функция поиска самого короткого слова?
function findShort(string) {
    return string
        .split(' ')
        .sort((a, b) => a.length - b.length)[0];
}

console.log(findShort('Blaim some sheet of bee or tea'));





// #3 
// Функция создания инициалов?
function toInitials(name) {
    return name
        .split(' ')
        .map((el) => `${el.slice(0,1).toUpperCase()}.`)
        .join('');
}

console.log(toInitials('United Fight Club'));





// #4 
// Функция суммирования всех цифр числа? 
function sumDigits(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce(
            function(sum, curr) {
                return +sum + +curr
            }, 0
        );
}

console.log(sumDigits(33));





// #5 
// Функция поиска минимального и максимального значений в массиве?
const minMax = (arr) => [
    Math.min(...arr), Math.max(...arr)
];





// #6 
// Функция создания набора дубликатов символов строки?
function accum(str) {
    return str.toUpperCase().split('').map(
        function(el, i) {
            return el += el.repeat(i).toLowerCase();
        }
    ).join('-');
}

console.log(accum('abcdef'));





// #7 
// Функция возврата индексов заглавных букв строки?
function capitals(word) {
    let res = [];
    word
        .split('')
        .forEach(function(letter, index) {
            if (letter === letter.toUpperCase()) {
                res.push(index);
            }
        });
    return res;
}

console.log(capitals('PiEcE oF soaP'));





// #8
// Функция возврата уникальных значений из нескольких массивов?
// base
function uniteUnique() {
    const arr = [...arguments];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(...arr[i]);
    }
    newArr = new Set(newArr);
    return [...newArr];
}

// advanced
// function uniteUnique() {
//     return [...new Set([...arguments].flat())];
// }

console.log(uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]));





// #9 
// Функция форматирования цифр в телефонный номер?
function createPhoneNumber(number) {
    let numArr = number.toString().split('');
    numArr.splice(0, 0, '(');
    numArr.splice(4, 0, ')');
    numArr.splice(5, 0, ' ');
    numArr.splice(9, 0, '-');
    return numArr.join('');
}
console.log(createPhoneNumber(9035265754));





// #10
// Функция поиска гласных букв в строке?
const findVowels = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(findVowels('Hello'));