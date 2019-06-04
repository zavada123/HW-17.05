const input_number = document.querySelector('.input-number');
const plus = document.querySelector('.button-plus');
const poschitat = document.querySelector('.poschitat');
const log_masiv = document.querySelector('.masiv');
const masiv_clear = document.querySelector('.masiv-clear');

let masiv = [];

function plus_input(){
masiv.push(input_number.value);
input_number.value = '';
return console.log(masiv);
}

function poschitat_masiv(masiv){
    let sum = 1;
    masiv.forEach(e => {
        sum = e*sum;
    });
    sum = sum/masiv.length;
   return console.log(sum);
};

masiv_clear.addEventListener('click',(e)=>{
    console.log(e.target);
    masiv= [];
    e.event;
})

log_masiv.addEventListener('click', (e) =>{
    console.log(e.target);
   return console.log(masiv)
});

plus.addEventListener('click',(e)=>{ console.log(e.target);plus_input()});

poschitat.addEventListener('click', (e)=>{console.log(e.target);poschitat_masiv(masiv)});
