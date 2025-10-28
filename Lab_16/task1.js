document.addEventListener('DOMContentLoaded', () => {

    // Завдання 1.1
    const images1 = document.querySelectorAll('.task1-img');
    images1.forEach(img => {
        img.onclick = function() {
            alert(this.src);
        };
    });

    // Завдання 1.2
    const links2 = document.querySelectorAll('.task2-link');
    links2.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.title = this.innerText;
        });
        link.addEventListener('mouseout', function() {
            this.title = '';
        });
    });

    // Завдання 1.3 та 1.4
    const links3 = document.querySelectorAll('.task3-link');
    
    function addHref(event) {
        const link = event.target;
        if (!link.dataset.hrefAdded) {
            link.innerText += ` (${link.href})`;
            link.dataset.hrefAdded = 'true'; 
            link.removeEventListener('mouseover', addHref);
        }
    }
    
    links3.forEach(link => {
        link.addEventListener('mouseover', addHref);
    });

    // Завдання 1.5
    const inputs5 = document.querySelectorAll('.task5-input');
    const demoP = document.getElementById('demo');
    inputs5.forEach(input => {
        input.addEventListener('blur', function() {
            demoP.textContent = `Останнє значення: ${this.value}`;
        });
    });

    // Завдання 1.6
    const inputs6 = document.querySelectorAll('.task6-input');

    function alertValueOnce(event) {
        alert(event.target.value);
        event.target.removeEventListener('click', alertValueOnce);
    }

    inputs6.forEach(input => {
        input.addEventListener('click', alertValueOnce);
    });

    // Завдання 1.7
    const paras7 = document.querySelectorAll('.task7-p');
    paras7.forEach(p => {
        p.addEventListener('click', function() {
            const num = parseFloat(this.innerText);
            if (!isNaN(num)) {
                this.innerText = num * num;
            }
        });
    });

    // Завдання 1.8
    const inputs8 = document.querySelectorAll('.task8-input');
    inputs8.forEach(input => {
        input.addEventListener('blur', function() {
            const requiredLength = parseInt(this.dataset.length, 10);
            if (this.value.length === requiredLength) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.add('invalid');
                this.classList.remove('valid');
            }
        });
    });
});