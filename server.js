const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true
}));

app.use(routes);