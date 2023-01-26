const express = require('express');
const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};

const routes = require('./routes');
const { errorConverter, errorHandler } = require('./middlewares/error')

const app = express();

app.use(express.json());

app.use(cors(corsOption));

app.use('/v1', routes);

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;