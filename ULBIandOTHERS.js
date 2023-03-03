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


function OtherObj(other, another) { // второй метод* с помошью функций
    this.other = other;
    this.another = another;
}

const otherObj = new OtherObj('Other', 'Another');
console.log(otherObj);


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
let map = new Map(); // map

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1"); // булево значение как ключ

console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }


// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"

console.log(map.size); // 3




let set = new Set(); // set

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);

console.log(set);
// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
}


// бульк.
// бульк.