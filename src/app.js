const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const routes = require('./routes')

const app = express();
app.use(routes)

app.listen(3000, () => console.info(`server started on port ${3000} (${'env'})`));
