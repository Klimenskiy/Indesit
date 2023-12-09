
const order1 = document.getElementById('btn1');
const order2 = document.getElementById('btn2');
const order3 = document.getElementById('btn3');
const order4 = document.getElementById('btn4');
const order5 = document.getElementById('btn5');
const order6 = document.getElementById('btn6');

const menuOrder = document.querySelector('.callorder__window');
const wrapper = document.querySelector('.wrapper');
const closePopup = document.querySelector('.window-close');

const buttons = [order1, order2, order3, order4, order5, order6];

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', () => {
        buttons[i].classList.add('callorder__active');
        menuOrder.classList.add('window__open');
        wrapper.classList.add('wrapper__noscroll');
    });
}
window.onclick = function(event) {
    if (event.target == menuOrder) {
        menuOrder.classList.remove('window__open');
        wrapper.classList.remove('wrapper__noscroll');
    }
}

closePopup.addEventListener('click', () => {
    document.querySelector('.callorder__window').classList.remove('window__open');
    console.log('Work!!!');
});

document.addEventListener('keydown', function(e) {
    if(e.code === 'Escape') {
        menuOrder.classList.remove('window__open');
        wrapper.classList.remove('wrapper__noscroll');
    }
});