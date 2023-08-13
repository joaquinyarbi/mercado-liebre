const express = require ('express');
const app = express ();
const path = require ('path');

app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT, () => console.log ('Server up: ${PORT}'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});