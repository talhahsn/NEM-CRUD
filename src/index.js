const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes/user');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

const PORT_NUMBER = require('./constants/constant').PORT_NUMBER;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());


// swagger api documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// mount all routes on /user path
app.use('/user', routes);


// Handle errors
app.use((err, req, res, next) => {
    if (!err) {
        return next();
    }
    res.status(500).send({ error: "Internal server error" });
});


app.listen(PORT_NUMBER, () => {
    console.log('app is listenting at port ' + PORT_NUMBER)
}) 