const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, 'static')))
app.use('/', require(path.join(__dirname, './routes/blog')));

app.listen(3000, () => {
    console.log(`Blog app listening on port http://localhost:3000`);
});