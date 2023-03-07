// PRACTICAL TASKS.
// YAUHENY KOVALCHUK.
// #1 
// Функция проверки палиндрома?
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('uwu'));
// true



// #2 
// Функция поиска самого короткого слова?
function findShort(string) {
    return string
        .split(' ')
        .sort((a, b) => a.length - b.length)[0];
}

console.log(findShort('Blaim some sheet of bee or tea'));
// U.F.C.





// #3 
// Функция создания инициалов?
function toInitials(name) {
    return name
        .split(' ')
        .map((el) => `${el.slice(0,1).toUpperCase()}.`)
        .join('');
}

console.log(toInitials('United Fight Club'));
// U.F.C.




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
// 6




// #5 
// Функция поиска минимального и максимального значений в массиве?
// advanced
function minMax(arr) {
    return [
        Math.min.apply(null, arr),
        Math.max.apply(null, arr)
    ];
}

// es6
// const minMax = (arr) => [
//     Math.min(...arr), Math.max(...arr)
// ];
console.log(minMax([2, 9, 10, 25, 47, 4, 1]));
// [ 1, 47 ]





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
// A-Bb-Ccc-Dddd-Eeeee-Ffffff





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
// [ 0, 2,  4, 5, 7, 8, 12 ]




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
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]




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
// (903) 526-5754




// #10
// Функция поиска гласных букв в строке?
const findVowels = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(findVowels('Hello'));
// 2



// -----------------------------------------------------------------------------------------




// ULBI interview.
// 01 - Реализовать функию, которая будет суммирвоать числа и выводить в логи.
function sum(n) {
    console.log(n);
    return function(a) {
        return sum(a + n);
    };
}

sum(5);
console.log('-----');
sum(5)(4)(11);
// 5
// -----
// 5
// 9
// 20







// 02 - Функция принимает два объекта с разными ключами некоторые из которых могут пересекаться.
// Необходимо вернуть первый объект с обновленными значениями из второго объекта (только те которые совпадают).
const margeSameKeysOfObject = (obj1, obj2) => {
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
    console.log(obj1);
}

margeSameKeysOfObject({ foo: 'foo', bar: 'bar' }, { bar: 'press', some: 'some' });
// { foo: 'foo', bar: 'press' }








// 03 - Реализовать функцию которая принимает 2 параметра:
// - массив значений ;
// - коллбэк по результату которого будут группироваться значения ;

// Функция должна возвращать составной совокупный объект
// где ключи это название групп, а значения сами группы.
const groupBy = (arr, callbackFunction) => {
    const result = {};
    arr.forEach(item => {
        let resultAfterCallback = callbackFunction(item);
        result[resultAfterCallback] ?
            result[resultAfterCallback].push(item) :
            result[resultAfterCallback] = [item]
    })
    console.log(result);
};

groupBy([6.1, 4.2, 6.3], Math.floor);
// { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }