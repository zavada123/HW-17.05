let myage = 23;
let skills;

if (myage > 15 && myage < 17) {
  skills = "Писал небольшие скрипты для игрушек";
} else if (myage > 17 === myage < 20) {
  skills =
    "Работал системным администратором и небыло мыслы переходить в программисты";
} else if (myage >= 20 && myage <= 21) {
  skills =
    "Познакомился с Виталиком, он меня ввел в курс дела и первое время работал на него";
} else if (myage < 23) {
  skills = "Удаленно делал сайты и вел 2 проекта";
} else if (typeof myage != "number") {
  skills = "Забавная получилась история";
} else {
  skills = "Работаю на позиции Fronta в CSS команде";
}

console.log(skills);

// массив с разными типами данных: число «number», строка «string», булевый (логический) тип «boolean», специальное значение «null», специальное значение «undefined», объекты« object», массив

let n = 1 / 5;
let k = "wonder";
let boolean = 10 * 2 < 15;
let l = null;
let m;
let q = { today: "Lazy day" };
let o = ["a", "b", "c"];

let MyArray = [n, k, boolean, l, m, q, o];

console.log(MyArray);
