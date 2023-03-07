// Sergey Puzankov sbs.
// Дупликация одного массива в другую.
const duplicate = (arr) => [...arr, ...arr];
console.log(duplicate([1, 2, 3, 4, 5]));

// Написать IIFE.
(function() {
    return 1;
})();

console.log(iife);


// Про делегирование.
const parent = document.querySelector(".parent");
const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item);
//   });
// });

const newItem = document.createElement("li");
newItem.innerText = "Melon";
parent.append(newItem);

parent.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === 'LI') {
        console.log('clicked');
    }
});



// блиц
let b = {}; // b:1
let c; // b:2

b.b = 1;

c = b;
c.b = 2;

console.log(b.b);
console.log(c.b);

// блиц
let arr = [1, 2, 3, 4, 5];
let result = arr.filter(function(el) {
    return el % 2;
});

console.log(result);

// блиц
var x = 7;
console.log(++x);
console.log(x++);

// блиц
console.log(0.1 + 0.2 - 0.2 == 0.1);

// блиц
var j = { name: "Felix" };
var k = { name: "Felix" };
console.log(j === k);

// блиц
function f1(a, b) {
    console.log(a, b);
}

let f2 = f1.bind(null, "foo");

f2("bar", "baz");

// блиц
let name = "rabbit";

function go() {
    let name = "Forest";
    console.log(`Run ${name}, run!`);
}

name = "Alice";
go();



// ----------------------------------------------------


// ULBI TV.
// call, apply, bind.
// бульк.
function showname(name, lastname) {
    console.log(`Name: ${this.name}
    surname: ${this.lastname}`);
}

const jersey = {
    name: "Jersey",
    lastname: "Adams"
};

showname.call(jersey);
showname.apply(jersey);
const bindTest = showname.bind(jersey);
bindTest();



// Способы создания объектов.
// бульк.
const firstObj = { // первый метод* с помошью литеральной нотации.
    key: 'value'
}

console.log(firstObj);

// ----
function OtherObj(other, another) { // второй метод* с помошью функций
    this.other = other;
    this.another = another;
}

const otherObj = new OtherObj('Other', 'Another');
console.log(otherObj);

// ----
class AnotherObj { // третий метод* с помошью класса
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

const anotherObj = new AnotherObj('Happy', 'Meal');
console.log(anotherObj);




// Про Promise.
// бульк.
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('RIGHT!');
    }, 1000);
})

.then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(fnl => console.log(`Finally worked!`));



// Как поменять контекст функции?
// бульк.
function fn() {
    console.log(this);
}

const obj = { name: 'ULBI TV' };

fn.call(obj, 'Finn', 'Jake');
fn.apply(obj, ['Finn', 'Jake']);


// Тернарный оператор.
// бульк.
if (true) {
    console.log('True content.');
} else {
    console.log('False content.');
}

let res = true ? 'True Content!' : 'False Content!';
console.log(res);




// Деструктуризация.
// бульк.
let someArr = ['ULBI', 'TV']; // пример с массивами.
let [firstName, lastName] = someArr;


let options = { // пример с объектами.
    title: 'Menu',
    width: 100,
    height: 500
};
let { title, width, height } = options;


// Map.
// бульк.
const arrr = [1, 2, 3, 4, 5, 6];
const add = arrr.map((el) => {
    return el + 1;
});

console.log(add); // [ 2, 3, 4, 5, 6, 7 ]


// Filter.
// бульк.
let arrrr = [1, 2, 3, 4, 5];
let resul = arrrr.filter(function(el) {
    return el % 2;
});

console.log(resul); // [ 1, 3, 5 ]


// Reduce.
// бульк.
let arry = [1, 2, 3, 4, 5];
let ressult = arry.reduce(
    function(sum, current) {
        return sum + current;
    }, 1);

console.log(ressult); // 15



// Map и Set.
// бульк.
// let map = new Map(); // map.

// map.set("1", "str1"); // строка в качестве ключа
// map.set(1, "num1"); // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ

// console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }


// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"

// console.log(map.size); // 3




// let set = new Set(); // set.

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);

console.log(set); // Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }
// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
}


// бульк.
// бульк.



// MAP.
let map = new Map(); // map.

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1"); // булево значение как ключ

console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }


// SET.
let set = new Set(); // set.

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);

console.log(set); // Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }
























// TEST ZONE.
new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(`How are u?`);
            } else {
                reject(`I'm so sorry(`);
            }
        }, 2000);
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally((some) => console.log(`Code was done.`));


// свойство объекта.
const othObj = {
    key1: 'value1',
    key2: 'value2'
};

console.log(othObj.key1);
console.log(othObj['key1']);



