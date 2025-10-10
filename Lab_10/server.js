// 1. Підключаємо необхідні модулі
const express = require('express');
const path = require('path');

// 2. Створюємо екземпляр додатку Express
const app = express();

// 3. Визначаємо порт, на якому буде працювати сервер
const PORT = 3000;

// 4. Створюємо роути (маршрути)

// ❗ ЗМІНЕНО: Роут для кореневої URL, який тепер віддає index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

// Роут для першої сторінки
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname,  '1.html'));
});

// Роут для другої сторінки
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname,  '2.html'));
});



app.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname,  '3.html'));
});
app.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname,  '4.html'));
});
app.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname,  '5.html'));
});
app.get('/page6', (req, res) => {
    res.sendFile(path.join(__dirname,  '6.html'));
});


// 5. Запускаємо сервер
app.listen(PORT, () => {
    console.log(`🚀 Сервер успішно запущено!`);
    console.log(`👉 Відкрийте головну сторінку: http://localhost:${PORT}`);
});