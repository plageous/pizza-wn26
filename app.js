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

app.post('/thank-you', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.get('/admin', (req, res) => {
    res.send(orders);
});

app.post('/submit-order', (req, res) => {
    // create json object to store order data
    const order = {
        fname: req.body.fname,
        lname: req.body.fname,
        email: req.body.email,
        method: req.body.method,
        toppings: req.body.toppings ? req.body.toppings : "none",
        size: req.body.size,
        comment: req.body.comment,
        timestamp: new Date()
    };
    orders.push(order);

    res.send(orders);
});

// start server, listen on PORT
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});