// falsy.
-
!!0
    -
    false -
    null -
    undefined -
    NaN


// опр. начилие свойства в объекте.
const valueObj = {
    someKey: 'someValue'
}

console.log(valueObj.hasOwnProperty('someKey'));
console.log('someKey' in valueObj);



// map/ filter/ reduce and forEach.
const massive = [1, 2, 3, 4, 5];

const res1 = massive.map(
    function(el) {
        return el + 2;
    }
);

console.log(res1);


const res2 = massive.filter(
    function(el) {
        return el % 2;
    }
);

console.log(res2);



const res3 = massive.reduce(
    function(summ, currentt) {
        return summ + currentt;
    }, 10
);

console.log(res3);






// прототипное наследование.
const animal = {
    eats: 'carrot'
}

const bird = {
    chews: 'gym'
}

animal.__proto__ = bird;
bird.__proto__ = animal;

console.log(animal.chews);
console.log(bird.eats);







// деструктуризация.
const destArr = ['BMW', 'M5'];
const [namee, modell] = destArr;

const destObj = {
    tittle: 'Bookky',
    subtittle: '11th.'
};
const { tittle, subtittle } = destObj;



// замыкание.
const createPhrase = (greeting) => {
    return (name) => `${name} ${greeting}`;
};

const sayHi = createPhrase('hey!');
console.log(sayHi('Alexander'));



// обработка ошибок.
try {

} catch (err) {

} finally {

}


// способы создания объектов.
const litObj = {
    name: 'Fill'
}

function User(name, surname) {
    this.name = name;
    this.surname = surname;
}

const user = new User('Alexander', 'Belov');
console.log(user);


class Cuser {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

const cuser = new Cuser('Jack', 'McColahey');
console.log(cuser);



// шаблонные литералы.
// `` ${}, можно перенести строку.





// избежание ссылочной зависимости.
const object = {
    smodel: 'Tesla DZ'
}

const otherObject = JSON.parse(JSON.stringify(object));
console.log(otherObject);







// set и map.
const set1 = new Set();

const johny = { name: 'johny' };
const alex = { name: 'alex' };

set1.add(johny);
set1.add(alex);

console.log(set1);



const map1 = new Map();

map1.set('name1', 'kyle');
map1.set('name2', 'sam');

console.log(map1);






// поменять контекст функции.
function fn() {
    console.log(this);
};

const fnObj = {
    name: 'Alex',
    surname: 'Pereira'
};

fn.call(fnObj, 'arg1', 'arg2');



// 14, 20

// async/await.
async function fetchTodos(url) {
    const resp = await fetch(url);
    const json = await resp.json();
    console.log(json); // ассинхронный код будет выполняться последовательно.
}



// использование async/await для асинхронных запросов.
async function fetchApi(url) {
    const responsive = await fetch(url);
    const json = await responsive.json();
    json.forEach(item => console.log(item));
}






// повторение.
const createPhrasee = (greeting) => {
    return (name) => `${greeting}, ${name}!`;
};

const sayHello = createPhrasee('Hello');
console.log(sayHello('Danzel'));



// -
const mappp = new Map();

mappp.set(true, 'duck');
console.log(mappp);



const settt = new Set();

const jimmy = { name: 'Jimmi' };

settt.add(jimmy);
console.log(settt);





// -
// number
// string
// boolean
// bigint
// object
// null
// undefined
// symbol




// -
if (true) {
    const a = 'a';
    let b = 'b';
    var c = 'c';
}

console.log(c);
console.log(b);
console.log(a);




// -
const nalObj = {
    name: 'Dakkorta'
}


console.log(nalObj.hasOwnProperty('name'));
console.log('name' in nalObj);



// -
new Promise((resolve, reject) => {
        if (false) {
            resolve('Worked!');
        } else {
            reject(`Doesn't work!`);
        }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally((fnll) => console.log(`Completed.`));



// - 
console.log(!!0);
console.log(!!'');
console.log(false);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);





// - 
const littObj = {
    name: 'Lit'
}


class Usy {
    constructor(name) {
        this.name = name;
    }
}

const usy = new Usy('Usy');
console.log(usy);



function Usu(name) {
    this.name = name;
}

const usu = new Usu('Usu');
console.log(usu);




// - 
const mapArr = [10, 20, 30, 40, 50];
const result1 = mapArr.map((el) => {
    return el + 10;
});
console.log(result1);


const result2 = mapArr.filter((el) => {
    return el % 2;
});
console.log(result2);

const result3 = mapArr.reduce(
    function reduceFn(summ, curr) {
        return summ + curr;
    }, 10
);

console.log(result3);










// повторение.