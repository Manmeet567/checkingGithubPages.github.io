const box = document.querySelector('.box');
const text = document.querySelector('.text');


document.addEventListener('keydown',e => {
    box.classList.add('active');
    text.classList.add('active2');
    console.log(e.code);

    box.querySelector('.key-code').innerHTML = e.keyCode;
    box.querySelector('.key-name').innerHTML = e.key.toUpperCase();
    box.querySelector('.key span').innerHTML = e.key.toUpperCase();
    box.querySelector('.code span').innerHTML = e.keyCode;
});