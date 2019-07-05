// let obj = {
//     value: 'Hello',
//     logger: function() {
//         console.log(this.value);
//     }
// }

// let a = obj;
// obj = null;
// a.logger(); // ссылается на объект

// // map

// const arr = [
//     { name: 'Vasya' },
//     { name: 'Petya' },
//     { name: 'Oksana' },
//     { name: 'Vitya' },
//     { name: 'Masha' },
// ]

// let objects = arr.map(function(el) {
//     if (el.name.length > 5) {
//         return el.name;
//     }
// });

// let data = objects.filter(function(el, i, arr) {
//     console.log(el, i, arr);
//     return typeof el === 'string';
// });

// console.log(data);
// console.log(objects);

// let arr = [
//     { name: "Vanya", age: 15, },
//     { name: "Inokentyi", age: 19, },
//     { name: "Anatoliy", age: 23, },
//     { name: "Masha", age: 16, },
// ]

// let objects = arr.map(function(el) {
//     if (el.age > 18) {
//         return el.name;
//     }
// });

// let adult = objects.filter(function(el) {
//     return typeof el === 'string';
// })

// console.log(adult);

let nedomasiv = ['1', '1', '1'];

let anotherarray = ['0', '0', '0'];

let newArray = anotherarray.reduce(function(currentValue, acc) {
    return [...acc, ...currentValue]
}, nedomasiv);

console.log(newArray);

let numbers = [1, 2, 3, 4]
let sum = numbers.reduce(function(prev, curr) {
    return prev + curr
}, 0)

// 0+1 1+2 3+3 6+4
// Первое значение это prev, которое стартует в данном случае с 0

let obj = {
    name: '66565464',
    surname: 'Vasya',
    supperData: {
        topSecret: 'Я люблю Noda'
    }
}

const { surname, supperData } = obj; // свойство surname с объекта obj (деструктуризация)
const { topSecret } = supperData;
console.log(surname, supperData.topSecret);

const arr = [5, 6, 7];
const newArr = [...arr, 8, 9, 0] // запихивает значения в массив

console.log(newArr);