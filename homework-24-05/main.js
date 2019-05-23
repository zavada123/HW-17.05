let m;
// let string = 0;
// let number = 0;
let string = [];
let number = [];

let myarr = [1 / 5, 10 * 2 < 15, null, 'wonder', m, ['a', 'b', 'c'], { today: "Lazy day" }, 23.6, ['кекс', 5, 'арбуз', 78]];

for (let i = 0; i < myarr.length; i++) {
    if (typeof myarr[i] === "number") {
        number.push(myarr[i]);
    } else if (typeof myarr[i] === "string") {
        string.push(myarr[i]);
    } else if (Array.isArray(myarr[i])) {
        for (let j = 0; j < myarr[i].length; j++) {
            if (typeof myarr[i][j] === "number") {
                number.push(myarr[i][j]);
            } else if (typeof myarr[i][j] === "string") {
                string.push(myarr[i][j]);
            }
        }
    }
}

console.log(`string: ${string}\nnumber: ${number}`);