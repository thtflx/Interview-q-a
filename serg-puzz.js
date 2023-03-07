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