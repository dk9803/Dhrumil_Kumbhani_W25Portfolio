const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));

// Set EJS as view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/personal', (req, res) => res.render('personal'));
app.get('/academic', (req, res) => res.render('academic'));
app.get('/professional', (req, res) => res.render('professional'));

// Start the server
app.listen(port, () => {
    console.log(`Portfolio app listening at http://localhost:${port}`);
});
