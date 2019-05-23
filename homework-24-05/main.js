let m;
let string = 0;
let number = 0;

let MyArray = [1 / 5, 10 * 2 < 15, null, "wonder", m, ['a', 'b', 'c'], { today: "Lazy day" }, 23.6, ['кекс', 5, 'арбуз', 78]];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        number.push(array[i]);
    } else if (typeof array[i] === "string") {
        str.push(array[i];
        }
        else if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                if (typeof array[i][j] === "number") {
                    number.push(array[i];
                    }
                }
            }
        }

        console.log(`str: ${str}\nnumber: ${number}`);