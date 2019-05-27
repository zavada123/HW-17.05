// let firstNumber = document.querySelector('#firstNumber');
// let secondNumber = document.querySelector('#secondNumber');
// const plus = document.querySelector('#plus');
// const minus = document.querySelector('#minus');
// let result = document.querySelector('#result');

// plus.addEventListener('click', () => {
//     result.value = +firstNumber.value + +secondNumber.value;
// })

// minus.addEventListener('click', () => {
//     result.value = +firstNumber.value - +secondNumber.value;
// })

const numbers = document.querySelectorAll('[data-id="number"]');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const deleted = document.querySelector('#delete');
const total = document.querySelector('#total');
let resultCalc = document.querySelector('#resultCalc');

const sumFunct = (e) => {
    let result = e.value.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g);
    let sum = 0;
    result.forEach(element => {
        sum += +element;
    });
    return sum;
}
total.addEventListener('click', () => {
    let result = resultCalc.value.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g);
    if (resultCalc.value.indexOf('/') !== -1) {
        resultCalc.value = +result[0] / +result[1];
    } else if (resultCalc.value.indexOf('*') !== -1) {
        resultCalc.value = +result[0] * +result[1];
    } else if (resultCalc.value.indexOf('+') !== -1) {
        resultCalc.value = +result[0] + +result[1];
    } else if (resultCalc.value.indexOf('-') !== -1) {
        resultCalc.value = +result[0] - +result[1];
    }
})
const minusFunct = (e) => {
    let result = e.value.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g);
    return +result[0] - +result[1];
}

const divideFunct = (e) => {
    let result = e.value.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g);
    return +result[0] / +result[1];
}

const multiplyFunct = (e) => {
    let result = e.value.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g);
    return +result[0] * +result[1];
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        resultCalc.value += numbers[i].innerHTML;
    });
}

deleted.addEventListener('click', () => {
    resultCalc.value = resultCalc.value.slice(0, -1);
});

plus.addEventListener('click', () => {
    let islast = resultCalc.value[resultCalc.value.length - 1] === '+' ? true : false;

    let lastElement = +resultCalc.value[resultCalc.value.length - 1]
    let islastNotThisSymbol = lastElement !== '+' && isNaN(lastElement) ? true : false;

    let isSymbol = resultCalc.value.indexOf('+') !== -1 ? true : false;

    isSymbol && !islast ? resultCalc.value = sumFunct(resultCalc) : false;

    islastNotThisSymbol ? resultCalc.value = resultCalc.value.slice(0, -1) : false;

    islast ? true : resultCalc.value = `${resultCalc.value}+`;
})

minus.addEventListener('click', () => {
    let islast = resultCalc.value[resultCalc.value.length - 1] === '-' ? true : false;

    let lastElement = +resultCalc.value[resultCalc.value.length - 1]
    let islastNotThisSymbol = lastElement !== '-' && isNaN(lastElement) ? true : false;

    let isSymbol = resultCalc.value.indexOf('-') !== -1 ? true : false;

    isSymbol && !islast ? resultCalc.value = minusFunct(resultCalc) : false;

    islastNotThisSymbol ? resultCalc.value = resultCalc.value.slice(0, -1) : false;

    islast ? true : resultCalc.value = `${resultCalc.value}-`;
})

divide.addEventListener('click', () => {
    let islast = resultCalc.value[resultCalc.value.length - 1] === '/' ? true : false;

    let lastElement = +resultCalc.value[resultCalc.value.length - 1]
    let islastNotThisSymbol = lastElement !== '/' && isNaN(lastElement) ? true : false;

    let isSymbol = resultCalc.value.indexOf('/') !== -1 ? true : false;

    isSymbol && !islast ? resultCalc.value = divideFunct(resultCalc) : false;

    islastNotThisSymbol ? resultCalc.value = resultCalc.value.slice(0, -1) : false;

    islast ? true : resultCalc.value = `${resultCalc.value}/`;
})

multiply.addEventListener('click', () => {
    let islast = resultCalc.value[resultCalc.value.length - 1] === '*' ? true : false;

    let lastElement = +resultCalc.value[resultCalc.value.length - 1]
    let islastNotThisSymbol = lastElement !== '*' && isNaN(lastElement) ? true : false;

    let isSymbol = resultCalc.value.indexOf('*') !== -1 ? true : false;

    isSymbol && !islast ? resultCalc.value = multiplyFunct(resultCalc) : false;

    islastNotThisSymbol ? resultCalc.value = resultCalc.value.slice(0, -1) : false;

    islast ? true : resultCalc.value = `${resultCalc.value}*`;
})