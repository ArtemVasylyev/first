document.addEventListener('DOMContentLoaded', () => {
    // Завдання 2
    const divs = document.querySelectorAll('.task2-div');

    function paintRed(event) {
        event.target.classList.add('red');
        event.target.removeEventListener('click', paintRed);
        event.target.addEventListener('click', paintGreen);
    }

    function paintGreen(event) {
        event.target.classList.remove('red');
        event.target.removeEventListener('click', paintGreen);
        event.target.addEventListener('click', paintRed);
    }

    divs.forEach(div => {
        div.addEventListener('click', paintRed);
    });
});