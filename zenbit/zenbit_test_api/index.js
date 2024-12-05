// index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = 5000;

// Настройка базы данных SQLite
const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err.message);
    } else {
        console.log('Подключение к базе данных SQLite успешно');
    }
});

// Создаем таблицу пользователей, если она не существует
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        phone TEXT
    )
`);

// Middleware
app.use(cors());
app.use(express.json()); // Для обработки JSON в запросах

// Эндпоинт для регистрации пользователя
app.post('/api/register', (req, res) => {
    const { name, email, password, phone } = req.body;

    // Проверка на заполнение всех обязательных полей
    if (!name || !email || !password || !phone) {
        return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
    }

    // Запрос на добавление пользователя в базу данных
    const query = `INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)`;
    db.run(query, [name, email, password, phone], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(409).json({ error: 'Пользователь с таким email уже существует' });
            }
            console.error('Ошибка при добавлении пользователя:', err.message);
            return res.status(500).json({ error: 'Ошибка сервера' });
        }
        res.status(201).json({ message: 'Пользователь успешно зарегистрирован', userId: this.lastID });
    });
});

// Эндпоинт для получения списка всех пользователей
app.get('/api/users', (req, res) => {
    const query = `SELECT * FROM users`;
    db.all(query, (err, rows) => {
        if (err) {
            console.error('Ошибка при получении списка пользователей:', err.message);
            return res.status(500).json({ error: 'Ошибка сервера' });
        }
        res.json(rows);
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});


// Эндпоинт для входа пользователя
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Проверка на заполнение всех обязательных полей
    if (!email || !password) {
        return res.status(400).json({ error: 'Необходимо заполнить все поля' });
    }

    // Запрос для поиска пользователя с указанным email и password
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.get(query, [email, password], (err, user) => {
        if (err) {
            console.error('Ошибка при проверке пользователя:', err.message);
            return res.status(500).json({ error: 'Ошибка сервера' });
        }

        if (user) {
            // Пользователь найден, вход успешен
            res.status(200).json({ message: 'Вход выполнен успешно', userId: user.id });
        } else {
            // Пользователь не найден
            res.status(401).json({ error: 'Неверный email или пароль' });
        }
    });
});