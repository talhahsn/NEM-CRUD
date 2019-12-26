const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes/user');

const app = express();

const PORT_NUMBER = require('./constants/constant').PORT_NUMBER;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /user path
app.use('/user', routes);

app.listen(PORT_NUMBER, () => {
    console.log('app is listenting at port ' + PORT_NUMBER)
}) 