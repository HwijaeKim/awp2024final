//외부 스크립트 참조 없이 타이핑 애니메이션 구현
document.addEventListener('DOMContentLoaded', () => {
    let text = "LABS>>>>>><br>SOMETHING NEW.";
    let typingContainer = document.getElementById('title_typing');
    let index = 0;

    function typing() {
        if (index < text.length) {
            typingContainer.innerHTML = text.slice(0, index + 1);
            index++;
            setTimeout(typing, 45);
        }
        else {
            typingContainer.innerHTML = text;
        }
    }

    typing();
});


let wrap = document.querySelector('#sec3');
let char = document.querySelector('.one');
let img = document.querySelector('.image');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let gameContainer = document.querySelector('#game_container');

document.addEventListener('keydown', (event) => {
    if(event.key === '1') {

        gameContainer.style.backgroundColor = '#ff4b33'
    }
    else if(event.key === '2') {
        gameContainer.style.backgroundColor = '#ff9023'
    }
    else if(event.key === '3') {
        gameContainer.style.backgroundColor = '#ffdd23'
    }
    else if(event.key === '4') {

        gameContainer.style.backgroundColor = '#1ebb6f'
    }
    else if(event.key === '5') {

        gameContainer.style.backgroundColor = '#4e70f0'
    }
    else if(event.key === '6') {

        gameContainer.style.backgroundColor = '#1f346a'
    }
    else if(event.key === '7') {

        gameContainer.style.backgroundColor = '#6c13f1'
    }
    else if(event.key === '8') {

        gameContainer.style.backgroundColor = 'white';
    }
    else if(event.key === '9') {
        gameContainer.style.backgroundColor = 'green';
    }
    else if(event.key === '0') {

        gameContainer.style.backgroundColor = '#272727'
    }
    else if(event.key === ' ') {

        gameContainer.backgroundColor = 'antiquewhite'
    }
})

