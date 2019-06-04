const green_light = document.querySelectorAll('[data-color="green"]');
const red_light = document.querySelectorAll('[data-color="red"]');
const btn = document.querySelector('.traffic-button');

btn.addEventListener('click', ()=>{
red_light.forEach(element => {
    if(element.classList.contains('active')){
        element.classList.remove('active');
    } else {
        element.classList.add('active');
    }
});
green_light.forEach(element => {
    if(element.classList.contains('active')){
        element.classList.remove('active');
    } else {
        element.classList.add('active');
    }
});
});

