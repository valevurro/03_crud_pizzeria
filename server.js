const express = require('express');
const app = express();
const PORT = 3000;
const pizzasRouter = require('./routes/pizzas');
const drinksRouter = require('./routes/drinks');
const longTime = require('./middleware/longTime');
const serverError = require('./middleware/serverError');
const notFound = require('./middleware/notFound');

app.use(express.static('public'));
app.use(express.json());

app.use(function(req, res, next) {
    console.log('I am a middleware!');
    next();
});

app.use('/api', logTime);



app.listen(PORT, () => {
    console.log(`Pizzeria API server is running on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Pizzeria API!');
});

app.use('/api/pizzas', pizzasRouter);
//app.use('/api/drinks', drinksRouter);


//server error middleware

app.use(serverError);


//404 middleware

app.use(notFound);