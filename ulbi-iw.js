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






// MAP.
let map = new Map(); // map.

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1"); // булево значение как ключ

console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }
// еще несколько методов:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"

console.log(map.size); // 3




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








// -----------------------------------------------------------------------------------------









// ДОПОЛНИТЕЛЬНО.



// свойство объекта.
const othObj = {
    key1: 'value1',
    key2: 'value2'
};

console.log(othObj.key1);
console.log(othObj['key1']);




// falsy значения.
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




// шаблонные литералы.
// `` - ${}, можно перенести строку.




// избежание ссылочной зависимости.
const object = {
    smodel: 'Tesla DZ'
}

const otherObject = JSON.parse(JSON.stringify(object));
console.log(otherObject);





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