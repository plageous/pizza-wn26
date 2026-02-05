// express import statement
import express from 'express';

// instance of app object
const app = express();

// server port
const PORT = 3000;

// static file serving
// tells express to use files in "public" directory
app.use(express.static('public'));

// "middleware", allowing express to read form data and allowing us to use it!
app.use(express.urlencoded({ extended:true }))

// stores orders
const orders = [];

// main route ('/')
app.get('/', (req, res) => {
    // sends home.html file to client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// contact route
app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

app.post('/submit-order', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// start server, listen on PORT
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});