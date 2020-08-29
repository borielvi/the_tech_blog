// module imports
const express = require('express');
const sequelize = require('./config/connection');

// create server
const app = express();
const PORT = process.env.PORT || 3001;

// session data
// placeholder ................


// server middleware to accept post APIs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});