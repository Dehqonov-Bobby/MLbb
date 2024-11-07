let ViewMore = document.getElementById('ViewMore');
let Back = document.getElementById('Back');
let Back2 = document.getElementById('Back2');
let Back3 = document.getElementById('Back3');
let ViewMore2 = document.getElementById('ViewMore2');
let ViewMore3 = document.getElementById('ViewMore3');
let Search = document.getElementById('Search');


ViewMore.addEventListener('click', () => {
    document.body.querySelector('.container').style.display = 'none'
    document.body.querySelector('.container2').style.display = 'block'
})

ViewMore2.addEventListener('click', () => {
    document.body.querySelector('.container').style.display = 'none'
    document.body.querySelector('.container4').style.display = 'none'
    document.body.querySelector('.container3').style.display = 'block'
})

ViewMore3.addEventListener('click', () => {
    document.body.querySelector('.container').style.display = 'none'
    document.body.querySelector('.container4').style.display = 'block'
})

Back.addEventListener('click', () => {
    document.body.querySelector('.container').style.display = 'block'
    document.body.querySelector('.container2').style.display = 'none'
})

Back2.addEventListener('click', () => {
    document.body.querySelector('.container').style.display = 'block'
    document.body.querySelector('.container3').style.display = 'none'
})

Back3.addEventListener('click', () => {
    document.body.querySelector('.container').style.display = 'block'
    document.body.querySelector('.container4').style.display = 'none'
})


